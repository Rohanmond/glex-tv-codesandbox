import { videos } from "../../Database";
import ChipsContainer from "../Chips/ChipsContainer";
import VideoCard from "./components/VideoCard/VideoCard";
import VideoListAside from "./components/VideoListAside/VideoListAside";
import "./VideoListPage.css";

export const VideoListPage = () => {
  return (
    <div className="video-list-outer-container">
      <div className="video-listing-aside">
        <VideoListAside />
      </div>
      <div className="video-listing-main">
        <ChipsContainer />
        <div className="video-list-container">
          {videos.map((el) => {
            return <VideoCard element={el} />;
          })}
        </div>
      </div>
    </div>
  );
};
