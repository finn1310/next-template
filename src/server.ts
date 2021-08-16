import express from "express";
import next from "next";
import cookieParser from "cookie-parser";
import { parse } from "url";
import { IncomingMessage, ServerResponse } from "http";

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const server = express();

app
  .prepare()
  .then(() => {
    server.use(cookieParser());

    server.get("*", (req: IncomingMessage, res: ServerResponse) => {
      const parsedUrl = parse(req.url ?? "", true);
      const { pathname, query } = parsedUrl;

      if (pathname && pathname.length > 1 && pathname?.slice(-1) === "/") {
        app.render(req, res, pathname.slice(0, -1), query);
      } else {
        return handle(req, res);
      }
    });

    server.listen(3000, (err: any) => {
      if (err) throw err;
      console.log("> Ready on http://localhost:3000");
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
