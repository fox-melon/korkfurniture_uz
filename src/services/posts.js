// services format should be in the same structure

import { request } from './http-client'

export const getPosts = (params) =>
  request.get('/posts', { params }).then((res) => res.data)

export const createPost = (data) => request.post('/posts', data)
export const updatePost = (id, data) => request.put(`/posts/${id}`, data)

export const deletePost = (id) => request.delete(`/posts/${id}`)
