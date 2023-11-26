import { consts } from "@/const/consts";
import Image from "next/image";
import ReactPlayer from "react-player";
import { Props } from "../Cards";
import { useEffect } from "react";

const VideoPlayer: React.FC<Props> = () => {
  useEffect(() => {}, []);
  return (
    <div className="flex w-full flex-col items-center justify-between ">
      <ReactPlayer url={consts.Links.Video} playing={true} controls={false} />
    </div>
  );
};

export default VideoPlayer;
