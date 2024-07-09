"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconThemingShowcase = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const components_1 = require("@ui-kitten/components");
const IconThemingShowcase = () => {
    const zoomIconRef = react_1.default.useRef();
    const pulseIconRef = react_1.default.useRef();
    const shakeIconRef = react_1.default.useRef();
    react_1.default.useEffect(() => {
        zoomIconRef.current.startAnimation();
        pulseIconRef.current.startAnimation();
        shakeIconRef.current.startAnimation();
    }, []);
    const renderZoomIcon = (props) => (<components_1.Icon {...props} ref={zoomIconRef} animationConfig={{ cycles: Infinity }} animation='zoom' name='maximize-outline'/>);
    const renderPulseIcon = (props) => (<components_1.Icon {...props} ref={pulseIconRef} animationConfig={{ cycles: Infinity }} animation='pulse' name='activity'/>);
    const renderShakeIcon = (props) => (<components_1.Icon {...props} ref={shakeIconRef} animationConfig={{ cycles: Infinity }} animation='shake' name='shake'/>);
    return (<components_1.Layout style={styles.container} level='1'>

      <components_1.Button style={styles.button} accessoryLeft={renderZoomIcon}>
        ZOOM
      </components_1.Button>

      <components_1.Button appearance='outline' style={styles.button} accessoryLeft={renderPulseIcon}>
        PULSE
      </components_1.Button>

      <components_1.Button appearance='ghost' style={styles.button} accessoryRight={renderShakeIcon}>
        SHAKE
      </components_1.Button>

    </components_1.Layout>);
};
exports.IconThemingShowcase = IconThemingShowcase;
const styles = react_native_1.StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    button: {
        margin: 2,
    },
});
//# sourceMappingURL=iconTheming.component.js.map