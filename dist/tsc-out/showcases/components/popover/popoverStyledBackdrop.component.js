"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PopoverStyledBackdropShowcase = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const components_1 = require("@ui-kitten/components");
const PopoverStyledBackdropShowcase = () => {
    const [visible, setVisible] = react_1.default.useState(false);
    const renderToggleButton = () => (<components_1.Button onPress={() => setVisible(true)}>
      TOGGLE POPOVER
    </components_1.Button>);
    return (<components_1.Popover backdropStyle={styles.backdrop} visible={visible} anchor={renderToggleButton} onBackdropPress={() => setVisible(false)}>
      <components_1.Layout style={styles.content}>
        <components_1.Avatar style={styles.avatar} source={require('../../assets/icon.png')}/>
        <components_1.Text>
          Welcome to UI Kitten 😻
        </components_1.Text>
      </components_1.Layout>
    </components_1.Popover>);
};
exports.PopoverStyledBackdropShowcase = PopoverStyledBackdropShowcase;
const styles = react_native_1.StyleSheet.create({
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 4,
        paddingVertical: 8,
    },
    avatar: {
        marginHorizontal: 4,
    },
    backdrop: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
});
//# sourceMappingURL=popoverStyledBackdrop.component.js.map