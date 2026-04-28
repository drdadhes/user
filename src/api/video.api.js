import base from "./base.api";

export const getVideos = (params = {}) => {
  return base.get("/videos", { params });
};

export const getVideoById = (id) => {
  return base.get(`/videos/${id}`);
};

export const createVideo = (data) => {
  return base.post("/videos", data);
};

export const updateVideo = (id, data) => {
  return base.put(`/videos/${id}`, data);
};

export const deleteVideo = (id) => {
  return base.delete(`/videos/${id}`);
};