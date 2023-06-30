<template>
    <div class="item">
        <img src="../../assets/images/item_img1.svg"
             alt="img"
             class="item__img">

        <div class="item__count">
            <span>4</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.item {
    display: flex;
    justify-content: center;
    position: relative;
    &__img {
        width: 54px;
    }
    &__count {
        font-family: 'Inter', sans-serif;
        font-size: 10px;
        position: absolute;
        bottom: 0;
        right: 0;
        padding: 2px 4px;
        border: 1px solid #4D4D4D;
        border-top-left-radius: 6px;
        span {
            color: #fff;
            opacity: 0.4;
        }
    }
}
</style>