"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RadioGroupSimpleUsageShowcase = void 0;
const react_1 = __importDefault(require("react"));
const components_1 = require("@ui-kitten/components");
const RadioGroupSimpleUsageShowcase = () => {
    const [selectedIndex, setSelectedIndex] = react_1.default.useState(0);
    return (<>

      <components_1.Text category='h6'>
        {`Selected Option: ${selectedIndex + 1}`}
      </components_1.Text>

      <components_1.RadioGroup selectedIndex={selectedIndex} onChange={index => setSelectedIndex(index)}>
        <components_1.Radio>
Option 1
        </components_1.Radio>
        <components_1.Radio>
Option 2
        </components_1.Radio>
        <components_1.Radio>
Option 3
        </components_1.Radio>
      </components_1.RadioGroup>

    </>);
};
exports.RadioGroupSimpleUsageShowcase = RadioGroupSimpleUsageShowcase;
//# sourceMappingURL=radioGroupSimpleUsage.component.js.map