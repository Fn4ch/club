<template>
  <div class="dancer-container">
    <div class="dancer__name">{{ name }}</div>
      <div class="dancer" id="dancer">
        <span class="dancer__head"></span>
        <div class="body">
          <div class="arm arm__left">
              <span class="arm__upper"></span>
              <span class="arm__lower"></span>
          </div>
          <span class="body__chest"></span>
          <div class="arm arm__right">
              <span class="arm__upper"></span>
              <span class="arm__lower"></span>
          </div>
      </div>
      <div class="legs">
        <div class="legs legs__left">
          <span class="legs__upper"></span>
          <span class="legs__lower"></span>
        </div>
        <div class="legs legs__right">
          <span class="legs__upper"></span>
          <span class="legs__lower"></span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'

defineProps({
  name: String
})

const dancer = ref<Element[]>([])

onMounted(() => {
  dancer.value = [...document.querySelectorAll('.dancer')]

  dancer.value.forEach(dancer => {
      const leftArm = dancer.querySelector('.arm__left .arm__lower') as HTMLElement
      const rightArm = dancer.querySelector('.arm__right .arm__lower') as HTMLElement
      const head = dancer.querySelector('.dancer__head') as HTMLElement
      const body = dancer.querySelector('.body') as HTMLElement
      // const leftLeg = dancer.querySelector('.legs__left .legs__lower') as HTMLElement
      // const rightLeg = dancer.querySelector('.legs__left .legs__lower') as HTMLElement
      console.log(leftArm, rightArm, head, body)
      let i: number = 0
    setInterval(() => {
      if (leftArm && rightArm && head && body) {
          head.style.scale = i % 2 === 0 ? '1' : '1.1'
          leftArm.style.transform = i % 2 === 0 ? 'rotate(50deg)' : 'rotate(-20deg)'
          rightArm.style.transform = i % 2 === 0 ? 'rotate(-50deg)' : 'rotate(20deg)'
      }
      i++
    }, 1000)
    })
})
</script>

<style lang="scss" scoped>
.dancer-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: min-content;
}
.dancer {
  width: 100px;
  height: 100px;
  position: relative;
  animation: dance 1s infinite alternate;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &__name{
    margin-bottom: 50px;
  }

  &__head {
    width: 50px;
    height: 50px;
    background-color: #0e0b0e;
    border-radius: 50%;
    position: absolute;
    transition: all 0.4s ease;
    left: 25px;
    margin-top: -160px;
    animation: headShaking 1.3s infinite alternate;
  }
}
.legs{
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -5px;
  span{
    color: #0e0b0e;
    width: 15px;
    background-color: #0e0b0e;
    border-radius: 50px;
  }
  &__left{
    margin-right: -5px;
    display: flex;
    flex-direction: column;
    transform-origin: top right;
    transform: rotate(10deg);
      .legs__lower{
        transform: rotate(-15deg);
      }
    }
    &__right{
        display: flex;
      flex-direction: column;
      transform-origin: top left;
      transform: rotate(-10deg);
      .legs__lower{
        transform: rotate(15deg);
      }
    }
    &__upper{
      height: 30px;
    }
    &__lower{
      margin-top: -5px;
      transition: all 0.4s ease;
      height: 30px;
      transform-origin: top;
    }
}

.body{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100px;
    height: 90px;
    animation: bodyShaking 1s infinite alternate;
    
    &__chest{
      background-color: #0e0b0e;
      width: 15px;
      height: 60px;
    }
}
.arm{
    span{
      color: #0e0b0e;
      width: 15px;
      background-color: #0e0b0e;
      border-radius: 50px;
    }
    color: #0e0b0e;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    justify-content: flex-start;
    &__left{
      transform-origin: bottom right;
      transform: rotate(35deg);
      width: fit-content;
      .arm__lower{
        animation: leftHand 1.5s infinite alternate;
      }
    }
    &__right{
        transform-origin: bottom left;
        transform: rotate(-35deg);
        animation: rightHand infinite alternate;
        width: fit-content;
        .arm__lower{
          animation: rightHand 1.4s infinite alternate;
        }
    }
    &__upper{
      height: 40px;
      margin-bottom: -5px;
    }
    &__lower{
      transition: all 0.4s ease;
      height: 30px;
      transform-origin: top;
    }
}
  @keyframes leftHand {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(50deg);
    }
    100% {
      transform: rotate(-10deg);
    }
  }
  
  @keyframes rightHand {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(-50deg);
    }
    100% {
      transform: rotate(10deg);
    }
  }

  @keyframes headShaking {
    0% {
      scale: 1;
    }
    50% {
      scale: 1.1;
    }
    100% {
      scale: 1;
    }
  }

  @keyframes bodyShaking {
    0% {
      transform: rotateX(0deg);
    }
    50% {
      transform: rotateX(-30deg);
    }
    100% {
      transform: rotateX(10deg);
    }
  }
</style>