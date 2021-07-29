import Comment from "./Comment/Comment";
export default function CommentList(prop){
    return(
        <ul>
            <li><Comment author="MICHAEL" text="text"/></li>
            <li><Comment author="TALI" text="is"/></li>
            <li><Comment author="DIANA" text="here"/></li>
        </ul>
    );
}