<template>
    <div>

        <section class="userdashboard py-5">
            <div class="container">
                <div class="row">
                    <div class="col-sm-3" v-for="(data,index) in frontdashboard" :key="index">
                        <div class="card">
                            <div class="card-body">
                                <h6>{{data.title}}</h6>
                                <p>{{data.value}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="charts">
            <div class="container">
                <div class="row">
                    <div class="col-sm-4" v-for="(chart,index) in chartData" :key="index">
                        <p>{{chart.title}}</p>
                        <img :src="'/images/' + chart.image" :alt="chart.image">
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>

export default {
    name: 'UserDashboard',
    data(){
        return{
            frontdashboard:[
                {title: 'EXE PAY BALANCE', value:'$ 0.00'},
                {title: 'No Of TRANSACTION', value:'0'},
                {title: 'ESROW SYSTEM USED', value:'0'},
                {title: 'ACCOUNT TYPE', value:'BEGINNER'},
                {title: 'ACCOUNT NUMBER', value:'XXXXXXXX'},
                {title: 'WALLET BALANCE', value:'0'},
                {title: 'HOLD BALANCE', value:'0'},
                {title: 'TRADE PROFIT %', value:'0'},
            ],
            chartData:[
                {title: 'Name of chart', image:'chart1.png'},
                {title: 'Name of chart', image:'chart2.png'},
                {image:'chart3.png'},
            ]
        }
    },
    beforeCreate () {
        if(this.$store.state.token == null) {
            this.$router.push('/login')
        }
    }
}
</script>