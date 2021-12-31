<template>
    <section class="auth">
        <h2 class="text-center mb-2">Login Form</h2>
        <form class="px-5 mt-5" v-on:submit.prevent="Login">
            <div class="mb-3">
                <label class="form-label">Email address</label>
                <input type="email" placeholder="Email address" class="form-control" v-model="login.email">
            </div>
            <div class="mb-3">
                <label class="form-label">Password</label>
                <input type="password" placeholder="Password" class="form-control" v-model="login.password">
            </div>
            <button type="submit" class="primarybtn w-100 mb-4">{{ loading ? "Loading..." : "Login" }}</button>
        </form>
    </section>
</template>
<script>
export default {
    name: 'Login',
    data(){
        return{
            loading: false,
            login: {
                email: '',
                password: '',
            },
            user:[],
            
        }
    },
    methods: {
        Login(){
            this.loading= true
            this.$store.dispatch('Login', this.login)
            .then(()=>{
                this.loading= false
                this.$router.push('/')
                this.$swal({
                    title: 'Succesfully Logged in !!',
                    icon: 'success'
                });
            }).catch(()=>{
                this.loading= false
                this.$swal({
                    title: 'Invalid Username/Password !!!',
                    icon: 'error'
                });
            })
        } 
    },
    beforeCreate () {
        if(this.$store.state.token) {
            // this.$swal({
            //     title: 'Already Logged in !!',
            //     icon: 'error'
            // });
            this.$router.push('/')
        }
    }
}
</script>