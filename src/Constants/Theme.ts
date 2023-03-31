export interface Theme {
    light: string,
    dark: string,
    active: string,
    shade: string,
    accent: string,
    accentLight: string,
}

export const lightTheme: Theme = {
    light: '#ffffff',
    dark: '#181a1e',
    active: '#85af8d',
    shade: '#f8f8f8',
    accent: '#373737',
    accentLight: '#cbcbcb',
}

export const darkTheme: Theme = {
    light: '#212121',
    dark: '#ffffff',
    active: '#40b555',
    shade: '#262626',
    accent: '#ffffff',
    accentLight: '#4a4a4a'
}