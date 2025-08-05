import React from 'react';
import VocabularioScreenTemplate from './VocabularioScreen.template';
import I18n from '../../i18n';

export default class VocabularioScreen extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  goBack = () => this.props.navigation.goBack();

  render() {
    return (
      <VocabularioScreenTemplate
        goBack={this.goBack}
        vocabulario={this.vocabulario}
      />
    );
  }

  vocabulario = [
    {
      id: 1,
      title: I18n.t('v_word1'),
      description: I18n.t('v_word1_d'),
    },
    {
      id: 2,
      title: I18n.t('v_word2'),
      description: I18n.t('v_word2_d'),
    },
    {
      id: 3,
      title: I18n.t('v_word3'),
      description: I18n.t('v_word3_d'),
    },
    {
      id: 4,
      title: I18n.t('v_word4'),
      description: I18n.t('v_word4_d'),
    },
    {
      id: 5,
      title: I18n.t('v_word5'),
      description: I18n.t('v_word5_d'),
    },
    {
      id: 6,
      title: I18n.t('v_word6'),
      description: I18n.t('v_word6_d'),
    },
    {
      id: 7,
      title: I18n.t('v_word7'),
      description: I18n.t('v_word7_d'),
    },
    {
      id: 8,
      title: I18n.t('v_word8'),
      description: I18n.t('v_word8_d'),
    },
    {
      id: 9,
      title: I18n.t('v_word9'),
      description: I18n.t('v_word9_d'),
    },
    {
      id: 10,
      title: I18n.t('v_word10'),
      description: I18n.t('v_word10_d'),
    },
    {
      id: 11,
      title: I18n.t('v_word11'),
      description: I18n.t('v_word11_d'),
    },
    {
      id: 12,
      title: I18n.t('v_word12'),
      description: I18n.t('v_word12_d'),
    },
    {
      id: 13,
      title: I18n.t('v_word13'),
      description: I18n.t('v_word13_d'),
    },
    {
      id: 14,
      title: I18n.t('v_word14'),
      description: I18n.t('v_word14_d'),
    },
    {
      id: 15,
      title: I18n.t('v_word15'),
      description: I18n.t('v_word15_d'),
    },
    {
      id: 16,
      title: I18n.t('v_word16'),
      description: I18n.t('v_word16_d'),
    },
    {
      id: 17,
      title: I18n.t('v_word17'),
      description: I18n.t('v_word17_d'),
    },
    {
      id: 18,
      title: I18n.t('v_word18'),
      description: I18n.t('v_word18_d'),
    },
    {
      id: 19,
      title: I18n.t('v_word19'),
      description: I18n.t('v_word19_d'),
    },
    {
      id: 20,
      title: I18n.t('v_word20'),
      description: I18n.t('v_word20_d'),
    },
    {
      id: 21,
      title: I18n.t('v_word21'),
      description: I18n.t('v_word21_d'),
    },
    {
      id: 22,
      title: I18n.t('v_word22'),
      description: I18n.t('v_word22_d'),
    },
    {
      id: 23,
      title: I18n.t('v_word23'),
      description: I18n.t('v_word23_d'),
    },
    /* NO HAY 24 */
    {
      id: 25,
      title: I18n.t('v_word25'),
      description: I18n.t('v_word25_d'),
    },
    {
      id: 26,
      title: I18n.t('v_word26'),
      description: I18n.t('v_word26_d'),
    },
    {
      id: 27,
      title: I18n.t('v_word27'),
      description: I18n.t('v_word27_d'),
    },
    {
      id: 28,
      title: I18n.t('v_word28'),
      description: I18n.t('v_word28_d'),
    },
    {
      id: 29,
      title: I18n.t('v_word29'),
      description: I18n.t('v_word29_d'),
    },
    {
      id: 30,
      title: I18n.t('v_word30'),
      description: I18n.t('v_word30_d'),
    },
    {
      id: 31,
      title: I18n.t('v_word31'),
      description: I18n.t('v_word31_d'),
    },
    {
      id: 32,
      title: I18n.t('v_word32'),
      description: I18n.t('v_word32_d'),
    },
    {
      id: 33,
      title: I18n.t('v_word33'),
      description: I18n.t('v_word33_d'),
    },
    {
      id: 34,
      title: I18n.t('v_word34'),
      description: I18n.t('v_word34_d'),
    },
    {
      id: 35,
      title: I18n.t('v_word35'),
      description: I18n.t('v_word35_d'),
    },
    {
      id: 36,
      title: I18n.t('v_word36'),
      description: I18n.t('v_word36_d'),
    },
    {
      id: 37,
      title: I18n.t('v_word37'),
      description: I18n.t('v_word37_d'),
    },
    {
      id: 38,
      title: I18n.t('v_word38'),
      description: I18n.t('v_word38_d'),
    },
    {
      id: 39,
      title: I18n.t('v_word39'),
      description: I18n.t('v_word39_d'),
    },
    {
      id: 40,
      title: I18n.t('v_word40'),
      description: I18n.t('v_word40_d'),
    },
    {
      id: 41,
      title: I18n.t('v_word41'),
      description: I18n.t('v_word41_d'),
    },
    {
      id: 42,
      title: I18n.t('v_word42'),
      description: I18n.t('v_word42_d'),
    },
    {
      id: 43,
      title: I18n.t('v_word43'),
      description: I18n.t('v_word43_d'),
    },
    {
      id: 44,
      title: I18n.t('v_word44'),
      description: I18n.t('v_word44_d'),
    },
    {
      id: 45,
      title: I18n.t('v_word45'),
      description: I18n.t('v_word45_d'),
    },
    {
      id: 46,
      title: I18n.t('v_word46'),
      description: I18n.t('v_word46_d'),
    },
    {
      id: 47,
      title: I18n.t('v_word47'),
      description: I18n.t('v_word47_d'),
    },
    {
      id: 48,
      title: I18n.t('v_word48'),
      description: I18n.t('v_word48_d'),
    },
    {
      id: 49,
      title: I18n.t('v_word49'),
      description: I18n.t('v_word49_d'),
    },
    {
      id: 50,
      title: I18n.t('v_word50'),
      description: I18n.t('v_word50_d'),
    },
    {
      id: 51,
      title: I18n.t('v_word51'),
      description: I18n.t('v_word51_d'),
    },
    {
      id: 52,
      title: I18n.t('v_word52'),
      description: I18n.t('v_word52_d'),
    },
    {
      id: 53,
      title: I18n.t('v_word53'),
      description: I18n.t('v_word53_d'),
    },
    {
      id: 54,
      title: I18n.t('v_word54'),
      description: I18n.t('v_word54_d'),
    },
    {
      id: 55,
      title: I18n.t('v_word55'),
      description: I18n.t('v_word55_d'),
    },
    {
      id: 56,
      title: I18n.t('v_word56'),
      description: I18n.t('v_word56_d'),
    }
  ]
}
