"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconAnimationShowcase = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const components_1 = require("@ui-kitten/components");
const IconAnimationShowcase = () => {
    const zoomIconRef = react_1.default.useRef();
    const pulseIconRef = react_1.default.useRef();
    const shakeIconRef = react_1.default.useRef();
    const infiniteAnimationIconRef = react_1.default.useRef();
    const noAnimationIconRef = react_1.default.useRef();
    react_1.default.useEffect(() => {
        infiniteAnimationIconRef.current.startAnimation();
    }, []);
    const renderZoomIcon = (props) => (<components_1.Icon {...props} ref={zoomIconRef} animation='zoom' name='maximize-outline'/>);
    const renderPulseIcon = (props) => (<components_1.Icon {...props} ref={pulseIconRef} animation='pulse' name='activity'/>);
    const renderShakeIcon = (props) => (<components_1.Icon {...props} ref={shakeIconRef} animation='shake' name='shake'/>);
    const renderInfiniteAnimationIcon = (props) => (<components_1.Icon {...props} ref={infiniteAnimationIconRef} animationConfig={{ cycles: Infinity }} animation='shake' name='clock-outline'/>);
    const renderNoAnimationIcon = (props) => (<components_1.Icon {...props} ref={noAnimationIconRef} animation={null} name='eye'/>);
    return (<components_1.Layout style={styles.container} level='1'>

      <components_1.Button style={styles.button} accessoryLeft={renderZoomIcon} onPress={() => zoomIconRef.current.startAnimation()}>
        ZOOM
      </components_1.Button>

      <components_1.Button appearance='outline' status='success' style={styles.button} accessoryLeft={renderPulseIcon} onPress={() => pulseIconRef.current.startAnimation()}>
        PULSE
      </components_1.Button>

      <components_1.Button appearance='ghost' status='danger' style={styles.button} accessoryLeft={renderShakeIcon} onPress={() => shakeIconRef.current.startAnimation()}>
        SHAKE
      </components_1.Button>

      <components_1.Button appearance='ghost' status='info' style={styles.button} accessoryRight={renderInfiniteAnimationIcon}>
        INFINITE
      </components_1.Button>

      <components_1.Button appearance='ghost' status='warning' style={styles.button} accessoryRight={renderNoAnimationIcon}>
        NO ANIMATION
      </components_1.Button>

    </components_1.Layout>);
};
exports.IconAnimationShowcase = IconAnimationShowcase;
const styles = react_native_1.StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    button: {
        margin: 2,
    },
});
//# sourceMappingURL=iconAnimation.component.js.map