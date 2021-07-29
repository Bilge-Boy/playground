export default function Comment(prop){
    return (
        <div class="comment">
            <h6>-By_{prop.author}</h6>
            <p>{prop.text}</p>
        </div>
    );
}