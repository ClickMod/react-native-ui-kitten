"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TabThemingShowcase = void 0;
const react_1 = __importDefault(require("react"));
const components_1 = require("@ui-kitten/components");
const PersonIcon = (props) => (<components_1.Icon {...props} name='person-outline'/>);
const BellIcon = (props) => (<components_1.Icon {...props} name='bell-outline'/>);
const EmailIcon = (props) => (<components_1.Icon {...props} name='email-outline'/>);
const TabThemingShowcase = () => {
    const [selectedIndex, setSelectedIndex] = react_1.default.useState(0);
    return (<components_1.TabBar selectedIndex={selectedIndex} onSelect={index => setSelectedIndex(index)}>
      <components_1.Tab icon={PersonIcon} title='USERS'/>
      <components_1.Tab icon={BellIcon} title='ORDERS'/>
      <components_1.Tab icon={EmailIcon} title='TRANSACTIONS'/>
    </components_1.TabBar>);
};
exports.TabThemingShowcase = TabThemingShowcase;
//# sourceMappingURL=tabTheming.component.js.map