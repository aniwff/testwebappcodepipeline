<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="TestUploadForm2.aspx.cs" Inherits="TestWebAppandPipeline.TestUploadForm2" %>
<asp:Content ID="Content2" ContentPlaceHolderID="HeadContent" runat="server">
    <script src="Scripts/kendoui/kendo-buttons-vue-wrapper.js"></script>
    <script src="Scripts/kendoui/kendo-layout-vue-wrapper.js"></script>
</asp:Content>
<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">
    <div id="app">
        <div id="container-fluid">
            <div class="row">
                <div class="col-sm-3 col-md-3 col-lg-3">
                    <label for="userName">User Name</label>
                </div>
                <div class="col-sm-5 col-md-5 col-lg-5">
                    <input type="text" id="userName" name="userName" width="100%"/>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-3 col-md-3 col-lg-3">
                    <label for="fullName">Full Name</label>
                </div>
                <div class="col-sm-5 col-md-5 col-lg-5">
                    <input type="text" id="fullName" name="fullName"/>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-3 col-md-3 col-lg-3">          
                    <label for="address">Address</label>
                </div>
                <div class="col-sm-5 col-md-5 col-lg-5">
                    <input type="text" id="address" name="address"/>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-3 col-md-3 col-lg-3">          
                    <label for="phoneNumber">Phone Number</label>
                </div>
                <div class="col-sm-5 col-md-5 col-lg-5">
                    <input type="text" id="phoneNumber" name="phoneNumber"/>
                </div>
            </div>
            <div class="row">
                <kendo-button type="button" @click="onSend()">Send</kendo-button>
            </div>
            <br />
            <div class="row" v-show="isSuccess">
                <h4>{{response}}</h4>
            </div>
        </div>
    </div>
    <script>
        var vm = new Vue({
            el: "#app",
            data: function () {
                return {
                    response: null,
                    isSuccess: false
                }
            },
            methods: {
                onSend: function () {
                    var self = this;
                    var userName = $('#userName').val();
                    var fullName = $('#fullName').val();
                    var address = $('#address').val();
                    var phoneNumber = $('#phoneNumber').val();

                    var postObject = {
                        "user_name": userName,
                        "full_name": fullName,
                        "address": address,
                        "phone_number": phoneNumber
                    };

                    axios.post("http://localhost/TesWebApiandPipeline/api/Users", postObject).
                        then(function (response) {
                            if (response && response) {
                                self.response = response;
                                self.isSuccess = true;
                            }
                        })
                        .catch(function (error) {
                            self.isSuccess = true;
                            self.response = error;
                            console.log(error);
                        })
                                        

                }
            },
            mounted: function () {
            }
        })


    </script>
</asp:Content>
