"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuNoMarkersShowcase = void 0;
const react_1 = __importDefault(require("react"));
const components_1 = require("@ui-kitten/components");
const MenuNoMarkersShowcase = () => {
    const [selectedTitle, setSelectedTitle] = react_1.default.useState('No items selected');
    const onUsersPress = () => {
        setSelectedTitle('Users');
    };
    const onOrdersPress = () => {
        setSelectedTitle('Orders');
    };
    const onTransactionsPress = () => {
        setSelectedTitle('Transactions');
    };
    const onSettingsPress = () => {
        setSelectedTitle('Settings');
    };
    return (<>
      <components_1.Text category='h6'>
        {selectedTitle}
      </components_1.Text>
      <components_1.Menu>
        <components_1.MenuItem title='Users' onPress={onUsersPress}/>
        <components_1.MenuItem title='Orders' onPress={onOrdersPress}/>
        <components_1.MenuItem title='Transactions' onPress={onTransactionsPress}/>
        <components_1.MenuItem title='Settings' onPress={onSettingsPress}/>
      </components_1.Menu>
    </>);
};
exports.MenuNoMarkersShowcase = MenuNoMarkersShowcase;
//# sourceMappingURL=menuNoMarkers.component.js.map