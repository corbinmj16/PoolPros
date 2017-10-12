<template>
    <section class="filter_wrapper container">
        <div class="filter_info">
            {{ matchCount }} dealers in {{ zip }}
        </div>
        <p>Filter Results</p>
        <div class="filters">
            <div class="filter" v-for="(cert, index) in certifications" :key="index">
                <input type="checkbox" :id="cert" :value="cert + ' Pro'" v-model="keywordsChecked" @change="updateCertifications(cert)" />
                <label :for="cert">{{ cert }}</label>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "FilterArea",
        props: ['zip', 'matchCount'],
        data() {
            return {
                certifications: ['Service', 'Installation', 'Residential', 'Commercial'],
                keywordsChecked: []
            }
        },
        computed: {
            newKeywords() {
                return this.keywordsChecked;
            }
        },
        methods: {
            updateCertifications(item) {
                this.$store.commit('updateKeywords', this.keywordsChecked);
            }
        }
    }
</script>