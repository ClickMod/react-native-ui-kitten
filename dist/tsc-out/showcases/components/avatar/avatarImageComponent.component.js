"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvatarImageComponentShowcase = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const components_1 = require("@ui-kitten/components");
const AvatarImageComponentShowcase = () => (<components_1.Avatar source={require('../../assets/icon.png')} ImageComponent={react_native_1.ImageBackground}/>);
exports.AvatarImageComponentShowcase = AvatarImageComponentShowcase;
//# sourceMappingURL=avatarImageComponent.component.js.map