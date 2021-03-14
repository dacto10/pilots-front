<template>
    <RegisterForm type="lg">
        <div class="form__title">
            <span>Register</span>
        </div>
        <b-field label="Name:">
            <b-input v-model="name" required></b-input>
        </b-field>
        <b-field label="Username:">
            <b-input v-model="username" required></b-input>
        </b-field>
        <b-field label="Password:">
            <b-input v-model="password" required></b-input>
        </b-field>
        <div class="button-container">
            <b-button @click="$router.push('/')">GO BACK</b-button>
            <b-button>SIGN UP</b-button>
        </div>
    </RegisterForm>
</template>
<script>
import RegisterForm from '@/components/Form.vue'
export default {
    components: {
        RegisterForm
    }  
}
</script>