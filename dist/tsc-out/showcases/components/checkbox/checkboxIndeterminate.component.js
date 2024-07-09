"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.styles = exports.CheckboxIndeterminateShowcase = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const components_1 = require("@ui-kitten/components");
const CheckboxIndeterminateShowcase = () => {
    const [allChecked, setAllChecked] = react_1.default.useState(false);
    const [indeterminate, setIndeterminate] = react_1.default.useState(false);
    const [readChecked, setReadChecked] = react_1.default.useState(false);
    const [writeChecked, setWriteChecked] = react_1.default.useState(false);
    const onGroupCheckedChange = (checked) => {
        setReadChecked(checked);
        setWriteChecked(checked);
        setAllChecked(checked);
        updateGroup(checked, checked);
    };
    const onReadCheckedChange = (checked) => {
        setReadChecked(checked);
        updateGroup(checked, writeChecked);
    };
    const onWriteCheckedChange = (checked) => {
        setWriteChecked(checked);
        updateGroup(checked, readChecked);
    };
    const updateGroup = (...states) => {
        const someChecked = states.some((item) => item === true);
        const everyChecked = states.every((item) => item === true);
        if (someChecked && !everyChecked) {
            setAllChecked(true);
            setIndeterminate(true);
        }
        else if (!someChecked && !everyChecked) {
            setAllChecked(false);
            setIndeterminate(false);
        }
        else if (everyChecked) {
            setAllChecked(true);
            setIndeterminate(false);
        }
    };
    return (<>
      <components_1.CheckBox style={exports.styles.group} checked={allChecked} indeterminate={indeterminate} onChange={onGroupCheckedChange}>
        Permissions
      </components_1.CheckBox>
      <components_1.CheckBox style={exports.styles.option} checked={readChecked} onChange={onReadCheckedChange}>
        Read
      </components_1.CheckBox>
      <components_1.CheckBox style={exports.styles.option} checked={writeChecked} onChange={onWriteCheckedChange}>
        Write
      </components_1.CheckBox>
    </>);
};
exports.CheckboxIndeterminateShowcase = CheckboxIndeterminateShowcase;
exports.styles = react_native_1.StyleSheet.create({
    group: {
        marginVertical: 4,
    },
    option: {
        marginVertical: 4,
        marginHorizontal: 12,
    },
});
//# sourceMappingURL=checkboxIndeterminate.component.js.map