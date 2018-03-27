import React from "react";
import { storiesOf } from "@storybook/react";
import CreatingScene from "../src/components/01-creating-a-scene";

export const stories = storiesOf("01-creating-a-scene", module).add(
  "example",
  () => <CreatingScene />
);
