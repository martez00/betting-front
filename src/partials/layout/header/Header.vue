<template>
    <div class="horizontal-menu">
        <TopMenu/>
        <MiddleMenu/>
    </div>
</template>

<script>
    import TopMenu from '@/partials/layout/header/TopMenu';
    import MiddleMenu from '@/partials/layout/header/MiddleMenu';
    export default {
        name: "Header.vue",
        components: {
            TopMenu,
            MiddleMenu
        },
    }
</script>

<style scoped>

</style>
