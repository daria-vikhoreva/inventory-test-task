import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useInventoryStore = defineStore('inventory', () => {
    const countOfLines = 5;
    const cells = 25;
    const loading = ref(true);

    const inventoryItems = [
        {id: 1, link: './assets/images/item_img1.svg', count: 2},
        {id: 2, link: './assets/images/item_img2.svg', count: 3},
        {id: 3, link: './assets/images/item_img3.svg', count: 5}
    ];
        
    return { countOfLines, cells, loading, inventoryItems };
});

