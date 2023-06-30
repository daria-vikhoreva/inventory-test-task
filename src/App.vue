<script setup>
import InventoryLeftComponent from './components/Inventory/InventoryLeftComponent.vue';
import InventoryBottomComponent from './components/Inventory/InventoryBottomComponent.vue';
import InventorySheet from './components/Inventory/InventorySheet.vue';
</script>

<template>
    <div class="container">
        <div class="wrapper">
            <InventoryLeftComponent/>
            <InventorySheet/>
        </div>
        <InventoryBottomComponent/>
    </div>
</template>

<style lang="scss">
html {
	background-color: #1e1e1e;
}

#app {
    padding: 32px;
}

.container {
    width: 785px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.wrapper {
    display: flex;
    gap: 24px;
}
</style>
