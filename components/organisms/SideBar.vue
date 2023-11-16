<template>
  <div class="sidebar">
    <div class="sidebar_logo"><AtomsZmeuLogo w="280" h="48" /></div>
    <div class="sidebar_nav">
      <NuxtLink class="sidebar_nav_item item item_1"
        ><div style="border: 1px solid #555555; border-radius: 50%; width: 33px; height: 33px"></div>
        Profile</NuxtLink
      >
      <NuxtLink class="sidebar_nav_item item item_2">button_2</NuxtLink>
      <NuxtLink class="sidebar_nav_item item item_3">button_3</NuxtLink>
      <NuxtLink class="sidebar_nav_item item item_4">button_4</NuxtLink>
      <NuxtLink class="sidebar_nav_item item item_5">button_5</NuxtLink>
      <NuxtLink class="sidebar_nav_item item item_6">button_6</NuxtLink>
    </div>
    <div class="sidebar_footer">All rights reserved. zmeow ©</div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.sidebar {
  background: #fbf7f0;
  //   border-right: 0.5px solid #cdc9c3;
  box-shadow: 10px 0 5px -2px #cdc9c3;
  color: #555555;
  z-index: 2;
  padding: 35px 20px;
  display: flex;
  flex-direction: column;
  gap: 2svh;
  &_logo {
    display: flex;
    justify-content: center;
    cursor: pointer;
  }
  &_nav {
    display: flex;
    flex-direction: column;
    gap: 2svh;
    border: 1.5px #cdc9c3 solid;
    padding: 35px 0 65px 30px;
    border-radius: 40px;
  }
  &_footer {
    text-align: center;
    margin-top: auto;
  }
}
.item {
  font-size: clamp(12px, 2svw, 30px);
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>
