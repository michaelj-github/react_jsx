const Tweet = (props) => {
    return (
        <div>
            <p><b>username:</b> {props.username}</p>
            <p><b>name:</b> {props.name}</p>
            <p><b>date:</b> {props.date}</p>
            <p><b>message:</b> {props.message}</p>
        </div>
    );
};