"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BottomNavigationWithoutIndicatorShowcase = void 0;
const react_1 = __importDefault(require("react"));
const components_1 = require("@ui-kitten/components");
const BottomNavigationWithoutIndicatorShowcase = () => {
    const [selectedIndex, setSelectedIndex] = react_1.default.useState(0);
    return (<components_1.BottomNavigation appearance='noIndicator' selectedIndex={selectedIndex} onSelect={index => setSelectedIndex(index)}>
      <components_1.BottomNavigationTab title='USERS'/>
      <components_1.BottomNavigationTab title='ORDERS'/>
      <components_1.BottomNavigationTab title='TRANSACTIONS'/>
    </components_1.BottomNavigation>);
};
exports.BottomNavigationWithoutIndicatorShowcase = BottomNavigationWithoutIndicatorShowcase;
//# sourceMappingURL=bottomNavigationWithoutIndicator.component.js.map