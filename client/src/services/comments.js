import api from './api-helper';

export const getAllPostComments = async (postId) => {
    const resp = await api.get(`/posts/${postId}/comments`);
    return resp.data;
  }
  
  export const getComment = async (postId, commentId) => {
    const resp = await api.get(`/posts/${postId}/comments/${commentId}`);
    return resp.data;
  }
  
  export const postComment = async (postId, commentData) => {
    const resp = await api.post(`/posts/${postId}/comments`, { comment: commentData });
    return resp.data;
  }