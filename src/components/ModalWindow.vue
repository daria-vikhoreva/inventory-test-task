<template>
    <div class="modal">
        <img src="../assets/images/item_img1.svg"
             alt="item-img"
             class="modal__img">

        <div class="modal__divider modal__divider_1"/>
        <div class="modal__title">
            <template v-if="isLoading">
                <UiSkeleton size="large"/>
            </template>
            <template v-else>
                Заголовок карточки
            </template>
        </div>
        <div class="modal__description">
            <template v-if="isLoading">
                <UiSkeleton v-for="line in countOfLines"
                            :key="line"
                            size="medium"/>
            </template>
            <template v-else>
                Описание карточки
            </template>
        </div>
        <div class="modal__divider modal__divider_2"/>
        
        <div class="modal__buttons">
            <UiButton color="red"
                      size="large">
                Удалить предмет
            </UiButton>
        </div>
        
    </div>
</template>

<script setup>
import { computed } from 'vue';
import UiSkeleton from './UI/UiSkeleton.vue';
import UiButton from './UI/UiButton.vue';
import { useInventoryStore } from '../stores/store';

const store = useInventoryStore();
const isLoading = computed(() => store.loading);
const countOfLines = computed(() => store.countOfLines);
</script>

<style lang="scss" scoped>
.modal {
    display: flex;
    flex-direction: column;
    border-left: 1px solid #4D4D4D;
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
    background: rgba(38, 38, 38, 0.50);
    backdrop-filter: blur(8px); 
    max-width: 250px;
    width: 100%;
    padding: 55px 15px 18px 15px;
    &__img {
        width: 130px;
        margin: 0 auto;
    }
    &__divider {
        height: 1px; 
        background-color: #4D4D4D;
        &_1 {
            margin-top: 30px;
        }
        &_2 {
            margin-top: 24px;
        }
    }
    &__title {
        margin-top: 16px;
    }
    &__description {
        margin-top: 24px;
        display: flex;
        flex-direction: column;
        gap: 16px;
    }
    &__buttons {
        margin-top: 18px;
    }
}
</style>