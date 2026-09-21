<script setup>
import { onMounted, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useUsersStore } from '../stores/users'
import UserCard from '../components/UserCard.vue'

const usersStore = useUsersStore()
const { users, loading, error } = storeToRefs(usersStore)

const selectedUser = ref(null)

function selectUser(user) {
  selectedUser.value = user
}

onMounted(() => {
  usersStore.fetchUsers()
})
</script>

<template>
  <section>
    <h2>Users</h2>

    <div v-if="selectedUser" class="selected-user">
      <h2>Selected User</h2>
      <p>Name: {{ selectedUser.name }}</p>
      <p>Email: {{ selectedUser.email }}</p>
      <p>Phone: {{ selectedUser.phone }}</p>
    </div>

    <p v-if="loading">Loading users...</p>

    <p v-else-if="error">
      {{ error }}
    </p>

    <div v-else>
      <UserCard
        v-for="user in users"
        :key="user.id"
        :user="user"
        @select="selectUser"
      />
    </div>
  </section>
</template>

<style scoped>
.selected-user {
  border: 2px solid #42b883;
  padding: 16px;
  margin-bottom: 20px;
  border-radius: 8px;
}
</style>