import { MusicGenre } from "."
import { DanceStrategy } from "./DanceStrategy"
import { DrinkPreference } from "./DrinkPreference"

export class Person {

    id: number
    name: string
    danceStrategy: DanceStrategy
    drinkPreference: DrinkPreference
    state: 'dancing' | 'drinking' | null = null

    constructor(name: string, danceStrategy: DanceStrategy, drinkPreference: DrinkPreference) {
        this.id = Math.random()
        this.name = name
        this.danceStrategy = danceStrategy
        this.drinkPreference = drinkPreference
    }

    action(genre: MusicGenre) {
        if (genre === this.danceStrategy.genre) {
            this.danceStrategy.dance(this)
            this.state = 'dancing'
        } else {
            this.goToBar()
            this.state = 'drinking'
        }
    }

    goToBar() {
        this.drinkPreference.drink(this)
    }
}