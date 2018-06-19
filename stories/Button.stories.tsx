import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Fit, RowStack } from "../src";

storiesOf("Button", module)
    .add("with text", () =>
        <div>
            <RowStack baseline gap={2}>
                <Fit>A</Fit>
                <Fit>B</Fit>
                <Fit>C</Fit>
            </RowStack>
            <RowStack baseline gap={1}>
                <Fit>A</Fit>
                <Fit>B</Fit>
                <Fit>C</Fit>
            </RowStack>
            <RowStack baseline gap={0}>
                <Fit>A</Fit>
                <Fit>B</Fit>
                <Fit>C</Fit>
            </RowStack>
        </div>);
