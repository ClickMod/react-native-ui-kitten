"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpinnerDataLoadingShowcase = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const components_1 = require("@ui-kitten/components");
const DATA = new Array(8).fill({
    title: 'Title for Item',
});
const SpinnerDataLoadingShowcase = () => {
    const [data, setData] = react_1.default.useState([]);
    react_1.default.useEffect(() => {
        setTimeout(loadData, 5000);
    }, []);
    const loadData = () => {
        setData(DATA);
    };
    const renderLoading = () => (<react_native_1.View style={styles.loading}>
      <components_1.Spinner />
    </react_native_1.View>);
    const renderDataItem = ({ item, index }) => (<components_1.ListItem title={`${item.title} ${index + 1}`}/>);
    const renderData = () => (<components_1.List data={data} renderItem={renderDataItem}/>);
    return data.length > 0 ? renderData() : renderLoading();
};
exports.SpinnerDataLoadingShowcase = SpinnerDataLoadingShowcase;
const styles = react_native_1.StyleSheet.create({
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
//# sourceMappingURL=spinnerDataLoading.component.js.map