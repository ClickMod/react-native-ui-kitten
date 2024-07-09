"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TabSimpleUsageShowcase = void 0;
const react_1 = __importDefault(require("react"));
const components_1 = require("@ui-kitten/components");
const PersonIcon = (props) => (<components_1.Icon {...props} name='person-outline'/>);
const TabSimpleUsageShowcase = () => (<components_1.Tab title='USERS' icon={PersonIcon}/>);
exports.TabSimpleUsageShowcase = TabSimpleUsageShowcase;
//# sourceMappingURL=tabSimpleUsage.component.js.map