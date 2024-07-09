"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextAppearancesShowcase = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const components_1 = require("@ui-kitten/components");
const TextAppearancesShowcase = () => (<>

    <components_1.Text style={styles.text}>
      Default Text.
    </components_1.Text>

    <components_1.Text style={styles.text} appearance='hint'>
      Hint Text.
    </components_1.Text>

    <react_native_1.View style={styles.alternativeContainer}>
      <components_1.Text style={styles.text} appearance='alternative'>
        Alternative Text.
      </components_1.Text>
    </react_native_1.View>

  </>);
exports.TextAppearancesShowcase = TextAppearancesShowcase;
const styles = react_native_1.StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        margin: 2,
    },
    alternativeContainer: {
        borderRadius: 4,
        marginVertical: 2,
        backgroundColor: '#3366FF',
    },
});
//# sourceMappingURL=textAppearances.component.js.map