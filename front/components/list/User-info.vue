<script setup lang="ts">

import {Icon} from '@iconify/vue';
</script>

<template>
    <div class="flex p-5 items-center justify-between">
        <div class="flex items-center gap-5">
            <img
                src="../../public/avatar.png"
                class="w-12 h-12 rounded-full object-cover"
                alt=""
            >
            <h2 class="text-xl text-black font-bold">
                Jon Doe
            </h2>
        </div>
        <div class="flex gap-5">
            <Icon
                icon="weui:more-filled"
                color="black"
                width="24"
                height="24"
            />
            <Icon
                icon="mynaui:video"
                color="black"
                width="24"
                height="24"
            />
            <Icon
                icon="la:edit"
                color="black"
                width="24"
                height="24"
            />
        </div>
    </div>
</template>

<style scoped>

</style>