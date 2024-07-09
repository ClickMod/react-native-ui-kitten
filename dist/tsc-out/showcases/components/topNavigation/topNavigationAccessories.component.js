"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopNavigationAccessoriesShowcase = void 0;
const react_1 = __importDefault(require("react"));
const components_1 = require("@ui-kitten/components");
const react_native_1 = require("react-native");
const BackIcon = (props) => (<components_1.Icon {...props} name='arrow-back'/>);
const EditIcon = (props) => (<components_1.Icon {...props} name='edit'/>);
const MenuIcon = (props) => (<components_1.Icon {...props} name='more-vertical'/>);
const InfoIcon = (props) => (<components_1.Icon {...props} name='info'/>);
const LogoutIcon = (props) => (<components_1.Icon {...props} name='log-out'/>);
const TopNavigationAccessoriesShowcase = () => {
    const [menuVisible, setMenuVisible] = react_1.default.useState(false);
    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };
    const renderMenuAction = () => (<components_1.TopNavigationAction icon={MenuIcon} onPress={toggleMenu}/>);
    const renderRightActions = () => (<>
      <components_1.TopNavigationAction icon={EditIcon}/>
      <components_1.OverflowMenu anchor={renderMenuAction} visible={menuVisible} onBackdropPress={toggleMenu}>
        <components_1.MenuItem accessoryLeft={InfoIcon} title='About'/>
        <components_1.MenuItem accessoryLeft={LogoutIcon} title='Logout'/>
      </components_1.OverflowMenu>
    </>);
    const renderBackAction = () => (<components_1.TopNavigationAction icon={BackIcon}/>);
    return (<components_1.Layout style={styles.container} level='1'>
      <components_1.TopNavigation alignment='center' title='Eva Application' subtitle='Subtitle' accessoryLeft={renderBackAction} accessoryRight={renderRightActions}/>
    </components_1.Layout>);
};
exports.TopNavigationAccessoriesShowcase = TopNavigationAccessoriesShowcase;
const styles = react_native_1.StyleSheet.create({
    container: {
        minHeight: 128,
    },
});
//# sourceMappingURL=topNavigationAccessories.component.js.map