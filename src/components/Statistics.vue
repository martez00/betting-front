<template>
        <div class="row">
            <div class="col-lg-4 grid-margin stretch-card">
                <div class="card">
                    <div class="card-body pb-0">
                        <div class="d-flex align-items-center justify-content-between">
                            <h2 class="text-black font-weight-bold"><span v-if="betsByMonth != null">{{ betsByMonth.total }}</span>
                            </h2>
                        </div>
                    </div>
                    <canvas id="bets"></canvas>
                    <div class="line-chart-row-title">Bets</div>
                </div>
            </div>
            <div class="col-lg-4 grid-margin stretch-card">
                <div class="card">
                    <div class="card-body pb-0">
                        <div class="d-flex align-items-center justify-content-between">
                            <h2 class="text-warning font-weight-bold"><span v-if="usersByMonth != null">{{ usersByMonth.total }}</span>
                            </h2>
                        </div>
                    </div>
                    <canvas id="users"></canvas>
                    <div class="line-chart-row-title">Users</div>
                </div>
            </div>
            <div class="col-lg-4 grid-margin stretch-card">
                <div class="card">
                    <div class="card-body pb-0">
                        <div class="d-flex align-items-center justify-content-between">
                            <h2 class="text-danger font-weight-bold"><span v-if="balanceTransactionsByMonth != null">{{ balanceTransactionsByMonth.total }}</span>
                            </h2>
                        </div>
                    </div>
                    <canvas id="balance_transactions"></canvas>
                    <div class="line-chart-row-title">Balance Transactions</div>
                </div>
            </div>
        </div>
</template>

<script>
    import {RepositoryFactory} from '@/repositories/RepositoryFactory';

    const StatisticRepository = RepositoryFactory.get('statistics');

    export default {
        name: "Statistics",
        data() {
            return {
                betsByMonth: null,
                usersByMonth: null,
                balanceTransactionsByMonth: null,
            };
        },
        async created() {
            await this.getBetsData();
            await this.getUsersData();
            await this.getBalanceTransactionsData();
            await this.drawCanvas("bets", this.betsByMonth);
            await this.drawCanvas("users", this.usersByMonth);
            await this.drawCanvas("balance_transactions", this.balanceTransactionsByMonth);
        },
        methods: {
            async getBetsData() {
                const {data} = await StatisticRepository.get('/months?quantity=6&table=bets');
                this.betsByMonth = data.data;
            },
            async getUsersData() {
                const {data} = await StatisticRepository.get('/months?quantity=6&table=users');
                this.usersByMonth = data.data;
            },
            async getBalanceTransactionsData() {
                const {data} = await StatisticRepository.get('/months?quantity=6&table=balance_transactions');
                this.balanceTransactionsByMonth = data.data;
            },
            async drawCanvas(canvasID, data) {
                let chartDataArray = data.values_by_month;
                let monthsArray = [];
                let dataArray = [];

                chartDataArray.forEach(function (dataByMonth) {
                    monthsArray.push(dataByMonth.month);
                    dataArray.push(dataByMonth.total);
                });

                let canvasData = {
                    labels: monthsArray,
                    datasets: [{
                        label: 'Bets',
                        data: dataArray,
                        backgroundColor: [
                            '#f7f7f7',
                        ],
                        borderColor: [
                            '#dcdcdc'
                        ],
                        borderWidth: 1,
                        fill: true,
                    },],
                };

                let canvasOptions = {
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

                if ($("#" + canvasID).length) {
                    let lineChartCanvas = $("#" + canvasID).get(0).getContext("2d");
                    let chart = new Chart(lineChartCanvas, {
                        type: 'line',
                        data: canvasData,
                        options: canvasOptions
                    });
                }
            }
        }
    }
</script>

<style scoped>

</style>
