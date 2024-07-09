"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowcaseThemingIFrame = void 0;
const react_1 = __importDefault(require("react"));
const components_1 = require("@ui-kitten/components");
const showcaseIFrame_component_1 = require("./showcaseIFrame.component");
const theme_service_1 = require("../services/theme.service");
const themes_1 = require("../app/themes");
const orangeTheme = {
    'color-primary-100': '#FFECD2',
    'color-primary-200': '#FFD3A6',
    'color-primary-300': '#FFB579',
    'color-primary-400': '#FF9758',
    'color-primary-500': '#FF6721',
    'color-primary-600': '#DB4818',
    'color-primary-700': '#B72F10',
    'color-primary-800': '#931A0A',
    'color-primary-900': '#7A0C06',
    'color-primary-transparent-100': 'rgba(255, 103, 33, 0.08)',
    'color-primary-transparent-200': 'rgba(255, 103, 33, 0.16)',
    'color-primary-transparent-300': 'rgba(255, 103, 33, 0.24)',
    'color-primary-transparent-400': 'rgba(255, 103, 33, 0.32)',
    'color-primary-transparent-500': 'rgba(255, 103, 33, 0.4)',
    'color-primary-transparent-600': 'rgba(255, 103, 33, 0.48)',
};
const ShowcaseThemingIFrame = (Component, showcaseId) => {
    const themeContext = react_1.default.useContext(theme_service_1.ThemeContext);
    const currentTheme = themes_1.themes[themeContext.mapping][themeContext.theme];
    const OrangeThemeProvider = (props) => (<components_1.ThemeProvider {...props} theme={{ ...currentTheme, ...orangeTheme }}>
      <Component />
    </components_1.ThemeProvider>);
    return (0, showcaseIFrame_component_1.ShowcaseIFrame)(OrangeThemeProvider, showcaseId);
};
exports.ShowcaseThemingIFrame = ShowcaseThemingIFrame;
//# sourceMappingURL=showcaseThemingIFrame.component.js.map