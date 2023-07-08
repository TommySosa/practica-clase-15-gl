import React, { useEffect } from "react"
import { useJokeGenerator } from "../store/useJokeGenerator"


const ShowJokes = () => {
    const jokes = useJokeGenerator((state) => state.jokes)
    const { setJokes } = useJokeGenerator()

    useEffect(() => {
        setJokes()
    }, [setJokes])

    return (
        <ul>
            {jokes.map((joke) => (
                <React.Fragment key={joke.id}>
                <li>{joke.setup}</li>
                <li>{joke.delivery}</li>
                    
                </React.Fragment>
            ))}
        </ul>
    )
}

export default ShowJokes