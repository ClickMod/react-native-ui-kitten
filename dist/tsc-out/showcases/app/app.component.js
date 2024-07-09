"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const expo_updates_1 = require("expo-updates");
const react_native_screens_1 = require("react-native-screens");
const eva = __importStar(require("@eva-design/eva"));
const material = __importStar(require("@eva-design/material"));
const components_1 = require("@ui-kitten/components");
const eva_icons_1 = require("@ui-kitten/eva-icons");
const mapping_json_1 = __importDefault(require("./mapping.json"));
const themes_1 = require("./themes");
const app_navigator_1 = require("../navigation/app.navigator");
const theme_service_1 = require("../services/theme.service");
const mappings = {
    Eva: eva.mapping,
    Material: material.mapping,
};
const storedMapping = localStorage.getItem('mapping');
const isMappingKey = Object.keys(mappings).includes(storedMapping);
const mapping = isMappingKey ? storedMapping : theme_service_1.AppMapping.eva;
(0, react_native_screens_1.enableScreens)();
// eslint-disable-next-line no-restricted-syntax, react/display-name
exports.default = () => {
    const [theme, setTheme] = react_1.default.useState(theme_service_1.AppTheme.light);
    const dispatchMappingChange = (nextMapping) => {
        localStorage.setItem('mapping', nextMapping);
        (0, expo_updates_1.reloadAsync)().then().catch(Promise.reject);
    };
    const isDarkMode = () => {
        return theme === theme_service_1.AppTheme.dark;
    };
    const applicationProviderConfig = {
        mapping: mappings[mapping],
        theme: themes_1.themes[mapping][theme],
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        customMapping: mapping_json_1.default,
    };
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    const themeContextProviderConfig = {
        mapping: mapping,
        theme: theme,
        setMapping: dispatchMappingChange,
        setTheme: setTheme,
        isDarkMode: isDarkMode,
    };
    return (<>
      <components_1.IconRegistry icons={eva_icons_1.EvaIconsPack}/>
      <components_1.ApplicationProvider {...applicationProviderConfig}>
        <theme_service_1.ThemeContext.Provider value={themeContextProviderConfig}>
          <app_navigator_1.AppNavigator />
        </theme_service_1.ThemeContext.Provider>
      </components_1.ApplicationProvider>
    </>);
};
//# sourceMappingURL=app.component.js.map