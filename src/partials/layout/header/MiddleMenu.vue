<template>
    <nav class="bottom-navbar">
        <div class="container">
            <ul class="nav page-navigation">
                <router-link tag="li" active-class="active" class="nav-item" to="/" exact>
                    <a class="nav-item nav-link">
                        <i class="mdi mdi-home menu-icon"></i>
                        <span class="menu-title">Home</span>
                    </a>
                </router-link>
                <router-link tag="li" active-class="active" class="nav-item" to="/bets" exact>
                    <a class="nav-item nav-link">
                        <i class="mdi mdi-nature menu-icon"></i>
                        <span class="menu-title">Bets</span>
                        <i class="menu-arrow"></i>
                    </a>
                </router-link>
                <router-link tag="li" active-class="active" class="nav-item" to="/users" exact>
                    <a class="nav-item nav-link">
                        <i class="mdi mdi-nature-people menu-icon"></i>
                        <span class="menu-title">Users</span>
                        <i class="menu-arrow"></i>
                    </a>
                </router-link>
            </ul>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "MiddleMenu"
    }
</script>

<style scoped>

</style>