"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OverflowMenuPlacementShowcase = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const components_1 = require("@ui-kitten/components");
const placements = [
    'top',
    'top start',
    'top end',
    'bottom',
    'bottom start',
    'bottom end',
    'left',
    'left start',
    'left end',
    'right',
    'right start',
    'right end',
];
const OverflowMenuPlacementShowcase = () => {
    const [visible, setVisible] = react_1.default.useState(false);
    const [placementIndex, setPlacementIndex] = react_1.default.useState(new components_1.IndexPath(1, 0));
    const placement = placements[placementIndex.row];
    const onPlacementSelect = (index) => {
        setPlacementIndex(index);
    };
    const renderToggleButton = () => (<components_1.Button onPress={() => setVisible(true)}>
      TOGGLE MENU
    </components_1.Button>);
    const renderPlacementItem = (title) => (<components_1.SelectItem title={title}/>);
    return (<>

      <components_1.Select placeholder='Select Placement' value={placement} selectedIndex={placementIndex} onSelect={onPlacementSelect}>
        {placements.map(renderPlacementItem)}
      </components_1.Select>

      <react_native_1.View style={styles.buttonContainer}>

        <components_1.OverflowMenu anchor={renderToggleButton} visible={visible} placement={placement} onBackdropPress={() => setVisible(false)}>
          <components_1.MenuItem title='Users'/>
          <components_1.MenuItem title='Orders'/>
          <components_1.MenuItem title='Transactions'/>
        </components_1.OverflowMenu>

      </react_native_1.View>

    </>);
};
exports.OverflowMenuPlacementShowcase = OverflowMenuPlacementShowcase;
const styles = react_native_1.StyleSheet.create({
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 80,
    },
});
//# sourceMappingURL=overflowMenuPlacement.component.js.map