"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledComponentSimpleUsageShowcase = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const components_1 = require("@ui-kitten/components");
let StyledComponent = class StyledComponent extends react_1.default.Component {
    render() {
        return (<react_native_1.TouchableOpacity style={this.props.eva.style}/>);
    }
};
StyledComponent = __decorate([
    (0, components_1.styled)('StyledComponent')
], StyledComponent);
// mapping.json
// {
//   "StyledComponent": {
//     "meta": {
//       "parameters": {
//         "width": {
//           "type": "number"
//         },
//         "height": {
//           "type": "number"
//         },
//         "backgroundColor": {
//           "type": "string"
//         }
//       },
//       "appearances": {
//         "default": {
//           "default": true
//         }
//       },
//       "variantGroups": {},
//       "states": {}
//     },
//     "appearances": {
//       "default": {
//         "mapping": {
//           "width": 32,
//             "height": 32,
//             "backgroundColor": "color-primary-default"
//         }
//       }
//     }
//   }
// }
exports.StyledComponentSimpleUsageShowcase = StyledComponent;
//# sourceMappingURL=styledComponentSimpleUsage.component.js.map