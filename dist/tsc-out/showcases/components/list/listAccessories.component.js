"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListAccessoriesShowcase = void 0;
const react_1 = __importDefault(require("react"));
const components_1 = require("@ui-kitten/components");
const react_native_1 = require("react-native");
const data = new Array(8).fill({
    title: 'Title for Item',
    description: 'Description for Item',
});
const ListAccessoriesShowcase = () => {
    const renderItemAccessory = () => (<components_1.Button size='tiny'>
FOLLOW
    </components_1.Button>);
    const renderItemIcon = (props) => (<components_1.Icon {...props} name='person'/>);
    const renderItem = ({ item, index }) => (<components_1.ListItem title={`${item.title} ${index + 1}`} description={`${item.description} ${index + 1}`} accessoryLeft={renderItemIcon} accessoryRight={renderItemAccessory}/>);
    return (<components_1.List style={styles.container} data={data} renderItem={renderItem}/>);
};
exports.ListAccessoriesShowcase = ListAccessoriesShowcase;
const styles = react_native_1.StyleSheet.create({
    container: {
        maxHeight: 192,
    },
});
//# sourceMappingURL=listAccessories.component.js.map