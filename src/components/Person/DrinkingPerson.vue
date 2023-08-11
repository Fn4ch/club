<template>
  <div class="person-container">
    <div class="person__name">{{ name }}</div>
      <div class="person" id="person">
        <span class="person__head"></span>
        <div class="body">
          <div class="arm arm__left">
              <span class="arm__upper"></span>
              <span class="arm__lower"></span>
              <div class="glass">
                <div class="glass__drink"></div>
              </div>
          </div>
          <span class="body__chest"></span>
          <div class="arm arm__right">
              <span class="arm__upper"></span>
              <span class="arm__lower"></span>
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
    transition: all 2s ease;
    left: 25px;
    margin-top: -100px;
  }
}
.glass{
  transition: all 2.8s ease;
  z-index: 0;
  margin: -20px -10px 0 0;
  width: 15px;
  height: 20px;
  background-color: rgba(184, 193, 239, 0.7);
  transform: rotate(-35deg);
  transform-origin: top right;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  &__drink{
    width: 90%;
    height: 2px;
    padding: 2px;
    animation: drink 16s infinite alternate;
    background-color: rgb(198, 238, 245);
  }
}

.body{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 2s ease;
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
    transition: all 2s ease;
    transform-origin: top left;
    transform: rotate(35deg);
    width: fit-content;
    .arm__lower{
      transform-origin: top right;
      z-index: 0;
    }
  }
  &__right{
    z-index: 0;
    transition: all 2s ease;
      transform: rotate(-35deg);
      animation: rightHand infinite alternate;
      width: fit-content;
      transform-origin: top right;
      .arm__lower{
        transform-origin: top left;
        z-index: 10;
      }
  }
  &__upper{
    height: 40px;
    margin-bottom: -5px;
  }
  &__lower{
    transition: all 2s ease;
    height: 30px;
    transform-origin: top;
  }
}
  @keyframes drink {
    0%{
      height: 2px;
    }
    30% {
      height: 18px;
    }
    70%{
      height: 18px;
    }
    80% {
      height: 2px;
    }
    99%{
      height: 2px;
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