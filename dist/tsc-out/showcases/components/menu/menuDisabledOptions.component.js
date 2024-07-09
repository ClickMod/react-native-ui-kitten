"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuDisabledOptionsShowcase = void 0;
const react_1 = __importDefault(require("react"));
const components_1 = require("@ui-kitten/components");
const StarIcon = (props) => (<components_1.Icon {...props} name='star'/>);
const ForwardIcon = (props) => (<components_1.Icon {...props} name='arrow-ios-forward'/>);
const MenuDisabledOptionsShowcase = () => {
    const [selectedIndex, setSelectedIndex] = react_1.default.useState(null);
    return (<components_1.Layout level='1'>

      <components_1.Menu selectedIndex={selectedIndex} onSelect={index => setSelectedIndex(index)}>
        <components_1.MenuItem title='Users' accessoryLeft={StarIcon} accessoryRight={ForwardIcon}/>
        <components_1.MenuItem title='Orders' disabled={true} accessoryLeft={StarIcon} accessoryRight={ForwardIcon}/>
        <components_1.MenuItem title='Transactions' accessoryLeft={StarIcon} accessoryRight={ForwardIcon}/>
      </components_1.Menu>

    </components_1.Layout>);
};
exports.MenuDisabledOptionsShowcase = MenuDisabledOptionsShowcase;
//# sourceMappingURL=menuDisabledOptions.component.js.map