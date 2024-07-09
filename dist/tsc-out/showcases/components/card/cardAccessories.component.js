"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardAccessoriesShowcase = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const components_1 = require("@ui-kitten/components");
const Header = (props) => (<react_native_1.View {...props}>
    <components_1.Text category='h6'>
      Maldives
    </components_1.Text>
    <components_1.Text category='s1'>
      By Wikipedia
    </components_1.Text>
  </react_native_1.View>);
const Footer = (props) => (<react_native_1.View {...props} 
// eslint-disable-next-line react/prop-types
style={[props.style, styles.footerContainer]}>
    <components_1.Button style={styles.footerControl} size='small' status='basic'>
      CANCEL
    </components_1.Button>
    <components_1.Button style={styles.footerControl} size='small'>
      ACCEPT
    </components_1.Button>
  </react_native_1.View>);
const CardAccessoriesShowcase = () => (<>
    <components_1.Layout style={styles.topContainer} level='1'>

      <components_1.Card style={styles.card} header={Header}>
        <components_1.Text>
With Header
        </components_1.Text>
      </components_1.Card>

      <components_1.Card style={styles.card} footer={Footer}>
        <components_1.Text>
With Footer
        </components_1.Text>
      </components_1.Card>

    </components_1.Layout>

    <components_1.Card style={styles.card} header={Header} footer={Footer}>
      <components_1.Text>
        The Maldives, officially the Republic of Maldives, is a small country in South Asia, located in the Arabian Sea
        of the Indian Ocean. It lies southwest of Sri Lanka and India, about 1,000 kilometres (620 mi) from the Asian
        continent
      </components_1.Text>
    </components_1.Card>

  </>);
exports.CardAccessoriesShowcase = CardAccessoriesShowcase;
const styles = react_native_1.StyleSheet.create({
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    card: {
        flex: 1,
        margin: 2,
    },
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    footerControl: {
        marginHorizontal: 2,
    },
});
//# sourceMappingURL=cardAccessories.component.js.map