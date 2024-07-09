"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectStatusShowcase = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const components_1 = require("@ui-kitten/components");
const useSelectState = (initialState = undefined) => {
    const [selectedIndex, setSelectedIndex] = react_1.default.useState(initialState);
    return { selectedIndex, onSelect: setSelectedIndex };
};
const SelectStatusShowcase = () => {
    const primarySelectState = useSelectState();
    const successSelectState = useSelectState();
    const infoSelectState = useSelectState();
    const warningSelectState = useSelectState();
    const dangerSelectState = useSelectState();
    const basicSelectState = useSelectState();
    const controlSelectState = useSelectState();
    return (<>

      <components_1.Select style={styles.select} status='primary' placeholder='Primary' {...primarySelectState}>
        <components_1.SelectItem title='Option 1'/>
        <components_1.SelectItem title='Option 2'/>
        <components_1.SelectItem title='Option 3'/>
      </components_1.Select>

      <components_1.Layout style={styles.rowContainer} level='1'>

        <components_1.Select style={styles.select} status='success' placeholder='Success' {...successSelectState}>
          <components_1.SelectItem title='Option 1'/>
          <components_1.SelectItem title='Option 2'/>
          <components_1.SelectItem title='Option 3'/>
        </components_1.Select>

        <components_1.Select style={styles.select} status='info' placeholder='Info' {...infoSelectState}>
          <components_1.SelectItem title='Option 1'/>
          <components_1.SelectItem title='Option 2'/>
          <components_1.SelectItem title='Option 3'/>
        </components_1.Select>

      </components_1.Layout>

      <components_1.Layout style={styles.rowContainer} level='1'>

        <components_1.Select style={styles.select} status='warning' placeholder='Warning' {...warningSelectState}>
          <components_1.SelectItem title='Option 1'/>
          <components_1.SelectItem title='Option 2'/>
          <components_1.SelectItem title='Option 3'/>
        </components_1.Select>

        <components_1.Select style={styles.select} status='danger' placeholder='Danger' {...dangerSelectState}>
          <components_1.SelectItem title='Option 1'/>
          <components_1.SelectItem title='Option 2'/>
          <components_1.SelectItem title='Option 3'/>
        </components_1.Select>

      </components_1.Layout>

      <components_1.Layout style={styles.rowContainer} level='1'>

        <components_1.Select style={styles.select} status='basic' placeholder='Basic' {...basicSelectState}>
          <components_1.SelectItem title='Option 1'/>
          <components_1.SelectItem title='Option 2'/>
          <components_1.SelectItem title='Option 3'/>
        </components_1.Select>

        <react_native_1.View style={styles.controlContainer}>
          <components_1.Select style={styles.select} status='control' placeholder='Control' {...controlSelectState}>
            <components_1.SelectItem title='Option 1'/>
            <components_1.SelectItem title='Option 2'/>
            <components_1.SelectItem title='Option 3'/>
          </components_1.Select>
        </react_native_1.View>

      </components_1.Layout>

    </>);
};
exports.SelectStatusShowcase = SelectStatusShowcase;
const styles = react_native_1.StyleSheet.create({
    select: {
        flex: 1,
        margin: 2,
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    controlContainer: {
        borderRadius: 4,
        margin: 2,
        padding: 6,
        backgroundColor: '#3366FF',
    },
});
//# sourceMappingURL=selectStatus.component.js.map