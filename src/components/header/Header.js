import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="header-title">
        <div className="header-title-small">Design & Technology</div>
        <div className="header-title-large">Blog</div>
      </div>
      <img 
        className="header-img"
        src="https://source.unsplash.com/oJbJhppwpXE/1600x900" alt="" />
    </div>
  );
}
