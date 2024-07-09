"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutocompleteAccessoriesShowcase = void 0;
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const components_1 = require("@ui-kitten/components");
const movies = [
    { title: 'Star Wars' },
    { title: 'Back to the Future' },
    { title: 'The Matrix' },
    { title: 'Inception' },
    { title: 'Interstellar' },
];
const filter = (item, query) => item.title.toLowerCase().includes(query.toLowerCase());
const StarIcon = (props) => (<components_1.Icon {...props} name='star'/>);
const AutocompleteAccessoriesShowcase = () => {
    const [value, setValue] = react_1.default.useState(null);
    const [data, setData] = react_1.default.useState(movies);
    const onSelect = (0, react_1.useCallback)((index) => {
        setValue(data[index].title);
    }, [data]);
    const onChangeText = (0, react_1.useCallback)((query) => {
        setValue(query);
        setData(movies.filter(item => filter(item, query)));
    }, []);
    const clearInput = () => {
        setValue('');
        setData(movies);
    };
    const renderOption = (item, index) => (<components_1.AutocompleteItem key={index} title={item.title} accessoryLeft={StarIcon}/>);
    const renderCloseIcon = (props) => (<react_native_1.TouchableWithoutFeedback onPress={clearInput}>
      <components_1.Icon {...props} name='close'/>
    </react_native_1.TouchableWithoutFeedback>);
    return (<components_1.Autocomplete placeholder='Place your Text' value={value} placement='inner top' accessoryRight={renderCloseIcon} onChangeText={onChangeText} onSelect={onSelect}>
      {data.map(renderOption)}
    </components_1.Autocomplete>);
};
exports.AutocompleteAccessoriesShowcase = AutocompleteAccessoriesShowcase;
//# sourceMappingURL=autocompleteAccessories.component.js.map