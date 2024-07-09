"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopNavigationSimpleUsageShowcase = void 0;
const react_1 = __importDefault(require("react"));
const components_1 = require("@ui-kitten/components");
const BackIcon = (props) => (<components_1.Icon {...props} name='arrow-back'/>);
const BackAction = () => (<components_1.TopNavigationAction icon={BackIcon}/>);
const TopNavigationSimpleUsageShowcase = () => (<components_1.TopNavigation accessoryLeft={BackAction} title='Eva Application'/>);
exports.TopNavigationSimpleUsageShowcase = TopNavigationSimpleUsageShowcase;
//# sourceMappingURL=topNavigationSimpleUsage.component.js.map