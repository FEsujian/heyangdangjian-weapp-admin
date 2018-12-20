import request from '@/utils/request'

export function findArticleById(params) {
  return request({
    url: '/findArticleById',
    method: 'get',
    params
  })
}

export function findArticleByClassId(params) {
  return request({
    url: '/findArticleByClassId',
    method: 'get',
    params
  })
}

export function findClassById(params) {
  return request({
    url: '/findClassById',
    method: 'get',
    params
  })
}

export function updateArticleById(data) {
  return request({
    url: '/updateArticleById',
    method: 'post',
    data
  })
}
