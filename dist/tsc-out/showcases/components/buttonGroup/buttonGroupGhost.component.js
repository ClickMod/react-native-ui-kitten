"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonGroupGhostShowcase = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const components_1 = require("@ui-kitten/components");
const ButtonGroupGhostShowcase = () => (<components_1.Layout style={styles.container} level='1'>
    <components_1.ButtonGroup style={styles.buttonGroup} appearance='ghost' status='primary'>
      <components_1.Button>
L
      </components_1.Button>
      <components_1.Button>
R
      </components_1.Button>
    </components_1.ButtonGroup>

    <components_1.ButtonGroup style={styles.buttonGroup} appearance='ghost' status='success'>
      <components_1.Button>
L
      </components_1.Button>
      <components_1.Button>
R
      </components_1.Button>
    </components_1.ButtonGroup>

    <components_1.ButtonGroup style={styles.buttonGroup} appearance='ghost' status='info'>
      <components_1.Button>
L
      </components_1.Button>
      <components_1.Button>
R
      </components_1.Button>
    </components_1.ButtonGroup>

    <components_1.ButtonGroup style={styles.buttonGroup} appearance='ghost' status='warning'>
      <components_1.Button>
L
      </components_1.Button>
      <components_1.Button>
R
      </components_1.Button>
    </components_1.ButtonGroup>

    <components_1.ButtonGroup style={styles.buttonGroup} appearance='ghost' status='danger'>
      <components_1.Button>
L
      </components_1.Button>
      <components_1.Button>
R
      </components_1.Button>
    </components_1.ButtonGroup>

    <components_1.ButtonGroup style={styles.buttonGroup} appearance='ghost' status='basic'>
      <components_1.Button>
L
      </components_1.Button>
      <components_1.Button>
R
      </components_1.Button>
    </components_1.ButtonGroup>

    <react_native_1.View style={styles.controlContainer}>
      <components_1.ButtonGroup style={styles.buttonGroup} appearance='ghost' status='control'>
        <components_1.Button>
L
        </components_1.Button>
        <components_1.Button>
R
        </components_1.Button>
      </components_1.ButtonGroup>
    </react_native_1.View>
  </components_1.Layout>);
exports.ButtonGroupGhostShowcase = ButtonGroupGhostShowcase;
const styles = react_native_1.StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    buttonGroup: {
        margin: 2,
    },
    controlContainer: {
        borderRadius: 4,
        margin: 2,
        padding: 6,
        justifyContent: 'center',
        backgroundColor: '#3366FF',
    },
});
//# sourceMappingURL=buttonGroupGhost.component.js.map