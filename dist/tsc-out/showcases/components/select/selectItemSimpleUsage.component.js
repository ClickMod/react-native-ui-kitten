"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectItemSimpleUsageShowcase = void 0;
const react_1 = __importDefault(require("react"));
const components_1 = require("@ui-kitten/components");
const StarIcon = (props) => (<components_1.Icon {...props} name='star'/>);
const ForwardIcon = (props) => (<components_1.Icon {...props} name='arrow-ios-forward'/>);
const SelectItemSimpleUsageShowcase = () => (<components_1.SelectItem accessoryLeft={StarIcon} accessoryRight={ForwardIcon} title='Option 1'/>);
exports.SelectItemSimpleUsageShowcase = SelectItemSimpleUsageShowcase;
//# sourceMappingURL=selectItemSimpleUsage.component.js.map