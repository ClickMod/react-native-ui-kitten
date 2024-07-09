"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatepickerAccessoriesShowcase = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const components_1 = require("@ui-kitten/components");
const LeftArrow = (arrowProps) => {
    return (<react_native_1.TouchableOpacity style={styles.arrow} onPress={arrowProps.onPress}>
      <components_1.Text>
        PREV
      </components_1.Text>
    </react_native_1.TouchableOpacity>);
};
const DatepickerAccessoriesShowcase = () => {
    const [date, setDate] = react_1.default.useState(new Date());
    return (<components_1.Datepicker label="Label" caption="Caption" placeholder="Pick Date" date={date} onSelect={(nextDate) => setDate(nextDate)} renderArrowLeft={LeftArrow} renderArrowRight={(arrowProps) => {
            return (<react_native_1.TouchableOpacity style={styles.arrow} onPress={arrowProps.onPress}>
            <components_1.Text>
              NEXT
            </components_1.Text>
          </react_native_1.TouchableOpacity>);
        }}/>);
};
exports.DatepickerAccessoriesShowcase = DatepickerAccessoriesShowcase;
const styles = react_native_1.StyleSheet.create({
    arrow: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});
//# sourceMappingURL=datepickerCustomArrows.component.js.map