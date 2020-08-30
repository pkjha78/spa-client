import LocalizedStrings from 'react-localization';

let AppConfig = new LocalizedStrings({
  en: {
    country: 'IN',
    commaAsDecimal: false,
    dateFormat: 'DD-MM-YYYY',
    accountHUBFormat: true,
    timezone: 'Asia/Kolkata',
    showBankLookup: true
  }
});

AppConfig.setLanguage('en');
export default AppConfig;
