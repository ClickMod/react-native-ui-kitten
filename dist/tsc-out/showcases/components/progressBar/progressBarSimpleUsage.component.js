"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgressBarSimpleUsageShowcase = void 0;
const react_1 = __importDefault(require("react"));
const components_1 = require("@ui-kitten/components");
const progress_hook_1 = require("../../helpers/progress.hook");
const ProgressBarSimpleUsageShowcase = () => {
    const progress = (0, progress_hook_1.useProgress)();
    return (<components_1.ProgressBar progress={progress}/>);
};
exports.ProgressBarSimpleUsageShowcase = ProgressBarSimpleUsageShowcase;
//# sourceMappingURL=progressBarSimpleUsage.component.js.map