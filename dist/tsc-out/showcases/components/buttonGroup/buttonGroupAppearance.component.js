"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonGroupAppearanceShowcase = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const components_1 = require("@ui-kitten/components");
const ButtonGroupAppearanceShowcase = () => (<components_1.Layout style={styles.container} level='1'>

    <components_1.ButtonGroup style={styles.buttonGroup} appearance='filled'>
      <components_1.Button>
L
      </components_1.Button>
      <components_1.Button>
M
      </components_1.Button>
      <components_1.Button>
R
      </components_1.Button>
    </components_1.ButtonGroup>

    <components_1.ButtonGroup style={styles.buttonGroup} appearance='outline'>
      <components_1.Button>
L
      </components_1.Button>
      <components_1.Button>
M
      </components_1.Button>
      <components_1.Button>
R
      </components_1.Button>
    </components_1.ButtonGroup>

    <components_1.ButtonGroup style={styles.buttonGroup} appearance='ghost'>
      <components_1.Button>
L
      </components_1.Button>
      <components_1.Button>
M
      </components_1.Button>
      <components_1.Button>
R
      </components_1.Button>
    </components_1.ButtonGroup>

  </components_1.Layout>);
exports.ButtonGroupAppearanceShowcase = ButtonGroupAppearanceShowcase;
const styles = react_native_1.StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    buttonGroup: {
        margin: 2,
    },
});
//# sourceMappingURL=buttonGroupAppearance.component.js.map