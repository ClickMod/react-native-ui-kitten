"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowcaseSettings = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const components_1 = require("@ui-kitten/components");
const theme_service_1 = require("../services/theme.service");
const ShowcaseSettings = (props) => {
    const themeIconRef = react_1.default.useRef();
    const themeContext = react_1.default.useContext(theme_service_1.ThemeContext);
    const nextMapping = themeContext.mapping === theme_service_1.AppMapping.eva ? theme_service_1.AppMapping.material : theme_service_1.AppMapping.eva;
    const nextTheme = themeContext.isDarkMode() ? theme_service_1.AppTheme.light : theme_service_1.AppTheme.dark;
    const onSwitchMappingButtonPress = () => {
        themeContext.setMapping(nextMapping);
    };
    const onSwitchThemeButtonPress = () => {
        themeIconRef.current.startAnimation();
        themeContext.setTheme(nextTheme);
    };
    const ThemeIcon = (evaProps) => (<components_1.Icon ref={themeIconRef} {...evaProps} animation='zoom' name={themeContext.isDarkMode() ? 'moon-outline' : 'sun-outline'}/>);
    return (<components_1.Layout style={[props.style, styles.container]} level='1'>
      <components_1.ButtonGroup status='basic' size='small'>
        <components_1.Button onPress={onSwitchMappingButtonPress}>
          {`SWITCH TO ${nextMapping.toUpperCase()}`}
        </components_1.Button>
        <components_1.Button accessoryLeft={ThemeIcon} onPress={onSwitchThemeButtonPress}/>
      </components_1.ButtonGroup>
    </components_1.Layout>);
};
exports.ShowcaseSettings = ShowcaseSettings;
const styles = react_native_1.StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
});
//# sourceMappingURL=showcaseSettings.component.js.map