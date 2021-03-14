<template>
    <LoginForm type="md">
        <div class="form__title">
            <span>Login</span>
        </div>
        <b-field label="Username:">
            <b-input v-model="username" required></b-input>
        </b-field>
        <b-field label="Password:">
            <b-input v-model="password" required></b-input>
        </b-field>
        <div class="button-container">
            <b-button @click="$router.push('/register')">SIGN UP</b-button>
            <b-button>SIGN IN</b-button>
        </div>
    </LoginForm>
</template>
<script>
import LoginForm from '@/components/Form.vue'
export default {
    components: {
        LoginForm
    }
}
</script>