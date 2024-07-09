"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalendarSimpleUsageShowcase = void 0;
const react_1 = __importDefault(require("react"));
const components_1 = require("@ui-kitten/components");
const CalendarSimpleUsageShowcase = () => {
    const [date, setDate] = react_1.default.useState(new Date());
    return (<>
      <components_1.Text category='h6'>
        Selected date:
        {' '}
        {date.toLocaleDateString()}
      </components_1.Text>

      <components_1.Calendar date={date} onSelect={nextDate => setDate(nextDate)}/>
    </>);
};
exports.CalendarSimpleUsageShowcase = CalendarSimpleUsageShowcase;
//# sourceMappingURL=calendarSimpleUsage.component.js.map