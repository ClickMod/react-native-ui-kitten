"use strict";
/**
 * IMPORTANT: To use Moment make sure to install Moment Date Service
 * npm i @ui-kitten/moment
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalendarMomentShowcase = void 0;
const react_1 = __importDefault(require("react"));
const components_1 = require("@ui-kitten/components");
const moment_1 = require("@ui-kitten/moment");
const moment_2 = __importDefault(require("moment"));
const dateService = new moment_1.MomentDateService();
const CalendarMomentShowcase = () => {
    const [date, setDate] = react_1.default.useState((0, moment_2.default)());
    return (<components_1.Calendar dateService={dateService} date={date} onSelect={nextDate => setDate(nextDate)}/>);
};
exports.CalendarMomentShowcase = CalendarMomentShowcase;
//# sourceMappingURL=calendarMoment.component.js.map