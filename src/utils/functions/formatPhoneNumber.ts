export const PHONE_ITU_FORMAT = '+7 ($1) $2-$3-$4';

export const formatPhoneNumber = (phone: string) =>
    phone.replace(/^\+{0,1}\d([\d*]{3})([\d*]{3})([\d*]{2})([\d*]{2})$/, PHONE_ITU_FORMAT);
