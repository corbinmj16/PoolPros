<template>
    <header>
		<div class="top">
            <div class="container">
                <ul class="inline_list quick_links">
                    <li><a href="#">Dealers and Distributors</a></li>
                    <li class="commercial">
                        <a href="#">Commercial Service 
                        <img src="../assets/images/action-commercial-icon.png" alt="Commercial Service Icon" />
                        </a>
                    </li>
                </ul>    
            </div>			
		</div>

		<div class="nav_wrapper">
            <span class="logo">
                <span class="hidden">PoolPros</span>
                <img src="../assets/images/pool-pros-logo.png" alt="PoolPros Logo" />
            </span>
            <nav v-bind:class="{ open: mobileMenuBool }">
                <div class="mobile_nav_info">
                    <p>Menu</p>
                    <div class="close_nav" @click="closeMobileMenu">
                        <img src="../assets/images/close-menu.png" alt="Close Menu" />
                    </div>
                </div>
                <ul class="inline_list">
                    <li><a href="#">Pools &amp; Spas</a></li>
                    <li><a href="#">Supplies</a></li>
                    <li><a href="#">Resources</a></li>
                    <li><a href="#">Services</a></li>
                </ul>
            </nav>
            <div class="mobile_area">
                <p class="find_a_pro">
                    <img src="../assets/images/location-icon.png" alt="Location Icon" />
                    Find A Pro
                </p>
                <div class="mobile_menu" @click="openMobileMenu">
                    <span class="hidden">Menu</span>
                    <img src="../assets/images/menu-icon-mobile.png" alt="mobile menu icon" />
                </div>
            </div>
                
		</div>
	</header>
</template>

<script>
    export default {
        name: "Navigation",
        data() {
            return {
                mobileMenuBool: false
            }
        },
        methods: {
            openMobileMenu: function() {
                this.mobileMenuBool = true;
            },
            closeMobileMenu: function() {
                this.mobileMenuBool = false;
            }
        }
    }
</script>