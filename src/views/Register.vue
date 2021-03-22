<template>
    <RegisterForm type="lg">
        <div class="form__title">
            <span>Register</span>
        </div>
        <b-field label="First Name:">
            <b-input v-model="name" required></b-input>
        </b-field>
        <b-field label="Last Name:">
            <b-input v-model="lastName" required></b-input>
        </b-field>
        <b-field label="Username:">
            <b-input v-model="username" required></b-input>
        </b-field>
        <b-field label="Password:">
            <b-input v-model="password" required type="password"></b-input>
        </b-field>
        <b-field label="Birth Date:">
            <b-datetimepicker v-model="birth" placeholder="Click to select.." />
        </b-field>
        <div class="button-container">
            <b-button @click="$router.push('/')">GO BACK</b-button>
            <b-button @click="signUp()">SIGN UP</b-button>
        </div>
    </RegisterForm>
</template>
<script>
import RegisterForm from '@/components/Form.vue'
import axios from 'axios';
export default {
    data() {
        return {
            name: "",
            lastName: "",
            username: "",
            password: "",
            birth: new Date()
        }
    },
    methods: {
        signUp() {
            axios.post(`http://localhost:6969/pilot/`, {
                username: this.username,
                name: {
                    firstName: this.name,
                    lastName: this.lastName
                },
                password: this.password,
                birthDate: this.birth
            }).then(() => {
                this.$router.push('/')
            });
        }
    },
    components: {
        RegisterForm
    }
}
</script>