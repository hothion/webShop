<template>
     <div class="main-content" id="panel">
    <!-- Topnav -->
    <Header></Header>
    <!-- Header -->
    <!-- Header -->
    <div class="header pb-6 d-flex align-items-center" style="min-height: 500px; background-image: url(../assets/img/theme/profile-cover.jpg); background-size: cover; background-position: center top;">
      <!-- Mask -->
      <span class="mask bg-gradient-default opacity-8"></span>
      <!-- Header container -->
      <div class="container-fluid d-flex align-items-center">
        <div class="row">
          <div class="col-lg-7 col-md-10">
            <h1 class="display-2 text-white">Hello Jesse</h1>
            <p class="text-white mt-0 mb-5">This is your profile page. You can see the progress you've made with your work and manage your projects or assigned tasks</p>
            <!-- <a href="#!" class="btn btn-neutral">Edit profile</a> -->
          </div>
        </div>
      </div>
    </div>
    <!-- Page content -->
    <div class="container-fluid mt--6">
      <div class="row">
        <div class="col-xl-4 order-xl-2">
          <div class="card card-profile">
            <img src="../assets/img/theme/img-1-1000x600.jpg" alt="Image placeholder" class="card-img-top">
            <div class="row justify-content-center">
              <div class="col-lg-3 order-lg-2">
                <div class="card-profile-image">
                  <a href="#">
                    <img src="../assets/img/theme/team-4.jpg" class="rounded-circle">
                  </a>
                </div>
              </div>
            </div>
            <div class="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
              <div class="d-flex justify-content-between">
                <a href="#" class="btn btn-sm btn-info  mr-4 ">Connect</a>
                <a href="#" class="btn btn-sm btn-default float-right">Message</a>
              </div>
            </div>
            <div class="card-body pt-0">
              <div class="row">
                <div class="col">
                  <div class="card-profile-stats d-flex justify-content-center">
                    <div>
                      <span class="heading">22</span>
                      <span class="description">Friends</span>
                    </div>
                    <div>
                      <span class="heading">10</span>
                      <span class="description">Photos</span>
                    </div>
                    <div>
                      <span class="heading">89</span>
                      <span class="description">Comments</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="text-center">
                <h5 class="h3">
                  Jessica Jones<span class="font-weight-light">, 27</span>
                </h5>
                <div class="h5 font-weight-300">
                  <i class="ni location_pin mr-2"></i>Bucharest, Romania
                </div>
                <div class="h5 mt-4">
                  <i class="ni business_briefcase-24 mr-2"></i>Solution Manager - Creative Tim Officer
                </div>
                <div>
                  <i class="ni education_hat mr-2"></i>University of Computer Science
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-8 order-xl-1">
          <div class="card">
            <div class="card-header">
              <div class="row align-items-center">
                <div class="col-8">
                  <!-- <h3 class="mb-0">Edit profile </h3> -->
                  <button @click.prevent="updateInfo" type="submit" class="btn btn-neutral">Update</button>
                </div>
                <div class="col-4 text-right">
                  <a href="#!" class="btn btn-sm btn-primary">Settings</a>
                </div>
              </div>
            </div>
            <div class="card-body">
              <form @submit.prevent="updateInfo">
                <h6 class="heading-small text-muted mb-4">User information</h6>
                <div class="pl-lg-4">
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label class="form-control-label" for="input-username">Tên tài khoản</label>
                        <input type="text" id="input-username" class="form-control" placeholder="Tên tài khoản" v-model="itemDatas.account">
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label class="form-control-label" for="input-email"> Địa chỉ Email</label>
                        <input type="email" id="input-email" class="form-control" v-model="itemDatas.email" placeholder="Tên email">
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label class="form-control-label" for="input-first-name">Họ</label>
                        <input type="text" id="input-first-name" class="form-control" placeholder="Họ" v-model="itemDatas.firstName">
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label class="form-control-label" for="input-last-name">Tên</label>
                        <input type="text" id="input-last-name" class="form-control" placeholder="Tên" v-model="itemDatas.lastName">
                      </div>
                    </div>
                  </div>
                </div>
                <hr class="my-4" />
                <!-- Address -->
                <h6 class="heading-small text-muted mb-4">Contact information</h6>
                <div class="pl-lg-4">
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group">
                        <label class="form-control-label" for="input-address">Địa chỉ thường trú</label>
                        <input id="input-address" class="form-control" placeholder="Địa chỉ" v-model="itemDatas.address" type="text">
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-4">
                      <div class="form-group">
                        <label class="form-control-label" for="input-city">Số điện thoại</label>
                        <input type="text" id="input-phone" class="form-control" placeholder="số đt" v-model="itemDatas.phone">
                      </div>
                    </div>
                    <div class="col-lg-4">
                      <div class="form-group">
                        <label class="form-control-label" for="input-country">Giới tính</label>
                        <input type="text" id="input-gender" class="form-control" placeholder="Giới tính" v-model="itemDatas.gender">
                      </div>
                    </div>
                  </div>
                </div>
                <hr class="my-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
      <!-- Footer -->
      <Footer></Footer>
    </div>
  </div>
