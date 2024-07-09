"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowcaseIFrame = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const components_1 = require("@ui-kitten/components");
const showcaseSettings_component_1 = require("./showcaseSettings.component");
const ShowcaseCaption = (props) => (<react_native_1.View {...props}>
    <components_1.Text appearance='hint' category='c2'>
      Powered by React Native Web
    </components_1.Text>
    <components_1.Text appearance='hint' category='c1'>
      Rendering of React Native components in a web browser is an experimental feature and may contain issues.
    </components_1.Text>
  </react_native_1.View>);
const ShowcaseIFrame = (Component, id) => {
    const postLayoutChangeEvent = (event) => {
        window.parent.postMessage({ id, height: event.nativeEvent.layout.height }, '*');
    };
    return (<components_1.Card style={styles.card} disabled={true} header={props => <showcaseSettings_component_1.ShowcaseSettings {...props}/>} footer={props => <ShowcaseCaption {...props}/>} onLayout={postLayoutChangeEvent}>
      <Component />
    </components_1.Card>);
};
exports.ShowcaseIFrame = ShowcaseIFrame;
const styles = react_native_1.StyleSheet.create({
    card: {
        borderRadius: 0,
    },
});
//# sourceMappingURL=showcaseIFrame.component.js.map