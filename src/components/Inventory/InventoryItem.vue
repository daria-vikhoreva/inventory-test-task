<template>
    <div class="item"
         :draggable="draggable"
         :class="{ 'item_dragging': draggable }"
         @dragstart="startDrag($event, item)"
         @dragend="endDrag"
         @dragover="allowDrop"
         @drop="onDrop">

        <img :src="item.link"
             alt="img"
             class="item__img">

        <div class="item__count">
            <span>{{ item.count }}</span>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
    item: {
        type: Object,
    }
});

const emit = defineEmits([
    "updated:startDrag",
    "updated:endDrag",
    "updated:drop"]  
);

const draggable = ref(false);

const startDrag = (event, item) => {
    event.dataTransfer.setData('text/plain', item.id); 
    draggable.value = true;
};

const endDrag = () => {
    draggable.value = false;
};

const allowDrop = (event) => {
    event.preventDefault();
};

const onDrop = (event) => {
    event.preventDefault();
};
</script>

<style lang="scss" scoped>
.item {
    display: flex;
    justify-content: center;
    position: relative;
    opacity: 1;
    transition: opacity 0.3s ease;
    &__img {
        width: 54px;
    }
    &__count {
        font-family: 'Inter', sans-serif;
        font-size: 10px;
        position: absolute;
        bottom: 0;
        right: 0;
        padding: 2px 4px;
        border: 1px solid #4D4D4D;
        border-top-left-radius: 6px;
        span {
            color: #fff;
            opacity: 0.4;
        }
    }
    &_dragging {
        opacity: 0.5;
    }
}
</style>