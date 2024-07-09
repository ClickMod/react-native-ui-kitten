"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToggleSimpleUsageShowcase = void 0;
const react_1 = __importDefault(require("react"));
const components_1 = require("@ui-kitten/components");
const ToggleSimpleUsageShowcase = () => {
    const [checked, setChecked] = react_1.default.useState(false);
    const onCheckedChange = (isChecked) => {
        setChecked(isChecked);
    };
    return (<components_1.Toggle checked={checked} onChange={onCheckedChange}>
      {`Checked: ${checked}`}
    </components_1.Toggle>);
};
exports.ToggleSimpleUsageShowcase = ToggleSimpleUsageShowcase;
//# sourceMappingURL=toggleSimpleUsage.component.js.map