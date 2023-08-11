import type { Person } from "./Person"

export enum barDrinks {
    Vodka = 'vodka'
}

export class DrinkPreference{
    preference: barDrinks
    constructor(preference: barDrinks) {
        this.preference = preference
    }

    drink(person: Person) {
        setTimeout(() => {
            const drinker: HTMLElement | null = document.getElementById(`person_${person.id}`)
            if (drinker) {
                console.log('dancer found ', drinker)
                const rightLowerArm = drinker.querySelector('.arm__right .arm__lower') as HTMLElement
                const head = drinker.querySelector('.person__head') as HTMLElement
                const body = drinker.querySelector('.person') as HTMLElement
                const leftArm = drinker.querySelector('.arm__left') as HTMLElement
                const rightArm = drinker.querySelector('.arm__right') as HTMLElement
                leftArm.style.transform = 'rotate(45deg)'
                let i: number = 0
                setInterval(() => {
                    head.style.scale = i % 2 === 0 ? '1' : '1.1'
                    head.style.transform = i % 2 === 0 ? 'translateY(-5px)' : 'translateY(5px)'
                    rightArm.style.transform = i % 2 === 0 ? 'rotate(-10deg)' : 'rotate(-5deg)'
                    rightLowerArm.style.transform = i % 2 === 0 ? 'rotate(20deg)' : 'rotate(0deg)'
                    body.style.transform = i % 2 === 0 ? 'rotateX(-20deg)' : 'rotateX(10deg)'
                    i++
                }, 1000)
            }
        })
    }
}

export class DrinkPreferencies{
    static vodka = new DrinkPreference(barDrinks.Vodka)
}