<template>
    <div class="horizontal-menu">
        <nav class="navbar top-navbar col-lg-12 col-12 p-0">
            <div class="container-fluid">
                <div class="navbar-menu-wrapper d-flex align-items-center justify-content-between">
                    <div class="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
                        <router-link class="navbar-brand brand-logo" to="/">Betting</router-link>
                        <router-link class="navbar-brand brand-logo-mini" to="/">Betting</router-link>
                    </div>
                    <ul class="navbar-nav navbar-nav-right">
                        <li class="nav-item nav-profile dropdown">
                            <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" id="profileDropdown">
                                <span class="nav-profile-name">UserName</span>
                                <span class="online-status"></span>
                                <img src="./../images/faces/face28.png" alt="profile"/>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="profileDropdown">
                                <a class="dropdown-item">
                                    <i class="mdi mdi-settings text-primary"></i>
                                    Settings
                                </a>
                                <a class="dropdown-item">
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
        </nav>
        <nav class="bottom-navbar">
            <div class="container">
                <ul class="nav page-navigation">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">
                            <i class="mdi mdi-home menu-icon"></i>
                            <span class="menu-title">Home</span>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link  class="nav-link" to="/about">
                            <i class="mdi mdi-nature-people menu-icon"></i>
                            <span class="menu-title">About</span>
                            <i class="menu-arrow"></i>
                        </router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "Header.vue"
    }
</script>

<style scoped>

</style>
