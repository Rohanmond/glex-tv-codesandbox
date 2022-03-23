import "./VideoListAside.css";
const VideoListAside = () => {
  return (
    <div className="video-list-aside-container">
      <ul class="list-spaced">
        <div class="list-spaced-heading">
          <h3>List Heading</h3>
        </div>
        <a href="#">
          <li class="list-spaced-item text-md font-wt-semibold list-item-active">
            Active Item
          </li>
        </a>
        <a href="#">
          <li class="list-spaced-item text-md font-wt-semibold">Second Item</li>
        </a>
        <a href="#">
          <li class="list-spaced-item text-md font-wt-semibold">Third Item</li>
        </a>
        <a href="#">
          <li class="list-spaced-item text-md font-wt-semibold">Fourth Item</li>
        </a>
      </ul>
    </div>
  );
};
export default VideoListAside;
