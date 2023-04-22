import { AES, enc } from 'crypto-js';

const SECRET_KEY = process.env.REACT_APP_SECRET_KEY || '';

const encryptData = (name: string, data: any) => {
  const encrypted = AES.encrypt(JSON.stringify(data), SECRET_KEY).toString();
  localStorage.setItem(name, encrypted);
  return encrypted;
};

const decryptData = (name: string) => {
  const encrypted = localStorage.getItem(name);

  if (!encrypted) {
    return null;
  }

  const decrypted = AES.decrypt(encrypted, SECRET_KEY).toString(enc.Utf8);

  return JSON.parse(decrypted);
};

const encodeData = (data: any) => {
  const encoded = AES.encrypt(JSON.stringify(data), SECRET_KEY).toString();
  return encoded;
};

const decodeData = (data: any) => {
  const decoded = AES.decrypt(data, SECRET_KEY).toString(enc.Utf8);
  return JSON.parse(decoded);
};

export { encryptData, decryptData, encodeData, decodeData };
