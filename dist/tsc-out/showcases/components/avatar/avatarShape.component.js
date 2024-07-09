"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvatarShapeShowcase = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const components_1 = require("@ui-kitten/components");
const AvatarShapeShowcase = () => (<components_1.Layout style={styles.container} level='1'>

    <components_1.Avatar style={styles.avatar} shape='square' source={require('../../assets/icon.png')}/>

    <components_1.Avatar style={styles.avatar} shape='rounded' source={require('../../assets/icon.png')}/>

    <components_1.Avatar style={styles.avatar} shape='round' source={require('../../assets/icon.png')}/>

  </components_1.Layout>);
exports.AvatarShapeShowcase = AvatarShapeShowcase;
const styles = react_native_1.StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    avatar: {
        margin: 8,
    },
});
//# sourceMappingURL=avatarShape.component.js.map