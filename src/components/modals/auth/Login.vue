<template>
    <div id="login">
        <div class="alert alert-danger" v-if="has_error">
            Sorry, but it looks like you credentials are incorrect!
        </div>
        <form autocomplete="off" @submit.prevent="login" method="post">
            <div class="form-group">
                <label for="email">E-mail</label>
                <input type="email" id="email" class="form-control" placeholder="user@example.com"
                       v-model="email" required>
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" class="form-control" v-model="password"
                       required>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <button type="submit" class="btn btn-primary">Login</button>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <hr>
                    <div class="d-flex align-items-center justify-content-center">
                        <span @click="showRegisterCard" class="text_link">Don't have an
                            account yet? Register then!</span>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                email: null,
                password: null,
                success: false,
                has_error: false,
                error: ''
            }
        },
        methods: {
            login() {
                this.$auth.login({
                    params: {
                        email: this.email,
                        password: this.password
                    },
                    success: function () {
                        this.success = true;
                        this.close();
                    },
                    error: function (res) {
                        this.has_error = true;
                        this.error = res.response.data.error || ''
                    },
                    rememberMe: true,
                    fetchUser: true,
                });
            },
            close() {
                this.$emit('closeModal');
            },
            showRegisterCard() {
                this.$emit('showRegister');
            }
        }
    }
</script>

<style scoped>

</style>