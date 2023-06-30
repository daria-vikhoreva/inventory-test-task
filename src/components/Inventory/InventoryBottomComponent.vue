<template>
    <div class="bottom-component">
        <template v-if="isLoading">
            <UiSkeleton size="large"/>
        </template>
        <template v-else>
            Компонент
        </template>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import UiSkeleton from '../UI/UiSkeleton.vue';

const isLoading = ref(true);
</script>

<style lang="scss" scoped>
.bottom-component {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 18px;
    border-radius: 12px;
	border: 1px solid #4d4d4d;
	background: #262626;
    min-height: 72px;
    height: 100%;
}
</style>