"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutocompleteAsyncShowcase = void 0;
const react_1 = __importDefault(require("react"));
const awesome_debounce_promise_1 = __importDefault(require("awesome-debounce-promise"));
const components_1 = require("@ui-kitten/components");
const requestData = () => fetch('https://reactnative.dev/movies.json');
const requestDataWithDebounce = (0, awesome_debounce_promise_1.default)(requestData, 400);
const AutocompleteAsyncShowcase = () => {
    const autocompleteRef = react_1.default.useRef(null);
    const [query, setQuery] = react_1.default.useState(null);
    const [data, setData] = react_1.default.useState([]);
    const updateData = () => {
        void requestDataWithDebounce()
            .then(response => response.json())
            .then(json => json.movies)
            .then(applyFilter)
            .then(setData);
    };
    react_1.default.useEffect(updateData, [query]);
    const onSelect = (index) => {
        setQuery(data[index].title);
    };
    const onChangeText = (nextQuery) => {
        setQuery(nextQuery);
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const applyFilter = (options) => {
        return options.filter(item => item.title.toLowerCase().includes(query.toLowerCase()));
    };
    const renderOption = (item, index) => (<components_1.AutocompleteItem key={index} title={item.title}/>);
    return (<components_1.Autocomplete ref={autocompleteRef} placeholder='For example, Star Wars' value={query} placement='inner top' onChangeText={onChangeText} onSelect={onSelect}>
      {data.map(renderOption)}
    </components_1.Autocomplete>);
};
exports.AutocompleteAsyncShowcase = AutocompleteAsyncShowcase;
//# sourceMappingURL=autocompleteAsync.component.js.map