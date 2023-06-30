<template>
    <button
        class="button"
        :class="[size, color]"
    >
        <slot/>
    </button>
</template>

<script setup>
defineProps({
    size: {
        type: String
    },
    color: {
        type: String
    }
});
</script>

<style lang="scss" scoped>
.button {
    border-radius: 8px; 
    font-family: 'SF Pro Display', sans-serif;
    border: none;
}

.red {
    background-color: #FA7272;
    color: #fff;
}

.white {
    background-color: #fff;
    color: #2D2D2D;
}

.large {
    padding: 11px;
    width: 100%;
}

.small {
    padding: 8px 28px;
    width: max-content;
}
</style>