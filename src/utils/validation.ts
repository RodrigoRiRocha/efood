// Validation helpers for checkout forms

export const validateCEP = (cep: string): boolean => {
  // Remove non-digit characters
  const digitsOnly = cep.replace(/\D/g, '');
  return digitsOnly.length === 8;
};

export const validateCardNumber = (cardNumber: string): boolean => {
  // Remove non-digit characters
  const digitsOnly = cardNumber.replace(/\D/g, '');
  return digitsOnly.length === 16;
};

export const validateCVV = (cvv: string): boolean => {
  // CVV should be 3 digits
  const digitsOnly = cvv.replace(/\D/g, '');
  return digitsOnly.length === 3;
};

export const validateMonth = (month: string): boolean => {
  const monthNum = parseInt(month);
  return !isNaN(monthNum) && monthNum >= 1 && monthNum <= 12;
};

export const validateYear = (year: string): boolean => {
  const yearNum = parseInt(year);
  const currentYear = new Date().getFullYear();
  return !isNaN(yearNum) && yearNum >= currentYear;
};

export const validatePhoneNumber = (phone: string): boolean => {
  // Brazilian phone format: (00) 00000-0000 or (00) 0000-0000
  const digitsOnly = phone.replace(/\D/g, '');
  return digitsOnly.length === 10 || digitsOnly.length === 11;
};

// Mask formatters
export const formatCEP = (value: string): string => {
  const digitsOnly = value.replace(/\D/g, '');
  if (digitsOnly.length <= 5) {
    return digitsOnly;
  }
  return `${digitsOnly.slice(0, 5)}-${digitsOnly.slice(5, 8)}`;
};

export const formatCardNumber = (value: string): string => {
  const digitsOnly = value.replace(/\D/g, '');
  const groups = digitsOnly.match(/.{1,4}/g) || [];
  return groups.join(' ').slice(0, 19); // Max: "0000 0000 0000 0000"
};

export const formatCVV = (value: string): string => {
  return value.replace(/\D/g, '').slice(0, 3);
};

export const formatMonth = (value: string): string => {
  const digitsOnly = value.replace(/\D/g, '');
  const monthNum = parseInt(digitsOnly);
  if (isNaN(monthNum)) return '';
  if (monthNum > 12) return '12';
  return digitsOnly.slice(0, 2);
};

export const formatYear = (value: string): string => {
  return value.replace(/\D/g, '').slice(0, 4);
};
