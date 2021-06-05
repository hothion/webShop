<template>
<div>
    <nav id="navbar-main" class="navbar navbar-horizontal navbar-transparent navbar-main navbar-expand-lg navbar-light">
        <div class="container">
            
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-collapse" aria-controls="navbar-collapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
            <div class="navbar-collapse navbar-custom-collapse collapse" id="navbar-collapse">
                <div class="navbar-collapse-header">
                    <div class="row">
                        <div class="col-6 collapse-brand">
                            <a href="dashboard.html">
                                <img src="../assets/img/brand/blue.png">
                            </a>
                        </div>
                        <div class="col-6 collapse-close">
                            <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbar-collapse" aria-controls="navbar-collapse" aria-expanded="false" aria-label="Toggle navigation">
                <span></span>
                <span></span>
              </button>
                        </div>
                    </div>
                </div>
                <hr class="d-lg-none" />
                
            </div>
        </div>
    </nav>
    <!-- Main content -->
    <div class="main-content">
        <!-- Header -->
        <div class="header bg-gradient-primary py-7 py-lg-8 pt-lg-9">
            <div class="container">
                
            </div>
            <div class="separator separator-bottom separator-skew zindex-100">
                <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <polygon class="fill-default" points="2560 0 2560 100 0 100"></polygon>
        </svg>
            </div>
        </div>
        <!-- Page content -->
        <div class="container mt--8 pb-5">
            <div class="row justify-content-center">
                <div class="col-lg-5 col-md-7">
                    <div class="card bg-secondary border-0 mb-0">
                        <div class="card-header bg-transparent pb-5">
                            <div class="text-muted text-center mt-2 mb-3">                          
                        <img src="https://www.enic.it/wp-content/uploads/2019/11/gilo-Logo.png"
                         class="navbar-brand-img" alt="...">
                       <h1>Đăng nhập</h1>
                       </div>
                        </div>
                        <div class="card-body px-lg-5 py-lg-5">
                            <form role="form" @submit.prevent="onSubmit" method="post">
                                <div class="form-group mb-3">
                                    <div class="input-group input-group-merge input-group-alternative">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text"><i class="fas fa-envelope"></i></span>
                                        </div>
                                        <input class="form-control" v-model="account" required placeholder="Nhập tên" type="text">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="input-group input-group-merge input-group-alternative">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text"><i class="fas fa-lock"></i></span>
                                        </div>
                                        <input class="form-control" v-model="password" required placeholder="Mật khẩu" type="password">
                                    </div>
                                </div>
                                <div class="custom-control custom-control-alternative custom-checkbox">
                                    <input class="custom-control-input" id=" customCheckLogin" type="checkbox">
                                    <label class="custom-control-label" for=" customCheckLogin">
                    <span class="text-muted">Nhớ mật khẩu</span>
                  </label>
                                </div>
                                <div class="text-center">
                                    <button type="submit" class="btn btn-primary my-4">Đăng nhập</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-6">
                            <a href="#" class="text-light"><small>Quên mật khẩu?</small></a>
                        </div>
                        <div class="col-6 text-right">
                            <a href="#" class="text-light"><small>Tạo tài khoản mới</small></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <router-view></router-view>
</div>
</template>
<script>
import axios from "axios";

export default {
  name: 'LoginAdmin',
  data () {
    return {
      account: "",
      password: ""
    
    }
  },
  
  methods: {
        onSubmit(){
        const data = {
            account: this.account,
            password: this.password,
        }
            axios.post('https://api-gilo.herokuapp.com/api/loginShop', data)
            .then(response => {
            if(response.status === 200)
            {
                console.log("login sucessfully");
                    localStorage.setItem("data",response.data.idToken);
                    const remember_token = JSON.parse(localStorage.getItem("data"));
                    if(remember_token == 1){
                            alert("Đăng nhập thành công vào admin.");
                            this.$router.push({ path : '/' });
                                window.location.reload();
                            }else{
                            alert("Đăng nhập thất bại.");
                        }
            }
        });       
        }
        }
}
     
</script>

<style lang ="css">
.bg-secondary{
   background-color: #f7fafc !important
}
.container.mt--8{
    background-color: #8965e0!important;
}
.row.justify-content-center{
    margin: 0;
}
.text-muted{
    height: 50px;
}
.card-header img{
    width: 70px;
    height: auto;
    margin-top: -5px;
}
.text-muted h1{
    margin-top: -20px;
    font-size: 28px;
    margin-left: -15px;
    font-weight: bold;
    color: #6c757d;
    padding: 25px 0 20px 25px;
    }
.card-body form{
    margin-left: 0px  !important;
    width: 100% !important;
}
</style>
