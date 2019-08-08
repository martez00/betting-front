<template>
    <div class="home">
        <div class="container-fluid page-body-wrapper">
            <div class="main-panel">
                <div class="content-wrapper">
                    <div class="row form-group">
                        <div class="col-lg-2">
                            <AdminMenu/>
                        </div>
                        <div class="col-lg-10 mt-3">
                            <div class="row form-group">
                                <div class="col-sm-12">
                                    <div class="d-lg-flex align-items-center">
                                        <div>
                                            <h3 class="text-dark font-weight-bold mb-2">Hi, {{ $auth.user().name }}!</h3>
                                            <h6 class="font-weight-normal mb-2">This is a dashboard of Betting system admin panel.</h6>
                                        </div>
                                    </div>
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
    import AdminMenu from '@/partials/layout/header/AdminMenu';

    export default {
        components: {
            AdminMenu
        },
        name: "Dashboard"
    }
</script>

<style scoped>

</style>