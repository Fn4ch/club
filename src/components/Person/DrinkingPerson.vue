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
  height: 60px;
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
    margin-top: -100px;
  }
}

.body{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100px;
    height: 90px;
    
    &__chest{
      background-color: #0e0b0e;
      width: 25px;
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