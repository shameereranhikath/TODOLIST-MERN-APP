import dateFormat from 'dateformat';
const formatDate = date => {
  // Basic usage
  return dateFormat(date, 'mmmm dS, yyyy');
};

export default formatDate;
