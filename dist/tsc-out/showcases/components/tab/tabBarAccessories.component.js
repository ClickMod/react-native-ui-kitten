"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TabBarAccessoriesShowcase = void 0;
const react_1 = __importDefault(require("react"));
const components_1 = require("@ui-kitten/components");
const PersonIcon = (props) => (<components_1.Icon {...props} name='person-outline'/>);
const BellIcon = (props) => (<components_1.Icon {...props} name='bell-outline'/>);
const EmailIcon = (props) => (<components_1.Icon {...props} name='email-outline'/>);
const useTabBarState = (initialState = 0) => {
    const [selectedIndex, setSelectedIndex] = react_1.default.useState(initialState);
    return { selectedIndex, onSelect: setSelectedIndex };
};
const TabBarAccessoriesShowcase = () => {
    const topState = useTabBarState();
    const bottomState = useTabBarState();
    return (<>

      <components_1.TabBar {...topState}>
        <components_1.Tab icon={PersonIcon}/>
        <components_1.Tab icon={BellIcon}/>
        <components_1.Tab icon={EmailIcon}/>
      </components_1.TabBar>

      <components_1.TabBar {...bottomState}>
        <components_1.Tab title='USERS' icon={PersonIcon}/>
        <components_1.Tab title='ORDERS' icon={BellIcon}/>
        <components_1.Tab title='TRANSACTIONS' icon={EmailIcon}/>
      </components_1.TabBar>

    </>);
};
exports.TabBarAccessoriesShowcase = TabBarAccessoriesShowcase;
//# sourceMappingURL=tabBarAccessories.component.js.map