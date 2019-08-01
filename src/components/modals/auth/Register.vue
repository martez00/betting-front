<template>
    <div id="register">
        <div id="register_form" v-if="success === false">
            <div class="alert alert-danger" v-if="has_error">
                Sorry, but it looks like your registration process was unsuccesfully! Please try again.
            </div>
            <form autocomplete="off" @submit.prevent="register" method="post">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" id="name" class="form-control" placeholder="Your name"
                           v-model="name" required>
                </div>
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
                        <button type="submit" class="btn btn-primary">Create new user</button>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <hr>
                        <div class="d-flex align-items-center justify-content-center">
                            <span @click="showLoginCard" class="text_link">Do you have an account? Sign in then!</span>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        <div v-else>
            <div class="alert alert-success">
                Congratulations! You sucessfully created a new user. Please <span @click="showLoginCard" class="text_link">sign in</span>!
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Register",
        data() {
            return {
                email: null,
                password: null,
                name: null,
                success: false,
                has_error: false,
                error: ''
            }
        },
        methods: {
            register() {
                this.$auth.register({
                    params: {
                        name: this.name,
                        email: this.email,
                        password: this.password,
                    },
                    success: function () {
                        this.success = true;
                    },
                    error: function (res) {
                        this.has_error = true;
                        this.error = res.response.data.error || ''
                    }
                });
            },
            showLoginCard() {
                this.$emit('showLogin');
            }
        }
    }
</script>

<style scoped>

</style>