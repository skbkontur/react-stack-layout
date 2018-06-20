import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Fit, RowStack } from "../src";
import cn from "./DemoStyles.less";
import { Fill, Fixed } from "../src/index";

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

storiesOf("RowStack", module)
    .add("Fits", () =>
        <div className={cn("root")}>
            <div className={cn("root-item")}>
                <RowStack verticalAlign={"top"} className={cn("container")}>
                    {items}
                </RowStack>
            </div>
            <div className={cn("root-item")}>
                <RowStack verticalAlign={"baseline"} gap={4} className={cn("container")}>
                    {items}
                </RowStack>
            </div>
            <div className={cn("root-item")}>
                <RowStack verticalAlign={"bottom"} gap={4} className={cn("container")}>
                    {items}
                </RowStack>
            </div>
            <div className={cn("root-item")}>
                <RowStack verticalAlign={"stretch"} gap={4} className={cn("container")}>
                    {items}
                </RowStack>
            </div>
            <div className={cn("root-item")}>
                <RowStack verticalAlign={"center"} gap={4} className={cn("container")}>
                    {items}
                </RowStack>
            </div>
            <div className={cn("root-item")}>
                <RowStack block verticalAlign={"center"} gap={4} className={cn("container")}>
                    {items}
                </RowStack>
            </div>
        </div>
    )
    .add("With fill", () =>
        <div className={cn("root")}>
            <div className={cn("root-item")}>
                <RowStack block verticalAlign={"top"} className={cn("container")}>
                    <Fit className={cn("item")}>
                        <div className={cn("item-1")}>Item 1</div>
                    </Fit>
                    <Fill className={cn("item")}>
                        <div className={cn("item-2")}>Item 2</div>
                    </Fill>
                    <Fit className={cn("item")}>
                        <div className={cn("item-3")}>Item 3</div>
                    </Fit>
                </RowStack>
            </div>
            <div className={cn("root-item")}>
                <RowStack block verticalAlign={"top"} className={cn("container")}>
                    <Fit className={cn("item")}>
                        <div className={cn("item-1")}>Item 1</div>
                    </Fit>
                    <Fill className={cn("item")}>
                        <div className={cn("item-2-inline-block")}>Item 2</div>
                    </Fill>
                    <Fit className={cn("item")}>
                        <div className={cn("item-3")}>Item 3</div>
                    </Fit>
                </RowStack>
            </div>
            <div className={cn("root-item")}>
                <RowStack block verticalAlign={"top"} className={cn("container")}>
                    <Fit className={cn("item")}>
                        <div className={cn("item-1")}>Item 1</div>
                    </Fit>
                    <Fixed className={cn("item")} width={200}>
                        <div className={cn("item-2-inline-block")}>Item 2</div>
                    </Fixed>
                    <Fit className={cn("item")}>
                        <div className={cn("item-3")}>Item 3</div>
                    </Fit>
                </RowStack>
            </div>
            <div className={cn("root-item")}>
                <RowStack block verticalAlign={"top"} className={cn("container")}>
                    <Fit className={cn("item")}>
                        <div className={cn("item-1")}>Item 1</div>
                    </Fit>
                    <Fixed className={cn("item")} width={70}>
                        <div className={cn("item-2-inline-block")}>Item2</div>
                    </Fixed>
                    <Fit className={cn("item")}>
                        <div className={cn("item-3")}>Item 3</div>
                    </Fit>
                </RowStack>
            </div>
            <div className={cn("root-item")}>
                <RowStack block verticalAlign={"top"} className={cn("container")}>
                    <Fit className={cn("item")}>
                        <div className={cn("item-1")}>Item 1</div>
                    </Fit>
                    <Fixed className={cn("item")} width={400}>
                        <div className={cn("item-2-inline-block")}>Item2</div>
                    </Fixed>
                    <Fit className={cn("item")}>
                        <div className={cn("item-3")}>Item 3</div>
                    </Fit>
                </RowStack>
            </div>
        </div>
    );
