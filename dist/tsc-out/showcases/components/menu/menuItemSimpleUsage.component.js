"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuItemSimpleUsageShowcase = void 0;
const react_1 = __importDefault(require("react"));
const components_1 = require("@ui-kitten/components");
const StarIcon = (props) => (<components_1.Icon {...props} name='star'/>);
const ForwardIcon = (props) => (<components_1.Icon {...props} name='arrow-ios-forward'/>);
const MenuItemSimpleUsageShowcase = () => (<components_1.MenuItem title='Users' accessoryLeft={StarIcon} accessoryRight={ForwardIcon}/>);
exports.MenuItemSimpleUsageShowcase = MenuItemSimpleUsageShowcase;
//# sourceMappingURL=menuItemSimpleUsage.component.js.map