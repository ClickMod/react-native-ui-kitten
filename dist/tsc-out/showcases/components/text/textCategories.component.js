"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextCategoriesShowcase = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const components_1 = require("@ui-kitten/components");
const TextCategoriesShowcase = () => (<>

    <react_native_1.View style={styles.row}>
      <components_1.Text style={styles.text} category='h1'>
H1
      </components_1.Text>
      <components_1.Text style={styles.text} category='h2'>
H2
      </components_1.Text>
      <components_1.Text style={styles.text} category='h3'>
H3
      </components_1.Text>
      <components_1.Text style={styles.text} category='h4'>
H4
      </components_1.Text>
      <components_1.Text style={styles.text} category='h5'>
H5
      </components_1.Text>
      <components_1.Text style={styles.text} category='h6'>
H6
      </components_1.Text>
    </react_native_1.View>

    <react_native_1.View style={styles.row}>
      <components_1.Text style={styles.text} category='s1'>
S1
      </components_1.Text>
      <components_1.Text style={styles.text} category='s2'>
S2
      </components_1.Text>
    </react_native_1.View>

    <react_native_1.View style={styles.row}>
      <components_1.Text style={styles.text} category='p1'>
P1
      </components_1.Text>
      <components_1.Text style={styles.text} category='p2'>
P2
      </components_1.Text>
    </react_native_1.View>

    <react_native_1.View style={styles.row}>
      <components_1.Text style={styles.text} category='c1'>
C1
      </components_1.Text>
      <components_1.Text style={styles.text} category='c2'>
C2
      </components_1.Text>
      <components_1.Text style={styles.text} category='label'>
LABEL
      </components_1.Text>
    </react_native_1.View>

  </>);
exports.TextCategoriesShowcase = TextCategoriesShowcase;
const styles = react_native_1.StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        margin: 2,
    },
});
//# sourceMappingURL=textCategories.component.js.map