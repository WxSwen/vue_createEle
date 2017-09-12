<template>
    <el-menu default-active="2" class="el-menu-vertical-demo el-menu__left" @open="handleOpen" @close="handleClose">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>导航一</template>
        <el-menu-item-group>
          <el-menu-item index="1">
              <router-link to="/foo">Go to Foo</router-link>
          </el-menu-item>
          <el-menu-item index="2">
              <router-link to="/bar">Go to Bar</router-link>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="2"><i class="el-icon-menu"></i>导航二</el-menu-item>
      <el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>
    </el-menu>
</template>

<script>
  export default {
    data() {
        return {
            activeIndex: '1',
            activeIndex2: '1'
        };
    },
    mounted() {

    },
    beforeDestroy() {

    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        },
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    }
};
</script>
<style scoped lang="sass">
    @import './style.scss';
</style>