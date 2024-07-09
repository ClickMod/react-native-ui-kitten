"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvatarSizeShowcase = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const components_1 = require("@ui-kitten/components");
const AvatarSizeShowcase = () => (<components_1.Layout style={styles.container} level='1'>

    <components_1.Avatar style={styles.avatar} size='tiny' source={require('../../assets/icon.png')}/>

    <components_1.Avatar style={styles.avatar} size='small' source={require('../../assets/icon.png')}/>

    <components_1.Avatar style={styles.avatar} size='medium' source={require('../../assets/icon.png')}/>

    <components_1.Avatar style={styles.avatar} size='large' source={require('../../assets/icon.png')}/>

    <components_1.Avatar style={styles.avatar} size='giant' source={require('../../assets/icon.png')}/>

  </components_1.Layout>);
exports.AvatarSizeShowcase = AvatarSizeShowcase;
const styles = react_native_1.StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        padding: 8,
    },
    avatar: {
        margin: 8,
    },
});
//# sourceMappingURL=avatarSize.component.js.map