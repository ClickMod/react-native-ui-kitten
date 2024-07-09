"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectStatesShowcase = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const components_1 = require("@ui-kitten/components");
const SelectStatesShowcase = () => {
    const [selectedIndex, setSelectedIndex] = react_1.default.useState();
    return (<components_1.Layout style={styles.container} level='1'>

      <components_1.Select style={styles.select} placeholder='Active' selectedIndex={selectedIndex} onSelect={index => setSelectedIndex(index)}>
        <components_1.SelectItem title='Option 1'/>
        <components_1.SelectItem title='Option 2'/>
        <components_1.SelectItem title='Option 3'/>
      </components_1.Select>

      <components_1.Select style={styles.select} placeholder='Disabled' disabled={true}>
        <components_1.SelectItem title='Option 1'/>
        <components_1.SelectItem title='Option 2'/>
        <components_1.SelectItem title='Option 3'/>
      </components_1.Select>

    </components_1.Layout>);
};
exports.SelectStatesShowcase = SelectStatesShowcase;
const styles = react_native_1.StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 128,
    },
    select: {
        flex: 1,
        marginHorizontal: 2,
    },
});
//# sourceMappingURL=selectStates.component.js.map