
export default function Initials(prop) {
    const splitted = prop.name.split(" ");
    const initials = splitted[0][0] + "." + splitted[1][0];
    return (
        <div>
            {initials}
        </div>
    );
}