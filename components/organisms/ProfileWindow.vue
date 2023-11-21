<template>
  <div class="profile">
    <div class="profile_wrapper">
      <div class="profile_item_1 item">govnonumber_1</div>
      <div class="profile_item_2 item">govnonumber_2</div>
      <div class="profile_item_3 item">govnonumber_3</div>
      <div class="profile_item_4 item">govnonumber_4</div>
      <div class="profile_item_5 item">govnonumber_5</div>
      <div class="profile_item_6 item">govnonumber_6</div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.profile {
  background: #fbf7f0;
  color: #555555;
  padding: 35px 0;
  display: flex;
  justify-content: flex-end;
  &_wrapper {
    border: 1px solid #55555569;
    border-radius: 22px;
    padding: 35px 0px 35px 20px;
    margin-right: 40px;
    display: flex;
    gap: 3.5svh;
    flex-direction: column;
    min-width: 300px;
    max-width: 420px;
    height: fit-content;
  }
}
.item {
  font-size: 16px;
}
</style>
