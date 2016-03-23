<template>
   <div class="app-nav">
          <div class="nav-content">
              <a v-link="{ name: 'home',activeClass:'g-link-active'}">首页</a>
              <a v-link="{ name: 'menu',activeClass:'g-link-active'}">菜单</a>
          </div>
      </div>
      <!-- 路由外链 -->
      <div id="view-page" class="view">
          <div class="item-main">
              <router-view></router-view>
          </div>
      </div>
</template>