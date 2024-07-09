"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BottomNavigationTabSimpleUsageShowcase = void 0;
const react_1 = __importDefault(require("react"));
const components_1 = require("@ui-kitten/components");
const StarIcon = (props) => (<components_1.Icon {...props} name='star'/>);
const BottomNavigationTabSimpleUsageShowcase = () => (<components_1.BottomNavigationTab title='USERS' icon={StarIcon}/>);
exports.BottomNavigationTabSimpleUsageShowcase = BottomNavigationTabSimpleUsageShowcase;
//# sourceMappingURL=bottomNavigationTabSimpleUsage.component.js.map