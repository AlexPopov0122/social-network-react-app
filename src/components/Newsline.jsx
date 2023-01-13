import BlockStories from "./BlockStories";
import NewPost from "./NewPost";
import Post from "./Post";

const Newsline = () => {
    return (
        <div className="news-line">
        <BlockStories/>
        <NewPost/>
        <Post/>
        </div>
    )
};

export default Newsline;
