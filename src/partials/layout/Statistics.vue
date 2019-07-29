<template>
    <div class="row">
        <div class="col-lg-2 grid-margin stretch-card">
            <div class="card">
                <div class="card-body pb-0">
                    <div class="d-flex align-items-center justify-content-between">
                        <h2 class="text-warning font-weight-bold">{{ betsQuantity }}</h2>
                        <i class="mdi mdi-folder-outline mdi-18px text-dark"></i>
                    </div>
                </div>
                <canvas id="projects"></canvas>
                <div class="line-chart-row-title">Bets</div>
            </div>
        </div>
        <div class="col-lg-2 grid-margin stretch-card">
            <div class="card">
                <div class="card-body pb-0">
                    <div class="d-flex align-items-center justify-content-between">
                        <h2 class="text-warning font-weight-bold">{{ betsQuantity }}</h2>
                        <i class="mdi mdi-folder-outline mdi-18px text-dark"></i>
                    </div>
                </div>
                <canvas id="projects"></canvas>
                <div class="line-chart-row-title">Bets</div>
            </div>
        </div>
        <div class="col-lg-2 grid-margin stretch-card">
            <div class="card">
                <div class="card-body pb-0">
                    <div class="d-flex align-items-center justify-content-between">
                        <h2 class="text-warning font-weight-bold">{{ betsQuantity }}</h2>
                        <i class="mdi mdi-folder-outline mdi-18px text-dark"></i>
                    </div>
                </div>
                <canvas id="projects"></canvas>
                <div class="line-chart-row-title">Bets</div>
            </div>
        </div>
        <div class="col-lg-2 grid-margin stretch-card">
            <div class="card">
                <div class="card-body pb-0">
                    <div class="d-flex align-items-center justify-content-between">
                        <h2 class="text-warning font-weight-bold">{{ betsQuantity }}</h2>
                        <i class="mdi mdi-folder-outline mdi-18px text-dark"></i>
                    </div>
                </div>
                <canvas id="projects"></canvas>
                <div class="line-chart-row-title">Bets</div>
            </div>
        </div>
        <div class="col-lg-2 grid-margin stretch-card">
            <div class="card">
                <div class="card-body pb-0">
                    <div class="d-flex align-items-center justify-content-between">
                        <h2 class="text-warning font-weight-bold">{{ betsQuantity }}</h2>
                        <i class="mdi mdi-folder-outline mdi-18px text-dark"></i>
                    </div>
                </div>
                <canvas id="projects"></canvas>
                <div class="line-chart-row-title">Bets</div>
            </div>
        </div>
        <div class="col-lg-2 grid-margin stretch-card">
            <div class="card">
                <div class="card-body pb-0">
                    <div class="d-flex align-items-center justify-content-between">
                        <h2 class="text-warning font-weight-bold">{{ betsQuantity }}</h2>
                        <i class="mdi mdi-folder-outline mdi-18px text-dark"></i>
                    </div>
                </div>
                <canvas id="projects"></canvas>
                <div class="line-chart-row-title">Bets</div>
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
        mounted(){
          var projectsData = {
                labels: ["Jan", "Feb", "Mar", "Apr", "May"],
                datasets: [{
                    label: 'Bets',
                    data: [38, 39, 37, 40, 36],
                    backgroundColor: [
                        '#f7f7f7',
                    ],
                    borderColor: [
                        '#dcdcdc'
                    ],
                    borderWidth: 2,
                    fill: true,
                }, ],
            };
            var projectsOptions = {
                scales: {
                    yAxes: [{
                        display: false,
                    }],
                    xAxes: [{
                        display: false,
                    }],
                },
                legend: {
                    display: false,
                },
                elements: {
                    point: {
                        radius: 2
                    },
                },
                plugins: {
                    datalabels: {
                        display: false,
                        align: 'center',
                        anchor: 'center'
                    }
                }
            };
            if ($("#projects").length) {
                var lineChartCanvas = $("#projects").get(0).getContext("2d");
                var saleschart = new Chart(lineChartCanvas, {
                    type: 'line',
                    data: projectsData,
                    options: projectsOptions
                });
            }
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
