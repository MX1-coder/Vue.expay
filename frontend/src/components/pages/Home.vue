<template>
    <div>

        <section class="banner">
            <div class="container">
                <div class="row">
                    <div class="col-sm-5">
                        <div class="banner-conten">
                            <h1>Exp-Pay</h1>
                            <h3>Exceptional Service</h3>
                            <p>Since 2021, exp-pay has provided quality services to clients by providing them with the professional care they deserve. Get in touch today to learn more about our Currency Exchange Service.</p>
                            <router-link to="/contact" class="primarybtn">Contact us</router-link>
                        </div>
                    </div>
                    <div class="col-sm-7">
                        <img src="/images/banner.png" alt="banner">
                    </div>
                </div>
            </div>
        </section>

        <section class="after-banner">
            <div class="container">
                <div class="row">
                    <div class="col-sm-7">
                        <div class="row">
                            <div class="col-sm-4" v-for="(after,index) in afterImages" :key="index">
                                <img :src="'/images/' + after.image" :alt="after.image">
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-5">
                        <div class="after-content">
                            <h2 class="mb-2">About exp-pay</h2>
                            <div class="line mb-4"></div>
                            <p>Our mission at exp-pay is simple: to provide high-quality services for our valued clients. Our team goes above and beyond to cater to each project’s specific needs. Through open communication and exceptional service,we hope you’ll find what you’re looking for with our Currency Exchange Service. For more information or general inquiries, get in touch today</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="services">
            <div class="container">
                <h2 class="mb-2">Services</h2>
                <div class="line mb-4"></div>
                <div class="row">
                    <div class="col-sm-7">
                        <div class="row">
                            <div class="col-sm-6" v-for="(service,index) in services" :key="index">
                                <div class="card">
                                    <div class="text-center">
                                        <img :src="'/images/' + service.icon" :alt="service.name">
                                    </div>
                                    <div class="body">
                                        <h5>{{service.name}}</h5>
                                        <p class="sub">{{service.sub}}</p>
                                        <p class="desc">{{service.desc}}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="col-sm-5">
                        <img src="/images/sermain.png" alt="services">
                    </div>
                </div>
            </div>
        </section>

        <section class="why">
            <div class="container">
                <h2>Why Use Exp-Pay</h2>
                <div class="row">
                    <div class="col-sm-4" v-for="(why,index) in whyData" :key="index">
                        <div class="why-content">
                            <div class="text-center">
                                <img :src="'/images/' + why.image" :alt="why.name">
                            </div>
                            <div class="number">{{why.number}}</div>
                            <div class="body text-center py-4">
                                <h5>{{why.name}}</h5>
                                <p>{{why.desc}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="testimonials">
            <div class="container">
                <h2>Testimonials</h2>
                <div class="line"></div>
                <Testimonials/>
            </div>
        </section>

        <section class="contact">
            <div class="container">
                <h2>Get in touch</h2>
                <div class="line"></div>
                <div class="row py-3">
                    <div class="col-sm-7">
                        <div class="contact-form">
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label>Name</label>
                                        <input type="text" class="form-control" placeholder="Name">
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label>Email</label>
                                        <input type="email" class="form-control" placeholder="Email">
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label>Phone</label>
                                        <input type="text" class="form-control" placeholder="Phone">
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label>Address</label>
                                        <input type="text" class="form-control" placeholder="Address">
                                    </div>
                                </div>
                                <div class="col-sm-12">
                                    <div class="form-group">
                                        <label>Subject</label>
                                        <input type="text" class="form-control" placeholder="Subject">
                                    </div>
                                </div>
                                <div class="col-sm-12">
                                    <div class="form-group">
                                        <label>Type your message here...</label>
                                        <textarea cols="30" rows="5" class="form-control" placeholder="Type your message here..."></textarea>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <button class="secondarybtn">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-5">
                        <div class="side-contact">
                            <ul>
                                <li><i class="fas fa-map-marker-alt"></i>224 RUE ST.CAMERON HOUMALOUISIANA</li>
                                <li><i class="fas fa-envelope"></i>info@exp-pay.com</li>
                                <li><i class="fas fa-phone"></i>1214 454545656</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <section class="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2799160891!2d-74.25987584510595!3d40.69767006338158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1640590991175!5m2!1sen!2sin" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </section>
    </div>
</template>

<script>

import Testimonials from '../reusable/Testimonials.vue'
export default {
    name:'Home',
    components: {
        Testimonials,
    },
    data(){
        return{
            afterImages:[
                {image:'after1.png'},
                {image:'after2.png'},
                {image:'after3.png'},
            ],
            services:[
                {icon:'ser1.png', name:'Escrow Payment', sub: 'Attention to Detail', desc:'​We have the experience and skills necessary to tackle just about every type of job that comes our way. With exp-pay, clients know exactly what to expect - professionalism, efficiency and exceptional results.'},
                {icon:'ser2.png', name:'​Class Action Settlement Distributions', sub: '​Expert Service', desc:'​​exp-pay is committed to getting the job done, especially when it comes to this service. You can count on us to be professional, timely, efficient and make sure you’re satisfied every step of the way.'},
            ],
            whyData:[
                {image: 'fast.png', number: '1', name: 'Fast', desc: 'Whether you’re settling up IOUs or splitting the cost of takeout, you can send money to someone you trust in minutes1 directly to their bank account with Exp-Pay.'},
                {image: 'safe.png', number: '2', name: 'Safe', desc: 'Your money travels safely from the minute you hit send to the minute it hits their bank account. Straight from you to them. So you get peace of mind and so does your recipient'},
                {image: 'easy.png', number: '3', name: 'Easy', desc: '​Send money with just a few taps on your mobile phone. Even better, you probably already have Exp-Pay® in your banking app – no additional download necessary.'},
            ]
        }
    },

}
</script>