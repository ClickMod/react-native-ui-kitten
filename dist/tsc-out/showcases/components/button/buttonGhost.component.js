"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonGhostShowcase = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const components_1 = require("@ui-kitten/components");
const ButtonGhostShowcase = () => (<components_1.Layout style={styles.container} level='1'>

    <components_1.Button style={styles.button} appearance='ghost' status='primary'>
      PRIMARY
    </components_1.Button>

    <components_1.Button style={styles.button} appearance='ghost' status='success'>
      SUCCESS
    </components_1.Button>

    <components_1.Button style={styles.button} appearance='ghost' status='info'>
      INFO
    </components_1.Button>

    <components_1.Button style={styles.button} appearance='ghost' status='warning'>
      WARNING
    </components_1.Button>

    <components_1.Button style={styles.button} appearance='ghost' status='danger'>
      DANGER
    </components_1.Button>

    <components_1.Button style={styles.button} appearance='ghost' status='basic'>
      BASIC
    </components_1.Button>

    <react_native_1.View style={styles.controlContainer}>
      <components_1.Button style={styles.button} appearance='ghost' status='control'>
        CONTROL
      </components_1.Button>
    </react_native_1.View>

  </components_1.Layout>);
exports.ButtonGhostShowcase = ButtonGhostShowcase;
const styles = react_native_1.StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    button: {
        margin: 2,
    },
    controlContainer: {
        margin: 2,
        padding: 6,
        borderRadius: 4,
        justifyContent: 'center',
        backgroundColor: '#3366FF',
    },
});
//# sourceMappingURL=buttonGhost.component.js.map