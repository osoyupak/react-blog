import "./write.css";

export default function Write() {
    return (
        <div className="write">
            <form className="write-form"> 
                <div className="write-form-group">
                    <label htmlFor="fileInput">
                        <i className="write-icon fas fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}}/>
                    <input type="text" placeholder="Title" className="write-input" autoFocus={true}/>
                </div>
                <div className="write-form-group">
                    <textarea
                        type="text"
                        className="write-input write-text" 
                        placeholder="Tell your story..."></textarea>
                </div>
                <button className="write-submit">Publish</button>
            </form>
        </div>
    )
}
