<template>
    <div>
        <section class="profile">
            <div class="container">
                <h2 class="text-center">Profile</h2>
                <div class="center-line">
                    <div class="line"></div>
                </div>
                <div class="row">
                    <div class="col-sm-6">
                        <div class="left-profile">
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <h4>Email</h4>
                                        <input type="text" class="form-control">
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <h4>First name</h4>
                                        <input type="text" class="form-control">
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <h4>Last name</h4>
                                        <input type="text" class="form-control">
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <h4>Nationality</h4>
                                        <select class="form-select">
                                            <option selected value=""></option>
                                            <option value="Indian">Indian</option>
                                            <option value="USA">USA</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <h4>Address line 1</h4>
                                        <input type="text" class="form-control">
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <h4>Address line 2</h4>
                                        <input type="text" class="form-control">
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <h4>City/Town/Village</h4>
                                        <input type="text" class="form-control">
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <h4>State/Province</h4>
                                        <input type="text" class="form-control">
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <h4>Postal Code</h4>
                                        <input type="text" class="form-control">
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <h4>Date of Birth</h4>
                                        <input type="text" class="form-control">
                                    </div>
                                </div>
                                <div class="password-section row">
                                <h6>Edit Password</h6>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <h4>Current Password</h4>
                                        <input type="text" class="form-control">
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <h4>New password</h4>
                                        <input type="text" class="form-control">
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <h4>Confirm New password</h4>
                                        <input type="text" class="form-control">
                                    </div>
                                </div>
                                </div>
                                <div class="col-sm-12">
                                    <button class="secondarybtn">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="right">
                            <div class="right-content">
                                <h4>ACCOUNT STATUS</h4>
                                <button class="secondarybtn">Email verified</button>
                                <button class="primarybtn">KYC Submitted</button>
                            </div>
                            <div class="right-content">
                                <h4>Identity verification - KYC</h4>
                                <p>To comply with regulation, participant will have to go through indentity verification.<br>We have recieved your KYC application,we will soon update the status.</p>
                                <button class="secondarybtn">Know more</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name:'Profile',
    data(){
        return{

        }
    },
}
</script>