import { Nav } from "./components";
import ChipsContainer from "./components/Chips/ChipsContainer";
import Home from "./components/Home/Home";
import { VideoListPage } from "./components/VideoListing/VideoListPage";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Nav />
      <VideoListPage />
    </div>
  );
}
