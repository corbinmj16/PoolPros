<template>
    <section class="filter_wrapper container">
        <div class="filter_info">
            {{ matchCount }} dealers in {{ zip }}
        </div>
        <div class="filter_dropdown" :class="{active: showFilters}">
            <p>
                <span>Filter Results</span>
                <i class="ss-icon dropdown_arrow" @click="toggleFilterDropdown">dropdown</i>
            </p>
        </div>

        <div class="filters" :class="{open: showFilters}">
            <div class="filter" v-for="(cert, index) in certifications" :key="index">
                <input type="checkbox" :id="cert" :value="cert + ' Pro'" v-model="keywordsChecked" @change="updateCertifications(cert)" />
                <label :for="cert">{{ cert }}</label>
            </div>
            <div class="tool_tip" :title="toolTip">
                <img src="src/assets/images/tool-tip-icon-filtering.png" alt="Tool Tip">
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
                keywordsChecked: [],
                showFilters: false,
                toolTip: "Filter the dealers by their certifications"
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
            },
            toggleFilterDropdown() {
                this.showFilters = !this.showFilters;
            }
        }
    }
</script>
