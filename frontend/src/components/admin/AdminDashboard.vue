<template>
    <transition name="fade">
        <div>
            <div class="notauth text-center" v-if="!isAdmin">
                <div class="text-spin">
                    <div class="spinner-border text-danger" role="status"></div>
                    <div class="text-center" v-if="isUser || isStudent">
                        <h4 class="my-5">You are not Authorize to access this page !!</h4>
                        <router-link  class="letsbtn" to='/'>Go to Homepage</router-link>
                    </div>
                </div>
            </div>
            <section class="dashboard" v-if="isAdmin">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-sm-2">
                            <div class="sidemain">
                                <h2 class="text-center my-5">Hi {{user.name}}!</h2>
                                <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                    <router-link class="nav-link" to="/dashboard/admin" >Dashboard</router-link>
                                    <router-link class="nav-link" to="/dashboard/add-job" >Add New Job</router-link>
                                    <router-link class="nav-link" to="/dashboard/all-job">All Jobs</router-link>
                                    <router-link class="nav-link" to="/dashboard/products">Products</router-link>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-10">
                            <router-view/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </transition>
</template>
<script>
    import axios from 'axios'
    export default {
        name: 'AdminDashboard',
        data(){
            return{
                user: [],
            }
        },
        
        computed:{
            isAdmin(){
                return this.user.role == 'admin'
            },
            isUser(){
                return this.user.role == 'user'
            },
            isStudent(){
                return this.user.role == 'student'
            },
        },
        created(){
            axios.get('http://localhost:8000/api/user',{
                headers:{
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            })
            .then(res=>{
                this.user = res.data
            })
        },
        beforeCreate () {
            if(this.$store.state.token == null) {
                this.$router.push('/login')
            }
            
        }
        
    }
</script>

<style scoped>
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.8s ease;
    }
    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
    }
</style>