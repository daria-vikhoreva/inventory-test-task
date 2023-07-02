<template>
    <input type="text"
           class="input"
           :placeholder="placeholder"
           :value="modelValue"
           @input="handleInput">
</template>

<script setup>
const props = defineProps({
    placeholder: {
        type: String
    },
    modelValue: {
        type: String
    }
});

const emit = defineEmits(['update:modelValue']);

const handleInput = (event) => {
    const value = event.target.value.trim();
    if (!isNaN(value)) {
        emit('update:modelValue', value);
    }
};
</script>

<style lang="scss" scoped>
.input {
    border-radius: 4px;
    border: 1px solid #4D4D4D;
    background: #262626; 
    width: 100%;
    padding: 12px;
    font-size: 14px;
    font-family: 'Inter', sans-serif; 
    color: #fff;
}
</style>