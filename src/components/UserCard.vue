<script setup>
defineProps({
  user: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['select'])
</script>

<template>
  <div class="card">
    <h3>{{ user.name }}</h3>
    <p>{{ user.email }}</p>
    <p>{{ user.company.name }}</p>

    <button @click="emit('select', user)">
      View User
    </button>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid #ddd;
  padding: 16px;
  margin-bottom: 12px;
  border-radius: 8px;
}

button {
  margin-top: 10px;
  padding: 8px 12px;
  cursor: pointer;
}
</style>