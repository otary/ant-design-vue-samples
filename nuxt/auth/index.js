import Cookies from 'js-cookie'

const TOKEN_KEY = "OTARY_TOKEN";

/**
 * 获取token（从cooke中取）
 * @returns {*}
 */
export function getTokenFromCookie() {
  return Cookies.get(TOKEN_KEY)
}

/**
 * 将token保存到Cookie中
 * @param token
 */
export function persitTokenToCookie(token) {
  Cookies.set(TOKEN_KEY, token, {
    domain: 'bqrdh.com'
  })
}

/**
 * 删除Cookie中的Token
 */
export function removeTokenFromCookie() {
  Cookies.remove(TOKEN_KEY, {
    domain: 'bqrdh.com'
  });
}

