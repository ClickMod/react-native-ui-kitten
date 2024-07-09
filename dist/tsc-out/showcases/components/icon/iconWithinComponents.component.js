"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconWithinComponentsShowcase = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const components_1 = require("@ui-kitten/components");
const StarIcon = (props) => (<components_1.Icon {...props} name='star'/>);
const HeartIcon = (props) => (<components_1.Icon {...props} name='heart'/>);
const ForwardIcon = (props) => (<components_1.Icon {...props} name='arrow-ios-forward'/>);
const IconWithinComponentsShowcase = () => {
    const [value, setValue] = react_1.default.useState('');
    const [secureTextEntry, setSecureTextEntry] = react_1.default.useState(true);
    const [selectIndex, setSelectIndex] = react_1.default.useState(undefined);
    const [menuVisible, setMenuVisible] = react_1.default.useState(false);
    const [tooltipVisible, setTooltipVisible] = react_1.default.useState(false);
    const toggleSecureEntry = () => {
        setSecureTextEntry(!secureTextEntry);
    };
    const toggleTooltip = () => {
        setTooltipVisible(!tooltipVisible);
    };
    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };
    const renderInputIcon = (props) => (<react_native_1.TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <components_1.Icon {...props} name={!secureTextEntry ? 'eye' : 'eye-off'}/>
    </react_native_1.TouchableWithoutFeedback>);
    const renderTooltipButton = () => (<components_1.Button style={styles.button} accessoryLeft={HeartIcon} onPress={toggleTooltip}>
      PRESS ME
    </components_1.Button>);
    const renderMenuButton = () => (<components_1.Button style={styles.button} accessoryLeft={HeartIcon} onPress={toggleMenu}>
      PRESS ME
    </components_1.Button>);
    return (<>

      <components_1.Layout style={styles.inputContainer} level='1'>

        <components_1.Input style={styles.input} placeholder='Input' value={value} secureTextEntry={secureTextEntry} onChangeText={setValue} accessoryRight={renderInputIcon}/>

        <components_1.Select style={styles.input} placeholder='Select' selectedIndex={selectIndex} accessoryLeft={StarIcon} onSelect={index => setSelectIndex(index)}>
          <components_1.SelectItem accessoryLeft={HeartIcon} title='Option 1'/>
          <components_1.SelectItem accessoryLeft={HeartIcon} title='Option 2'/>
          <components_1.SelectItem accessoryLeft={HeartIcon} title='Option 3'/>
        </components_1.Select>

      </components_1.Layout>

      <components_1.OverflowMenu fullWidth={true} onSelect={toggleMenu} visible={menuVisible} anchor={renderMenuButton} onBackdropPress={toggleMenu}>
        <components_1.MenuItem title='Menu Option 1' accessoryRight={ForwardIcon}/>
        <components_1.MenuItem title='Menu Option 2' accessoryRight={ForwardIcon}/>
      </components_1.OverflowMenu>

      <components_1.Layout style={styles.buttonContainer} level='1'>

        <components_1.Tooltip anchor={renderTooltipButton} visible={tooltipVisible} accessoryLeft={StarIcon} onBackdropPress={toggleTooltip}>
          Hi!
        </components_1.Tooltip>

        <components_1.Button style={styles.button} appearance='ghost' accessoryLeft={StarIcon}/>

      </components_1.Layout>

    </>);
};
exports.IconWithinComponentsShowcase = IconWithinComponentsShowcase;
const styles = react_native_1.StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    buttonContainer: {
        flexDirection: 'row',
    },
    input: {
        flex: 1,
        margin: 2,
    },
    button: {
        margin: 2,
    },
});
//# sourceMappingURL=iconWithinComponents.component.js.map