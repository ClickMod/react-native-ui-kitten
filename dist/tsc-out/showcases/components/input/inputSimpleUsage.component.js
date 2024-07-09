"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputSimpleUsageShowcase = void 0;
const react_1 = __importDefault(require("react"));
const components_1 = require("@ui-kitten/components");
const InputSimpleUsageShowcase = () => {
    const [value, setValue] = react_1.default.useState('');
    return (<components_1.Input placeholder='Place your Text' value={value} onChangeText={nextValue => setValue(nextValue)}/>);
};
exports.InputSimpleUsageShowcase = InputSimpleUsageShowcase;
//# sourceMappingURL=inputSimpleUsage.component.js.map