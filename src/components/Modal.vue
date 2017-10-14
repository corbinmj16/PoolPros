<template>
    <div class="modal_wrapper">
        <div class="modal">
            <div class="modal_header">
                <div class="close" @click="closeModal">
                    <i class="ss-icon">close</i>
                </div>
                <p>Email</p>
                <h2>{{dealerName}}</h2>
            </div>

            <div class="modal_body">
                <p>Fill out the form below and {{dealerName}} will get in touch.</p>
                <form v-on:submit.prevent>
                    <div class="form_input">
                        <img v-bind:src="checkMarkSrc">
                        <label for="name">First and last name</label><br>
                        <input type="text" name="name" id="name">
                    </div>
                    <div class="form_input phone">
                        <label for="phone">Phone number</label><br>
                        <input type="tel" name="phone" id="phone">
                    </div>
                    <div class="form_input">
                        <label for="email">Email address</label><br>
                        <input type="email" name="email" id="email">
                    </div>
                    <div class="form_input">
                        <label for="comments">Comments or questions</label><br>
                        <textarea name="comments" id="comments"></textarea>
                    </div>
                    <div class="form_input">
                        <label for="email">Do you currently own a pool or spa?</label><br>
                        yes no 
                    </div>
                    <div class="form_submit">
                        <button type="submit">
                            Send my email
                            <i class="ss-icon">next</i>
                        </button>
                    </div>
                </form>
            </div>

            <div class="modal_footer">
                <p>*Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Modal",
        data() {
            return {
                checkMarkSrc: "../src/assets/images/circle-form.png"
            }
        },
        computed: {
            dealerName() {
                return this.$store.state.dealerNameModal;
            }
        },
        methods: {
            closeModal() {
                this.$store.commit('closeModal');
            }
        }
    }
</script>