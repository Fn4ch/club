import { Person } from "./Person"
import { MusicGenre } from "."

export class Club {

    private playingMusic: MusicGenre | null = null
    private persons: Person[] = []

    addPerson(person: Person) {
        this.persons.push(person)
    }

    playMusic(genre: MusicGenre): void { 
        this.persons.forEach(p => p.action(genre))
        this.playingMusic = genre
    }

    getPlayingMusic() {
        return this.playingMusic
    }

    getPersonsOnDanceFloor() {
        return this.persons.filter(p => p.state === 'dancing')
    }

    getPresonsInBar() {
        return this.persons.filter(p => p.state === 'drinking')
    }

}