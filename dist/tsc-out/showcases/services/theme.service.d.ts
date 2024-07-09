import React from 'react';
export declare enum AppMapping {
    eva = "Eva",
    material = "Material"
}
export declare enum AppTheme {
    light = "Light",
    dark = "Dark"
}
export interface ThemeContextType {
    mapping: AppMapping;
    theme: AppTheme;
    setMapping: (mapping: AppMapping) => void;
    setTheme: (theme: AppTheme) => void;
    isDarkMode: () => boolean;
}
export declare const ThemeContext: React.Context<ThemeContextType>;
