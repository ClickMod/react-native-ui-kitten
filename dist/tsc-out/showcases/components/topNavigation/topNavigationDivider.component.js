"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopNavigationDividerShowcase = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const components_1 = require("@ui-kitten/components");
const BackIcon = (props) => (<components_1.Icon {...props} name='arrow-back'/>);
const SettingsIcon = (props) => (<components_1.Icon {...props} name='settings'/>);
const data = new Array(8).fill({
    title: 'Title for Item',
    description: 'Description for Item',
});
const TopNavigationDividerShowcase = () => {
    const renderSettingsAction = () => (<components_1.TopNavigationAction icon={SettingsIcon}/>);
    const renderBackAction = () => (<components_1.TopNavigationAction icon={BackIcon}/>);
    const renderItemAccessory = () => (<components_1.Button size='tiny'>
FOLLOW
    </components_1.Button>);
    const renderItemIcon = (props) => (<components_1.Icon {...props} name='person'/>);
    const renderItem = ({ item, index }) => (<components_1.ListItem title={`${item.title} ${index + 1}`} description={`${item.description} ${index + 1}`} accessoryLeft={renderItemIcon} accessoryRight={renderItemAccessory}/>);
    return (<>
      <components_1.TopNavigation title='Eva Application' accessoryLeft={renderBackAction} accessoryRight={renderSettingsAction}/>
      <components_1.Divider />
      <components_1.List style={styles.container} data={data} renderItem={renderItem}/>
    </>);
};
exports.TopNavigationDividerShowcase = TopNavigationDividerShowcase;
const styles = react_native_1.StyleSheet.create({
    container: {
        maxHeight: 320,
    },
});
//# sourceMappingURL=topNavigationDivider.component.js.map