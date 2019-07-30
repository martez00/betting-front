<template>
    <div class="home">
        <div class="container-fluid page-body-wrapper">
            <div class="main-panel">
                <div class="content-wrapper">
                    <div class="row">
                        <div class="col-lg-12 grid-margin stretch-card">
                            <div class="card">
                                <div class="card-body">
                                    <h4 class="card-title">All users</h4>
                                    <p class="card-description">
                                        Who are with us!
                                    </p>
                                    <UsersTable/>
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
    import UsersTable from '@/components/UsersTable'
    export default {
        name: "Users",
        components: {
            UsersTable
        }
    }
</script>

<style scoped>

</style>