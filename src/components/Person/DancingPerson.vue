<template>
  <div class="person-container">
    <div class="person__name">{{ name }}</div>
      <div class="person" id="person">
        <span class="person__head"></span>
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
</script>

<style lang="scss" scoped>
.person-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: min-content;
}
.person {
  width: 100px;
  height: 100px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.4s ease;
  transform: rotateY(15deg);

  &__name{
    margin-bottom: 70px;
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
  }
}
.legs{
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -5px;
  transition: all 0.4s ease;
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
    transition: all 0.7s ease;
    transform: rotate(10deg);
      .legs__lower{
        transform: rotate(-15deg);
      }
    }
    &__right{
        display: flex;
      flex-direction: column;
      transform-origin: top left;
      transition: all 0.7s ease;
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
    justify-content: center;
    transition: all 0.4s ease;
    width: 100px;
    height: 90px;
    
    &__chest{
      background-color: #0e0b0e;
      width: 25px;
      height: 60px;
      border-radius: 10px;
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
      transition: all 0.4s ease;
      transform-origin: top left;
      transform: rotate(35deg);
      width: fit-content;
      .arm__lower{
        transform-origin: top right;
      }
    }
    &__right{
      transition: all 0.4s ease;
        transform: rotate(-35deg);
        width: fit-content;
        transform-origin: top right;
        .arm__lower{
          transform-origin: top left;
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
/*
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
  }*/
</style>