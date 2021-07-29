export default function MenuItem(props){
    
    return <li>
            <a href={props.link} target="_blank">{props.label}</a>
        </li>;
}