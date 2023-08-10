import { DanceStyle, MusicGenre } from "."
import type { DanceStrategy } from "./DanceStrategy"

export class Person {

    id: number
    name: string
    danceStrategy: DanceStrategy

    constructor(name: string, danceStrategy: DanceStrategy) {
        this.name = name
        this.danceStrategy = danceStrategy
        this.id = Math.random()
    }

    dance(genre: keyof typeof MusicGenre) {
        if (this.danceStrategy.canDanceToMusic(genre)) {
            this.danceStrategy.performDance()
        }
    }
}