"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RadioSimpleUsageShowcase = void 0;
const react_1 = __importDefault(require("react"));
const components_1 = require("@ui-kitten/components");
const RadioSimpleUsageShowcase = () => {
    const [checked, setChecked] = react_1.default.useState(false);
    return (<components_1.Radio checked={checked} onChange={nextChecked => setChecked(nextChecked)}>
      {`Checked: ${checked}`}
    </components_1.Radio>);
};
exports.RadioSimpleUsageShowcase = RadioSimpleUsageShowcase;
//# sourceMappingURL=radioSimpleUsage.component.js.map