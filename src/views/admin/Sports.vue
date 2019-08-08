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
                                            <h3 class="text-dark font-weight-bold mb-2">Admin / Sports</h3>
                                            <h6 class="font-weight-normal mb-2">This is a admin panel of sports
                                                categories.</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row form-group">
                                <div class="col-lg-12">
                                    <button type="button" class="btn btn-success" v-if="showAddSportCategory === false"
                                            @click="showHideAddNewSportCategory">
                                        <i class="mdi mdi-plus-box"></i>
                                        Add new sport category
                                    </button>
                                    <button type="button" class="btn btn-success" v-else
                                            @click="showHideAddNewSportCategory">
                                        <i class="mdi mdi-minus-box"></i>
                                        Add new sport category
                                    </button>
                                </div>
                            </div>
                            <form autocomplete="off" @submit.prevent="createSportCategory" method="post"
                                  v-if="showAddSportCategory === true">
                                <div class="row form-group">
                                    <div class="col-lg-2">
                                        <input type="text" class="form-control form-control-lg"
                                               id="name" placeholder="Sport category name" v-model="name" required>
                                    </div>
                                    <div class="col-lg-8">
                                        <input type="text" class="form-control form-control-lg"
                                               id="description" placeholder="Sport category description"
                                               v-model="description" required>
                                    </div>
                                    <div class="col-lg-2">
                                        <button type="submit"
                                                class="btn btn-block btn-primary btn-lg font-weight-medium ">Save
                                        </button>
                                    </div>
                                </div>
                            </form>
                            <div class="row form-group" v-show="showCreatedSuccesfully">
                                <div class="col-lg-12">
                                    <div class="alert alert-success mb-0">
                                        Sport category <b>{{ name }}</b> was created sucessfully!
                                    </div>
                                </div>
                            </div>
                            <div class="row form-group">
                                <div class="col-lg-12">
                                    <div class="card">
                                        <SportsTable/>
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
    import SportsTable from '@/components/admin/SportsTable'
    import {RepositoryFactory} from '@/repositories/RepositoryFactory';

    const SportsRepository = RepositoryFactory.get('sports');
    export default {
        components: {
            AdminMenu,
            SportsTable
        },
        name: "Sports",
        data() {
            return {
                name: null,
                description: null,
                showAddSportCategory: false,
                showCreatedSuccesfully: false,
            }
        },
        methods: {
            showHideAddNewSportCategory() {
                if (this.showAddSportCategory == false) this.showAddSportCategory = true;
                else this.showAddSportCategory = false;
            },
            createSportCategory() {
                SportsRepository.storeSport({
                    name: this.name,
                    description: this.description
                }).then(res => {
                    this.showAddSportCategory = false;
                    this.showCreatedSuccesfully = true;
                    setTimeout(() => {
                        this.showCreatedSuccesfully = false;
                        this.name = '';
                        this.description = '';
                    }, 2000)
                });
            }
        }
    }
</script>

<style scoped>

</style>