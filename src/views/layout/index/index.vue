<template>
    <div>
      <Headers />
      <Menus />
      <router-view />
    </div>
</template>

<script>
  import Headers from '../header/index.vue';
  import Menus from '../menu/index.vue';
  export default {
    components : {
      Headers,
      Menus,
    }
  }
</script>
