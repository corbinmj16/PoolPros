<template>
    <div class="dealer">
        <h1>{{ dealer.name }}</h1>
        <ul>
            <li v-for="(cert, index) in dealer.certifications" :key="index">
                {{cert}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Dealer",
        props: ['dealer'],
    }
</script>