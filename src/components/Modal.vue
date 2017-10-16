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
                <form @submit.prevent="validateForm">
                    <div class="form_input">
                        <img v-bind:src="errors.has('name') || fields.name.invalid ? invalidSrc : validSrc">
                        <label for="name">First and last name</label><br>
                        <input type="text" name="name" id="name" v-model="name" v-validate="'required|min:4|alpha'">
                        <p class="error" v-if="errors.has('name')">{{errors.first('name')}}</p>
                    </div>
                    <div class="form_input phone">
                        <img v-bind:src="errors.has('phone') || fields.phone.invalid ? invalidSrc : validSrc">
                        <label for="phone">Phone number</label><br>
                        <input type="tel" name="phone" id="phone" v-model.number="phone" v-validate="'required|numeric|min:10|max:10'" />
                        <p class="error" v-if="errors.has('phone')">{{errors.first('phone')}}</p>
                    </div>
                    <div class="form_input">
                        <img v-bind:src="errors.has('email') || fields.email.invalid ? invalidSrc : validSrc">
                        <label for="email">Email address</label><br>
                        <input type="email" v-model="email" name="email" id="email" v-validate="'required|email'">
                        <p class="error" v-if="errors.has('email')">{{errors.first('email')}}</p>
                    </div>
                    <div class="form_input">
                        <span class="optional">Optional</span>
                        <label for="comments">Comments or questions</label><br>
                        <textarea name="comments" id="comments" v-model="comment"></textarea>
                    </div>
                    <div class="form_input">
                        <span class="optional">Optional</span>
                        <label>Do you currently own a pool or spa?</label><br>
                        <div class="radio">
                            <input type="radio" name="yes" value="yes" v-model="pool_spa">
                            <label for="yes">Yes</label>
                        </div>
                        <div class="radio">
                            <input type="radio" name="no" value="no" v-model="pool_spa">
                            <label for="no">No</label>
                        </div>
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
                name: '',
                phone: '',
                email: '',
                pool_spa: '',
                comment: '',
                invalidSrc: "./src/assets/images/circle-form.png",
                validSrc: "./src/assets/images/checkmark-circle.png",
            }
        },
        computed: {
            dealerName() {
                return this.$store.state.dealerNameModal;
            },
        },
        methods: {
            closeModal() {
                this.$store.commit('closeModal');
            },
            validateForm() {
                this.$validator.validateAll().then((result) => {
                    if (result) {
                        this.$store.commit('closeModal');
                        this.name = '';
                        this.phone = '';
                        this.email = '';
                        this.pool_spa = '';
                        this.comment = '';
                        this.$validator.reset();
                        return;
                    }
                });
            }
        }
    }
</script>
