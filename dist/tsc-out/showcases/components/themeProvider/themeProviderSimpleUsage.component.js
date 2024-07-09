"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemeProviderSimpleUsageShowcase = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const eva_1 = require("@eva-design/eva");
const components_1 = require("@ui-kitten/components");
const ThemeProviderSimpleUsageShowcase = () => (<>

    <components_1.ThemeProvider theme={eva_1.light}>
      <components_1.Card style={styles.cardStyle}>
        <components_1.Text>
I use light theme
        </components_1.Text>
      </components_1.Card>
    </components_1.ThemeProvider>

    <components_1.ThemeProvider theme={eva_1.dark}>
      <components_1.Card style={styles.cardStyle}>
        <components_1.Text>
I use dark theme
        </components_1.Text>
      </components_1.Card>
    </components_1.ThemeProvider>

    <components_1.ThemeProvider theme={{ ...eva_1.light, 'color-primary-default': 'red' }}>
      <components_1.Card style={styles.cardStyle}>
        <components_1.Text status='primary'>
I use custom light theme
        </components_1.Text>
      </components_1.Card>
    </components_1.ThemeProvider>

  </>);
exports.ThemeProviderSimpleUsageShowcase = ThemeProviderSimpleUsageShowcase;
const styles = react_native_1.StyleSheet.create({
    cardStyle: {
        marginVertical: 8,
    },
});
//# sourceMappingURL=themeProviderSimpleUsage.component.js.map