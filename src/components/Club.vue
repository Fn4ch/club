<template>
    <div class="club">
        <div class="club__controllers">
            <button @click="playMusic(MusicGenre.Rnb)">play HipHop</button>
            <button @click="playMusic(MusicGenre.Electrodance)">play Electrodance</button>
            <button @click="playMusic(MusicGenre.Pop)">play Pop</button>
        </div>
        <h3 v-if="playingMusic">В клубе играет: {{ playingMusic }}</h3>
        <h3 v-else>В клубе тихо</h3>
        <div class="club__content">
            <div class="dance-floor">
                <DancingPerson v-for="p in dancingPersons" :key="p.id" :id="`person_${p.id}`" :name="p.name" />
            </div>
            <div class="drink-bar">
                <div class="drink-bar__seats">
                    <div v-for="p in barCustomers" :key="p.id">
                        <DrinkingPerson :key="p.id" :id="`person_${p.id}`" :name="p.name" />
                        <div  class="drink-bar__table"></div>
                    </div>
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
const playingMusic = ref<MusicGenre | null>(null)
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
})

const getClubPersons = () => {
    dancingPersons.value = club.value.getPersonsOnDanceFloor()
    barCustomers.value = club.value.getPresonsInBar()
}

const playMusic = (genre: MusicGenre) => {
    club.value.playMusic(genre)
    getClubPersons()
    playingMusic.value = club.value.getPlayingMusic()
}

</script>

<style lang="scss" scoped>
h3{
    margin-top: 12px;
}
.club{
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    width: 1280px;
    min-height: 100vh;
    background-color: #d1d5eb;
    @media (max-width: 1280px) {
        width: 100%;
        height: auto;

    }
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
    }
}

.dance-floor{
    margin-top: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 80px;
    padding: 0 64px;
}

.drink-bar{
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    @media (max-width: 1024px) {
        flex-direction: row;
    }
    &__table{
        display: none;
        @media (max-width: 1024px) {
            display: flex;
            width: 100px;
            height: 80px;
            background-color: #415bce;
            margin-top: -5px;
        }
    }
    &__seats{
        z-index: 1;
        padding: 0 64px;
        display: flex;
        justify-content: center;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 48px;
        margin-bottom: -5px;
    }
    &__counter{
        display: inline;
        z-index: 0;
        text-align: center;
        padding: 20px;
        width: 100%;
        background-color: #415bce;
        color: #fff;
        height: 120px;
        @media (max-width: 1024px) {
            display: none;
        }
    }
}
    
</style>