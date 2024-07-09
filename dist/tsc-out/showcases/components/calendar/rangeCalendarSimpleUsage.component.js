"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RangeCalendarSimpleUsageShowcase = void 0;
const react_1 = __importDefault(require("react"));
const components_1 = require("@ui-kitten/components");
const RangeCalendarSimpleUsageShowcase = () => {
    const [range, setRange] = react_1.default.useState({});
    return (<components_1.RangeCalendar range={range} onSelect={nextRange => setRange(nextRange)}/>);
};
exports.RangeCalendarSimpleUsageShowcase = RangeCalendarSimpleUsageShowcase;
//# sourceMappingURL=rangeCalendarSimpleUsage.component.js.map