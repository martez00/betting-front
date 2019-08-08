<template>
    <div class="card">
        <div class="card-header text-black font-weight-bold">
           Admin Menu
        </div>
        <ul class="list-group list-group-flush">
            <router-link tag="li" active-class="active-admin-menu" class="list-group-item" style="cursor:pointer" to="/admin" exact>
               Dashboard
            </router-link>
            <router-link tag="li" active-class="active-admin-menu" class="list-group-item" style="cursor:pointer" to="/admin/sports" exact>
               Sports management
            </router-link>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "AdminMenu"
    }
</script>

<style scoped>

</style>