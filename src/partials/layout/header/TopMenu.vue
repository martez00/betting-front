<template>
    <nav class="navbar top-navbar col-lg-12 col-12 p-0">
        <div class="container-fluid">
            <div class="navbar-menu-wrapper d-flex align-items-center justify-content-between">
                <div class="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
                    <router-link class="navbar-brand brand-logo" to="/"><img src="../../../assets/logo.png" alt="logo"/>Betting</router-link>
                    <router-link class="navbar-brand brand-logo-mini" to="/">Betting</router-link>
                </div>
                <ul class="navbar-nav navbar-nav-right">
                    <li class="nav-item dropdown  d-lg-flex d-none">
                        <button type="button" class="btn btn-inverse-primary btn-sm" @click="showLoginModal">Login</button>
                    </li>
                </ul>
                <button class="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="horizontal-menu-toggle">
                    <span class="mdi mdi-menu"></span>
                </button>
            </div>
        </div>
        <LoginModal  v-if="showLogin" @close="closeLoginModal"/>
    </nav>
</template>

<script>
    import LoginModal from '@/components/modals/auth/Login';
    export default {
        name: "TopMenu.vue",
        components: {
            LoginModal
        },
        data() {
            return {
                showLogin: false,
            };
        },
        methods: {
            closeLoginModal() {
                this.showLogin = false;
            },
            showLoginModal() {
                this.showLogin = true;
            },
        }
    }
</script>

<style scoped>

</style>