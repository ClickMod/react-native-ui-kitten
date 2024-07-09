"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CircularProgressBarSizesShowcase = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const components_1 = require("@ui-kitten/components");
const progress_hook_1 = require("../../helpers/progress.hook");
const CircularProgressBarSizesShowcase = () => {
    const progress = (0, progress_hook_1.useProgress)();
    return (<components_1.Layout style={styles.container} level='1'>
      <components_1.CircularProgressBar progress={progress} size='tiny'/>
      <components_1.CircularProgressBar progress={progress} size='small'/>
      <components_1.CircularProgressBar progress={progress} size='medium'/>
      <components_1.CircularProgressBar progress={progress} size='large'/>
      <components_1.CircularProgressBar progress={progress} size='giant'/>
    </components_1.Layout>);
};
exports.CircularProgressBarSizesShowcase = CircularProgressBarSizesShowcase;
const styles = react_native_1.StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
});
//# sourceMappingURL=circularProgressBarSizes.component.js.map