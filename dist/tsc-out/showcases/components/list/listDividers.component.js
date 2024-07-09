"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListDividersShowcase = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const components_1 = require("@ui-kitten/components");
const data = new Array(8).fill({
    title: 'Item',
    description: 'Description for Item',
});
const ListDividersShowcase = () => {
    const renderItem = ({ item, index }) => (<components_1.ListItem title={`${item.title} ${index + 1}`} description={`${item.description} ${index + 1}`}/>);
    return (<components_1.List style={styles.container} data={data} ItemSeparatorComponent={components_1.Divider} renderItem={renderItem}/>);
};
exports.ListDividersShowcase = ListDividersShowcase;
const styles = react_native_1.StyleSheet.create({
    container: {
        maxHeight: 200,
    },
});
//# sourceMappingURL=listDividers.component.js.map