import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { Me, Video } from "@/types";

const baseURL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000/api";

export const axiosInstance = axios.create({
  baseURL,
  withCredentials: true,
});

export async function uploadVideo({
  formData,
  config,
}: {
  formData: FormData;
  config?: AxiosRequestConfig;
}) {
  const response = await axiosInstance.post<Video>("/videos", formData, {
    ...config,
    headers: {
      ...config?.headers,
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
}

export function updateVideo({
  videoId,
  title,
  description,
  published,
}: {
  videoId: string;
  title: string;
  description: string;
  published: boolean;
}) {
  return axiosInstance.patch<Video>(`/videos/${videoId}`, {
    title,
    description,
    published,
  });
}

export async function getVideos() {
  const response = await axiosInstance.get<Video[]>("/videos");
  return response.data;
}

export async function getMe() {
  const response = await axiosInstance.get<Me>("/users");
  return response.data;
}

export async function login(values: { email: string; password: string }) {
  const response = await axiosInstance.post<string>("/auth", values);
  return response.data;
}

export async function registerUser(values: {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}) {
  const response = await axiosInstance.post<string>("/users", values);
  return response.data;
}

export type UploadVideoInput = Parameters<typeof uploadVideo>[0];
export type UpdateVideoInput = Parameters<typeof updateVideo>[0];
