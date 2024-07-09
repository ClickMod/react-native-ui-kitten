"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectMultiSelectShowcase = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const components_1 = require("@ui-kitten/components");
const SelectMultiSelectShowcase = () => {
    const [selectedIndex, setSelectedIndex] = react_1.default.useState([
        new components_1.IndexPath(0),
        new components_1.IndexPath(1),
    ]);
    return (<components_1.Layout style={styles.container} level='1'>
      <components_1.Select multiSelect={true} selectedIndex={selectedIndex} onSelect={(index) => setSelectedIndex(index)}>
        <components_1.SelectItem title='Option 1'/>
        <components_1.SelectItem title='Option 2'/>
        <components_1.SelectItem title='Option 3'/>
      </components_1.Select>
    </components_1.Layout>);
};
exports.SelectMultiSelectShowcase = SelectMultiSelectShowcase;
const styles = react_native_1.StyleSheet.create({
    container: {
        height: 128,
    },
});
//# sourceMappingURL=selectMultiSelect.component.js.map