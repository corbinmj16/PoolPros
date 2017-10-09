<template>
    <footer>
        <div class="footer_main">
            <div class="footer_logo">
                <img src="../assets/images/pool-pros-logo-footer.png" alt="Pool Pros footer logo" />
            </div>
            <div class="footer_social">
                <p>Connect With Us</p>
                <ul class="inline_list">
                    <li class="icon twitter">
                        <a href="https://twitter.com" target="_blank">
                            <span class="hidden">Twitter</span>
                            <img src="../assets/images/twitter-icon.png" alt="Pool Pros Twitter" title="Connect with us on Twitter" />
                        </a>
                    </li>
                    <li class="icon facebook">
                        <a href="https://facebook.com" target="_blank">
                            <span class="hidden">Facebook</span>
                            <img src="../assets/images/facebook-icon.png" alt="Pool Pros Facebook" title="Connect with us on Facebook" />
                        </a>
                    </li>
                    <li class="icon youtube">
                        <a href="https://youtube.com" target="_blank">
                            <span class="hidden">YouTube</span>
                            <img src="../assets/images/youtube-icon.png" alt="Pool Pros YouTube" title="Connect with us on YouTube" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        <div class="footer_bottom">
            <ul class="inline_list quick_links">
                <li>
                    <a href="/">Dealers and Distributors</a>
                </li>
                <li class="commercial">
                    <a href="#">Commercial Service 
                    <img src="../assets/images/action-commercial-icon.png" alt="Commercial Service Icon" />
                    </a>
                </li>
            </ul>
            <ul class="inline_list global_links">
                <li>&copy; 2017 Pool Pros</li>
                <li><a href="#">Privcy Policy</a></li>
                <li><a href="#">Terms and Conditions</a></li>
            </ul>
        </div>
       
    </footer>
</template>

<script>
    export default {
        name: "Footer-Area",
        data() {
            return {
            }
        },
    }
</script>