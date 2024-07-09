"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopNavigationImageTitleShowcase = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const components_1 = require("@ui-kitten/components");
const MenuIcon = (props) => (<components_1.Icon {...props} name='more-vertical'/>);
const InfoIcon = (props) => (<components_1.Icon {...props} name='info'/>);
const LogoutIcon = (props) => (<components_1.Icon {...props} name='log-out'/>);
const TopNavigationImageTitleShowcase = () => {
    const [menuVisible, setMenuVisible] = react_1.default.useState(false);
    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };
    const renderMenuAction = () => (<components_1.TopNavigationAction icon={MenuIcon} onPress={toggleMenu}/>);
    const renderOverflowMenuAction = () => (<components_1.OverflowMenu anchor={renderMenuAction} visible={menuVisible} onBackdropPress={toggleMenu}>
      <components_1.MenuItem accessoryLeft={InfoIcon} title='About'/>
      <components_1.MenuItem accessoryLeft={LogoutIcon} title='Logout'/>
    </components_1.OverflowMenu>);
    const renderTitle = (props) => (<react_native_1.View style={styles.titleContainer}>
      <components_1.Avatar style={styles.logo} source={require('../../assets/icon.png')}/>
      <components_1.Text {...props}>
Eva Application
      </components_1.Text>
    </react_native_1.View>);
    return (<components_1.TopNavigation title={renderTitle} accessoryRight={renderOverflowMenuAction}/>);
};
exports.TopNavigationImageTitleShowcase = TopNavigationImageTitleShowcase;
const styles = react_native_1.StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    logo: {
        marginHorizontal: 16,
    },
});
//# sourceMappingURL=topNavigationImageTitle.component.js.map