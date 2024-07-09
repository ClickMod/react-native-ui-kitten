"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListCustomItemShowcase = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const components_1 = require("@ui-kitten/components");
const data = new Array(8).fill({
    title: 'Item',
});
const ListCustomItemShowcase = () => {
    const renderItemHeader = (headerProps, info) => (<react_native_1.View {...headerProps}>
      <components_1.Text category='h6'>
        {`${info.item.title} ${info.index + 1}`}
      </components_1.Text>
    </react_native_1.View>);
    const renderItemFooter = (footerProps) => (<components_1.Text {...footerProps}>
      By Wikipedia
    </components_1.Text>);
    const renderItem = (info) => (<components_1.Card style={styles.item} status='basic' header={headerProps => renderItemHeader(headerProps, info)} footer={renderItemFooter}>
      <components_1.Text>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
        a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged.
      </components_1.Text>
    </components_1.Card>);
    return (<components_1.List style={styles.container} contentContainerStyle={styles.contentContainer} data={data} renderItem={renderItem}/>);
};
exports.ListCustomItemShowcase = ListCustomItemShowcase;
const styles = react_native_1.StyleSheet.create({
    container: {
        maxHeight: 320,
    },
    contentContainer: {
        paddingHorizontal: 8,
        paddingVertical: 4,
    },
    item: {
        marginVertical: 4,
    },
});
//# sourceMappingURL=listCustomItem.component.js.map