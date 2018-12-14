import request from '@/utils/request'

export function findArticleById(params) {
  return request({
    url: '/findArticleById',
    method: 'get',
    params
  })
}
