<template>
    <div class="club">
        <button @click="playHipHop">play HipHop</button>
        <HipHopDancer v-for="p in persons" :name="p.name" :key="p.id"/>
    </div>
</template>

<script lang="ts" setup>
import { Club } from '@/models/Club'
import { Person } from '@/models/Person'
import { ref } from 'vue'
import { DanceStyle } from '@/models'
import HipHopDancer from '@/components/Human/HipHopDancer.vue'
import { HipHopDanceStrategy } from '@/models/DanceStrategy'
import { ElectrodanceStrategy } from '@/models/DanceStrategy'
import { SmoothDanceStrategy } from '@/models/DanceStrategy'

const dancer1 = new Person('Oleg', new HipHopDanceStrategy)
const dancer2 = new Person('Petya', new ElectrodanceStrategy)
const dancer3 = new Person('Kate', new SmoothDanceStrategy)
const dancer4 = new Person('Vasya', new ElectrodanceStrategy)
const dancer5 = new Person('Diana', new ElectrodanceStrategy)
const dancer6 = new Person('Anya', new HipHopDanceStrategy)
const dancer7 = new Person('Leo', new SmoothDanceStrategy)
const dancer8 = new Person('Kris', new HipHopDanceStrategy)

const persons: Person[] = [dancer1, dancer2, dancer3, dancer4, dancer5, dancer6, dancer7, dancer8]

const club = new Club()

persons.forEach(p => club.addPerson(p))

const playHipHop = () => club.playMusic('Rnb')

</script>

<style lang="scss" scoped>
    
</style>@/models/Person