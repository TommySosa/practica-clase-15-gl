import { create  } from "zustand";
import axios from 'axios'

export const useJokeGenerator = create(((set) => {
    return {
        jokes: [],
        setJokes: async () => {
            const response = await axios.get('https://v2.jokeapi.dev/joke/Programming?lang=es&type=twopart&amount=2')
            set({ jokes: response.data.jokes})
        }
    }
}))