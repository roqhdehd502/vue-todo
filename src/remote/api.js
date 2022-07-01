import { get, post, put } from './axios'

export const getAAA = async (params) => await get('', params)
export const setAAA = async (params) => await post('', params)
export const updateAAA = async (params) => await put('', params)


/* store actions에 적용할 것!  */
// async 서버연결({ commit }) {
//   const { status, data } = await getAAA({
//     KEY: VALUE,
//   })
    
//   switch (status) {
//     case 200:
//       if (data.resultVO !== null) commit('setNotice', data.resultVO.resultList)
//       else commit('COMMIT')
//       break

//     default:
//       commit('newAlert', {
//         type: 'error',
//         message: typeof data === 'object' ? data.error || '서버 연결 실패' : '서버 연결 실패'
//       }, { root: true })
//       break
//   }
// },