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
exports.StyledComponentVariantsShowcase = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const components_1 = require("@ui-kitten/components");
let StyledComponent = class StyledComponent extends react_1.default.Component {
    onPressIn = () => {
        this.props.eva?.dispatch([components_1.Interaction.ACTIVE]);
    };
    onPressOut = () => {
        this.props.eva?.dispatch([]);
    };
    render() {
        return (<react_native_1.TouchableOpacity activeOpacity={1.0} style={this.props.eva?.style} onPressIn={this.onPressIn} onPressOut={this.onPressOut}/>);
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
//       "variantGroups": {
//         "status": {
//           "primary": {
//             "default": true
//           },
//           "danger": {
//             "default": false
//           }
//         }
//       },
//       "states": {
//         "active": {
//           "default": false,
//             "priority": 0
//         }
//       }
//     },
//     "appearances": {
//       "default": {
//         "mapping": {
//           "width": 40,
//             "height": 40
//         },
//         "variantGroups": {
//           "status": {
//             "primary": {
//               "backgroundColor": "color-primary-default",
//                 "state": {
//                 "active": {
//                   "backgroundColor": "color-primary-active"
//                 }
//               }
//             },
//             "danger": {
//               "backgroundColor": "color-danger-default",
//                 "state": {
//                 "active": {
//                   "backgroundColor": "color-danger-active"
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// }
const StyledComponentVariantsShowcase = () => (<StyledComponent />);
exports.StyledComponentVariantsShowcase = StyledComponentVariantsShowcase;
//# sourceMappingURL=styledComponentVariants.component.js.map