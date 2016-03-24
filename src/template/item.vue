<!--项目列表-->
<template id="item">
    <a v-for="list in itemList" class="item-list" v-link="{name: 'detail', params:{id:list.id},activeClass:'s-link-active'}">
        <div class="item-image">
            <img :src="list.imgUrl" :alt="list.itemTitle">
        </div>
        <div class="item-content">
            <div class="title" v-text="list.itemTitle"></div>
            <div class="time" v-text="list.itemTime"></div>
            <div class="address" v-text="list.itemAdress"></div>
            <div class="money"><span v-text="list.money"></span>元起</div>
        </div>
    </a>
</template>