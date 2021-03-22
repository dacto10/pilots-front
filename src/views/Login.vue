<template>
  <LoginForm type="md">
    <div class="form__title">
      <span>Login</span>
    </div>
    <b-field label="Username:">
      <b-input v-model="username" required></b-input>
    </b-field>
    <b-field label="Password:">
      <b-input v-model="password" required type="password"></b-input>
    </b-field>
    <div class="alert" v-if="isAlertActive">Incorrect username or password</div>
    <div class="button-container">
      <b-button @click="$router.push('/register')">SIGN UP</b-button>
      <b-button @click="login()">SIGN IN</b-button>
    </div>
  </LoginForm>
</template>
<script>
    import axios from 'axios';
    import LoginForm from '@/components/Form.vue'
    import {
        mapMutations,
        mapState
    } from 'vuex';
    export default {
        data() {
            return {
                axios,
                username: "",
                password: "",
                isAlertActive: false,
            }
        },
        computed: {
            ...mapState(["userInSession"])
        },
        methods: {
            ...mapMutations(["setUser"]),
            login() {
                axios.post('http://localhost:6969/pilot/login', {
                    username: this.username,
                    password: this.password
                }).then(res => {
                    if (Object.keys(res.data).length !== 0) {
                        if (!res.data.isAdmin) {
                            const aux = {
                                username: res.data.username,
                                password: res.data.password,
                                isAdmin: res.data.isAdmin,
                                birthDate: res.data.birthDate,
                                name: res.data.name,
                                flights: res.data.flights
                            }
                            axios.post(`http://localhost:6969/flight/all`, {
                                flights: res.data.flights
                            }).then(({data}) => {
                                 aux.flights = data;
                                 this.setUser(aux);
                                 this.$router.push('/home');
                            });
                        } else {
                            this.setUser(res.data);
                            this.$router.push('/home');
                        }
                        
                    } else {
                        this.showAlert();
                    }
                })
            },
            showAlert() {
                this.isAlertActive = true;
            }
        },
        components: {
            LoginForm
        }
    }
</script>