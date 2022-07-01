import { get, post, put } from './axios'

export const getAAA = async (params) => await get('', params)
export const setAAA = async (params) => await post('', params)
export const updateAAA = async (params) => await put('', params)
