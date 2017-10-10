<template>
    <section class="filter_wrapper">
        <div class="container">
            <div class="filters">
                <div class="filter" v-for="(cert, index) in certifications" :key="index">
                    <input type="checkbox" :id="cert" :value="cert + ' Pro'" v-model="keywordsChecked" @change="updateCertifications(cert)" />
                    <label :for="cert">{{ cert }}</label>
                </div>
            </div>
            <h3>{{name}} - filter</h3>
        </div>
    </section>
</template>

<script>
    export default {
        name: "FilterArea",
        data() {
            return {
                certifications: ['Service', 'Installation', 'Residential', 'Commercial'],
                keywordsChecked: []
            }
        },
        computed: {
            name() {
                return this.$store.state.name;
            },
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