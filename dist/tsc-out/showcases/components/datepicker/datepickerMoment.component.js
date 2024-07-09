"use strict";
/**
 * IMPORTANT: To use Moment make sure to install Moment Date Service
 * npm i @ui-kitten/moment
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatepickerMomentShowcase = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const moment_1 = __importDefault(require("moment"));
const components_1 = require("@ui-kitten/components");
const moment_2 = require("@ui-kitten/moment");
const dateService = new moment_2.MomentDateService();
const DatepickerMomentShowcase = () => {
    const [date, setDate] = react_1.default.useState((0, moment_1.default)());
    return (<components_1.Layout style={styles.container} level='1'>

      <components_1.Datepicker placeholder='Pick Date' date={date} dateService={dateService} onSelect={nextDate => setDate(nextDate)}/>

    </components_1.Layout>);
};
exports.DatepickerMomentShowcase = DatepickerMomentShowcase;
const styles = react_native_1.StyleSheet.create({
    container: {
        minHeight: 360,
    },
});
//# sourceMappingURL=datepickerMoment.component.js.map