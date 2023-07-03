<template>
    <div class="ui-icon">
        <component :is="icon"/>
    </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';

const props = defineProps({
    number: String,
    item: {
        type: String,
        default: "item-img"
    }
});

const icons = {
  item_img1: () => import('@/assets/images/item_img1.svg'), 
  item_img2: () => import('@/assets/images/item_img2.svg'),
  item_img3: () => import('@/assets/images/item_img3.svg'), 
  close_img: () => import('@/assets/images/carbon_close.svg')
};

let icon = '';

if (props.number && 'item-img') {
    icon = defineAsyncComponent(icons[`item_img${props.number}`]);
} else {
    icon = defineAsyncComponent(icons[`close_img`]);
}

</script>

<style lang="scss" scoped>
</style>