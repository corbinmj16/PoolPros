<template>
    <div class="dealers">
        <div class="dealer" v-for="(dealer, index) in dealers" :key="index">
            <h1>{{dealer.data.name}}</h1>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Dealer",
        data() {
            return {
                dealers: this.$store.state.dealerData.dealers
            }
        },
        
    }
</script>