</template>
<script>
import Footer from './Footer.vue';
import Header from './Header.vue';
import axios from "axios";
import firebase from "firebase/app";
import "firebase/storage";
// import datetime from 'vuejs-datetimepicker';
export default {
    components:{Footer,Header  
    },
    name: 'ProfileAdmin',
 data () {
      return {
        itemDatas:{
            account:'',
            firstName:'',
            lastName:'',
            email:'',
            phone:'',
            address:'',
            password:'',
            birthday:'',
            gender: '',
            remember_token:'',
            images:'',
            caption : '',
            img1: ''
        },
        imageData: null
        }
    },
    created(){
        this.getData()
        const firebaseConfig = {
            apiKey: "AIzaSyB3WwnhfTjCOshHFIxmJgqJOImS6_EhmJc",
            authDomain: "gilo-25373.firebaseapp.com",
            projectId: "gilo-25373",
            storageBucket: "gilo-25373.appspot.com",
            messagingSenderId: "1057644567623",
            appId: "1:1057644567623:web:d86b37fee334a1a0206562",
            measurementId: "G-D1CL3L7CSX"
        };
        firebase.initializeApp(firebaseConfig);
    },
  
  methods:{
        updateInfo(){
        console.log(this.itemDatas)
     

        const itemid = JSON.parse(localStorage.getItem("data"));
        axios.patch('https://damp-woodland-88343.herokuapp.com/api/updateProfile/'+ itemid, this.itemDatas).then(response =>(
                console.log("success"),
                this.itemDatas=response.data,
                    // console.log(this.formData),
                    this.getData()
            )).catch(error => console.log(error))
    },

    updateProfile(e){
        let imagesAdmin = e.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(imagesAdmin);
        reader.onload = e => {
        this.itemDatas.images = e.target.result;
        console.log(e.target.result);
        }
        this.imageData = e.target.files[0];
        this.onUpload()
    },

    getData(){
    const itemDatas = JSON.parse(localStorage.getItem("data"));
    axios.get('https://damp-woodland-88343.herokuapp.com/api/profileAdmin/'+  itemDatas)
    .then(response =>(
        console.log(response),
         this.itemDatas = response.data
         
    ))
    },

    onUpload(){
        this.img1=null;
        const storageRef=firebase.storage().ref(`${this.imageData.name}`).put(this.imageData);
        this.itemDatas.images=this.imageData.name;
        // console.log(this.imageData.name);
        console.log(storageRef);
        storageRef.on(`state_changed`,snapshot=>{
        this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
            }, error=>{console.log(error.message)},
        ()=>{this.uploadValue=100;
            storageRef.snapshot.ref.getDownloadURL().then((url)=>{
                this.img1 =url;
                this.itemDatas.images=url;
                console.log(this.img1)
                });
            }      
            );
        },
    }

}
</script>