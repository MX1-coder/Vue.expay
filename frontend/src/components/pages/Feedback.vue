<template>
    <div>
        <section class="feedback">
            <div class="container">
                <div class="row">
                    <div class="col-sm-1"></div>
                    <div class="col-sm-10">
                        <div class="feedback-main text-center">
                            <form @submit.prevent="FeedbackSubmit">
                                <div v-if="step === 1">
                                    <div class="questions">
                                        <h2 class="">Thanks for shopping with <span>Exe-Pay.</span></h2>
                                        <h3>We'd love to know a bit more about your experience with us.</h3>
                                        <button @click="next" class="feedbackbtn">Give Feedback</button>
                                    </div>
                                </div>
                                <div v-if="step === 2" class="animate__animated animate__fadeInRight">
                                    <div class="questions">
                                        <div class="question-main">
                                            <div class="number">1</div>
                                            <i class="fas fa-long-arrow-alt-right"></i>
                                            <h4>How would you rate our online service, based on:Payments,Exchange</h4>
                                        </div>
                                        <div class="question-main">
                                            <div class="number">1a</div>
                                            <i class="fas fa-long-arrow-alt-right"></i>
                                            <h4>Design of the site</h4>
                                        </div>
                                        <div class="question-main">
                                            <div></div>
                                            <div class="rate">
                                                <input type="radio" id="star5" name="rate" value="5" v-model="feedback.question_one_a" />
                                                <label for="star5" title="5 stars"><i class="fas fa-trophy"></i><br><span>5</span></label>
                                                <input type="radio" id="star4" name="rate" value="4"  v-model="feedback.question_one_a" />
                                                <label for="star4" title="4 stars"><i class="fas fa-trophy"></i><br><span>4</span></label>
                                                <input type="radio" id="star3" name="rate" value="3"  v-model="feedback.question_one_a"/>
                                                <label for="star3" title="3 stars"><i class="fas fa-trophy"></i><br><span>3</span></label>
                                                <input type="radio" id="star2" name="rate" value="2"  v-model="feedback.question_one_a"/>
                                                <label for="star2" title="2 stars"><i class="fas fa-trophy"></i><br><span>2</span></label>
                                                <input type="radio" id="star1" name="rate" value="1"  v-model="feedback.question_one_a"/>
                                                <label for="star1" title="1 stars"><i class="fas fa-trophy"></i><br><span>1</span></label>
                                            </div>
                                        </div>
                                    </div>
                                    <button @click="next" class="feedbackbtn">Continue</button>
                                </div>
                                <div v-if="step === 3" class="animate__animated animate__fadeInRight">
                                    <div class="questions">
                                        <div class="question-main">
                                            <div class="number">1</div>
                                            <i class="fas fa-long-arrow-alt-right"></i>
                                            <h4>How would you rate our online service, based on:Payments,Exchange</h4>
                                        </div>
                                        <div class="question-main">
                                            <div class="number">1b</div>
                                            <i class="fas fa-long-arrow-alt-right"></i>
                                            <h4>The range of Services</h4>
                                        </div>
                                        <div class="question-main">
                                            <div></div>
                                            <div class="rate">
                                                <input type="radio" id="star5" name="rate" value="5" v-model="feedback.question_one_b" />
                                                <label for="star5" title="5 stars"><i class="far fa-star"></i><br><span>5</span></label>
                                                <input type="radio" id="star4" name="rate" value="4"  v-model="feedback.question_one_b" />
                                                <label for="star4" title="4 stars"><i class="far fa-star"></i><br><span>4</span></label>
                                                <input type="radio" id="star3" name="rate" value="3"  v-model="feedback.question_one_b"/>
                                                <label for="star3" title="3 stars"><i class="far fa-star"></i><br><span>3</span></label>
                                                <input type="radio" id="star2" name="rate" value="2"  v-model="feedback.question_one_b"/>
                                                <label for="star2" title="2 stars"><i class="far fa-star"></i><br><span>2</span></label>
                                                <input type="radio" id="star1" name="rate" value="1"  v-model="feedback.question_one_b"/>
                                                <label for="star1" title="1 stars"><i class="far fa-star"></i><br><span>1</span></label>
                                            </div>
                                        </div>
                                    </div>
                                    <button @click="next" class="feedbackbtn">Continue</button>
                                </div>
                                <div v-if="step === 4" class="animate__animated animate__fadeInRight">
                                    <div class="questions">
                                        <div class="question-main">
                                            <div class="number">1</div>
                                            <i class="fas fa-long-arrow-alt-right"></i>
                                            <h4>How would you rate our online service, based on:Payments,Exchange</h4>
                                        </div>
                                        <div class="question-main">
                                            <div class="number">1c</div>
                                            <i class="fas fa-long-arrow-alt-right"></i>
                                            <h4>Finding what you needed</h4>
                                        </div>
                                        <div class="question-main">
                                            <div></div>
                                            <div class="rate">
                                                <input type="radio" id="star5" name="rate" value="5" v-model="feedback.question_one_c" />
                                                <label for="star5" title="5 stars"><i class="far fa-thumbs-up"></i><br><span>5</span></label>
                                                <input type="radio" id="star4" name="rate" value="4"  v-model="feedback.question_one_c" />
                                                <label for="star4" title="4 stars"><i class="far fa-thumbs-up"></i><br><span>4</span></label>
                                                <input type="radio" id="star3" name="rate" value="3"  v-model="feedback.question_one_c"/>
                                                <label for="star3" title="3 stars"><i class="far fa-thumbs-up"></i><br><span>3</span></label>
                                                <input type="radio" id="star2" name="rate" value="2"  v-model="feedback.question_one_c"/>
                                                <label for="star2" title="2 stars"><i class="far fa-thumbs-up"></i><br><span>2</span></label>
                                                <input type="radio" id="star1" name="rate" value="1"  v-model="feedback.question_one_c"/>
                                                <label for="star1" title="1 stars"><i class="far fa-thumbs-up"></i><br><span>1</span></label>
                                            </div>
                                        </div>
                                    </div>
                                    <button @click="next" class="feedbackbtn">Continue</button>
                                </div>
                                <div v-if="step === 5" class="animate__animated animate__fadeInRight">
                                    <div class="questions">
                                        <div class="question-main">
                                            <div class="number">2</div>
                                            <i class="fas fa-long-arrow-alt-right"></i>
                                            <h4>Thanks for that, now could you tell us a bit about the delivery process?</h4>
                                        </div>
                                        <div class="question-main">
                                            <div class="number">2a</div>
                                            <i class="fas fa-long-arrow-alt-right"></i>
                                            <h4>How would you rate the delivery time?</h4>
                                        </div>
                                        <div class="question-main">
                                            <div></div>
                                            <div class="rate">
                                                <input type="radio" id="star5" name="rate" value="5" v-model="feedback.question_two" />
                                                <label for="star5" title="5 stars"><i class="fas fa-bolt"></i><br><span>5</span></label>
                                                <input type="radio" id="star4" name="rate" value="4"  v-model="feedback.question_two" />
                                                <label for="star4" title="4 stars"><i class="fas fa-bolt"></i><br><span>4</span></label>
                                                <input type="radio" id="star3" name="rate" value="3"  v-model="feedback.question_two"/>
                                                <label for="star3" title="3 stars"><i class="fas fa-bolt"></i><br><span>3</span></label>
                                                <input type="radio" id="star2" name="rate" value="2"  v-model="feedback.question_two"/>
                                                <label for="star2" title="2 stars"><i class="fas fa-bolt"></i><br><span>2</span></label>
                                                <input type="radio" id="star1" name="rate" value="1"  v-model="feedback.question_two"/>
                                                <label for="star1" title="1 stars"><i class="fas fa-bolt"></i><br><span>1</span></label>
                                            </div>
                                        </div>
                                    </div>
                                    <button @click="next" class="feedbackbtn">Continue</button>
                                </div>
                                <div v-if="step === 6" class="animate__animated animate__fadeInRight">
                                    <div class="questions">
                                        <div class="question-main">
                                            <div class="number">3</div>
                                            <i class="fas fa-long-arrow-alt-right"></i>
                                            <h4>Thanks ,and would you recommend us to your friends? *</h4>
                                        </div>
                                        <div class="question-main my-3">
                                            <div class="third">
                                                <input type="radio" id="star10" name="rate" value="10"  v-model="feedback.question_three" />
                                                <label for="star10" title="10 stars">10</label>
                                                <input type="radio" id="star9" name="rate" value="9"  v-model="feedback.question_three" />
                                                <label for="star9" title="9 stars">9</label>
                                                <input type="radio" id="star8" name="rate" value="8"  v-model="feedback.question_three" />
                                                <label for="star8" title="8 stars">8</label>
                                                <input type="radio" id="star7" name="rate" value="7"  v-model="feedback.question_three" />
                                                <label for="star7" title="7 stars">7</label>
                                                <input type="radio" id="star6" name="rate" value="6"  v-model="feedback.question_three" />
                                                <label for="star6" title="6 stars">6</label>
                                                <input type="radio" id="star5" name="rate" value="5"  v-model="feedback.question_three" />
                                                <label for="star5" title="5 stars">5</label>
                                                <input type="radio" id="star4" name="rate" value="4"  v-model="feedback.question_three" />
                                                <label for="star4" title="4 stars">4</label>
                                                <input type="radio" id="star3" name="rate" value="3"  v-model="feedback.question_three"/>
                                                <label for="star3" title="3 stars">3</label>
                                                <input type="radio" id="star2" name="rate" value="2"  v-model="feedback.question_three"/>
                                                <label for="star2" title="2 stars">2</label>
                                                <input type="radio" id="star1" name="rate" value="1"  v-model="feedback.question_three"/>
                                                <label for="star1" title="1 stars">1</label>
                                            </div>
                                        </div>
                                        <div class="third-bottom">
                                            <p>Not at all</p>
                                            <p>Hmmm,maybe</p>
                                            <p>100%</p>
                                        </div>
                                    </div>
                                    <button @click="next" class="feedbackbtn">Continue</button>
                                </div>
                                <div v-if="step === 7" class="animate__animated animate__fadeInRight">
                                    <div class="questions">
                                        <div class="question-main">
                                            <div class="number">4</div>
                                            <i class="fas fa-long-arrow-alt-right"></i>
                                            <div>
                                                <h4>Any suggestions for us?</h4>
                                            </div>
                                        </div>
                                        <div class="question-main my-3">
                                            <input type="text" class="form-control suggestions" placeholder="Type your answer here ..." v-model="feedback.question_four">
                                        </div>
                                    </div>
                                    <button @click="next" class="feedbackbtn">Ok</button>
                                </div>
                                <div v-if="step === 8" class="animate__animated animate__fadeInRight">
                                    <div class="questions">
                                        <div class="question-main">
                                            <div class="number">5</div>
                                            <i class="fas fa-long-arrow-alt-right"></i>
                                            <div>
                                                <h4>Finally, would you like to have 15% BONUS on your next Referral?</h4>
                                                <p class="dropemail">Drop us your email address and we'll send you a coupon.</p>
                                            </div>
                                        </div>
                                        <div class="question-main my-3">
                                            <input type="email" class="form-control suggestions" placeholder="name@example.com ..." v-model="feedback.question_five" required>
                                        </div>
                                    </div>
                                    <button type="submit" class="feedbackbtn">{{loading ? 'Loading...' : 'Submit' }}</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="col-sm-1"></div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'Feedback',
    data(){
        return{
            step: 1,
            loading:false,
            feedback:{
                question_one_a: '',
                question_one_b: '',
                question_one_c: '',
                question_two: '',
                question_three: '',
                question_four: '',
                question_five: '',
            }
        }
    },
    methods:{
        next(){
            this.step++
        },
        FeedbackSubmit(){
            this.loading = true
            axios.post('https://exp-pay.betamxpertz.xyz/myapi/api/feedback', this.feedback)
            .then(res=>{
                console.log(res)
                this.loading = false
                this.$swal({
                    title: "Succesfully Feedback Submitted !!",
                    icon: "success",
                });
                this.$router.push('/thankyou')
            }).catch(error=>{
                console.log(error)
                this.loading = false
                this.$swal({
                    title: "Error Occurred !!",
                    icon: "error",
                });
            })
        }
    }
}
</script>