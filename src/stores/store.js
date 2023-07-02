import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useInventoryStore = defineStore('inventory', () => {
    const cells = 25;
    const loading = ref(true);

    setTimeout(() => {
        loading.value = false;
    }, 5000);

    const savedInventory = JSON.parse(localStorage.getItem('inventory'));

    const inventoryItems = savedInventory || [
        {id: 1, position: 1, link: '/src/assets/images/item_img1.svg', title: 'Зеленый', description: ['Lorem Ipsum', 'Lorem Ipsum', 'Lorem Ipsum', 'Lorem Ipsum', 'Lorem Ipsum'], count: 2},
        {id: 2, position: 2, link: '/src/assets/images/item_img2.svg', title: 'Оранжевый', description: ['Lorem Ipsum', 'Lorem Ipsum', 'Lorem Ipsum', 'Lorem Ipsum', 'Lorem Ipsum'], count: 3},
        {id: 3, position: 3, link: '/src/assets/images/item_img3.svg', title: 'Фиолетовый', description: ['Lorem Ipsum', 'Lorem Ipsum', 'Lorem Ipsum', 'Lorem Ipsum', 'Lorem Ipsum'], count: 5}
    ];
        
    localStorage.setItem('inventory', JSON.stringify(inventoryItems));

    return { inventoryItems, cells, loading };
});

