"use strict";
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalendarPickerRow = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
class CalendarPickerRow extends react_1.default.Component {
    render() {
        const { style, data, children, ...viewProps } = this.props;
        return (<react_native_1.View {...viewProps} style={[styles.container, style]}>
        {data.map(children)}
      </react_native_1.View>);
    }
}
exports.CalendarPickerRow = CalendarPickerRow;
const styles = react_native_1.StyleSheet.create({
    container: {
        flexDirection: 'row',
        overflow: 'hidden',
    },
});
//# sourceMappingURL=calendarPickerRow.component.js.map