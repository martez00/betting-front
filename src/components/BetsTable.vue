<template>
    <div class="table-responsive" v-if="bets != null">
        <table class="table table-striped">
            <thead>
            <tr>
                <th>User name</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Info</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(bet, index) in bets" :key="index">
                <td>{{ bet.user.name }}</td>
                <td>{{ bet.stake_amount }}</td>
                <td>{{ bet.created_at }}</td>
                <td><i class="mdi mdi-information" style="cursor:pointer" @click="showInfoModal(bet)"></i></td>
            </tr>
            </tbody>
        </table>
        <BetInfoModal :bet="selectedBet" v-if="showInfo" @close="closeInfoModal"/>
    </div>
</template>

<script>
    import {RepositoryFactory} from '@/repositories/RepositoryFactory';
    import BetInfoModal from '@/components/modals/BetInfo';

    const BetsRepository = RepositoryFactory.get('bets');
    export default {
        name: "BetsTable",
        components: {
            BetInfoModal
        },
        data() {
            return {
                bets: null,
                selectedBet: null,
                showInfo: false,
            };
        },
        async created() {
            await this.getBets();
        },
        methods: {
            async getBets() {
                const {data} = await BetsRepository.get('?user_info=true&order_by=created_at&order_by_keyword=DESC&selection_info=true');
                this.bets = data.data;
            },
            closeInfoModal() {
                this.selectedBet = null;
                this.showInfo = false;
            },
            showInfoModal(bet) {
                this.selectedBet = bet;
                this.showInfo = true;
            },
        }
    }
</script>

<style scoped>

</style>