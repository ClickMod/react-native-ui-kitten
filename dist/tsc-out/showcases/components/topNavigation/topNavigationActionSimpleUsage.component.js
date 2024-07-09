"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopNavigationActionSimpleUsageShowcase = void 0;
const react_1 = __importDefault(require("react"));
const components_1 = require("@ui-kitten/components");
const BackIcon = (props) => (<components_1.Icon {...props} name='arrow-back'/>);
const TopNavigationActionSimpleUsageShowcase = () => (<components_1.TopNavigationAction icon={BackIcon}/>);
exports.TopNavigationActionSimpleUsageShowcase = TopNavigationActionSimpleUsageShowcase;
//# sourceMappingURL=topNavigationActionSimpleUsage.component.js.map