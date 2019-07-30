<template>
    <div class="home">
        <div class="container-fluid page-body-wrapper">
            <div class="main-panel">
                <div class="content-wrapper">
                    <div class="row">
                        <div class="col-lg-12 grid-margin stretch-card">
                            <div class="card">
                                <div class="card-body">
                                    <h4 class="card-title">All bets</h4>
                                    <p class="card-description">
                                        Made by our users!
                                    </p>
                                    <BetsTable/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import BetsTable from '@/components/BetsTable'

    export default {
        name: "Bets",
        components: {
            BetsTable
        }
    }
</script>

<style scoped>

</style>