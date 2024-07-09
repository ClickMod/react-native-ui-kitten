"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonAccessoriesShowcase = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const components_1 = require("@ui-kitten/components");
const StarIcon = (props) => (<components_1.Icon {...props} name='star'/>);
const LoadingIndicator = (props) => (<react_native_1.View style={[props.style, styles.indicator]}>
    <components_1.Spinner size='small'/>
  </react_native_1.View>);
const ButtonAccessoriesShowcase = () => (<components_1.Layout style={styles.container} level='1'>

    <components_1.Button style={styles.button} status='primary' accessoryLeft={StarIcon}>
      PRIMARY
    </components_1.Button>

    <components_1.Button style={styles.button} status='success' accessoryRight={StarIcon}>
      SUCCESS
    </components_1.Button>

    <components_1.Button style={styles.button} status='danger' accessoryLeft={StarIcon}/>

    <components_1.Button style={styles.button} appearance='ghost' status='danger' accessoryLeft={StarIcon}/>

    <components_1.Button style={styles.button} appearance='outline' accessoryLeft={LoadingIndicator}>
      LOADING
    </components_1.Button>

  </components_1.Layout>);
exports.ButtonAccessoriesShowcase = ButtonAccessoriesShowcase;
const styles = react_native_1.StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    button: {
        margin: 2,
    },
    indicator: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});
//# sourceMappingURL=buttonAccessories.component.js.map