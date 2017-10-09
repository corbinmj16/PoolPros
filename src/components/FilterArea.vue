<template>
    <section class="filter_wrapper">
        <div class="container">
            <div class="filters">
                <div class="filter" v-for="(cert, index) in certifications" :key="index">
                    <input type="checkbox" :id="cert" :value="cert + ' Pro'" v-model="keywords" />
                    <label :for="cert">{{ cert }}</label>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "FilterArea",
        props: ["keywords"],
        data() {
            return {
                certifications: ['Service', 'Installation', 'Residential', 'Commercial'],
            }
        },
    }
</script>