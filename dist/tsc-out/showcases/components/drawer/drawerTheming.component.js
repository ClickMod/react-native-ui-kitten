"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DrawerThemingShowcase = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const components_1 = require("@ui-kitten/components");
const PersonIcon = (props) => (<components_1.Icon {...props} name='person-outline'/>);
const BellIcon = (props) => (<components_1.Icon {...props} name='bell-outline'/>);
const ForwardIcon = (props) => (<components_1.Icon {...props} name='arrow-ios-forward'/>);
const Header = (props) => (<>
    <react_native_1.ImageBackground style={[props.style, styles.header]} source={require('../../assets/icon.png')}/>
    <components_1.Divider />
  </>);
const DrawerThemingShowcase = () => {
    const [selectedIndex, setSelectedIndex] = react_1.default.useState(null);
    return (<components_1.Drawer header={Header} selectedIndex={selectedIndex} onSelect={index => setSelectedIndex(index)}>
      <components_1.DrawerItem title='Users' accessoryLeft={PersonIcon} accessoryRight={ForwardIcon}/>
      <components_1.DrawerItem title='Orders' accessoryLeft={BellIcon} accessoryRight={ForwardIcon}/>
    </components_1.Drawer>);
};
exports.DrawerThemingShowcase = DrawerThemingShowcase;
const styles = react_native_1.StyleSheet.create({
    header: {
        height: 128,
        flexDirection: 'row',
        alignItems: 'center',
    },
});
//# sourceMappingURL=drawerTheming.component.js.map