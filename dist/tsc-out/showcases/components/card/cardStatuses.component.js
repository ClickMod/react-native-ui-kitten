"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardStatusesShowcase = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const components_1 = require("@ui-kitten/components");
const CardStatusesShowcase = () => (<components_1.Layout style={styles.container} level='1'>

    <components_1.Card style={styles.card} status='primary'>
      <components_1.Text>
Primary
      </components_1.Text>
    </components_1.Card>

    <components_1.Card style={styles.card} status='success'>
      <components_1.Text>
Success
      </components_1.Text>
    </components_1.Card>

    <components_1.Card style={styles.card} status='info'>
      <components_1.Text>
Info
      </components_1.Text>
    </components_1.Card>

    <components_1.Card style={styles.card} status='warning'>
      <components_1.Text>
Warning
      </components_1.Text>
    </components_1.Card>

    <components_1.Card style={styles.card} status='danger'>
      <components_1.Text>
Danger
      </components_1.Text>
    </components_1.Card>

    <components_1.Card style={styles.card} status='basic'>
      <components_1.Text>
Basic
      </components_1.Text>
    </components_1.Card>

  </components_1.Layout>);
exports.CardStatusesShowcase = CardStatusesShowcase;
const styles = react_native_1.StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    card: {
        margin: 2,
    },
});
//# sourceMappingURL=cardStatuses.component.js.map