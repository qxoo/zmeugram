<template>
  <div class="layout">
    <OrganismsSideBar />
    <div class="content">
      <slot />
    </div>
    <OrganismsProfileWindow />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.layout {
  display: grid;
  grid-template-columns: 1fr 50% 1.5fr;
  grid-template-rows: repeat(1, var(--doc-height));
}
.content {
  width: 100%;
  background: #fbf7f0;
  color: #555555;
  padding: 50px 30px;
}
</style>
