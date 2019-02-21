interface Theme {
    name: string;
    colors: Colors;
}
interface Colors {
    [key: string]: {
        [key: number]: any;
    };
}
declare const theme: Theme;
export default theme;
