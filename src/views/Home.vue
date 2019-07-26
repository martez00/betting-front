<template>
  <div class="home">

  </div>
</template>

<script>
  import { RepositoryFactory } from './../repositories/RepositoryFactory';
  const BetsRepository = RepositoryFactory.get('bets');

export default {
  name: 'home',
  data() {
    return {
      isLoading: false,
      bets: [],
    };
  },
  created () {
    //this.getBets();
  },
  methods: {
    /*async getBets () {
      this.isLoading = true;
      const { data } = await BetsRepository.get();
      this.isLoading = false;
      this.bets = data;
    }*/
  }
}
</script>
