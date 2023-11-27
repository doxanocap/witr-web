import { consts } from "@/const/consts";
import ReactPlayer from "react-player";
import { Props } from "../Cards";

const VideoPlayer: React.FC<Props> = () => {
  return (
    <div className="flex flex-col items-start justify-center ">
      <ReactPlayer url={consts.Links.Video} playing={true} controls={false} />
    </div>
  );
};

export default VideoPlayer;
