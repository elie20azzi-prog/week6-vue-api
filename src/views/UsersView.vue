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

    <div v-if="selectedUser">
      <h2>Selected User</h2>
      <p>Name: {{ selectedUser.name }}</p>
      <p>Email: {{ selectedUser.email }}</p>
      <p>Phone: {{ selectedUser.phone }}</p>
    </div>
  </section>
</template>