<template>
  <div id="app">
    <div class="container-scroller">
      <MainHeader/>
      <router-view/>
    </div>
  </div>
</template>

<script>
    import MainHeader from '@/partials/Header.vue';

    export default {
        name: 'App',
        components: {
            MainHeader
        },
        data() {
            return {

            };
        },
    };
</script>
