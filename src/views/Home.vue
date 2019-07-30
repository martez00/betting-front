<template>
    <div class="home">
        <div class="container-fluid page-body-wrapper">
            <div class="main-panel">
                <div class="content-wrapper">
                    <WelcomeMessage/>
                    <Statistics/>
                    <TopUsers/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import WelcomeMessage from '@/partials/layout/header/WelcomeMessage'
    import Statistics from '@/components/Statistics'
    import TopUsers from '@/components/TopUsers'

    export default {
        name: 'home',
        components: {
            Statistics,
            WelcomeMessage,
            TopUsers
        },
        data() {
            return {};
        },
    }
</script>
