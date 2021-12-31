<template>
  <div>

    <section class="top-bar">
      <div class="container">
        <Step/>
      </div>
    </section>

    <section class="header">
      <nav class="navbar navbar-expand-lg">
        <div class="container">
          <router-link class="navbar-brand" to="/"><img src="/images/logo.png" alt="logo"></router-link>
          <a data-bs-toggle="offcanvas" href="#offcanvasExample" aria-controls="offcanvasExample">
            <button class="navbar-toggler" data-bs-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
              <i class="fas fa-bars"></i>
            </button>
          </a>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link class="nav-link active" to="/">Home</router-link>
              </li>
              <li class="nav-item" v-if="loggedIn">
                <router-link class="nav-link" to="/user-dashboard">Dashboard</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/wallet">Wallet</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/business">Business</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/exchange">Exchange</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/withdraw">Withdraw</router-link>
              </li>
              <li class="nav-item dropdown" v-if="!loggedIn">
                <a class="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">More <i class="fas fa-chevron-down"></i></a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#">Become a vendor</a></li>
                  <li><router-link class="dropdown-item" to="/feedback">Feedback</router-link></li>
                </ul>
              </li>
              <li class="nav-item dropdown" v-if="loggedIn">
                <a class="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">More <i class="fas fa-chevron-down"></i></a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#">Enable Escrow System</a></li>
                  <li><a class="dropdown-item" href="#">Raise a Dispute</a></li>
                  <li><a class="dropdown-item" href="#">Trading Platform</a></li>
                  <li><a class="dropdown-item" href="#">Resolution Center</a></li>
                  <li><a class="dropdown-item" href="#">Upload Kyc</a></li>
                  <li><a class="dropdown-item" href="#">Become a vendor</a></li>
                  <li><router-link class="dropdown-item" to="/feedback">Feedback</router-link></li>
                </ul>
              </li>
            </ul>
          </div>

          <div class="offcanvas offcanvas-start" tabindex="1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasExampleLabel">
                <img src="/images/logo.png" alt="logo" />
              </h5>
              <a href="#"><i class="fas fa-times" data-bs-dismiss="offcanvas" aria-label="Close"></i></a>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav">
                <li class="nav-item"  data-bs-dismiss="offcanvas" aria-label="Close">
                  <router-link class="nav-link active" to="/">Home</router-link>
                </li>
                <li class="nav-item" v-if="loggedIn"  data-bs-dismiss="offcanvas" aria-label="Close">
                  <router-link class="nav-link" to="/user-dashboard">Dashboard</router-link>
                </li>
                <li class="nav-item"  data-bs-dismiss="offcanvas" aria-label="Close">
                  <router-link class="nav-link" to="/wallet">Wallet</router-link>
                </li>
                <li class="nav-item"  data-bs-dismiss="offcanvas" aria-label="Close">
                  <router-link class="nav-link" to="/business">Business</router-link>
                </li>
                <li class="nav-item"  data-bs-dismiss="offcanvas" aria-label="Close">
                  <router-link class="nav-link" to="/exchange">Exchange</router-link>
                </li>
                <li class="nav-item"  data-bs-dismiss="offcanvas" aria-label="Close">
                  <router-link class="nav-link" to="/withdraw">Withdraw</router-link>
                </li>
                <li class="nav-item dropdown" v-if="!loggedIn">
                  <a class="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">More <i class="fas fa-chevron-down"></i></a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" href="#">Become a vendor</a></li>
                    <li><a class="dropdown-item" href="#">Feedback</a></li>
                  </ul>
                </li>
                <li class="nav-item dropdown" v-if="loggedIn">
                  <a class="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">More <i class="fas fa-chevron-down"></i></a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" href="#">Enable Escrow System</a></li>
                    <li><a class="dropdown-item" href="#">Raise a Dispute</a></li>
                    <li><a class="dropdown-item" href="#">Trading Platform</a></li>
                    <li><a class="dropdown-item" href="#">Resolution Center</a></li>
                    <li><a class="dropdown-item" href="#">Upload Kyc</a></li>
                    <li><a class="dropdown-item" href="#">Become a vendor</a></li>
                    <li><a class="dropdown-item" href="#">Feedback</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </section>

  </div>
</template>

<script>
import Step from '../pages/Step.vue'
export default {
  name: "Header",
  components: {
    Step,
  },
  data() {
    return {
      user:[],
    }
  },
  computed: {
    loggedIn() {
      return this.$store.getters.loggedIn;
    },
  },
  methods: {
    Logout(){
      this.$store.dispatch('Logout')
      .then(res=>{
        console.log(res)
        this.$router.push('/')
      })
    }
  }
};
</script>
