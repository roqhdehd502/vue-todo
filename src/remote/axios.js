import axios from 'axios'

const config = {
  baseURL: process.env.VUE_APP_SERVER,
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  },
  timeout: parseInt(process.env.VUE_APP_API_TIMEOUT) || 10 * 1000
}

const genDefaultOptions = () => Object.assign({}, config)

const networkError = (error) => {
  console.error('networkError', error)
  return error
}



/**
 * @async
 * @function get
 * @description axios get
 * @param {String} url 
 * @param {Object} params
 * @example get('users', { userId: 'userId' })
 * @return {Object} response data
 */

export const get = async (url, params = {}, isDelete) => {
  if (Object.keys(params).length > 0) {
    url += '?'
    for (const key in params) {
      url += `${key}=${params[key]}&`
    }
  }

  const options = genDefaultOptions()
  options.method = !isDelete ? 'get' : 'delete'
  options.url = url

  try {
    return await axios(options)

  } catch (error) {
    return networkError(error.response)
  }
}



/**
 * @async
 * @function post
 * @description axios post
 * @param {String} url 
 * @param {Object} params
 * @example post('users', { userId: 'userId' })
 * @return {Object} response data
 */

export const post = async (url, params = {}) => {
  const options = genDefaultOptions()
  options.method = 'post'
  options.url = url
  options.data = params

  try {
    return await axios(options)

  } catch (error) {
    return networkError(error.response)
  }
}



/**
 * @async
 * @function put
 * @description axios put
 * @param {String} url 
 * @param {Object} params
 * @example put('users', { userId: 'userId' })
 * @return {Object} response data
 */

export const put = async (url, params = {}) => {
  const options = genDefaultOptions()
  options.method = 'put'
  options.url = url
  options.data = params

  try {
    return await axios(options)

  } catch (error) {
    return networkError(error.response)
  }
}
