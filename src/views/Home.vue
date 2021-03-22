<template>
  <div class="home" >
    <div class="d-container" v-if="userInSession.isAdmin">
      <div class="d-container__header">
        <h2>Welcome to the Pilots Manager</h2>
      </div>
      <div class="d-container__body">
        <div class="d-card" v-for="pilot in usersArray" :key="pilot.username">
          <div class="d-card__header">
            <div class="d-title">{{ pilot.name.firstName }} {{ pilot.name.lastName }}</div>
            <div class="button-container">
              <b-button @click="addFlight(pilot)">ADD FLIGHT</b-button>
              <b-button @click="deletePilot(pilot)" class="color-failure">DELETE PILOT</b-button>
            </div>
          </div>
          <div class="d-card__body">
            <table>
              <thead>
                <tr>
                  <th>Flight Id</th>
                  <th>Airline</th>
                  <th>Origin</th>
                  <th>Destination</th>
                  <th>Departure Date</th>
                  <th>Arrive Date</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="flight in pilot.flights" :key="flight.flightId">
                  <td>{{ flight.flightId }}</td>
                  <td>{{ flight.airline }}</td>
                  <td>{{ flight.origin }}</td>
                  <td>{{ flight.destination }}</td>
                  <td>{{ flight.departureDate }}</td>
                  <td>{{ flight.arriveDate }}</td>
                  <td @click="deleteFlight(pilot, flight)"><b-icon pack="fas" icon="times" class="remove-icon"></b-icon></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="d-container" v-else>
      <div class="d-container__header">
        <h2>Welcome {{userInSession.name.firstName}} {{userInSession.name.lastName}}</h2>
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
                  <th>Flight Id</th>
                  <th>Airline</th>
                  <th>Origin</th>
                  <th>Destination</th>
                  <th>Departure Date</th>
                  <th>Arrive Date</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="flight in userInSession.flights" :key="flight.flightId">
                  <td>{{flight.flightId}}</td>
                  <td>{{flight.airline}}</td>
                  <td>{{flight.origin}}</td>
                  <td>{{flight.destination}}</td>
                  <td>{{flight.departureDate}}</td>
                  <td>{{flight.arriveDate}}</td>
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
      this.userInSession === "" && this.$router.push("/");
      this.userInSession.isAdmin && this.getData();
    },
    methods: {
      ...mapMutations(["setUsersArray", "setSelectedPilot", "setFlights"]),
      async getData() {
        const {data} = await axios.get('http://localhost:6969/pilot/');
        const users = data.map(el => ({
          username: el.username,
          password: el.password,
          isAdmin: el.isAdmin,
          birthDate: el.birthDate,
          name: el.name,
          flights: el.flights
        })).filter(el => !el.isAdmin);
        users.forEach(async (el, index) => {
          const {data} = await axios.post(`http://localhost:6969/flight/all`, {
            flights: el.flights
          });
          el.flights = data;
        })
        this.setUsersArray(users)
      },
      addFlight(pilot) {
        this.setSelectedPilot(pilot);
        this.$router.push('/create-flight');
      },
      async deleteFlight(pilot, flight) {
        const {data} = await axios.delete(`http://localhost:6969/flight/${flight.flightId}`);
        await axios.put(`http://localhost:6969/pilot/remove/${pilot.username}/${data}`);
        this.getData();
      },
      deletePilot(pilot) {
        axios.delete(`http://localhost:6969/pilot/${pilot.username}`).then(() => this.getData());
      }
    }
  }
</script>