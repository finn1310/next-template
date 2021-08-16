import React, { VFC } from "react";
import NextHead from "next/head";
import { APP_URL } from "constant";

const LOGO_PATH = APP_URL + "/images/favicon.ico";

interface AppHeadProps {
  title?: string;
  description?: string;
  url?: string;
  ogImage?: string;
  ogType?: string;
  fbAppId?: string;
}

const AppHeadProps = {
  title: "Home",
  description: "Personal website of Do Ngoc Minh",
  url: APP_URL,
  ogType: "website",
  fbAppId: 664099977453352,
};

const AppHead: VFC<AppHeadProps> = (props) => {
  return (
    <NextHead>
      <meta charSet="UTF-8" />
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href={LOGO_PATH} />
      <meta property="og:url" content={props.url} />
      <meta property="og:title" content={props.title || ""} />
      <meta property="og:description" content={props.description} />
      <meta property="og:image" content={props.ogImage || LOGO_PATH} />
      <meta property="og:type" content={props.ogType} />
      <meta property="fb:app_id" content={props.fbAppId} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
    </NextHead>
  );
};

export default AppHead;
