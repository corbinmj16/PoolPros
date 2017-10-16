<template>

    <div class="dealer">
        <div class="dealer_main">
            <div class="dealer_name">
                <h1>{{ dealer.name }}</h1>
            </div>
            <div class="dealer_info">
                <h2 class="phone">
                    <i class="ss-icon">phone</i>
                    <span>Tap to call</span>
                    {{ dealer.phone1 | phoneFormat }}
                </h2>
                <p class="question">Can't talk now? Click below to send an email.</p>
                <button class="email" @click="openModal(dealer.name)">
                    <i class="ss-icon">email</i> Contact this Pro
                </button>
                <div class="hours">
                    <p>Business Hours</p>
                    <ul>
                        <li>Weekdays {{dealer.weekHours.mon}}</li>
                        <li>Saturdays {{dealer.weekHours.sat | noTime}}</li>
                        <li>Sunday {{dealer.weekHours.sun | noTime}}</li>
                    </ul>
                </div>
            </div>

        </div>
        <div class="certifications">
            <ul>
                <li v-for="(cert, index) in dealer.certifications" :key="index" :class="cert | className">
                    <i class="ss-icon">{{cert | certificationsIcon}}</i>
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
        methods: {
            openModal(name) {
                this.$store.commit('updateDealerName', name);
                this.$store.commit('openModal');
            },
        },
        filters: {
            className(value) {
                return value.split(" ").join("_").toLowerCase();
            },
            certificationsIcon(value) {
                switch(value.toLowerCase()) {
                    case 'installation pro':
                        return 'star'
                        break;
                    case 'commercial pro':
                        return 'users'
                        break;
                    case 'residential pro':
                        return 'home'
                        break;
                    case 'service pro':
                        return 'settings'
                        break;
                    default:
                        return ''
                }
            },
            phoneFormat(value) {
                return value.split('-').join('.');
            },
            noTime(value) {
                return value == "" ? "- CLOSED" : value;
            }
        }
    }
</script>
