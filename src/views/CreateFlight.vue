<template>
    <Form type="lg">
        <div class="form__title">
            <span>Add Flight</span>
        </div>
        <b-field label="Origin:">
            <b-input v-model="origin" required></b-input>
        </b-field>
        <b-field label="Destination:">
            <b-input v-model="destination" required></b-input>
        </b-field>
        <b-field label="Departure Date:">
            <b-input v-model="departure" required></b-input>
        </b-field>
        <b-field label="Arrive Date:">
            <b-input v-model="arrive" required></b-input>
        </b-field>
        <div class="button-container">
            <b-button @click="$router.push('/home')">GO BACK</b-button>
            <b-button>ADD FLIGHT</b-button>
        </div>
    </Form>
</template>
<script>
import Form from '@/components/Form.vue'
export default {
    components: {
        Form
    }
}
</script>