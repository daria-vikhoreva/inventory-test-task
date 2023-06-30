<template>
    <div class="sheet">
        <InventorySheetCell 
            v-for="cell in cells"
            :key="cell"
            class="sheet__cells">
            <InventoryItem 
                class="sheet__item"/>
        </InventorySheetCell>
    </div>
</template>

<script setup>
import InventorySheetCell from './InventorySheetCell.vue';
import InventoryItem from './InventoryItem.vue';


const cells = 25;
</script>

<style lang="scss" scoped>
.sheet {
    display: grid;
	grid-template-columns: repeat(5, 105px);
	grid-template-rows: repeat(5, 100px);
	border-radius: 12px;
	border: 1px solid #4d4d4d;
    &__cells {
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