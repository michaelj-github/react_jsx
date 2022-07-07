const Person = (props) => {    
    let theHobbies = props.hobbies.map(h => <li>{h}</li>);
    return (
        <div>
            <p>Learn some information about this person</p>
            <p><b>Name:</b> {props.name.length > 8 ? props.name.slice(0, 6) : props.name}</p>
            <p><b>Age:</b> {props.age}</p>
            <h3>{props.age >= 18 ? "please go vote!" : "you must be 18"}</h3>            
            <ul>{theHobbies}</ul>
        </div>
    );
};