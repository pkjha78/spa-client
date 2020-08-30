import LocalizedStrings from 'react-localization';
import AppConfig from '../AppConfig';

export const getLocalizedStrings = (props) => {
  let strings = new LocalizedStrings(props);
  strings.setLanguage(AppConfig.getLanguage());
  return strings;
};

export const getDateTimeFormat = dateTime => {
  const options = {
    month: "2-digit",
    year: "numeric",
    day: "2-digit",
    hour: "numeric",
    minute: "numeric"
  }
  return new Date(dateTime).toLocaleDateString('en-UK', options);
};
