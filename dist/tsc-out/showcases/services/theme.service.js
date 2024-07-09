"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemeContext = exports.AppTheme = exports.AppMapping = void 0;
const react_1 = __importDefault(require("react"));
var AppMapping;
(function (AppMapping) {
    AppMapping["eva"] = "Eva";
    AppMapping["material"] = "Material";
})(AppMapping = exports.AppMapping || (exports.AppMapping = {}));
var AppTheme;
(function (AppTheme) {
    AppTheme["light"] = "Light";
    AppTheme["dark"] = "Dark";
})(AppTheme = exports.AppTheme || (exports.AppTheme = {}));
exports.ThemeContext = react_1.default.createContext({
    mapping: AppMapping.eva,
    theme: AppTheme.light,
    // eslint-disable-next-line @typescript-eslint/no-empty-function ,@typescript-eslint/no-unused-vars
    setMapping: (mapping) => {
    },
    // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
    setTheme: (theme) => {
    },
    isDarkMode: () => false,
});
//# sourceMappingURL=theme.service.js.map