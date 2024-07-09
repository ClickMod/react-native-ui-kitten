"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListItemSimpleUsageShowcase = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const components_1 = require("@ui-kitten/components");
const InstallButton = () => (<components_1.Button size='tiny'>
    INSTALL
  </components_1.Button>);
const ItemImage = (props) => (<components_1.Avatar {...props} style={[props.style, styles.itemImage]} source={require('../../assets/icon.png')}/>);
const ListItemSimpleUsageShowcase = () => (<components_1.ListItem title='UI Kitten' description='A set of React Native components' accessoryLeft={ItemImage} accessoryRight={InstallButton}/>);
exports.ListItemSimpleUsageShowcase = ListItemSimpleUsageShowcase;
const styles = react_native_1.StyleSheet.create({
    itemImage: {
        tintColor: null,
    },
});
//# sourceMappingURL=listItemSimpleUsage.component.js.map