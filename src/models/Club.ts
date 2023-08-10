import { Person } from "./Person"
import { MusicGenre } from "."

export class Club {

    private persons: Person[] = []
    private floorDancers: Person[] = []
    private barCustomers: Person[] = []

    addPerson(person: Person) {
        this.persons.push(person)
    }

    playMusic(genre: keyof typeof MusicGenre): void {
        this.persons.forEach(p => {
            if (p.danceStrategy.canDanceToMusic(genre)) {
                this.floorDancers.push(p)
            } else {
                this.barCustomers.push(p)
            }
        })
        this.startDanceForAll(genre)
    }

    startDanceForAll(genre: keyof typeof MusicGenre): void {
        this.persons.forEach(p => {
            p.dance(genre)
        })
    }
}