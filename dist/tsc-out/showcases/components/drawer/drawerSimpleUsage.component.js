"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DrawerSimpleUsageShowcase = void 0;
const react_1 = __importDefault(require("react"));
const components_1 = require("@ui-kitten/components");
const DrawerSimpleUsageShowcase = () => {
    const [selectedIndex, setSelectedIndex] = react_1.default.useState(new components_1.IndexPath(0));
    return (<components_1.Drawer selectedIndex={selectedIndex} onSelect={index => setSelectedIndex(index)}>
      <components_1.DrawerItem title='Users'/>
      <components_1.DrawerItem title='Orders'/>
      <components_1.DrawerItem title='Transactions'/>
      <components_1.DrawerItem title='Settings'/>
    </components_1.Drawer>);
};
exports.DrawerSimpleUsageShowcase = DrawerSimpleUsageShowcase;
//# sourceMappingURL=drawerSimpleUsage.component.js.map