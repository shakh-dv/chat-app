<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
        <div class="w-full max-w-md p-8 space-y-4 bg-white rounded shadow-lg">
            <h1 class="text-2xl font-bold text-center text-gray-700">
                Sign In
            </h1>
            <form @submit.prevent="submit">
                <div class="mb-4">
                    <label
                        for="email"
                        class="block mb-1 text-sm text-gray-600"
                    >Email</label>
                    <input
                        id="email"
                        v-model.trim="loginData.email"
                        type="email"
                        class="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="example@yandex.ru"
                        required
                    >
                </div>
                <div class="mb-4">
                    <label
                        for="password"
                        class="block mb-1 text-sm text-gray-600"
                    >Password</label>
                    <input
                        id="password"
                        v-model.trim="loginData.password"
                        type="password"
                        class="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your password"
                        required
                    >
                </div>
                <button
                    type="submit"
                    class="w-full py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    <span v-if="!isCreatePending" class="text-white">Login</span>
                    <span v-else>Logging in...</span>
                </button>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
// Add your script here, if necessary

// import {load} from '@fingerprintjs/fingerprintjs';
import {useToast} from '~/composables/useToast';
import {login} from '~/utils/login';

useHead({
    title: 'Sign in'
});

const loginData = reactive({email: '', password: ''});
const isCreatePending = ref(false);
const errors = ref({email: '', password: ''});
const toast = useToast('GlobalToast');

async function submit() {
    //reset errors
    errors.value = {email: '', password: ''};

    // Validation
    if (!loginData.email) {
        errors.value.email = 'Please enter your email address';
    }
    if (!loginData.password) {
        errors.value.password = 'Please enter your password';
    }
    if (errors.value.email || errors.value.password) {
        return;
    }

    isCreatePending.value = true;


    try {
        await login(loginData.email, loginData.password);
        navigateTo('/').then(() => {
            window.location.reload();
        });
    } catch (e: any) {
    // Handling authentication errors
        if (e.code === 401 || e.code === 403) {
            toast.show({
                type: 'error',
                message: 'Invalid email or password',
                timeout: 3000
            });
        } else {
            toast.show({
                type: 'error',
                message: typeof e.message === 'string' ? e.message : e.message[0],
                timeout: 3000,
            });
        }
    } finally {
        isCreatePending.value = false;
    }
}
</script>

<style scoped>
/* You can add custom styles here if needed */
</style>
