<template>
    <div class="table-responsive" v-if="users != null">
        <table class="table table-striped">
            <thead>
            <tr>
                <th>Name</th>
                <th>E-mail</th>
                <th>Balance</th>
                <th>Created at</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(user, index) in users" :key="index">
                <td>{{ user.name }}</td>
                <td>{{ user.email }}</td>
                <td>{{ user.balance }}</td>
                <td> {{ user.created_at }}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import {RepositoryFactory} from '@/repositories/RepositoryFactory';

    const UsersRepository = RepositoryFactory.get('users');
    export default {
        name: "UsersTable",
        data() {
            return {
                users: null,
            };
        },
        async created() {
            await this.getUsers();
        },
        methods: {
            async getUsers() {
                const {data} = await UsersRepository.get('?order_by=id&order_by_keyword=DESC');
                this.users = data.data;
            }
        }
    }
</script>

<style scoped>

</style>