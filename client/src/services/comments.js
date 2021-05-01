import api from './api-helper';

export const getAllPostComments = async (postId) => {
    const resp = await api.get(`/posts/${postId}/comments`);
    return resp.data;
  }
  
  export const addComment = async (postId, commentId) => {
    const resp = await api.get(`/posts/${postId}/comments/${commentId}`);
    return resp.data;
  }