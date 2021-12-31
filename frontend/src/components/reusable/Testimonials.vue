<template>
    <div class="row">
        <div class="col-sm-4" v-for="(testimonials,index) in testimonialsData" :key="index">
            <div class="card">
                <div class="card-body">
                    <img class="quote" :src="'/images/' + testimonials.quote" :alt="testimonials.quote">
                    <p class="desc">{{testimonials.desc}}</p>
                </div>
                <div class="bottom">
                    <img class="w-100" :src="'/images/' + testimonials.image" :alt="testimonials.image">
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: 'Testimonials',
    data(){
        return{
            testimonialsData:[
                {quote: 'quote-green.png', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when', image:'wave-green.png'},
                {quote: 'quote-blue.png', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when', image:'wave-blue.png'},
                {quote: 'quote-light.png', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when', image:'wave-light.png'},
            ]
        }
    }
}
</script>