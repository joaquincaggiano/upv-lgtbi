import {I18n} from 'i18n-js';
import es from '../locales/es';
import ca from '../locales/ca';
import en from '../locales/en';
import AsyncStorage from '@react-native-async-storage/async-storage';

const translations = {ca, es, en};
const i18n = new I18n(translations);

i18n.enableFallback = true;
i18n.defaultLocale = 'ca';
i18n.missingTranslation = {
  get: () => '',
};

AsyncStorage.getItem('lang')
  .then(value => (i18n.locale = value || 'ca'))
  .catch(() => (i18n.locale = 'ca'));

export default i18n;

export const setLocale = locale => {
  i18n.locale = locale;
  AsyncStorage.setItem('lang', locale).catch(() => {});
};
