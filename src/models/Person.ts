import { MusicGenre } from "."
import { DanceStrategy } from "./DanceStrategy"

export class Person {

    id: number
    name: string
    danceStrategy: DanceStrategy
    state: 'dancing' | 'drinking' | null = null

    constructor(name: string, danceStrategy: DanceStrategy) {
        this.id = Math.random()
        this.name = name
        this.danceStrategy = danceStrategy
    }

    action(genre: MusicGenre) {
        if (genre === this.danceStrategy.genre) {
            this.danceStrategy.dance(this)
            this.state = 'dancing'
        } else {
            this.goToBar(this)
            this.state = 'drinking'
        }
    }

    goToBar(person: Person) {
        console.log(`${person.name} пьёт водку в баре`)
    }
}