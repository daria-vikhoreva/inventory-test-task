<template>
    <div class="wrapper">
        <div class="sheet">
            <InventorySheetCell 
                v-for="cell in cells"
                :key="cell"
                class="sheet__cell">
                <InventoryItem 
                    v-if="cell < 4"
                    :item="inventoryItems[cell]"
                    class="sheet__item"
                    @click="openModal"
                />
            </InventorySheetCell>
        </div>
        <ModalWindow 
            v-show="isOpen"
            class="modal-window"
            @close-modal="closeModal"/>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import InventorySheetCell from './InventorySheetCell.vue';
import InventoryItem from './InventoryItem.vue';
import ModalWindow from '../ModalWindow.vue';
import { useInventoryStore } from '../../stores/store';

const store = useInventoryStore();

const cells = computed(() => store.cells);
const inventoryItems = ref(store.inventoryItems);
const isOpen = ref(false);

const openModal = () => {
    isOpen.value = true;
};

const closeModal = () => {
    isOpen.value = false;
};
</script>

<style lang="scss" scoped>
.wrapper {
    position: relative;
}
.modal-window {
    position: absolute;
    right: 0;
    bottom: 0;
}
.sheet {
    display: grid;
	grid-template-columns: repeat(5, 105px);
	grid-template-rows: repeat(5, 100px);
	border-radius: 12px;
	border: 1px solid #4d4d4d;
    &__cell {
        border: 0.5px solid #4d4d4d;
        &:nth-child(n + 1) {
            border-top: none;
            border-left: none;
        }
        &:nth-child(5n) {
            border-top: none;
            border-right: none;
        }
        &:nth-last-child(-n + 5) {
            border-bottom: none;
            border-left: none;
        }
        &:last-child {
            border-bottom: none;
            border-right: none;
        }
    }    
    &__item {
        width: 100%;
        height: 100%;
    }  
}
</style>