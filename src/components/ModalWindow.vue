<template>
    <div class="wrapper">
        <div class="close-btn"
             @click="closeModal">
            <img src="../assets/images/carbon_close.svg"
                 alt="close" 
                 class="close-btn__img">
        </div>
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
        
            <div class="modal__actions">
                <UiButton color="red"
                          size="large"
                          @click="openInput">
                    Удалить предмет
                </UiButton>
            </div>
        </div>
        <div v-show="isOpen"
             class="confirm-modal">
            <UiInput placeholder="Введите количество"/>
            <div class="confirm-modal__buttons">
                <UiButton color="white"
                          size="small"
                          @click="closeInput">Отмена</UiButton>
                <UiButton color="red"
                          size="small">Подтвердить</UiButton>
            </div>
        </div>
    </div>
   
</template>

<script setup>
import { ref, computed } from 'vue';
import UiSkeleton from './UI/UiSkeleton.vue';
import UiButton from './UI/UiButton.vue';
import UiInput from './UI/UiInput.vue';
import { useInventoryStore } from '../stores/store';

const store = useInventoryStore();
const isLoading = computed(() => store.loading);
const countOfLines = computed(() => store.countOfLines);
const isOpen = ref(true);

const openInput = () => {
    isOpen.value = true;
};

const closeInput = () => {
    isOpen.value = false;
};

const emit = defineEmits(["close-modal"]);

const closeModal = (e) => {
    emit("close-modal", e.target);
};
</script>

<style lang="scss" scoped>
.wrapper {
    border: 1px solid #4D4D4D;
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
    background: rgba(38, 38, 38, 0.50);
    backdrop-filter: blur(8px); 
    max-width: 250px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
}
.modal {
    display: flex;
    flex-direction: column;
    padding-top: 50px;
    padding: 50px 15px 24px 15px;
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
    &__actions {
        margin-top: 18px;
    }
}

.confirm-modal {
    position: absolute;
    bottom: 0;
    border: 1px solid #4D4D4D;
    background: rgba(38, 38, 38, 0.60);
    backdrop-filter: blur(8px); 
    padding: 20px 21px;
    &__buttons {
        margin-top: 20px;
        display: flex;
        gap: 10px;
    }
}

.close-btn {
    position: absolute;
    padding: 8px;
    top: 0;
    right: 0;
    cursor: pointer;
}
</style>