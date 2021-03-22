<template>
    <Form type="lg">
        <div class="form__title">
            <span>Add Flight</span>
        </div>
        <b-field label="Flight Id:">
            <b-input v-model="flight.flightId" required></b-input>
        </b-field>
        <b-field label="Airline:">
            <b-input v-model="flight.airline" required></b-input>
        </b-field>
        <b-field label="Origin:">
            <b-input v-model="flight.origin" required></b-input>
        </b-field>
        <b-field label="Destination:">
            <b-input v-model="flight.destination" required></b-input>
        </b-field>
        <b-field label="Departure Date:">
            <b-datetimepicker v-model="flight.departureDate" placeholder="Click to select.." />
        </b-field>
        <b-field label="Arrive Date:">
            <b-datetimepicker v-model="flight.arriveDate" placeholder="Click to select.." />
        </b-field>
        <div class="button-container">
            <b-button @click="$router.push('/home')">GO BACK</b-button>
            <b-button @click="createFlight()">ADD FLIGHT</b-button>
        </div>
    </Form>
</template>
<script>
    import Form from '@/components/Form.vue'
    import {
        mapState
    } from 'vuex'
    import axios from 'axios';
    export default {
        data() {
            return {
                flight: {
                    flightId: "",
                    airline: "",
                    origin: "",
                    destination: "",
                    departureDate: new Date(),
                    arriveDate: new Date()
                },

            }
        },
        components: {
            Form
        },
        computed: {
            ...mapState(["selectedPilot"])
        },
        methods: {
             async createFlight() {
                const {data} = await axios.post(`http://localhost:6969/flight`, this.flight);
                await axios.put(`http://localhost:6969/pilot/${this.selectedPilot.username}/${data}`);
                this.flight = {
                    airline: "",
                    origin: "",
                    destination: "",
                    departureDate: new Date(),
                    arriveDate: new Date()
                }
            }
        }
    }
</script>