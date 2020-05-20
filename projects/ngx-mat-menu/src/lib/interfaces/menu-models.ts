export interface MenuOptions {
    id?: number;
    title?: string;
    icon?: string;
    route?: string;
    children?: Array<MenuOptions>;
    divider?: boolean;
}

export interface Theme {
    background: string;
    color: string;
}
