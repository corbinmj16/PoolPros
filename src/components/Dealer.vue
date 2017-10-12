<template>
    
    <div class="dealer">
        <div class="main">
            <h1>{{ dealer.name }}</h1>
            <h2>{{ dealer.phone1 }}</h2>
            <p>Can't talk now? Click below to send an email.</p>
            <button>Contact this Pro</button>
            <div class="hours">
                <p>Business Hours</p>

            </div>
        </div>
        <div class="certifications">
            <ul>
                <li v-for="(cert, index) in dealer.certifications" :key="index">
                    {{cert}}
                </li>
            </ul>
        </div>
        
    </div>
</template>

<script>
    export default {
        name: "Dealer",
        props: ['dealer'],
    }
</script>