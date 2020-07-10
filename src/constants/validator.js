import _ from 'lodash';

const isEmail = (emailInput: string) => {
  const reEmail = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return reEmail.test(String(emailInput).toLowerCase());
};

const _isInRangeLocalPartLength = (emailInput: string, rules: Object) => {
  const {maxEmailLocalPart} = rules;
  const localPart = emailInput.split('@')[0];
  return localPart.length <= maxEmailLocalPart;
};

const _isInRangeSafeEmailLength = (emailInput: string, rules: Object) => {
  const {maxEmailChar} = rules;
  return emailInput.length <= maxEmailChar;
};

const validateEmail = (emailInput: string, rules: Object) => {
  const {maxEmailChar} = rules;
  if (!_isInRangeSafeEmailLength(emailInput, rules)) {
    return 'Email terlalu panjang';
  }
  if (!_isInRangeLocalPartLength(emailInput, rules)) {
    return 'Format email salah';
  }

  return '';
};

const isGreater = (value: string, length: number) => {
  return value.length > length;
};

const isLower = (value: string, length: number) => {
  return value.length < length;
};

const isRequired = (value: string) => {
  return value.length === 0;
};

const isNumber = value => {
  return _.isFinite(value);
};

const isEmpty = value => {
  return _.isEmpty(value);
};

const isNaN = value => {
  return _.isNaN(value);
};

export {
  isEmail,
  validateEmail,
  isGreater,
  isLower,
  isRequired,
  isEmpty,
  isNaN,
  isNumber,
};
