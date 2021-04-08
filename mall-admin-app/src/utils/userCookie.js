import Cookies from 'js-cookie';

/**
 * @description 设置用户Cookie
 * @param {Object} info 用户信息
 * @returns {boolean} true:成功
 */
function setUserCookie(info) {
  const arr = Object.entries(info);
  for (let i = 0; i < arr.length; i += 1) {
    Cookies.set(arr[i][0], arr[i][1]);
  }
  return true;
}

/**
 * @description 获取用户Cookie
 * @returns {boolean} true:成功
 */
function getUserCookie() {
  return {
    username: Cookies.get('username'),
    appkey: Cookies.get('appkey'),
    role: Cookies.get('role'),
    email: Cookies.get('email'),
  };
}

/**
 * @description 移除用户Cookie
 * @returns {Boolean} true:成功
 */
function removeUserCookie() {
  Cookies.remove('username');
  Cookies.remove('appkey');
  Cookies.remove('role');
  Cookies.remove('email');
  return true;
}

export { setUserCookie, getUserCookie, removeUserCookie };
