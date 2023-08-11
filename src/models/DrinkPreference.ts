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
                const leftLowerArm = drinker.querySelector('.arm__left .arm__lower') as HTMLElement
                const head = drinker.querySelector('.person__head') as HTMLElement
                const body = drinker.querySelector('.person') as HTMLElement
                const leftArm = drinker.querySelector('.arm__left') as HTMLElement
                const rightArm = drinker.querySelector('.arm__right') as HTMLElement
                const glass = drinker.querySelector('.glass') as HTMLElement
                leftLowerArm.style.transform = 'rotate(0deg)'
                glass.style.transform = 'rotate(-35deg)'
                leftArm.style.transform = 'rotate(45deg)'
                let i: number = 0
                setInterval(() => {
                    head.style.scale = i % 2 === 0 ? '1' : '1.1'
                    rightArm.style.transform = i % 2 === 0 ? 'rotate(-10deg)' : 'rotate(-5deg)'
                    leftArm.style.transform = i % 2 === 0 ? 'rotate(-10deg)' : 'rotate(15deg)'
                    leftLowerArm.style.transform = i % 2 === 0 ? 'rotate(-170deg)' : 'rotate(0deg)'
                    glass.style.transform = i % 2 === 0 ? 'rotate(30deg)' : 'rotate(-10deg)'
                    glass.style.transform = i % 2 === 0 ? 'translate(20px, -50px)' : 'translate(5px, 10px)'
                    body.style.transform = i % 2 === 0 ? 'rotateX(-20deg)' : 'rotateX(10deg)'
                    i++
                }, 8000)
            }
        })
    }
}

export class DrinkPreferencies{
    static vodka = new DrinkPreference(barDrinks.Vodka)
}