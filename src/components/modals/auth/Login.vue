<template>
    <div id="login">
        <div class="auth">
            <div class="alert alert-danger" v-if="has_error">
                Sorry, but it looks like you credentials are incorrect!
            </div>
            <div class="auth-form-transparent text-left">
                <form autocomplete="off" @submit.prevent="login" method="post">
                    <div class="form-group">
                        <label for="email">E-mail</label>
                        <div class="input-group">
                            <div class="input-group-prepend bg-transparent">
                      <span class="input-group-text bg-transparent border-right-0">
                        <i class="mdi mdi-account-outline text-primary"></i>
                      </span>
                            </div>
                            <input type="text" class="form-control form-control-lg border-left-0" id="email"
                                   placeholder="user@example.com" v-model="email" required>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <div class="input-group">
                            <div class="input-group-prepend bg-transparent">
                      <span class="input-group-text bg-transparent border-right-0">
                        <i class="mdi mdi-lock-outline text-primary"></i>
                      </span>
                            </div>
                            <input type="password" class="form-control form-control-lg border-left-0"
                                   id="password" placeholder="You password" required>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <button type="submit" class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn">Login</button>
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
        </div>
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
