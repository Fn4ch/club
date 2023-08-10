import { MusicGenre } from "."
import type { Person } from "./Person"
import { Dance, Dances } from "./DanceStyles"

export class DanceStrategy{
    genre: MusicGenre
    danceType: Dance

    constructor(genre: MusicGenre, danceType: Dance) {
        this.genre = genre
        this.danceType = danceType
    }

    dance(person: Person){
        setTimeout(() => {
            this.danceType.performDance(person)
        })
    }
}

export class danceStrategies{
    static HipHopStrategy = new DanceStrategy(MusicGenre.Rnb, Dances.HipHopDance)
    static RnbDanceStrategy = new DanceStrategy(MusicGenre.Rnb, Dances.HipHopDance)
    static ElectrodanceDanceStrategy = new DanceStrategy(MusicGenre.Electrodance, Dances.ElectrodanceDance)
    static houseDanceStrategy = new DanceStrategy(MusicGenre.Electrodance, Dances.ElectrodanceDance)
    static popDanceStrategy = new DanceStrategy(MusicGenre.Pop, Dances.PopMusicDance)
}