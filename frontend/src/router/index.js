import { createRouter, createWebHistory } from 'vue-router'

import Home from '../components/pages/Home.vue'
import Step from '../components/pages/Step.vue'
import Wallet from '../components/pages/Wallet.vue'
import Feedback from '../components/pages/Feedback.vue'
import Thankyou from '../components/pages/Thankyou.vue'
import Business from '../components/pages/Business.vue'
import Withdraw from '../components/pages/Withdraw.vue'
import Profile from '../components/pages/Profile.vue'
import Exchange from '../components/pages/Exchange.vue'
// import Register from '../components/auth/Register.vue'
// import Login from '../components/auth/Login.vue'
// import ForgotPassword from '../components/auth/ForgotPassword'
import ResetPassword from '../components/auth/ResetPassword'
import AddNewAdmin from '../components/admin/AddNewAdmin'
import UpdateAdmin from '../components/admin/UpdateAdmin'
import AdminDashboard from '../components/admin/AdminDashboard'
import Dashboard from '../components/admin/Dashboard'
import UserDashboard from '../components/user/UserDashboard'
import NotFound from '../components/parts/NotFound'



const routes = [
  { path: '/', name: 'Home', component: Home },
  // { path: '/register', name: 'Register', component: Register },
  // { path: '/login', name: 'Login', component: Login },
  // { path: '/forgot-password', component: ForgotPassword},
  { path: '/reset-password/:token', component: ResetPassword},
  { 
    path: '/dashboard',
    component: AdminDashboard,
    children: [
      {path: 'admin', component: Dashboard},
      {path: 'add-admin', component: AddNewAdmin},
      { path: 'update-user/:id', name: 'update', component: UpdateAdmin},
    ]
  },  
  { path: '/user-dashboard', component: UserDashboard},
  { path: '/step', component: Step},
  { path: '/wallet', component: Wallet},
  { path: '/feedback', component: Feedback},
  { path: '/thankyou', component: Thankyou},
  { path: '/business', component: Business},
  { path: '/withdraw', component: Withdraw},
  { path: '/profile', name:'Profile', component: Profile},
  { path: '/exchange', component: Exchange},
  
  
  { path: "/:catchAll(.*)", component: NotFound },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    window.scrollTo(0,0);
  },
})

export default router
