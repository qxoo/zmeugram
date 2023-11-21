<template>
  <div class="sidebar">
    <div class="sidebar_logo"><AtomsZmeuLogo w="280" h="48" /></div>
    <div class="sidebar_nav">
      <NuxtLink class="sidebar_nav_item item item_1">button_1</NuxtLink>
      <NuxtLink class="sidebar_nav_item item item_2">button_2</NuxtLink>
      <NuxtLink class="sidebar_nav_item item item_3">button_3</NuxtLink>
      <NuxtLink class="sidebar_nav_item item item_4">button_4</NuxtLink>
      <NuxtLink class="sidebar_nav_item item item_5">button_5</NuxtLink>
      <NuxtLink class="sidebar_nav_item item item_6">button_6</NuxtLink>
      <NuxtLink class="sidebar_nav_item item item_7">button_7</NuxtLink>
      <NuxtLink class="sidebar_nav_item item item_8">button_8</NuxtLink>
    </div>
    <div class="sidebar_footer">All rights reserved. zmeow ©</div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.sidebar {
  background: #fbf7f0;
  box-shadow: 10px 0 5px -2px #cdc9c3;
  color: #555555;
  z-index: 2;
  padding: 35px 20px;
  display: flex;
  flex-direction: column;
  gap: 2svh;
  &_logo {
    display: flex;
    margin-left: 20px;
    cursor: pointer;
  }
  &_nav {
    display: flex;
    flex-direction: column;
    gap: 3.5svh;
    padding: 35px 20px;
  }
  &_footer {
    text-align: center;
    margin-top: auto;
  }
}
.item {
  font-size: clamp(12px, 2svw, 20px);
  cursor: pointer;
}
</style>
