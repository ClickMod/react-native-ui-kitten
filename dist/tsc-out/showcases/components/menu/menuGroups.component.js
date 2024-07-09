"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuGroupsShowcase = void 0;
const react_1 = __importDefault(require("react"));
const components_1 = require("@ui-kitten/components");
const SmartphoneIcon = (props) => (<components_1.Icon {...props} name='smartphone-outline'/>);
const BrowserIcon = (props) => (<components_1.Icon {...props} name='browser-outline'/>);
const ColorPaletteIcon = (props) => (<components_1.Icon {...props} name='color-palette-outline'/>);
const StarIcon = (props) => (<components_1.Icon {...props} name='star'/>);
const MenuGroupsShowcase = () => {
    const [selectedIndex, setSelectedIndex] = react_1.default.useState(null);
    return (<components_1.Menu selectedIndex={selectedIndex} onSelect={index => setSelectedIndex(index)}>
      <components_1.MenuGroup title='Akveo React Native' accessoryLeft={SmartphoneIcon}>
        <components_1.MenuItem title='UI Kitten' accessoryLeft={StarIcon}/>
        <components_1.MenuItem title='Kitten Tricks' accessoryLeft={StarIcon}/>
      </components_1.MenuGroup>
      <components_1.MenuGroup title='Akveo Angular' accessoryLeft={BrowserIcon}>
        <components_1.MenuItem title='Nebular' accessoryLeft={StarIcon}/>
        <components_1.MenuItem title='ngx-admin' accessoryLeft={StarIcon}/>
        <components_1.MenuItem title='UI Bakery' accessoryLeft={StarIcon}/>
      </components_1.MenuGroup>
      <components_1.MenuGroup title='Akveo Design' accessoryLeft={ColorPaletteIcon}>
        <components_1.MenuItem title='Eva Design System' accessoryLeft={StarIcon}/>
        <components_1.MenuItem title='Eva Icons' accessoryLeft={StarIcon}/>
      </components_1.MenuGroup>
    </components_1.Menu>);
};
exports.MenuGroupsShowcase = MenuGroupsShowcase;
//# sourceMappingURL=menuGroups.component.js.map