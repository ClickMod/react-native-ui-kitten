"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputThemingShowcase = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const components_1 = require("@ui-kitten/components");
const AlertIcon = (props) => (<components_1.Icon {...props} name='alert-circle-outline'/>);
const InputThemingShowcase = () => {
    const [value, setValue] = react_1.default.useState('');
    const [secureTextEntry, setSecureTextEntry] = react_1.default.useState(true);
    const toggleSecureEntry = () => {
        setSecureTextEntry(!secureTextEntry);
    };
    const renderIcon = (props) => (<react_native_1.TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <components_1.Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'}/>
    </react_native_1.TouchableWithoutFeedback>);
    const renderCaption = () => {
        return (<react_native_1.View style={styles.captionContainer}>
        {AlertIcon(styles.captionIcon)}
        <components_1.Text style={styles.captionText}>
Should contain at least 8 symbols
        </components_1.Text>
      </react_native_1.View>);
    };
    return (<components_1.Input value={value} label='Password' placeholder='Place your Text' caption={renderCaption} accessoryRight={renderIcon} secureTextEntry={secureTextEntry} onChangeText={nextValue => setValue(nextValue)}/>);
};
exports.InputThemingShowcase = InputThemingShowcase;
const styles = react_native_1.StyleSheet.create({
    captionContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    captionIcon: {
        width: 10,
        height: 10,
        marginRight: 5,
    },
    captionText: {
        fontSize: 12,
        fontWeight: '400',
        fontFamily: 'opensans-regular',
        color: '#8F9BB3',
    },
});
//# sourceMappingURL=inputTheming.component.js.map