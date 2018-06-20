import * as React from "react";
import cn from "./Code.less";

interface CodeProps {
    children: React.ReactNode;
}

export class Code extends React.Component<CodeProps> {
    public render(): JSX.Element {
        const { children } = this.props;
        let content = children;
        if (typeof content === "string") {
            content = this.fixStringLeadingSpaces(content);
        }
        return <pre className={cn("root")}>{content}</pre>;
    }

    private fixStringLeadingSpaces(content: string): string {
        let lines = content.split("\n");
        lines = this.trimEmptyLines(lines);
        const minLengthOfLeadingSpaces = lines
            .map(x => this.getLeadingSpacesLength(x))
            .reduce((x, y) => Math.min(x, y), 1000);
        lines = lines.map(x => x.substring(minLengthOfLeadingSpaces));
        return lines.join("\n");
    }

    private getLeadingSpacesLength(input: string): number {
        const leadingSpacesMatch = /^\s*/.exec(input);
        if (leadingSpacesMatch != null) {
            return leadingSpacesMatch[0].length;
        }
        return 0;
    }

    private trimEmptyLines(lines: string[]): string[] {
        if (lines.length === 0) {
            return lines;
        }
        let result = lines;
        if (result[0].trim() === "") {
            result = result.slice(1);
        }
        if (result.length === 0) {
            return result;
        }
        if (result[result.length - 1].trim() === "") {
            result = result.slice(0, result.length - 1);
        }
        return result;
    }
}
