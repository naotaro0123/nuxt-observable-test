<template>
  <div class="container">
    <div class="parent">
      <nuxt-link to="./counter_legacy">
        Counter(Legacy Sample)
      </nuxt-link>
      <nuxt-link to="./counter_modern">
        Counter(Modern Sample)
      </nuxt-link>
    </div>
  </div>
</template>

<style scoped>
.container {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 300px;
  height: 120px;
  background: #c3c3c3;
}
.parent {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
}
</style>
