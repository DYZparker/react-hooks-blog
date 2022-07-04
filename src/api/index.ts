import request from '../utils/request'
import { ArticleListPayload } from '../types';

// export function getCommonInfoApi() {
//   return request({
//     url: '/common/info',
//     method: 'get'
//   })
// }

export function getSideInfoApi() {
  return request({
    url: '/common/side/info',
    method: 'get'
  })
}

// export function getArticleListApi(payload: ArticleListPayload) {
//   return request({
//     url: '/article/list',
//     method: 'post',
//     data: {
//       payload
//     }
//   })
// }

export function getArticleListApi(data: ArticleListPayload) {
  return request({
    url: '/article/tag',
    method: 'post',
    data
  })
}

// export function getArticleApi(id: string | undefined) {
//   return request({
//     url: '/article/id',
//     method: 'post',
//     data: {
//       id
//     }
//   })
// }

export function getArticleApi(id: string | undefined) {
  return request({
    url: `/article/${id}`,
    method: 'get'
  })
}
