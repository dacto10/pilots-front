<template>
    <div class="navbar">
        <div class="navbar__brand">
             <b-icon pack="fas" icon="plane" class="navbar__icon"></b-icon>
             <h2>Pilot Manager</h2>
        </div>
        <div class="navbar__user" @click="toggleDropdown()" v-if="$route.name !== 'Login' && $route.name !== 'Register'">
            <b-icon pack="fas" icon="user" class="navbar__icon"></b-icon>
        </div>
        <div class="navbar__dropdown" v-if="isDropdownActive">
            <div class="d-item" @click="logOut()">
                Log out
            </div>
        </div>
    </div>
</template>
<script>
import { mapMutations } from 'vuex';
export default {
    data() {
        return {
            isDropdownActive: false,
        }
    },
    methods: {
        ...mapMutations(["removeUser"]),
        toggleDropdown() {
            !this.isDropdownActive ? this.isDropdownActive = !this.isDropdownActive : this.isDropdownActive = false;
        },
        logOut() {
            this.removeUser();
            this.$router.push("/")
            this.isDropdownActive = false;
        }
    }
}
</script>