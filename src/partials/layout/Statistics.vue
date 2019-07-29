<template>
    <div class="row">
        <div class="col-lg-2 grid-margin stretch-card">
            <div class="card">
                <div class="card-header">
                    Bets
                </div>
                <div class="card-body">
                    <div class="d-flex align-items-center justify-content-center">
                        <h2 class="text-danger font-weight-bold">{{ betsQuantity }}</h2>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-2 grid-margin stretch-card">
            <div class="card">
                <div class="card-header">
                    All Products
                </div>
                <div class="card-body">
                    <div class="d-flex align-items-center justify-content-center">
                        <h2 class="text-danger font-weight-bold">839</h2>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-2 grid-margin stretch-card">
            <div class="card">
                <div class="card-header">
                    All Products
                </div>
                <div class="card-body">
                    <div class="d-flex align-items-center justify-content-center">
                        <h2 class="text-danger font-weight-bold">839</h2>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-2 grid-margin stretch-card">
            <div class="card">
                <div class="card-header">
                    All Products
                </div>
                <div class="card-body">
                    <div class="d-flex align-items-center justify-content-center">
                        <h2 class="text-danger font-weight-bold">839</h2>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-2 grid-margin stretch-card">
            <div class="card">
                <div class="card-header">
                    All Products
                </div>
                <div class="card-body">
                    <div class="d-flex align-items-center justify-content-center">
                        <h2 class="text-danger font-weight-bold">839</h2>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-2 grid-margin stretch-card">
            <div class="card">
                <div class="card-header">
                    All Products
                </div>
                <div class="card-body">
                    <div class="d-flex align-items-center justify-content-center">
                        <h2 class="text-danger font-weight-bold">839</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {RepositoryFactory} from '@/repositories/RepositoryFactory';

    const BetsRepository = RepositoryFactory.get('bets');

    export default {
        name: "Statistics",
        data() {
            return {
                isLoading: false,
                betsQuantity: 0,
            };
        },
        created() {
            this.getBetsQuantity();
        },
        methods: {
            async getBetsQuantity() {
                this.isLoading = true;
                const {data} = await BetsRepository.get('?type=quantity');
                this.isLoading = false;
                this.betsQuantity = data.data;
            }
        }
    }
</script>

<style scoped>

</style>