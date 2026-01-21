import { apiFetch } from "./http";

export function getPostList(board) {
  return apiFetch(`/api/posts?board=${board}`);
}

export function getPostDetail(id) {
  return apiFetch(`/api/posts/${id}`);
}

export function createPost(payload) {
  return apiFetch("/api/posts", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}
