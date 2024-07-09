"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DrawerGroupsShowcase = void 0;
const react_1 = __importDefault(require("react"));
const components_1 = require("@ui-kitten/components");
const SmartphoneIcon = (props) => (<components_1.Icon {...props} name='smartphone-outline'/>);
const BrowserIcon = (props) => (<components_1.Icon {...props} name='browser-outline'/>);
const ColorPaletteIcon = (props) => (<components_1.Icon {...props} name='color-palette-outline'/>);
const StarIcon = (props) => (<components_1.Icon {...props} name='star'/>);
const DrawerGroupsShowcase = () => {
    const [selectedIndex, setSelectedIndex] = react_1.default.useState(null);
    return (<components_1.Drawer selectedIndex={selectedIndex} onSelect={index => setSelectedIndex(index)}>
      <components_1.DrawerGroup title='Akveo React Native' accessoryLeft={SmartphoneIcon}>
        <components_1.DrawerItem title='UI Kitten' accessoryLeft={StarIcon}/>
        <components_1.DrawerItem title='Kitten Tricks' accessoryLeft={StarIcon}/>
      </components_1.DrawerGroup>
      <components_1.DrawerGroup title='Akveo Angular' accessoryLeft={BrowserIcon}>
        <components_1.DrawerItem title='Nebular' accessoryLeft={StarIcon}/>
        <components_1.DrawerItem title='ngx-admin' accessoryLeft={StarIcon}/>
        <components_1.DrawerItem title='UI Bakery' accessoryLeft={StarIcon}/>
      </components_1.DrawerGroup>
      <components_1.DrawerGroup title='Akveo Design' accessoryLeft={ColorPaletteIcon}>
        <components_1.DrawerItem title='Eva Design System' accessoryLeft={StarIcon}/>
        <components_1.DrawerItem title='Eva Icons' accessoryLeft={StarIcon}/>
      </components_1.DrawerGroup>
    </components_1.Drawer>);
};
exports.DrawerGroupsShowcase = DrawerGroupsShowcase;
//# sourceMappingURL=drawerGroups.component.js.map