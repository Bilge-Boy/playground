import CommentList from "./CommentList/CommentList";
import "./Article.css"
export default function Article(prop){
    return (
        <article>
            <h1>{prop.title}</h1>
            <p>{prop.content}</p>
            <CommentList />
        </article>
    );
}