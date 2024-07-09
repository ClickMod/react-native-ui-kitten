"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToggleStatesShowcase = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const components_1 = require("@ui-kitten/components");
const ToggleStatesShowcase = () => {
    const [activeChecked, setActiveChecked] = react_1.default.useState(false);
    const onActiveCheckedChange = (isChecked) => {
        setActiveChecked(isChecked);
    };
    return (<components_1.Layout style={styles.container} level='1'>

      <components_1.Toggle style={styles.toggle} checked={activeChecked} onChange={onActiveCheckedChange}>
        Active
      </components_1.Toggle>

      <components_1.Toggle style={styles.toggle} disabled={true}>
        Disabled
      </components_1.Toggle>

      <components_1.Toggle style={styles.toggle} checked={true} disabled={true}>
        Checked Disabled
      </components_1.Toggle>

    </components_1.Layout>);
};
exports.ToggleStatesShowcase = ToggleStatesShowcase;
const styles = react_native_1.StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    toggle: {
        margin: 2,
    },
});
//# sourceMappingURL=toggleStates.component.js.map