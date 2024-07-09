"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonGroupWithIconsShowcase = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const components_1 = require("@ui-kitten/components");
const StarIcon = (props) => (<components_1.Icon {...props} name='star'/>);
const ButtonGroupWithIconsShowcase = () => (<components_1.Layout style={styles.container} level='1'>

    <components_1.ButtonGroup style={styles.buttonGroup}>
      <components_1.Button accessoryLeft={StarIcon}/>
      <components_1.Button accessoryLeft={StarIcon}/>
      <components_1.Button accessoryLeft={StarIcon}/>
    </components_1.ButtonGroup>

    <components_1.ButtonGroup style={styles.buttonGroup} appearance='outline' status='success'>
      <components_1.Button accessoryLeft={StarIcon}/>
      <components_1.Button accessoryLeft={StarIcon}/>
      <components_1.Button accessoryLeft={StarIcon}/>
    </components_1.ButtonGroup>

    <components_1.ButtonGroup style={styles.buttonGroup} status='danger'>
      <components_1.Button accessoryLeft={StarIcon}/>
      <components_1.Button accessoryLeft={StarIcon}/>
      <components_1.Button accessoryLeft={StarIcon}/>
    </components_1.ButtonGroup>

  </components_1.Layout>);
exports.ButtonGroupWithIconsShowcase = ButtonGroupWithIconsShowcase;
const styles = react_native_1.StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    buttonGroup: {
        margin: 2,
    },
});
//# sourceMappingURL=buttonGroupWithIcons.component.js.map