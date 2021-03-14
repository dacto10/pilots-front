<template>
  <div class="home" >
    <div class="d-container" v-if="false">
      <div class="d-container__header">
        <h2>Pilots</h2>
      </div>
      <div class="d-container__body">
        <div class="d-card">
          <div class="d-card__header">
            <div class="d-title">El pepe</div>
            <div class="button-container">
              <b-button>SHOW FLIGHTS</b-button>
              <b-button @click="$router.push('/create-flight')">ADD FLIGHT</b-button>
            </div>
          </div>
          <div class="d-card__body" v-if="false">
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
                <tr>
                  <td>Venezuela :v</td>
                  <td>Santander</td>
                  <td>12/2/2021 20:00</td>
                  <td>13/2/2021 15:14</td>
                  <td><b-icon pack="fas" icon="times" class="remove-icon"></b-icon></td>
                </tr>
                <tr>
                  <td>Venezuela :v</td>
                  <td>Santander</td>
                  <td>12/2/2021 20:00</td>
                  <td>13/2/2021 15:14</td>
                  <td><b-icon pack="fas" icon="times" class="remove-icon"></b-icon></td>
                </tr>
                <tr>
                  <td>Venezuela :v</td>
                  <td>Santander</td>
                  <td>12/2/2021 20:00</td>
                  <td>13/2/2021 15:14</td>
                  <td><b-icon pack="fas" icon="times" class="remove-icon"></b-icon></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="d-container" v-if="true">
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
  export default {
    name: 'Home',
    components: {

    }
  }
</script>