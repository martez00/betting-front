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
                        <button type="button" class="btn btn-inverse-primary btn-sm" v-if="!$auth.check()" @click="showSignInModal">Sign In</button>
                    </li>
                    <li class="nav-item nav-profile dropdown" v-if="$auth.check()">
                        <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" id="profileDropdown">
                            <span class="nav-profile-name">{{ $auth.user().name }}</span>
                            <span class="online-status"></span>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="profileDropdown">
                            <a class="dropdown-item" style="cursor:pointer" @click.prevent="$auth.logout()">
                                <i class="mdi mdi-logout text-primary"></i>
                                Logout
                            </a>
                        </div>
                    </li>
                </ul>
                <button class="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="horizontal-menu-toggle">
                    <span class="mdi mdi-menu"></span>
                </button>
            </div>
        </div>
        <SignInModal  v-if="showSignIn" @close="closeSignInModal"/>
    </nav>
</template>

<script>
    import SignInModal from '@/components/modals/auth/SignIn';
    export default {
        name: "TopMenu.vue",
        components: {
            SignInModal
        },
        data() {
            return {
                showSignIn: false,
            };
        },
        methods: {
            closeSignInModal() {
                this.showSignIn = false;
            },
            showSignInModal() {
                this.showSignIn = true;
            },
        }
    }
</script>

<style scoped>

</style>