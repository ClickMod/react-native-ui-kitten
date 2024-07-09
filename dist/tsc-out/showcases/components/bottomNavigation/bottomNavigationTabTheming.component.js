"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BottomNavigationTabThemingShowcase = void 0;
const react_1 = __importDefault(require("react"));
const components_1 = require("@ui-kitten/components");
const PersonIcon = (props) => (<components_1.Icon {...props} name='person-outline'/>);
const BellIcon = (props) => (<components_1.Icon {...props} name='bell-outline'/>);
const EmailIcon = (props) => (<components_1.Icon {...props} name='email-outline'/>);
const BottomNavigationTabThemingShowcase = () => {
    const [selectedIndex, setSelectedIndex] = react_1.default.useState(0);
    return (<components_1.BottomNavigation selectedIndex={selectedIndex} onSelect={index => setSelectedIndex(index)}>
      <components_1.BottomNavigationTab icon={PersonIcon} title='USERS'/>
      <components_1.BottomNavigationTab icon={BellIcon} title='ORDERS'/>
      <components_1.BottomNavigationTab icon={EmailIcon} title='TRANSACTIONS'/>
    </components_1.BottomNavigation>);
};
exports.BottomNavigationTabThemingShowcase = BottomNavigationTabThemingShowcase;
//# sourceMappingURL=bottomNavigationTabTheming.component.js.map