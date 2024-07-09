"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PopoverPlacementShowcase = void 0;
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
    'inner',
    'inner bottom',
    'inner top',
];
const PopoverPlacementShowcase = () => {
    const [visible, setVisible] = react_1.default.useState(false);
    const [placementIndex, setPlacementIndex] = react_1.default.useState(new components_1.IndexPath(4));
    const placement = placements[placementIndex.row];
    const onPlacementSelect = (index) => {
        setPlacementIndex(index);
    };
    const renderToggleButton = () => (<components_1.Button onPress={() => setVisible(true)}>
      TOGGLE POPOVER
    </components_1.Button>);
    const renderPlacementItem = (title) => (<components_1.SelectItem title={title}/>);
    return (<>
      <components_1.Select placeholder='Select Placement' value={placement} selectedIndex={placementIndex} onSelect={onPlacementSelect}>
        {placements.map(renderPlacementItem)}
      </components_1.Select>

      <react_native_1.View style={styles.buttonContainer}>
        <components_1.Popover anchor={renderToggleButton} visible={visible} placement={placement} onBackdropPress={() => setVisible(false)}>
          <components_1.Layout style={styles.content}>
            <components_1.Avatar style={styles.avatar} source={require('../../assets/icon.png')}/>
            <components_1.Text>
              Welcome to UI Kitten 😻
            </components_1.Text>
          </components_1.Layout>
        </components_1.Popover>
      </react_native_1.View>
    </>);
};
exports.PopoverPlacementShowcase = PopoverPlacementShowcase;
const styles = react_native_1.StyleSheet.create({
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 64,
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 4,
        paddingVertical: 8,
    },
    avatar: {
        marginHorizontal: 4,
    },
});
//# sourceMappingURL=popoverPlacement.component.js.map