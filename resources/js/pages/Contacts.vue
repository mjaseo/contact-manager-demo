<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'

const contacts = ref<any[]>([])
const loading = ref(true)

onMounted(async () => {
    try {
        const response = await axios.get('/api/contacts') // this should map to your module route
        contacts.value = response.data
    } finally {
        loading.value = false
    }
})
</script>

<template>
    <div class="p-6">
        <h1 class="text-2xl font-bold mb-4">Contacts</h1>

        <div v-if="loading">Loading...</div>

        <ul v-else class="space-y-2">
            <li
                v-for="contact in contacts"
                :key="contact.id"
                class="p-4 border rounded shadow-sm flex items-center gap-4"
            >
                <img
                    v-if="contact.image"
                    :src="`/storage/${contact.image}`"
                    class="w-12 h-12 rounded-full object-cover"
                    alt="Contact Image"
                />
                <div>
                    <p class="font-semibold">{{ contact.name }}</p>
                    <p class="text-gray-600">{{ contact.email }}</p>
                </div>
            </li>
        </ul>
    </div>
</template>
