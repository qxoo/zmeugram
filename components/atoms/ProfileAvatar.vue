<template>
  <div>
    <img :src="image" alt="https://placehold.co/80x80" />
  </div>
</template>

<script setup lang="ts">
interface avatarProps {
  image?: string
}
const props = withDefaults(defineProps<avatarProps>(), {
  image: '',
})
</script>

<style scoped lang="scss"></style>
