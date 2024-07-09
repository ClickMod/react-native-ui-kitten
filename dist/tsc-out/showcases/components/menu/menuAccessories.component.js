"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuAccessoriesShowcase = void 0;
const react_1 = __importDefault(require("react"));
const components_1 = require("@ui-kitten/components");
const react_native_1 = require("react-native");
const StarIcon = (props) => (<components_1.Icon {...props} name='star'/>);
const ForwardIcon = (props) => (<components_1.Icon {...props} name='arrow-ios-forward'/>);
const useMenuState = (initialState = null) => {
    const [selectedIndex, setSelectedIndex] = react_1.default.useState(initialState);
    return { selectedIndex, onSelect: setSelectedIndex };
};
const MenuAccessoriesShowcase = () => {
    const leftMenuState = useMenuState();
    const rightMenuState = useMenuState();
    return (<components_1.Layout style={styles.container} level='1'>

      <components_1.Menu style={styles.menu} {...leftMenuState}>
        <components_1.MenuItem title='Users' accessoryLeft={StarIcon}/>
        <components_1.MenuItem title='Orders' accessoryLeft={StarIcon}/>
        <components_1.MenuItem title='Transactions' accessoryLeft={StarIcon}/>
      </components_1.Menu>

      <components_1.Menu style={styles.menu} {...rightMenuState}>
        <components_1.MenuItem title='Users' accessoryRight={ForwardIcon}/>
        <components_1.MenuItem title='Orders' accessoryRight={ForwardIcon}/>
        <components_1.MenuItem title='Transactions' accessoryRight={ForwardIcon}/>
      </components_1.Menu>

    </components_1.Layout>);
};
exports.MenuAccessoriesShowcase = MenuAccessoriesShowcase;
const styles = react_native_1.StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    menu: {
        flex: 1,
        margin: 8,
    },
});
//# sourceMappingURL=menuAccessories.component.js.map