import "./post.css";
import { Link } from "react-router-dom";

export default function Post() {
  return (
    <div className="post">
      <img
        className="post-img"
        src="https://source.unsplash.com/io0ZLYbu31s/1600x900"
        alt=""
      />
      <div className="post-info">
        <div className="post-cats">
          <span className="post-cat">Life</span>
          <span className="post-cat">Design</span>
        </div>
        <span className="post-title"><Link className="link" to="/single">Lorem ipsum dolor sit amet</Link></span>
        <hr />
        <span className="post-date">1 hour ago</span>
      </div>
      <p className="post-desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum
      </p>
    </div>
  );
}
