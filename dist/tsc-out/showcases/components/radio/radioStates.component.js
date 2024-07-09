"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RadioStatesShowcase = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const components_1 = require("@ui-kitten/components");
const RadioStatesShowcase = () => {
    const [activeChecked, setActiveChecked] = react_1.default.useState(false);
    return (<components_1.Layout style={styles.container} level='1'>

      <components_1.Radio style={styles.radio} checked={activeChecked} onChange={nextChecked => setActiveChecked(nextChecked)}>
        Active
      </components_1.Radio>

      <components_1.Radio style={styles.radio} disabled={true}>
        Disabled
      </components_1.Radio>

      <components_1.Radio style={styles.radio} checked={true} disabled={true}>
        Checked Disabled
      </components_1.Radio>

    </components_1.Layout>);
};
exports.RadioStatesShowcase = RadioStatesShowcase;
const styles = react_native_1.StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    radio: {
        margin: 2,
    },
});
//# sourceMappingURL=radioStates.component.js.map