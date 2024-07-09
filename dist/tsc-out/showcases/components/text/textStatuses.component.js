"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextStatusesShowcase = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const components_1 = require("@ui-kitten/components");
const TextStatusesShowcase = () => (<components_1.Layout style={styles.container} level='1'>

    <components_1.Text style={styles.text} status='primary'>
Primary
    </components_1.Text>
    <components_1.Text style={styles.text} status='success'>
Success
    </components_1.Text>
    <components_1.Text style={styles.text} status='info'>
Info
    </components_1.Text>
    <components_1.Text style={styles.text} status='warning'>
Warning
    </components_1.Text>
    <components_1.Text style={styles.text} status='danger'>
Danger
    </components_1.Text>
    <components_1.Text style={styles.text} status='basic'>
Basic
    </components_1.Text>
    <react_native_1.View style={styles.controlContainer}>
      <components_1.Text style={styles.text} status='control'>
Control
      </components_1.Text>
    </react_native_1.View>

  </components_1.Layout>);
exports.TextStatusesShowcase = TextStatusesShowcase;
const styles = react_native_1.StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
    },
    text: {
        margin: 4,
    },
    controlContainer: {
        borderRadius: 4,
        margin: 4,
        padding: 4,
        backgroundColor: '#3366FF',
    },
});
//# sourceMappingURL=textStatuses.component.js.map