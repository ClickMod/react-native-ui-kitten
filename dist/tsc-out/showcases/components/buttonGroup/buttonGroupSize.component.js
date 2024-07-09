"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonGroupSizeShowcase = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const components_1 = require("@ui-kitten/components");
const ButtonGroupSizeShowcase = () => (<components_1.Layout style={styles.container} level='1'>

    <components_1.ButtonGroup style={styles.buttonGroup} size='tiny'>
      <components_1.Button>
L
      </components_1.Button>
      <components_1.Button>
R
      </components_1.Button>
    </components_1.ButtonGroup>

    <components_1.ButtonGroup style={styles.buttonGroup} size='small'>
      <components_1.Button>
L
      </components_1.Button>
      <components_1.Button>
R
      </components_1.Button>
    </components_1.ButtonGroup>

    <components_1.ButtonGroup style={styles.buttonGroup} size='medium'>
      <components_1.Button>
L
      </components_1.Button>
      <components_1.Button>
R
      </components_1.Button>
    </components_1.ButtonGroup>

    <components_1.ButtonGroup style={styles.buttonGroup} size='large'>
      <components_1.Button>
L
      </components_1.Button>
      <components_1.Button>
R
      </components_1.Button>
    </components_1.ButtonGroup>

    <components_1.ButtonGroup style={styles.buttonGroup} size='giant'>
      <components_1.Button>
L
      </components_1.Button>
      <components_1.Button>
R
      </components_1.Button>
    </components_1.ButtonGroup>

  </components_1.Layout>);
exports.ButtonGroupSizeShowcase = ButtonGroupSizeShowcase;
const styles = react_native_1.StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    buttonGroup: {
        margin: 2,
    },
});
//# sourceMappingURL=buttonGroupSize.component.js.map