import * as React from "react";

export type VerticalAlign = "top" | "bottom" | "center" | "baseline" | "stretch";

export interface RowStackProps {
    tag?: string | React.ComponentType;
    children?: React.ReactNode;
    id?: string;
    block?: boolean;
    inline?: boolean;
    baseline?: boolean;
    verticalAlign?: VerticalAlign;
    className?: string;
    style?: React.CSSProperties;
    gap?: number;
    htmlFor?: null | string;
}

export class RowStack extends React.Component<RowStackProps> {}

export type HorizontalAlign = "left" | "right" | "center" | "stretch";

export interface ColumnStackProps {
    tag?: string | React.ComponentType;
    children?: React.ReactNode;
    block?: boolean;
    inline?: boolean;
    stretch?: boolean;
    horizontalAlign?: HorizontalAlign;
    className?: string;
    style?: React.CSSProperties;
    gap?: number;
}

export class ColumnStack extends React.Component<ColumnStackProps> {}

export interface FitProps {
    tag?: string | React.ComponentType;
    className?: string;
    children?: React.ReactNode;
    style?: React.CSSProperties;
    title?: null | string;
    htmlFor?: null | string;
    onClick?(e: React.MouseEvent): void;
}

export class Fit extends React.Component<FitProps> {}

export interface FillProps {
    tag?: string | React.ComponentType;
    className?: string;
    children?: React.ReactNode;
}

export class Fill extends React.Component<FillProps> {}

export interface FixedProps {
    "data-tid"?: string;
    tag?: string | React.ComponentType;
    className?: string;
    children?: React.ReactNode;
    style?: {};
    width: number;
    allowWrap?: boolean;
    onClick?(): void;
}

export class Fixed extends React.Component<FixedProps> {}
