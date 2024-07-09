"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectSizeShowcase = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const components_1 = require("@ui-kitten/components");
const useSelectState = (initialState = undefined) => {
    const [selectedIndex, setSelectedIndex] = react_1.default.useState(initialState);
    return { selectedIndex, onSelect: setSelectedIndex };
};
const SelectSizeShowcase = () => {
    const smallSelectState = useSelectState();
    const mediumSelectState = useSelectState();
    const largeSelectState = useSelectState();
    return (<>

      <components_1.Select style={styles.select} size='small' placeholder='Small' {...smallSelectState}>
        <components_1.SelectItem title='Option 1'/>
        <components_1.SelectItem title='Option 2'/>
        <components_1.SelectItem title='Option 3'/>
      </components_1.Select>

      <components_1.Select style={styles.select} size='medium' placeholder='Medium' {...mediumSelectState}>
        <components_1.SelectItem title='Option 1'/>
        <components_1.SelectItem title='Option 2'/>
        <components_1.SelectItem title='Option 3'/>
      </components_1.Select>

      <components_1.Select style={styles.select} size='large' placeholder='Large' {...largeSelectState}>
        <components_1.SelectItem title='Option 1'/>
        <components_1.SelectItem title='Option 2'/>
        <components_1.SelectItem title='Option 3'/>
      </components_1.Select>

    </>);
};
exports.SelectSizeShowcase = SelectSizeShowcase;
const styles = react_native_1.StyleSheet.create({
    select: {
        marginVertical: 2,
    },
});
//# sourceMappingURL=selectSize.component.js.map