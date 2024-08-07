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
exports.TouchableWeb = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const touchableWithoutFeedback_component_1 = require("./touchableWithoutFeedback.component");
/**
 * Helper component for the Touchable component rendered on the web.
 */
class TouchableWeb extends react_1.default.Component {
    render() {
        const { style, ...touchableProps } = this.props;
        return (<touchableWithoutFeedback_component_1.TouchableWithoutFeedback {...touchableProps} style={[styles.container, style]}/>);
    }
}
exports.TouchableWeb = TouchableWeb;
const styles = react_native_1.Platform.OS === 'web' && react_native_1.StyleSheet.create({
    container: {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        outlineWidth: 0,
    },
});
//# sourceMappingURL=touchableWeb.component.js.map