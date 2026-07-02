import { Types } from "mongoose";
import { Video, VideoModel } from "./video.model";

export function createVideo({ owner }: { owner: string | Types.ObjectId }) {
  return VideoModel.create({
    owner: typeof owner === "string" ? new Types.ObjectId(owner) : owner,
  });
}

export function findVideo(videoId: Video["videoId"]) {
  return VideoModel.findOne({ videoId });
}

export function findVideos() {
  return VideoModel.find({
    published: true,
  }).lean();
}