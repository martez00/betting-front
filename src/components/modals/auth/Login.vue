<template>
    <transition>
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">
                    <div class="modal-header">
                        User Login
                        <button type="button" style="float:right" class="close" data-dismiss="modal" @click="close">
                            &times;
                        </button>
                    </div>
                    <div class="modal-body">
                        <slot name="body">
                            <div class="alert alert-danger" v-if="has_error">
                                <p>Erreur, impossible de se connecter avec ces identifiants.</p>
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
                                <button type="submit" class="btn btn-primary">Login</button>
                            </form>
                        </slot>
                    </div>
                </div>
            </div>
        </div>
    </transition>
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
                // get the redirect object
                this.$auth.login({
                    data: {
                        email: this.email,
                        password: this.password
                    },
                    success: function() {
                        this.success = true
                    },
                    error: function() {
                        this.has_error = true
                        this.error = res.response.data.error
                    },
                    url: 'auth/login',
                    rememberMe: true,
                    fetchUser: true
                })
            },
            close() {
                this.$emit('close');
            }
        }
    }
</script>

<style scoped>

</style>