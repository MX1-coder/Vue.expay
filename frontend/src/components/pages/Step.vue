<template>
    <div class="step">
        <div class="signinbtn" v-if="!loggedIn">
            <a @click="modalshow = !modalshow">
            <img src="/images/user.png" alt="user" />Log In
            </a>
        </div>
        <div class="signinbtn" v-if="loggedIn">
            <!-- <img src="/images/user.png" alt="user" />{{ user.first_name }}
            {{ user.last_name }} -->
            <ul>
              <li class="nav-item dropdown">
                <a class="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"><img src="/images/user.png" alt="user" />{{ user.first_name }}
                  {{ user.last_name }}</a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><router-link class="dropdown-item" to="/profile">Profile</router-link></li>
                  <li><a class="dropdown-item" to="#" @click="Logout">Logout</a></li>
                </ul>
              </li>
            </ul>
        </div>

        <div class="login-signin-modal" v-if="modalshow">
            <div class="modal-body animate__animated animate__slideInDown">
            <div class="close-btn">
                <button class="btn-close" @click="modalshow = !modalshow"></button>
            </div>
            <div v-if="step === 1">
                <div class="stepform">
                    <section class="auth">
                        <h2 class="text-center mb-2">Log In to <span>Exp-Pay</span></h2>
                        <form class="px-5 mt-5" v-on:submit.prevent="Login">
                        <div class="mb-3">
                            <label class="form-label">Email address</label>
                            <input
                            type="email"
                            placeholder="Email address"
                            class="form-control"
                            v-model="login.email"
                            />
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Password</label>
                            <input
                            type="password"
                            placeholder="Password"
                            class="form-control"
                            v-model="login.password"
                            />
                        </div>
                        <button type="submit" class="primarybtn w-100 mb-4">
                            {{ loading ? "Loading..." : "Login" }}
                        </button>
                        </form>
                    </section>
                    <div class="next-prev-btn my-3">
                        <a @click="forgotstep()">Forgot Password?</a><br />
                        <a class="nextbtn" @click="signupstep()"
                        >Don't have an account? <span>Sign Up</span></a
                        >
                    </div>
                </div>
            </div>

            <div v-if="step === 2">
                <div class="stepform">
                    <section class="auth">
                        <h2 class="text-center">Registration Form</h2>
                        <form class="px-5 mt-5" v-on:submit.prevent="Register">
                        <div class="mb-3 type">
                            <div class="type-name">
                            <input
                                type="radio"
                                value="Personal"
                                v-model="registration.type"
                            />
                            Personal
                            </div>
                            <div class="type-name">
                            <input
                                type="radio"
                                value="Business"
                                v-model="registration.type"
                            />
                            Business
                            </div>
                        </div>
                        <div class="mb-3">
                            <input
                            type="text"
                            placeholder="First Name"
                            class="form-control"
                            v-model="registration.first_name"
                            />
                        </div>
                        <div class="mb-3">
                            <input
                            type="text"
                            placeholder="Last Name"
                            class="form-control"
                            v-model="registration.last_name"
                            />
                        </div>
                        <div class="mb-3">
                            <input
                            type="email"
                            placeholder="Email address"
                            class="form-control"
                            v-model="registration.email"
                            />
                        </div>
                        <div class="mb-3">
                            <input
                            type="password"
                            placeholder="Password"
                            class="form-control"
                            v-model="registration.password"
                            />
                        </div>
                        <div class="mb-3">
                            <input
                            type="password"
                            placeholder="Password Confirmation"
                            class="form-control"
                            v-model="registration.password_confirmation"
                            />
                        </div>
                        <button type="submit" class="primarybtn w-100">
                            {{ loading ? "Loading..." : "Register" }}
                        </button>
                        </form>
                    </section>
                    <div class="next-prev-btn my-3">
                        <a class="prevbtn" @click.prevent="loginstep()"
                        >Already have an account? <span>Login</span></a
                        >
                    </div>
                </div>
            </div>

            <div v-if="step === 3">
                <div class="stepform">
                    <section class="auth">
                        <h2 class="text-center">Forgot Password</h2>
                        <form class="py-2 px-5" v-on:submit.prevent="Forgot">
                        <div class="mb-3">
                            <label class="form-label">Email address</label>
                            <input
                            type="email"
                            placeholder="Email address"
                            class="form-control"
                            v-model="forgot.email"
                            />
                        </div>
                        <button type="submit" class="primarybtn w-100 my-3">
                            {{ loading ? "Loading..." : "Forgot Password" }}
                        </button>
                        </form>
                    </section>
                    <div class="next-prev-btn">
                        <a class="prevbtn" @click.prevent="loginstep()"
                        >Back to <span>Login</span></a
                        >
                    </div>
                    </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Home",
  data() {
    return {
      user: [],
      modalshow: false,
      step: 1,
      loading: false,
      login: {
        email: "",
        password: "",
      },
      registration: {
        first_name: "",
        last_name: "",
        type: "",
        email: "",
        password: "",
        password_confirmation: "",
      },
      forgot: {
        email: "",
      },
    };
  },
  methods: {
    signupstep() {
      this.step = 2;
    },
    loginstep() {
      this.step = 1;
    },
    forgotstep() {
      this.step = 3;
    },
    Login() {
      this.loading = true;
      this.$store
        .dispatch("Login", this.login)
        .then(() => {
          this.loading = false;
          this.modalshow = false;
          this.getUser();
          this.$router.push("/user-dashboard");
          this.$swal({
            title: "Succesfully Logged in !!",
            icon: "success",
          });
        })
        .catch(() => {
          this.loading = false;
          this.modalshow = true;
          this.$swal({
            title: "Invalid Username/Password !!!",
            icon: "error",
          });
        });
    },
    Register() {
      this.loading = true;
      this.$store
        .dispatch("Register", this.registration)
        .then(() => {
          this.loading = false;
          this.modalshow = false;
          this.$swal({
            title: "Succesfully Registered !!",
            icon: "success",
          });
        })
        .catch((error) => {
          this.loading = false;
          this.modalshow = true;
          this.$swal({
            title: "Error Occurred !!",
            icon: "error",
          });
          console.log(error);
        });
    },
    Forgot() {
      this.loading = true;
      axios
        .post("https://exp-pay.betamxpertz.xyz/myapi/api/forgot", this.forgot)
        .then(() => {
          this.loading = false;
          this.modalshow = false;
          this.$swal({
            title: "Check your Email !!",
            icon: "success",
          });
        })
        .catch(() => {
          this.loading = false;
          this.modalshow = true;
          this.$swal({
            title: "User not Exist !!",
            icon: "error",
          });
        });
    },
    getUser(){
      axios.get("https://exp-pay.betamxpertz.xyz/myapi/api/user", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        this.user = res.data;
      });
    },
    Logout(){
      this.$store.dispatch('Logout')
      .then(res=>{
        console.log(res)
        this.$router.push('/')
      })
    }
  },
  computed: {
    loggedIn() {
      return this.$store.getters.loggedIn;
    },
  },
  mounted(){
    this.getUser();
  }
};
</script>