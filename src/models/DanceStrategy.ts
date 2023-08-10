import { MusicGenre } from ".";

export interface DanceStrategy {
    canDanceToMusic(genre: keyof typeof MusicGenre): boolean;

    performDance(): void;
}

export class HipHopDanceStrategy implements DanceStrategy {
    canDanceToMusic(genre: keyof typeof MusicGenre): boolean {
        return genre === 'Rnb';
    }

    performDance(): void {
        console.log("Танцует хипхоп")
    }
}

export class ElectrodanceStrategy implements DanceStrategy {
    canDanceToMusic(genre: keyof typeof MusicGenre): boolean {
        return genre === 'ElectroHouse';
    }

    performDance(): void {
        console.log("Танцует электродэнс")
    }
}

export class SmoothDanceStrategy implements DanceStrategy {
    canDanceToMusic(genre: keyof typeof MusicGenre): boolean {
        return genre === 'Pop';
    }

    performDance(): void {
        console.log("Плавно танцует")
    }
}
