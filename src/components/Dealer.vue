<template>
    <div class="dealer">
        <h1>{{ dealer.name }}</h1>
    </div>
</template>

<script>
    export default {
        name: "Dealer",
        props: ['dealer'],
    }
</script>