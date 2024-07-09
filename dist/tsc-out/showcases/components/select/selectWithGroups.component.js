"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectWithGroupsShowcase = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const components_1 = require("@ui-kitten/components");
const SelectWithGroupsShowcase = () => {
    const [selectedIndex, setSelectedIndex] = react_1.default.useState(new components_1.IndexPath(0, 1));
    const [multiSelectedIndex, setMultiSelectedIndex] = react_1.default.useState([
        new components_1.IndexPath(0, 0),
        new components_1.IndexPath(1, 1),
    ]);
    return (<components_1.Layout style={styles.container} level='1'>

      <components_1.Select style={styles.select} placeholder='Default' selectedIndex={selectedIndex} onSelect={index => setSelectedIndex(index)}>
        <components_1.SelectGroup title='Group 1'>
          <components_1.SelectItem title='Option 1.1'/>
          <components_1.SelectItem title='Option 1.2'/>
          <components_1.SelectItem title='Option 1.3'/>
        </components_1.SelectGroup>
        <components_1.SelectGroup title='Group 2'>
          <components_1.SelectItem title='Option 2.1'/>
          <components_1.SelectItem title='Option 2.2'/>
          <components_1.SelectItem title='Option 2.3'/>
        </components_1.SelectGroup>
      </components_1.Select>

      <components_1.Select style={styles.select} multiSelect={true} placeholder='Multi' selectedIndex={multiSelectedIndex} onSelect={index => setMultiSelectedIndex(index)}>
        <components_1.SelectGroup title='Group 1'>
          <components_1.SelectItem title='Option 1.1'/>
          <components_1.SelectItem title='Option 1.2'/>
          <components_1.SelectItem title='Option 1.3'/>
        </components_1.SelectGroup>
        <components_1.SelectGroup title='Group 2'>
          <components_1.SelectItem title='Option 2.1'/>
          <components_1.SelectItem title='Option 2.2'/>
          <components_1.SelectItem title='Option 2.3'/>
        </components_1.SelectGroup>
      </components_1.Select>

    </components_1.Layout>);
};
exports.SelectWithGroupsShowcase = SelectWithGroupsShowcase;
const styles = react_native_1.StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 192,
    },
    select: {
        flex: 1,
        margin: 2,
    },
});
//# sourceMappingURL=selectWithGroups.component.js.map