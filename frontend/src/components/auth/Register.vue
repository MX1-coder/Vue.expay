<template>
    <section class="auth">
         <h2 class="text-center">Registration Form</h2>
        <form class="px-5 mt-5" v-on:submit.prevent="Register">
            <div class="mb-3 type">
                <div class="type-name">
                    <input type="radio" value="Personal" v-model="registration.type"> Personal
                </div>
                <div class="type-name">
                    <input type="radio" value="Business" v-model="registration.type"> Business
                </div>
            </div>
            <div class="mb-3">
                <input type="text" placeholder="First Name" class="form-control" v-model="registration.first_name">
            </div>
            <div class="mb-3">
                <input type="text" placeholder="Last Name" class="form-control" v-model="registration.last_name">
            </div>
            <div class="mb-3">
                <input type="email" placeholder="Email address" class="form-control" v-model="registration.email">
            </div>
            <div class="mb-3">
                <input type="password" placeholder="Password" class="form-control" v-model="registration.password">
            </div>
            <div class="mb-3">
                <input type="password" placeholder="Password Confirmation" class="form-control" v-model="registration.password_confirmation">
            </div>
            <button type="submit" class="primarybtn w-100" >{{ loading ? "Loading..." : "Register" }}</button>
        </form>
    </section>
</template>
<script>
export default {
    name: 'Register',
    data(){
        return{
            loading: false,
            registration: {
                first_name: '',
                last_name: '',
                type: '',
                email: '',
                password: '',
                password_confirmation: '',
            }
        }
    },
     methods: {
        Register(){
            this.loading= true
            this.$store.dispatch('Register', this.registration)
            .then(()=>{
                this.loading= false
                this.$swal({
                    title: 'Succesfully Registered !!',
                    icon: 'success'
                });
            }).catch(error=>{
                this.loading= false
                this.$swal({
                    title: 'Error Occurred !!',
                    icon: 'error'
                });
                console.log(error)
            })
        }
    },
    beforeCreate () {
        if(this.$store.state.token) {
            // this.$swal({
            //     title: 'Already Registered !!',
            //     icon: 'error'
            // });
            this.$router.push('/')
        }
    }
}
</script>