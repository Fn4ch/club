import { Person } from '@/models/Person'

export class Dance {
    performDance: (person: Person) => void;

    constructor(performDance: (person: Person) => void) {
        this.performDance = performDance;
    }

}

export class Dances {
    static HipHopDance = new Dance((person) => {
        const dancer: HTMLElement | null = document.getElementById(`person_${person.id}`)
        if (dancer) {
            const leftLowerArm = dancer.querySelector('.arm__left .arm__lower') as HTMLElement
            const rightLowerArm = dancer.querySelector('.arm__right .arm__lower') as HTMLElement
            const head = dancer.querySelector('.person__head') as HTMLElement
            const body = dancer.querySelector('.person') as HTMLElement
            const leftArm = dancer.querySelector('.arm__left') as HTMLElement
            const rightArm = dancer.querySelector('.arm__right') as HTMLElement
            leftArm.style.transform = 'rotate(45deg)'
            let i: number = 0
            let j: number = 0
            setInterval(() => {
                    head.style.scale = i % 2 === 0 ? '1' : '1.1'
                    head.style.transform = i % 2 === 0 ? 'translateY(-5px)' : 'translateY(5px)'
                    rightArm.style.transform = i % 2 === 0 ? 'rotate(-10deg)' : 'rotate(-5deg)'
                    rightLowerArm.style.transform = i % 2 === 0 ? 'rotate(20deg)' : 'rotate(0deg)'
                    body.style.transform = i % 2 === 0 ? 'rotateX(-20deg)' : 'rotateX(10deg)'
                i++
            }, 1000)
            setInterval(() => {
                leftLowerArm.style.transform = j % 2 === 0 ? 'rotate(40deg)' : 'rotate(-10deg)'
                j++
            }, 500)
        }
    })

    static ElectrodanceDance = new Dance((person: Person) => {
        const dancer: HTMLElement | null = document.getElementById(`person_${person.id}`)
        if (dancer) {
            const leftArm = dancer.querySelector('.arm__left') as HTMLElement
            const rightArm = dancer.querySelector('.arm__right') as HTMLElement
            const head = dancer.querySelector('.person__head') as HTMLElement
            const body = dancer.querySelector('.body') as HTMLElement
            const leftLeg = dancer.querySelector('.legs__left') as HTMLElement
            const rightLeg = dancer.querySelector('.legs__right') as HTMLElement
            const leftLowerArm = dancer.querySelector('.arm__left .arm__lower') as HTMLElement
            const rightLowerArm = dancer.querySelector('.arm__right .arm__lower') as HTMLElement
            const leftLowerLeg = dancer.querySelector('.legs__left .legs__lower') as HTMLElement
            let i: number = 0
            setInterval(() => {
                if (leftArm && rightArm && head && body) {
                    head.style.scale = i % 2 === 0 ? '1' : '1.1'
                    leftArm.style.transform = i % 2 === 0 ? 'rotate(140deg)' : 'rotate(10deg)'
                    rightArm.style.transform = i % 2 === 0 ? 'rotate(-140deg)' : 'rotate(-10deg)'
                    body.style.scale = i % 2 === 0 ? '1' : '1.1'
                    leftLowerArm.style.transform = i % 2 === 0 ? 'rotate(60deg)' : 'rotate(-20deg)'
                    rightLowerArm.style.transform = i % 2 === 0 ? 'rotate(-60deg)' : 'rotate(20deg)'
                }
                i++
            }, 1000)
            setInterval(() => {
                if (leftArm && rightArm && head && body) {
                    leftArm.style.transform = i % 2 === 0 ? 'rotate(70deg)' : 'rotate(10deg)'
                    rightArm.style.transform = i % 2 === 0 ? 'rotate(-70deg)' : 'rotate(-10deg)'
                    leftLeg.style.transform = i % 2 === 0 ? 'rotate(40deg)' : 'rotate(10deg)'
                    rightLeg.style.transform = i % 2 === 0 ? 'rotate(-30deg)' : 'rotate(-10deg)'
                    leftLowerLeg.style.transform = i % 2 === 0 ? 'rotate(-40deg)' : 'rotate(-10deg)'
                }
            }, 1500)
        }
    })

    static PopMusicDance = new Dance((person: Person) => {
        const dancer: HTMLElement | null = document.getElementById(`person_${person.id}`)
        if (dancer) {
            const leftArm = dancer.querySelector('.arm__left') as HTMLElement
            const rightArm = dancer.querySelector('.arm__right') as HTMLElement
            const head = dancer.querySelector('.person__head') as HTMLElement
            const body = dancer.querySelector('.person') as HTMLElement
            const leftLeg = dancer.querySelector('.legs__left') as HTMLElement
            const rightLeg = dancer.querySelector('.legs__right') as HTMLElement
            const leftLowerArm = dancer.querySelector('.arm__left .arm__lower') as HTMLElement
            const rightLowerArm = dancer.querySelector('.arm__right .arm__lower') as HTMLElement
            let i: number = 0
            setInterval(() => {
                if (leftArm && rightArm && head && body) {
                    leftArm.style.transform = i % 2 === 0 ? 'rotate(30deg)' : 'rotate(10deg)'
                    rightArm.style.transform = i % 2 === 0 ? 'rotate(-30deg)' : 'rotate(-10deg)'
                    leftLeg.style.transform = i % 2 === 0 ? 'rotate(10deg)' : 'rotate(0eg)'
                    rightLeg.style.transform = i % 2 === 0 ? 'rotate(-20deg)' : 'rotate(-30deg)'
                    leftLowerArm.style.transform = i % 2 === 0 ? 'rotate(30deg)' : 'rotate(-10deg)'
                    rightLowerArm.style.transform = i % 2 === 0 ? 'rotate(-30deg)' : 'rotate(10deg)'
                }
                i++
            }, 800)
            setInterval(() => {
                if (leftArm && rightArm && head && body) {
                    leftLeg.style.transform = i % 2 === 0 ? 'rotate(30deg)' : 'rotate(10eg)'
                    rightLeg.style.transform = i % 2 === 0 ? 'rotate(-10deg)' : 'rotate(-deg)'
                    body.style.transform = i % 2 === 0 ? 'rotate(-5deg)' : 'rotate(5deg)'
                }
                i++
            }, 1600)
        };
    })
}