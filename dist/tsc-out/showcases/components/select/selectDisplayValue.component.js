"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectDisplayValueShowcase = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const components_1 = require("@ui-kitten/components");
const data = [
    'Developer',
    'Designer',
    'Product Manager',
];
const groupedData = {
    'UI/UX': [
        'Frontend Developer',
        'Designer',
    ],
    'Management': [
        'Product Manager',
        'Business Analyst',
    ],
};
const SelectDisplayValueShowcase = () => {
    const [selectedIndex, setSelectedIndex] = react_1.default.useState(new components_1.IndexPath(0));
    const [multiSelectedIndex, setMultiSelectedIndex] = react_1.default.useState([
        new components_1.IndexPath(0, 0),
        new components_1.IndexPath(1, 1),
    ]);
    const displayValue = data[selectedIndex.row];
    const groupDisplayValues = multiSelectedIndex.map(index => {
        const groupTitle = Object.keys(groupedData)[index.section];
        return groupedData[groupTitle][index.row];
    });
    const renderOption = (title) => (<components_1.SelectItem title={title}/>);
    const renderGroup = (title) => (<components_1.SelectGroup title={title}>
      {groupedData[title].map(renderOption)}
    </components_1.SelectGroup>);
    return (<components_1.Layout style={styles.container} level='1'>

      <components_1.Select style={styles.select} placeholder='Default' value={displayValue} selectedIndex={selectedIndex} onSelect={(index) => setSelectedIndex(index)}>
        {data.map(renderOption)}
      </components_1.Select>

      <components_1.Select style={styles.select} multiSelect={true} placeholder='Multi' value={groupDisplayValues.join(', ')} selectedIndex={multiSelectedIndex} onSelect={(index) => setMultiSelectedIndex(index)}>
        {Object.keys(groupedData).map(renderGroup)}
      </components_1.Select>

    </components_1.Layout>);
};
exports.SelectDisplayValueShowcase = SelectDisplayValueShowcase;
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
//# sourceMappingURL=selectDisplayValue.component.js.map