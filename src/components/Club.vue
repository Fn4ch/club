<template>
    <div class="club">
        <button @click="playHipHop">play HipHop</button>
        <HipHopDancer v-for="d in dancers" :name="d.name" :key="d.id"/>
    </div>
</template>

<script lang="ts" setup>
import { Club } from '@/models/Club'
import { Dancer } from '@/models/Dancer'
import { ref } from 'vue'
import { DanceStyle } from '@/models'
import HipHopDancer from '@/components/Human/HipHopDancer.vue'
import { DanceManager } from '@/models/DanceManager'
import { HipHopDanceStrategy } from '@/models/DanceStrategy'
import { ElectrodanceStrategy } from '@/models/DanceStrategy'
import { SmoothDanceStrategy } from '@/models/DanceStrategy'

const dancer1 = new Dancer('Oleg', new HipHopDanceStrategy)
const dancer2 = new Dancer('Petya', new ElectrodanceStrategy)
const dancer3 = new Dancer('Kate', new SmoothDanceStrategy)
const dancer4 = new Dancer('Vasya', new ElectrodanceStrategy)
const dancer5 = new Dancer('Diana', new ElectrodanceStrategy)
const dancer6 = new Dancer('Anya', new HipHopDanceStrategy)
const dancer7 = new Dancer('Leo', new SmoothDanceStrategy)
const dancer8 = new Dancer('Kris', new HipHopDanceStrategy)

const dancers: Dancer[] = [dancer1, dancer2, dancer3, dancer4, dancer5, dancer6, dancer7, dancer8]

const club = new Club()

const danceManager = new DanceManager(club)

dancers.forEach(d => danceManager.addDancer(d))

const playHipHop = () => danceManager.playMusic('Rnb')

</script>

<style lang="scss" scoped>
    
</style>