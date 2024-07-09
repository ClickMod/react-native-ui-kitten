"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppNavigator = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const components_1 = require("@ui-kitten/components");
const HeartIcon = (props) => (<components_1.Icon {...props} name='heart'/>);
/*
 * Placeholder element. Replaced during the build process
 */
const AppNavigator = () => (<components_1.Layout style={styles.container}>
    <components_1.Text style={styles.text} category='h1'>
      Welcome to UI Kitten 😻
    </components_1.Text>
    <components_1.Text style={styles.text} category='s1'>
      Start with editing App.js to configure your App
    </components_1.Text>
    <components_1.Text style={styles.text} appearance='hint'>
      For example, try changing theme to Dark by simply changing an import
    </components_1.Text>
    <components_1.Button style={styles.likeButton} accessoryLeft={HeartIcon}>
      LIKE
    </components_1.Button>
  </components_1.Layout>);
exports.AppNavigator = AppNavigator;
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        textAlign: 'center',
    },
    likeButton: {
        marginVertical: 16,
    },
});
//# sourceMappingURL=app.navigator.js.map