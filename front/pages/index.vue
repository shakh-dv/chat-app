<template>
    <div class="container mx-auto px-4">
        <div class="bg-white rounded-lg shadow-md p-6 mb-4">
            <div class="grid justify-items-center flex-col">
                <div class=" w-1/3 border-2 border-orange-200 rounded-md p-4">
                    <img src="../public/bridal-bouquet_81048-36354.png" alt="Свадебный цветок" class="rounded-lg hover:animate-spin">
                </div>
                <div class="text-5xl">
                    <p>Лейлабек & Бекмурод</p>
                </div>
            </div>
        </div>

        <div class="bg-white rounded-lg shadow-md p-6 mb-4">
            <h2 class="text-2xl font-bold text-center mb-4">Информация о свадьбе</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Donec sed odio dui. Maecenas faucibus mollis interdum.</p>
            <p>Nulla vitae elit libero, a pharetra augue. Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper.</p>
        </div>

        <div class="bg-white rounded-lg shadow-md p-6 mb-4">
            <h2 class="text-2xl font-bold text-center mb-4">Место проведения</h2>
            <div class="flex items-center">
                <div class="w-1/3">
                    <img src="https://www.shutterstock.com/shutterstock/photos/1552894351/display_1500/stock-photo-beautiful-wedding-ceremony-venue-with-garden-and-fountain-1552894351.jpg" alt="Место проведения" class="rounded-lg">
                </div>
                <div class="w-2/3 ml-4">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Donec sed odio dui. Maecenas faucibus mollis interdum.</p>
                </div>
            </div>
        </div>

        <div class="bg-white rounded-lg shadow-md p-6 mb-4">
            <h2 class="text-2xl font-bold text-center mb-4">Фотографии</h2>
            <div class="grid grid-cols-3 gap-4">
                <div class="image-container">
                    <img src="../public/bridal-bouquet_81048-36354.png" alt="Фотография 1" class="rounded-lg">
                </div>
                <div class="image-container">
                    <img src="../public/bridal-bouquet_81048-36354.png" alt="Фотография 2" class="rounded-lg">
                </div>
                <div class="image-container">
                    <img src="../public/bridal-bouquet_81048-36354.png" alt="Фотография 3" class="rounded-lg">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.image-container {
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;
}

.image-container:hover img {
  transform: scale(1.1);
}
</style>