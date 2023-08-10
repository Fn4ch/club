import { Person } from "./Person"
import { MusicGenre } from "."

export class Club {

    private persons: Person[] = []

    addPerson(person: Person) {
        this.persons.push(person)
    }

    playMusic(genre: MusicGenre): void { 
        this.persons.forEach(p => p.action(genre))
    }

    getPersonsOnDanceFloor() {
        return this.persons.filter(p => p.state === 'dancing')
    }

    getPresonsInBar() {
        return this.persons.filter(p => p.state === 'drinking')
    }

}