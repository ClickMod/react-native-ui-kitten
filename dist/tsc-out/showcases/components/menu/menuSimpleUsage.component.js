"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuSimpleUsageShowcase = void 0;
const react_1 = __importDefault(require("react"));
const components_1 = require("@ui-kitten/components");
const MenuSimpleUsageShowcase = () => {
    const [selectedIndex, setSelectedIndex] = react_1.default.useState(new components_1.IndexPath(0));
    return (<components_1.Menu selectedIndex={selectedIndex} onSelect={index => setSelectedIndex(index)}>
      <components_1.MenuItem title='Users'/>
      <components_1.MenuItem title='Orders'/>
      <components_1.MenuItem title='Transactions'/>
      <components_1.MenuItem title='Settings'/>
    </components_1.Menu>);
};
exports.MenuSimpleUsageShowcase = MenuSimpleUsageShowcase;
//# sourceMappingURL=menuSimpleUsage.component.js.map