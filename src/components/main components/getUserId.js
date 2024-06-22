import Cookies from "js-cookie";
import CryptoJS from "crypto-js";

export const getUserId = () => {
  const token = Cookies.get("Token");
  const secretPass = "Xkhzg478tYUAEQivas6510000056444";
  const decrptToken = CryptoJS.AES.decrypt(token, secretPass);
  const userId = JSON.parse(decrptToken.toString(CryptoJS.enc.Utf8));

  return userId;
};
