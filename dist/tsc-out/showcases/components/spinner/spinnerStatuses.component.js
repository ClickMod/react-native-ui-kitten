"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpinnerStatusesShowcase = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const components_1 = require("@ui-kitten/components");
const SpinnerStatusesShowcase = () => (<components_1.Layout style={styles.container} level='1'>

    <components_1.Spinner status='primary'/>

    <components_1.Spinner status='success'/>

    <components_1.Spinner status='info'/>

    <components_1.Spinner status='warning'/>

    <components_1.Spinner status='danger'/>

    <components_1.Spinner status='basic'/>

    <react_native_1.View style={styles.controlContainer}>
      <components_1.Spinner status='control'/>
    </react_native_1.View>

  </components_1.Layout>);
exports.SpinnerStatusesShowcase = SpinnerStatusesShowcase;
const styles = react_native_1.StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },
    controlContainer: {
        borderRadius: 4,
        padding: 12,
        backgroundColor: '#3366FF',
    },
});
//# sourceMappingURL=spinnerStatuses.component.js.map