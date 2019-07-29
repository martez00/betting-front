<template>
    <div class="home">
        <div class="container-fluid page-body-wrapper">
            <div class="main-panel">
                <div class="content-wrapper">
                    <WelcomeMessage/>
                    <Statistics/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import WelcomeMessage from '@/partials/layout/header/WelcomeMessage'
    import Statistics from '@/partials/layout/Statistics'
    import {RepositoryFactory} from './../repositories/RepositoryFactory';

    const BetsRepository = RepositoryFactory.get('bets');

    export default {
        name: 'home',
        components: {
            Statistics,
            WelcomeMessage
        },
        data() {
            return {};
        },
    }
</script>
