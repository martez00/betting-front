<template>
    <transition>
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">
                        <div class="modal-header">
                            <slot name="header">
                                <b>Bet info [ID: {{ bet.id }}]</b>
                                <button type="button" style="float:right" class="close" data-dismiss="modal" @click="close">&times;</button>
                            </slot>
                        </div>

                        <div class="modal-body">
                            <slot name="body">
                               <ul>
                                   <li><b>Stake amount:</b> {{ bet.stake_amount }}</li>
                                   <li><b>Created at:</b> {{ bet.created_at }}</li>
                                   <li><b>User:</b> {{ bet.user.name }}</li>
                               </ul>
                                <table class="table table-striped">
                                    <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Odd</th>
                                        <th>Match ID</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="(betSelection, index) in bet.bet_selections" :key="index">
                                        <td>{{ betSelection.selection_id }}</td>
                                        <td>{{ betSelection.odds }}</td>
                                        <td>{{ betSelection.selection.match_id }}</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </slot>
                        </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "BetInfo",
        props: ["bet"],
        methods: {
            close(){
                this.$emit('close');
            }
        }
    }
</script>

<style scoped>

</style>