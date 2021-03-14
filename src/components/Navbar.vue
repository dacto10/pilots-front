<template>
    <div class="navbar">
        <div class="navbar__brand">
             <b-icon pack="fas" icon="plane" class="navbar__icon"></b-icon>
             <h2>Pilot Manager</h2>
        </div>
        <div class="navbar__user" @click="toggleDropdown()">
            <b-icon pack="fas" icon="user" class="navbar__icon"></b-icon>
        </div>
        <div class="navbar__dropdown" v-if="isDropdownActive">
            <div class="d-item">
                Log out
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isDropdownActive: false,
        }
    },
    methods: {
        toggleDropdown() {
            !this.isDropdownActive ? this.isDropdownActive = !this.isDropdownActive : this.isDropdownActive = false;
        }
    }
}
</script>