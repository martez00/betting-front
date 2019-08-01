<template>
    <div id="app">
        <div class="container-scroller">
            <MainHeader/>
            <router-view/>
        </div>
    </div>
</template>

<script>
    import MainHeader from '@/partials/layout/header/Header';

    export default {
        name: 'App',
        components: {
            MainHeader
        },
        data() {
            return {};
        },
        created() {
            window.addEventListener('scroll', this.headerFixed);
        },
        destroyed() {
            window.removeEventListener('scroll', this.headerFixed);
        },
        methods: {
            headerFixed(event) {
                if (window.matchMedia('(min-width: 992px)').matches) {
                    var header = $('.horizontal-menu');
                    if ($(window).scrollTop() >= 76) {
                        $(header).addClass('fixed-on-scroll');
                    } else {
                        $(header).removeClass('fixed-on-scroll');
                    }
                }
            }
        }
    };
</script>
