"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TabBarSimpleUsageShowcase = void 0;
const react_1 = __importDefault(require("react"));
const components_1 = require("@ui-kitten/components");
const TabBarSimpleUsageShowcase = () => {
    const [selectedIndex, setSelectedIndex] = react_1.default.useState(0);
    return (<components_1.TabBar selectedIndex={selectedIndex} onSelect={index => setSelectedIndex(index)}>
      <components_1.Tab title='USERS'/>
      <components_1.Tab title='ORDERS'/>
      <components_1.Tab title='TRANSACTIONS'/>
    </components_1.TabBar>);
};
exports.TabBarSimpleUsageShowcase = TabBarSimpleUsageShowcase;
//# sourceMappingURL=tabBarSimpleUsage.component.js.map