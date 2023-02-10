<template>
  <div>
    <h2>Shipping Information</h2>
    <form>
      <b-form-group label="Full Name" label-for="full-name">
        <b-form-input type="text" id="full-name" v-model="fullName" />
      </b-form-group>
      <b-form-group label="Address" label-for="address">
        <b-form-input type="text" id="address" v-model="address" />
      </b-form-group>
      <b-form-group label="City" label-for="city">
        <b-form-input type="text" id="city" v-model="city" />
      </b-form-group>
      <b-form-group label="State" label-for="state">
        <b-form-input type="text" id="state" v-model="state" />
      </b-form-group>
      <b-form-group label="Zip Code" label-for="zip">
        <b-form-input type="text" id="zip" v-model="zip" />
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fullName: "",
      address: "",
      city: "",
      state: "",
      zip: "",
    };
  },
};
</script>
