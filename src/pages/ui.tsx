import React from "react";
import { Button } from "components/shared";
import { Box } from "@material-ui/core";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const UI = () => {
  return (
    <Box mt={2} ml={2}>
      <Button className="mr-2" variant="contained">
        {"Let's go"}
      </Button>
      <Button className="mr-2" variant="outlined">
        {"Let's go"}
      </Button>
      <Button className="mr-2" variant="text">
        {"Let's go"}
      </Button>
    </Box>
  );
};

export default UI;
