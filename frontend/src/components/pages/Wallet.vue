<template>
    <div>

        <section class="wallet py-5">
            <div class="container">
                <div class="row">
                    <div class="col-sm-4" v-for="(wallet,index) in walletData" :key="index">
                        <div class="card">
                            <div class="card-body">
                                <h6>{{wallet.title}}</h6>
                                <p>{{wallet.value}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="after-wallet py-5">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-1"></div>
                    <div class="col-sm-2">
                        <div class="card py-4">
                            <div class="card-body text-center">
                                <img class="mb-5" src="/images/afterwallet1.png" alt="afterwallet1"><br>
                                <button class="whitebtn" @click="stepone">SEND MONEY TO WALLET</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-2">
                        <div class="card py-4">
                            <div class="card-body text-center">
                                <img class="mb-5" src="/images/afterwallet2.png" alt="afterwallet2"><br>
                                <button class="whitebtn" @click="steptwo">ADD MONEY TO WALLET</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-2">
                        <div class="card py-4">
                            <div class="card-body text-center">
                                <img class="mb-5" src="/images/afterwallet3.png" alt="afterwallet3"><br>
                                <button class="whitebtn" @click="stepthree">REQUEST BALANCE</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-2">
                        <div class="card py-4">
                            <div class="card-body text-center">
                                <img class="mb-5" src="/images/afterwallet4.png" alt="afterwallet4"><br>
                                <button class="whitebtn" @click="stepfour">DOWNLOAD STATEMENT</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-2">
                        <div class="card py-4">
                            <div class="card-body text-center">
                                <img class="mb-5" src="/images/afterwallet5.png" alt="afterwallet5"><br>
                                <button class="whitebtn" @click="stepfive">SEND MONEY TO EXP</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-1"></div>
                </div>
            </div>
        </section>

        <section class="sendmoney">
            <div class="container send-wallet" v-if="step === 1">
                <h2 class="text-center">SEND MONEY TO WALLET</h2>
                <div class="center-line">
                    <div class="line"></div>
                </div>
                <div class="row">
                    <div class="col-sm-6">
                        <div class="form-group">
                            <label>EMAIL</label>
                            <input type="email" class="form-control">
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="form-group">
                            <label>AMOUNT</label>
                            <input type="text" class="form-control">
                        </div>
                    </div>
                    <div class="col-sm-12">
                        <div class="form-group">
                            <label>DESCRIPTIONS</label>
                            <textarea class="form-control" rows="7"></textarea>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="form-group">
                            <select class="form-select">
                                <option selected value="">SELECT CURRENCY</option>
                                <option value="USD">USD</option>
                                <option value="EURO">EURO</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <label>ESCROW</label>
                        <div class="radio">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                                <label class="form-check-label" for="flexRadioDefault1">
                                    On
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
                                <label class="form-check-label" for="flexRadioDefault2">
                                    Off
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 text-center">
                        <button class="secondarybtn">Submit</button>
                    </div>
                </div>
            </div>
            <div class="container deposit" v-if="step === 2">
                <h2 class="text-center">DEPOSIT</h2>
                <div class="center-line">
                    <div class="line"></div>
                </div>
                <p class="text-center">Select from our popular payment options below</p>
                <div class="row">
                    <div class="col-sm-4" v-for="(deposit,index) in depositData" :key="index">
                        <div class="card text-center">
                            <div class="text-center">
                                <img :src="'/images/' + deposit.image" :alt="deposit.title">
                            </div>
                            <h5 class="my-3">{{deposit.title}}</h5>
                            <p>Fees</p>
                            <p>1%</p>
                            <p class="mb-5">Upto 5days</p>
                            <div class="text-center">
                                <router-link class="secondarybtn" to="#">Deposit now</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container send-wallet" v-if="step === 3">
                <div class="row">
                    <div class="col-sm-6">
                        <div class="form-group">
                            <label>EMAIL</label>
                            <input type="email" class="form-control">
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="form-group">
                            <label>AMOUNT</label>
                            <input type="text" class="form-control">
                        </div>
                    </div>
                    <div class="col-sm-12">
                        <div class="form-group">
                            <label>DESCRIPTIONS</label>
                            <textarea class="form-control" rows="7"></textarea>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="form-group">
                            <select class="form-select">
                                <option selected value="">SELECT CURRENCY</option>
                                <option value="USD">USD</option>
                                <option value="EURO">EURO</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-sm-12 text-center">
                        <button class="secondarybtn">Submit</button>
                    </div>
                </div>
            </div>
            <div class="container send-wallet" v-if="step === 4">
                <h2 class="text-center">DOWNLOAD STATEMENT FORM</h2>
                <div class="center-line">
                    <div class="line"></div>
                </div>
                <div class="row">
                    <div class="col-sm-12">
                        <div class="form-group">
                           <div class="form-group">
                                <h5>Select</h5>
                                <select class="form-select">
                                    <option selected value="1-10 transactions">1-10 transactions</option>
                                    <option value="10-20 transactions">10-20 transactions</option>
                                    <option value="20-30 transactions">20-30 transactions</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <button class="secondarybtn">Download PDF</button>
                    </div>
                    <div class="col-sm-6">
                        <button class="primarybtn">Request Email</button>
                    </div>
                    
                </div>
            </div>
            <div class="container send-wallet" v-if="step === 5">
                <h2 class="text-center">SEND MONEY TO EXE PAY</h2>
                <div class="center-line">
                    <div class="line"></div>
                </div>
                <div class="row">
                    <div class="col-sm-6">
                        <div class="form-group">
                            <label>EMAIL</label>
                            <input type="email" class="form-control">
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="form-group">
                            <label>AMOUNT</label>
                            <input type="text" class="form-control">
                        </div>
                    </div>
                    <div class="col-sm-12">
                        <div class="form-group">
                            <label>DESCRIPTIONS</label>
                            <textarea class="form-control" rows="7"></textarea>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="form-group">
                            <select class="form-select">
                                <option selected value="">SELECT CURRENCY</option>
                                <option value="USD">USD</option>
                                <option value="EURO">EURO</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <label>ESCROW</label>
                        <div class="radio">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                                <label class="form-check-label" for="flexRadioDefault1">
                                    On
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
                                <label class="form-check-label" for="flexRadioDefault2">
                                    Off
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 text-center">
                        <button class="secondarybtn">Submit</button>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name:'Wallet',
    data(){
        return{
            step: 1,
            walletData:[
                {title:'AVAILABLE BALANCE :', value:'$ 0.00'},
                {title:'NO.OF TRANSACTION :', value:'$ 0.00'},
                {title:'HOLD BALANCE :', value:'$ 0.00'},
            ],
            depositData:[
                {image: 'paypal.png', title: 'Paypal'},
                {image: 'skrill.png', title: 'Skrill'},
                {image: 'netler.png', title: 'Neteller'},
                {image: 'pm.png', title: 'Perfect Money'},
                {image: 'paytm.png', title: 'Paytm'},
            ]
        }
    },methods:{
        stepone(){
            this.step = 1
        },
        steptwo(){
            this.step = 2
        },
        stepthree(){
            this.step = 3
        },
        stepfour(){
            this.step = 4
        },
        stepfive(){
            this.step = 5
        }
    }
}
</script>