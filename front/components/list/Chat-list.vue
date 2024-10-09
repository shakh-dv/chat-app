<template>
    <div class="flex-1">
        <div class="flex items-center gap-5 p-5">
            <div class="flex flex-1 items-center gap-5 border-2 bg-gray-200 rounded-lg p-2 border-[#697893]">
                <Icon
                    icon="line-md:search"
                    color="black"
                    width="20"
                    height="20"
                    flip="horizontal"
                />
                <input
                    type="text"
                    placeholder="Search"
                    class="bg-transparent border-none outline-none text-black flex-1"
                >
            </div>
            <Icon
                :icon="isPlus ? 'majesticons:plus-line' : 'majesticons:minus-line'"
                color="black"
                width="36"
                height="36"
                class="cursor-pointer p-2 rounded-xl bg-gray-200"
                @click="toggleIcon"
            />
        </div>
        <div
            v-for="chat in chats"
             class="flex items-center gap-5 p-5 cursor-pointer hover:bg-gray-200">
            <img
                src="../../public/avatar.png"
                alt=""
                class="w-12 h-12 rounded-full object-cover"
            >
            <div class="flex flex-col gap-1.5">
                <span class="font-medium text-black">{{chat.user2.id}}</span>
                <p class="font-light text-black">
                    Hello
                </p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

const isPlus = ref(true);
const chats = ref([]);
const chatsService = useService('chats', {auth: true});
const toggleIcon = () => {
    isPlus.value = !isPlus.value;
};

const loadChats = async () => {
    try {
        chats.value = await chatsService.find().exec(); // Предполагаем, что есть метод findAll в chatsService
      console.log(chats.value)
    } catch (error) {
        console.error('Error loading chats:', error);
    }
};

onMounted(() => {
    loadChats();
});

</script>

<style scoped>
</style>