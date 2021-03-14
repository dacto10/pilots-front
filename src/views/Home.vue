<template>
  <div class="home" >
    <div class="d-container" v-if="userInSession.isAdmin">
      <div class="d-container__header">
        <h2>Pilots</h2>
      </div>
      <div class="d-container__body">
        <div class="d-card" v-for="pilot in usersArray" :key="pilot.username">
          <div class="d-card__header">
            <div class="d-title">{{ pilot.name }}</div>
            <div class="button-container">
              <b-button @click="$router.push('/create-flight')">ADD FLIGHT</b-button>
            </div>
          </div>
          <div class="d-card__body">
            <table>
              <thead>
                <tr>
                  <th>Origin</th>
                  <th>Destination</th>
                  <th>Departure Date</th>
                  <th>Arrive Date</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="flight in pilot.flights" :key="flight.origin">
                  <td>{{ flight.origin }}</td>
                  <td>{{ flight.destination }}</td>
                  <td>{{ flight.departureDate }}</td>
                  <td>{{ flight.arriveDate }}</td>
                  <td><b-icon pack="fas" icon="times" class="remove-icon"></b-icon></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="d-container" v-else>
      <div class="d-container__header">
        <h2>Welcom Capitan Acosta</h2>
      </div>
      <div class="d-container__body">
        <div class="d-card">
          <div class="d-card__title">
            <div class="d-title">Your Flights</div>
          </div>
          <div class="d-card__body">
            <table>
              <thead>
                <tr>
                  <th>Origin</th>
                  <th>Destination</th>
                  <th>Departure Date</th>
                  <th>Arrive Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Venezuela :v</td>
                  <td>Santander</td>
                  <td>12/2/2021 20:00</td>
                  <td>13/2/2021 15:14</td>
                </tr>
                <tr>
                  <td>Venezuela :v</td>
                  <td>Santander</td>
                  <td>12/2/2021 20:00</td>
                  <td>13/2/2021 15:14</td>
                </tr>
                <tr>
                  <td>Venezuela :v</td>
                  <td>Santander</td>
                  <td>12/2/2021 20:00</td>
                  <td>13/2/2021 15:14</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import axios from 'axios';
  export default {
    name: 'Home',
    data() {
      return {
        axios
      }
    },
    computed: {
      ...mapState(["userInSession", "usersArray"])
    },
    beforeMount() {
      if (this.userInSession.isAdmin) {
        axios.get('http://localhost:6969/pilot/').then(res => {
          this.setUsersArray(res.data.filter(el => !el.isAdmin));
        })
        console.log(this.$route.name);
      }
    },
    methods: {
      ...mapMutations(["setUsersArray"])
    }
  }
</script>