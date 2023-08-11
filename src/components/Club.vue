<template>
    <div class="club">
        <div class="club__controllers">
            <button @click="playRnb">play HipHop</button>
            <button @click="playElectrodance">play Electrodance</button>
            <button @click="playPop">play Pop</button>
        </div>
        <div class="club__content">
            <div class="dance-floor">
                <DancingPerson v-for="p in dancingPersons" :key="p.id" :id="`person_${p.id}`" :name="p.name" />
            </div>
            <div class="drink-bar">
                <div class="drink-bar__seats">
                    <DrinkingPerson v-for="p in barCustomers" :key="p.id" :id="`person_${p.id}`" :name="p.name" />
                </div>
                <div class="drink-bar__counter">Бар</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { Club } from '@/models/Club'
import { Person } from '@/models/Person'
import { danceStrategies } from '@/models/DanceStrategy'
import { MusicGenre } from '@/models'
import DancingPerson from '@/components/Person/DancingPerson.vue'
import DrinkingPerson from '@/components/Person/DrinkingPerson.vue'
import { DrinkPreferencies } from '@/models/DrinkPreference'

const dancingPersons = ref<Person[]>([])
const barCustomers = ref<Person[]>([])
const club = ref<Club>(new Club())

onMounted(() => {

const dancer1 = new Person('Oleg', danceStrategies.HipHopStrategy, DrinkPreferencies.vodka)
const dancer2 = new Person('Petya', danceStrategies.ElectrodanceDanceStrategy, DrinkPreferencies.vodka)
const dancer3 = new Person('Kate', danceStrategies.RnbDanceStrategy, DrinkPreferencies.vodka)
const dancer4 = new Person('Vasya', danceStrategies.houseDanceStrategy, DrinkPreferencies.vodka)
const dancer5 = new Person('Diana', danceStrategies.popDanceStrategy, DrinkPreferencies.vodka)
const dancer6 = new Person('Anya', danceStrategies.RnbDanceStrategy, DrinkPreferencies.vodka)
const dancer7 = new Person('Leo', danceStrategies.popDanceStrategy, DrinkPreferencies.vodka)
const dancer8 = new Person('Kris', danceStrategies.houseDanceStrategy, DrinkPreferencies.vodka)

const persons: Person[] = [dancer1, dancer2, dancer3, dancer4, dancer5, dancer6, dancer7, dancer8]

persons.forEach(p => club.value.addPerson(p))
    console.log(dancingPersons.value, barCustomers.value, 'looggggggggg')
})

const getClubPersons = () => {
    dancingPersons.value = club.value.getPersonsOnDanceFloor()
    barCustomers.value = club.value.getPresonsInBar()
}

const playRnb = () => {
    club.value.playMusic(MusicGenre.Rnb)
    getClubPersons()
}
const playElectrodance = () => {
    club.value.playMusic(MusicGenre.Electrodance)
    getClubPersons()
}
const playPop = () => {
    club.value.playMusic(MusicGenre.Pop)
    getClubPersons()
}

</script>

<style lang="scss" scoped>
.club{
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: beige;
    border: 1px solid teal;
    height: 600px;
    width: 1280px;
    &__controllers{
        display: flex;
        gap: 16px;
        button{
            padding: 8px 16px;
            background-color: #415bce;
            color: #fff;
            border-radius: 8px;
            outline: none;
            border: none;
            transition: 0.2s all ease;
            &:active{
                scale: 1.05;
            }
        }
    }
    &__content{
        display: flex;
        flex-direction: column;
        align-content: space-between;
        width: 100%;
        height: 100%;
    }
}

.dance-floor{
    margin-top: 40px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    height: 100%;
    gap: 64px;
    padding: 64px;
}

.drink-bar{
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    &__seats{
        padding: 0 64px;
        display: flex;
        gap: 64px;
    }
    &__counter{
        text-align: center;
        text-justify: center;
        width: 100%;
        background-color: #415bce;
        color: #fff;
        height: 120px;
    }
}
    
</style>