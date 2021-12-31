<template>
    <section class="footer">
        <div class="container">
            <div class="row">
                <div class="col-sm-3" v-for="(footer, index) in footerLinks" :key="index">
                    <div class="footer-content">
                        <h5>{{footer.title}}</h5>
                        <ul>
                            <li v-for="(link, index) in footer.links" :key="index">
                                <router-link v-bind:to= link.url  class="footer-links">{{link.name}}</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-sm-3">
                    <div class="footer-content">
                        <h5>Follow us</h5>
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name:'Footer',
    data(){
        return{
            footerLinks: [
                { 
                    title: 'Contact',
                    links: [
                        {name: '1214 454545656', url:'#'},
                        {name: '1214 454545656', url:'#'},
                    ],
                },
                { 
                    title: 'Services',
                    links: [
                        {name: 'Lorem Ipsum', url:'#'},
                        {name: 'Lorem Ipsum', url:'#'},
                    ],
                },
                { 
                    title: 'Services',
                    links: [
                        {name: 'Lorem Ipsum', url:'#'},
                        {name: 'Lorem Ipsum', url:'#'},
                    ],
                },
            ],
        }
    },
}
</script>
