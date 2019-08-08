<template>
    <div class="table-responsive" v-if="sports != null">
        <table class="table table-striped">
            <thead>
            <tr class="active-admin-menu">
                <th>Name</th>
                <th>Description</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(sport, index) in sports" :key="index">
                <td>{{ sport.name }}</td>
                <td>{{ sport.description }}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import {RepositoryFactory} from '@/repositories/RepositoryFactory';

    const SportsRepository = RepositoryFactory.get('sports');
    export default {
        name: "SportsTable",
        data() {
            return {
                sports: null,
            };
        },
        async created() {
            await this.getSports();
        },
        methods: {
            async getSports() {
                const {data} = await SportsRepository.get();
                this.sports = data.data;
            }
        }
    }
</script>

<style scoped>

</style>