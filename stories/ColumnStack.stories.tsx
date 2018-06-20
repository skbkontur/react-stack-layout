import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Fit, RowStack } from "../src";
import cn from "./DemoStyles.less";
import { ColumnStack, Fill, Fixed } from "../src/index";

const items = [
    <Fit key={"1"} className={cn("item")}>
        <div className={cn("item-1")}>Item 1</div>
    </Fit>,
    <Fit key={"2"} className={cn("item")}>
        <div className={cn("item-2")}>Item 2</div>
    </Fit>,
    <Fit key={"3"} className={cn("item")}>
        <div className={cn("item-3")}>Item 3</div>
    </Fit>,
];

storiesOf("ColumnStack", module)
    .add("Fits", () =>
        <div className={cn("cs-root")}>
            <div className={cn("root-item")}>
                <ColumnStack horizontalAlign={"left"} className={cn("container")}>
                    {items}
                </ColumnStack>
            </div>
            <div className={cn("root-item")}>
                <ColumnStack horizontalAlign={"right"} className={cn("container")}>
                    {items}
                </ColumnStack>
            </div>
            <div className={cn("root-item")}>
                <ColumnStack horizontalAlign={"center"} className={cn("container")}>
                    {items}
                </ColumnStack>
            </div>
            <div className={cn("root-item")}>
                <ColumnStack horizontalAlign={"stretch"} className={cn("container")}>
                    {items}
                </ColumnStack>
            </div>
            <div className={cn("root-item")}>
                <ColumnStack block horizontalAlign={"stretch"} className={cn("container")}>
                    {items}
                </ColumnStack>
            </div>
        </div>
    )
    .add("Fill", () =>
        <div className={cn("cs-root-h")}>
            <div className={cn("root-item")}>
                <ColumnStack horizontalAlign={"left"} className={cn("container")}>
                    <Fit className={cn("item")}>
                        <div className={cn("item-1")}>Item 1</div>
                    </Fit>
                    <Fit className={cn("item")}>
                        <div className={cn("item-2")}>Item 2</div>
                    </Fit>
                    <Fit className={cn("item")}>
                        <div className={cn("item-3")}>Item 3</div>
                    </Fit>
                </ColumnStack>
            </div>
            <div className={cn("root-item")}>
                <ColumnStack horizontalAlign={"left"} className={cn("container")}>
                    <Fit className={cn("item")}>
                        <div className={cn("item-1")}>Item 1</div>
                    </Fit>
                    <Fill className={cn("item")}>
                        <div className={cn("item-2")}>Item 2</div>
                    </Fill>
                    <Fit className={cn("item")}>
                        <div className={cn("item-3")}>Item 3</div>
                    </Fit>
                </ColumnStack>
            </div>
            <div className={cn("root-item")}>
                <ColumnStack horizontalAlign={"left"} className={cn("container")} style={{ height: "100%" }}>
                    <Fit className={cn("item")}>
                        <div className={cn("item-1")}>Item 1</div>
                    </Fit>
                    <Fill className={cn("item")}>
                        <div className={cn("item-2")}>Item 2</div>
                    </Fill>
                    <Fit className={cn("item")}>
                        <div className={cn("item-3")}>Item 3</div>
                    </Fit>
                </ColumnStack>
            </div>
        </div>
    );

