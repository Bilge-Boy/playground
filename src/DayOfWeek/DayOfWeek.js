
export default function DayOfWeek(prop){
    let day = {
        0:"sunday",
        1:"monday",
        2:"tusday",
        3:"wensday",
        4:"thursday",
        5:"friday",
        6:"sutarday"
    }

    return (
        <div>the day is : {day[prop.num]}</div>
    );
}