<template>
    <div>
        <section class="withdraw">
            <div class="container">
                <div class="row">
                    <div class="col-sm-2"></div>
                    <div class="col-sm-8">
                        <div class="withdraw-content">
                            <div class="choose-options">
                                <h4>CHOOSE OPTIONS</h4>
                                <div class="option d-flex">
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                                        <label class="form-check-label" for="flexRadioDefault1">
                                            EP Money
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                                        <label class="form-check-label" for="flexRadioDefault1">
                                            Wallet
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                                        <label class="form-check-label" for="flexRadioDefault1">
                                            Trade Money
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="withdrwal-inner">
                                <div class="row">
                                    <div class="col-sm-12 currency">
                                        <div class="row">
                                            <div class="col-sm-6">
                                                <div class="form-group">
                                                    <h4>SELECT CURRENCY</h4>
                                                    <select class="form-select">
                                                        <option selected value="">SELECT CURRENCY</option>
                                                        <option value="USD">USD</option>
                                                        <option value="EURO">EURO</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-sm-6">
                                                <div class="form-group">
                                                    <h4>AMOUNT</h4>
                                                    <input type="text" class="form-control" placeholder="0.00">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 description">
                                        <div class="form-group">
                                            <h4>DESCRIPTION</h4>
                                            <textarea type="text" rows="7" class="form-control" placeholder="Description"></textarea>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 bg-withdrwal">
                                        <div class="row">
                                            <div class="col-sm-6">
                                                <div class="form-group">
                                                    <h4>BANK ACCOUNT NO</h4>
                                                    <input type="text" class="form-control">
                                                </div>
                                            </div>
                                            <div class="col-sm-3">
                                                <div class="form-group">
                                                    <h4>IFSC</h4>
                                                    <input type="text" class="form-control">
                                                </div>
                                            </div>
                                            <div class="col-sm-3">
                                                <div class="form-group">
                                                    <h4>NAME</h4>
                                                    <input type="text" class="form-control">
                                                </div>
                                            </div>
                                        </div>
                                        <button class="secondarybtn" data-bs-toggle="modal" data-bs-target="#exampleModal">WITHDRAWL</button>
                                    </div>
                                    <div class="col-sm-12 bg-withdrwal">
                                        <div class="row">
                                            <div class="col-sm-6">
                                                <div class="form-group">
                                                    <h4>PAYPAL EMAIL</h4>
                                                    <input type="text" class="form-control">
                                                </div>
                                            </div>
                                            <div class="col-sm-6">
                                                <div class="form-group">
                                                    <h4>DESCRIPTION</h4>
                                                    <input type="text" class="form-control">
                                                </div>
                                            </div>
                                        </div>
                                        <button class="secondarybtn" data-bs-toggle="modal" data-bs-target="#exampleModal">WITHDRAWL</button>
                                    </div>
                                    <div class="col-sm-12 bg-withdrwal">
                                        <div class="row">
                                            <div class="col-sm-6">
                                                <div class="form-group">
                                                    <h4>SKRILL EMAIL:</h4>
                                                    <input type="text" class="form-control">
                                                </div>
                                            </div>
                                            <div class="col-sm-6">
                                                <div class="form-group">
                                                    <h4>DESCRIPTION</h4>
                                                    <input type="text" class="form-control">
                                                </div>
                                            </div>
                                        </div>
                                        <button class="secondarybtn" data-bs-toggle="modal" data-bs-target="#exampleModal">WITHDRAWL</button>
                                    </div>
                                    <div class="col-sm-12 bg-withdrwal">
                                        <div class="row">
                                            <div class="col-sm-6">
                                                <div class="form-group">
                                                    <h4>PERFECT MONEY:</h4>
                                                    <input type="text" class="form-control">
                                                </div>
                                                <button class="secondarybtn" data-bs-toggle="modal" data-bs-target="#exampleModal">WITHDRAWL</button>
                                            </div>
                                            <div class="col-sm-6">
                                                <div class="form-group">
                                                    <h4>BTC ADDRESS:</h4>
                                                    <input type="text" class="form-control">
                                                </div>
                                                <button class="secondarybtn" data-bs-toggle="modal" data-bs-target="#exampleModal">WITHDRAWL</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-2"></div>
                </div>
            </div>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel"></h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body text-center">
                        <p>NOTE : Before you submit a withdraw form , get the withdrawal approval code from support centre Email/Chat. Once u received the approval Code via Email. Enter the Code and get the withdrawal in 3 bank working days. Without approval code your withdraw will not be successful.</p>
                        <h5>APPROVAL TRANSACTION CODE</h5>
                        <input type="text" class="form-control mb-3">
                        <button class="secondarybtn">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name:'Withdraw',
    data(){
        return{

        }
    },
}
</script>