<template>
     <div class="main-content" id="panel">
    <!-- Topnav -->
    <Header></Header>
    <div class="header pb-6 d-flex align-items-center" style="min-height: 300px; background-image: url(../assets/img/theme/profile-cover.jpg); background-size: cover; background-position: center top;">
      <!-- Mask -->
      <span class="mask bg-gradient-default opacity-8"></span>
      <!-- Header container -->
      <div class="container-fluid d-flex align-items-center">
        <div class="row">
          <div class="col-lg-12 col-md-12">
            <h1 class="display-2 text-white">Xin chào {{itemDatas.account}}</h1>
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
                    <img :src="itemDatas.img" class="rounded-circle">
                  </a>
                </div>
              </div>
            </div>
            <div class="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
              <div class="d-flex justify-content-between">
                <a href="#" class="btn btn-sm btn-info  mr-4 ">Liên hệ</a>
                <a href="#" class="btn btn-sm btn-default float-right">Tin nhắn</a>
              </div>
            </div>
            <div class="card-body pt-0">
              <div class="text-center">
                <h5 class="h3">
                  {{itemDatas.account}}<span class="font-weight-light">, 21</span>
                </h5>
                <div class="h5 font-weight-300">
                  <i class="ni location_pin mr-2"></i>Shop admin
                </div>
                <div class="h5 mt-4">
                  <i class="ni business_briefcase-24 mr-2"></i>Quản lí cửa hàng shop
                </div>
                <div>
                  <i class="ni education_hat mr-2"></i>Sinh viên CNTT
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-8 order-xl-1">
          <form @submit.prevent="updateInfo">
          <div class="card">
            <div class="card-header">
              <div class="row align-items-center">
                <!-- <div class="col-8">
                  <router-link class="btn btn-neutral" to="/profile" >Sửa</router-link>
                </div> -->
                <div class="col-12 text-right">
                  <button type="submit" class="btn btn-sm btn-primary">Lưu</button>
                </div>
              </div>
            </div>
            <div class="card-body">
                <h6 class="heading-small text-muted mb-4">Thông tin người dùng</h6>
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
                        <label class="form-control-label" for="input-email"> Địa chỉ email</label>
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
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label class="form-control-label" for="input-last-name">Giới tính</label>
                        <input type="text" id="input-last-name" class="form-control"  v-model="itemDatas.gender">
                      </div>
                    </div>
                     <div class="col-lg-6">
                        <div class="form-group">
                           <label class="form-control-label" for="input-last-name">Cập nhật ảnh</label>
                <div class="image-upload-wrap">
                    <input class="file-upload-input" type='file'  @change="updateProfile" accept="image/*" />
                    <div class="drag-text">
                      <i class="fas fa-upload"></i>
                      <h3>Chọn tập tin</h3>
                    </div>
                  
                  
                  </div>
                        </div>
                  </div>
                  </div>
                </div>
                <hr class="my-4" />
                <!-- Address -->
                <h6 class="heading-small text-muted mb-4">Thông tin liên lạc</h6>
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
                        <label class="form-control-label" for="input-country">Ngày sinh</label>
                         <input format="YYYY-MM-DD" class="form-control" id ="date" v-model="itemDatas.birthday">
                          <!-- <small>{{$date(itemDatas.birthday).format('DD/MM/YYYY')}}</small> -->
                      </div>
                    </div>
                  </div>
                </div>
                <hr class="my-4" />
              
            </div>
          </div>
          </form>
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
// import datetime from 'vuejs-datetimepicker';
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
            img:'',
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
        !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()
    },
  
  methods:{
        updateInfo(){
        console.log(this.itemDatas)
        const itemid = JSON.parse(localStorage.getItem("data"));
        axios.patch('https://api-gilo.herokuapp.com/api/updateProfile/'+ itemid, this.itemDatas).then(response =>(
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
        this.itemDatas.img = e.target.result;
        console.log(e.target.result);
        }
        this.imageData = e.target.files[0];
        this.onUpload()
    },

    getData(){
    const idShop = JSON.parse(localStorage.getItem("data"));
    axios.get('https://api-gilo.herokuapp.com/api/profileAdmin/'+  idShop)
    .then(response =>(
        console.log(response),
         this.itemDatas = response.data 
    ))
    },
    onUpload(){
        this.img1=null;
        const storageRef=firebase.storage().ref(`${this.imageData.name}`).put(this.imageData);
        this.itemDatas.img=this.imageData.name;
        // console.log(this.imageData.name);
        console.log(storageRef);
        storageRef.on(`state_changed`,snapshot=>{
        this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
            }, error=>{console.log(error.message)},
        ()=>{this.uploadValue=100;
            storageRef.snapshot.ref.getDownloadURL().then((url)=>{
                this.img1 =url;
                this.itemDatas.img=url;
                console.log(this.img1)
                });
            }      
            );
        },
    }

}
</script>
<style scoped>

.file-upload-input {
  /* position: absolute; */
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  outline: none;
  opacity: 0;
  cursor: pointer;
}

.image-upload-wrap {
  border: 1px solid #ced4da;
    border-radius: .25rem;  
    position: relative;
  width: 100%;
  height: 40px;
  padding-left: 15px;
    padding-right: 15px;
}

.image-dropping,
.image-upload-wrap:hover {
  background-color: #17a2b8;
  border: 1px solid #ced4da;
}

.image-title-wrap {
  padding: 0 15px 15px 15px;
  color: #222;
}

.drag-text {
  display: flex;
  text-align: center;
  margin-top: -36px;
  height: 100%;
  width: 50%;
  justify-content: space-between;
}
.drag-text .fa-upload{
  margin-top: 10px;
  margin-left: 10px;
}

.drag-text h3 {
  font-weight: 100;
  text-transform: none;
  color: #15824B;
  padding: 10px 0;
}
.container-fluid .mt--6{
  margin-top: -20px  !important;
}
.display-2 {
  font-size: 4.8rem !important;
    font-weight: 300 !important;
    line-height: 1.2 !important;
}
.mb-4{
    margin-bottom: 0rem !important;
}
</style>
