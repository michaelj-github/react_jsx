const App = () => {
    return (
        <div>
            <Person
                name="MichaelJ"
                age={49}
                hobbies={["swimming", "cycling", "running"]}
             />
            <Person
                name="Sherry"
                age={43}
                hobbies={["reading", "writing", "gardening"]}
             />
            <Person
                name="MaryElizabeth"
                age={15}
                hobbies={["traveling", "shopping", "knitting"]}
             />             
        </div>
    )
}