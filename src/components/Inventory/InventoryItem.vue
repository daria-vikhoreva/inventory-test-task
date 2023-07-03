<template>
    <div 
        class="item"
        :draggable="true"
        :class="{ 'item_dragging': draggable }"
        @dragstart="startDrag($event, item)"
        @dragend="endDrag"
    >
        <div class="item__img img">
            <UiIcon
                :number="item.number"
                :item="item-img"
                class="img__elem"
            />
        </div>

        <div class="item__count">
            <span>{{ item.count }}</span>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import UiIcon from '../UI/UiIcon.vue';

const props = defineProps({
    item: {
        type: Object,
    }
});

const draggable = ref(false);

const startDrag = (event, item) => {
    event.dataTransfer.setData('text/plain', item.id); 
    draggable.value = true;
};

const endDrag = () => {
    draggable.value = false;
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
        display: flex;
        align-items: center;
    }
    &__count {
        user-select: none;
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

.img {
    &__elem {
        width: 54px;
    }
}
</style>