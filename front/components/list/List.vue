<template>
    <div class="flex flex-1 flex-col border-r-2 ">
        <UserInfo />
        <ChatList />
    </div>
</template>

<script setup lang="ts">

import ChatList from '~/components/list/Chat-list.vue';
import UserInfo from '~/components/list/User-info.vue';
</script>

<style scoped>

</style>