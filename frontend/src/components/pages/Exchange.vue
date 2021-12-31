<template>
    <div>
        <section class="client">
            <div class="container">
                <h2 class="text-center">Our Client</h2>
                <p class="text-center">Working Together</p>
                <div class="row">
                    <div class="col-sm-1"></div>
                    <div class="col-sm-2" v-for="(client,index) in imageData" :key="index">
                        <div class="client-detail">
                            <img :src="'/images/' + client.image" alt="client-image">
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <section class="exchange-calculater">
            <div class="container">
                <h2 class="text-center">Exchange calcular</h2>
                <div class="center-line mb-5">
                    <div class="line"></div>
                </div>
                <div class="row">
                    <div class="col-sm-2"></div>
                    <div class="col-sm-5">
                        <div class="table-responsive">
                             <table>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th></th>
                                        <th>Buy</th>
                                        <th class="last">Sell</th>
                                        <!-- <th rowspan="4" class="last-head"></th> -->
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td width="15%"><img src="/images/usd.png" alt="usd"></td>
                                        <td width="15%">USD</td>
                                        <td width="20%">00.00</td>
                                        <td width="20%" class="last">00.00</td>
                                    </tr>
                                    <tr>
                                        <td width="15%"><img src="/images/eur.png" alt="usd"></td>
                                        <td width="15%">EUR</td>
                                        <td width="20%">00.00</td>
                                        <td width="20%" class="last">00.00</td>
                                    </tr>
                                    <tr>
                                        <td width="15%"><img src="/images/rub.png" alt="usd"></td>
                                        <td width="15%">RUB</td>
                                        <td width="20%">00.00</td>
                                        <td width="20%" class="last">00.00</td>
                                        
                                    </tr>
                                    <tr>
                                        <td colspan="4" class="update-more"><p>Updated 05.05.21 <span>More Currencies</span> </p></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="card">
                            <div class="last-head">
                                <div class="form-group my-3">
                                    <h6>Have</h6>
                                    <select class="form-select">
                                        <option selected value="USD">USD</option>
                                        <option value="EUR">EUR</option>
                                        <option value="RUB">RUB</option>
                                    </select>
                                </div>
                                <div class="form-group my-3">
                                    <h6>Want</h6>
                                    <select class="form-select">
                                        <option selected value="EUR">EUR</option>
                                        <option value="USD">USD</option>
                                        <option value="RUB">RUB</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-2"></div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name:'Exchange',
    data(){
        return{
            imageData:[
                {image:'cme.png'},
                {image:'euro.png'},
                {image:'ex.png'},
                {image:'borsa.png'},
                {image:'nasdaq.png'},
            ]
        }
    }
}
</script>