<template>
    <Form type="lg">
        <div class="form__title">
            <span>Add Flight</span>
        </div>
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
            <b-input v-model="flight.departureDate" required></b-input>
        </b-field>
        <b-field label="Arrive Date:">
            <b-input v-model="flight.arriveDate" required></b-input>
        </b-field>
        <div class="button-container">
            <b-button @click="$router.push('/home')">GO BACK</b-button>
            <b-button @click="createFlight()">ADD FLIGHT</b-button>
        </div>
    </Form>
</template>
<script>
import Form from '@/components/Form.vue'
import { mapState } from 'vuex'
import axios from 'axios';
export default {
    data() {
        return {
            flight: {
                airline: "",
                origin: "",
                destination: "",
                departureDate: "",
                arriveDate: ""
            }
        }
    },
    components: {
        Form
    },
    computed: {
        ...mapState(["selectedPilot"])
    },
    methods: {
        createFlight() {
            this.selectedPilot.flights.push(this.flight);
            axios.put(`http://localhost:6969/pilot/${this.selectedPilot.username}`, this.selectedPilot).then(() => {
                this.flight = {
                    airline: "",
                    origin: "",
                    destination: "",
                    departureDate: "",
                    arriveDate: ""
                }
            });
        }
    }
}
</script>