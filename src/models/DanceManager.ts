import { Dancer } from "./Dancer"
import { Club } from "./Club"
import { MusicGenre } from "."

export class DanceManager {

    private club: Club
    private dancers: Dancer[] = []

    constructor(club: Club) {
        this.club = club
    }

    addDancer(dancer: Dancer): void {
        this.dancers.push(dancer)
    }

    playMusic(genre: keyof typeof MusicGenre): void {
        this.dancers.forEach(dancer => {
            if (dancer.danceStrategy.canDanceToMusic(genre)) {
                this.club.addFloorDancer(dancer)
            } else {
                this.club.addBarCustomer(dancer)
            }
        })
        this.startDanceForAll(genre)
    }

    startDanceForAll(genre: keyof typeof MusicGenre): void {
        this.dancers.forEach(dancer => {
            dancer.dance(genre)
        })
    }
}
