"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BottomNavigationAccessoriesShowcase = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const components_1 = require("@ui-kitten/components");
const PersonIcon = (props) => (<components_1.Icon {...props} name='person-outline'/>);
const BellIcon = (props) => (<components_1.Icon {...props} name='bell-outline'/>);
const EmailIcon = (props) => (<components_1.Icon {...props} name='email-outline'/>);
const useBottomNavigationState = (initialState = 0) => {
    const [selectedIndex, setSelectedIndex] = react_1.default.useState(initialState);
    return { selectedIndex, onSelect: setSelectedIndex };
};
const BottomNavigationAccessoriesShowcase = () => {
    const topState = useBottomNavigationState();
    const bottomState = useBottomNavigationState();
    return (<>

      <components_1.BottomNavigation style={styles.bottomNavigation} {...topState}>
        <components_1.BottomNavigationTab title='USERS' icon={PersonIcon}/>
        <components_1.BottomNavigationTab title='ORDERS' icon={BellIcon}/>
        <components_1.BottomNavigationTab title='TRANSACTIONS' icon={EmailIcon}/>
      </components_1.BottomNavigation>

      <components_1.BottomNavigation style={styles.bottomNavigation} {...bottomState}>
        <components_1.BottomNavigationTab icon={PersonIcon}/>
        <components_1.BottomNavigationTab icon={BellIcon}/>
        <components_1.BottomNavigationTab icon={EmailIcon}/>
      </components_1.BottomNavigation>

    </>);
};
exports.BottomNavigationAccessoriesShowcase = BottomNavigationAccessoriesShowcase;
const styles = react_native_1.StyleSheet.create({
    bottomNavigation: {
        marginVertical: 8,
    },
});
//# sourceMappingURL=bottomNavigationAccessories.component.js.map