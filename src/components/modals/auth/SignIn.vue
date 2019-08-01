<template>
    <transition>
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">
                    <div class="modal-header">
                        {{ cardName }}
                        <button type="button" style="float:right" class="close" data-dismiss="modal" @click="close">
                            &times;
                        </button>
                    </div>
                    <div class="modal-body">
                        <Login v-if="showRegister === false" @closeModal="close" @showRegister="showRegisterCard"/>
                        <Register v-else @showLogin="showLoginCard"/>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    import Login from '@/components/modals/auth/Login';
    import Register from '@/components/modals/auth/Register';

    export default {
        name: "SignIn",
        components: {
            Login,
            Register
        },
        data() {
            return {
                showRegister: false,
                cardName: "User login",
            }
        },
        methods: {
            close() {
                this.$emit('close');
            },
            showRegisterCard() {
                this.showRegister = true;
                this.cardName = "New user registration";
            },
            showLoginCard() {
                this.showRegister = false;
                this.cardName = "User login";
            }
        }
    }
</script>

<style scoped>

</style>