"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DrawerNoMarkersShowcase = void 0;
const react_1 = __importDefault(require("react"));
const components_1 = require("@ui-kitten/components");
const DrawerNoMarkersShowcase = () => {
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
      <components_1.Drawer>
        <components_1.DrawerItem title='Users' onPress={onUsersPress}/>
        <components_1.DrawerItem title='Orders' onPress={onOrdersPress}/>
        <components_1.DrawerItem title='Transactions' onPress={onTransactionsPress}/>
        <components_1.DrawerItem title='Settings' onPress={onSettingsPress}/>
      </components_1.Drawer>
    </>);
};
exports.DrawerNoMarkersShowcase = DrawerNoMarkersShowcase;
//# sourceMappingURL=drawerNoMarkers.component.js.map