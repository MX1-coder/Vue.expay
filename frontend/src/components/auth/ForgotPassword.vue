<template>
    <section class="auth">
        <h2 class="text-center">Forgot Password</h2>
        <form class="py-2 px-3" v-on:submit.prevent="Forgot">
            <div class="mb-3">
                <label class="form-label">Email address</label>
                <input type="email" placeholder="Email address" class="form-control" v-model="forgot.email">
            </div>
            <button type="submit" class="primarybtn w-100 my-3">{{ loading ? "Loading..." : "Forgot Password" }}</button>
        </form>
    </section>
</template>
<script>
import axios from 'axios'
export default {
    name: 'ForgotPassword',
    data(){
        return{
            loading: false,
            forgot: {
                email: '',
            }
        }
    },
    methods: {
        Forgot(){
            this.loading= true
            axios.post('http://localhost:8000/api/forgot',this.forgot)
            .then(()=>{
                this.loading= false
                this.$swal({
                    title: 'Check your Email !!',
                    icon: 'success'
                });
            })
            .catch(()=>{
                this.loading= false
                this.$swal({
                    title: 'User not Exist !!',
                    icon: 'error'
                });
            })
            
        }
    }
}
</script>