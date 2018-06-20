declare module "*.less" {
    interface IStyles {
        (
            ...args: Array<null | undefined | string | { [classname: string]: string | boolean | null | undefined }>
        ): string;
        [key: string]: string;
    }
    const styles: IStyles;
    export default styles;
}
