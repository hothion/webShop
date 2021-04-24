<template >
<div>
    <nav class="sidenav navbar navbar-vertical  fixed-left  navbar-expand-xs navbar-light bg-white" id="sidenav-main">
        <div class="scrollbar-inner">
            <!-- Brand -->
            <div class="sidenav-header  align-items-center">
                <a class="navbar-brand" href="javascript:void(0)">
                    <img src="logo.png" class="navbar-brand-img" alt="...">
                </a>
            </div>
            <div class="navbar-inner">
                <!-- Collapse -->
                <div class="collapse navbar-collapse" id="sidenav-collapse-main">
                    <!-- Nav items -->
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <router-link to="/dashboard" class="nav-link active">
                            <i class="fa fa-home"></i>
                                <span class="nav-link-text">Trang quản lý</span>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/product" >                           
                               <i class="fas fa-gift"></i>
                                <span class="nav-link-text">Quản lý sản phẩm</span>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/order" >                         
                                <i class="fa fa-archive"></i>
                                <span class="nav-link-text">Quản lý đơn hàng</span>
                             </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/statistic" >                           
                                <i class="fa fa-wrench"></i>
                                <span class="nav-link-text">Thống kê</span>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/chat" >                         
                                <i class="fas fa-comment-dots"></i>
                                <span class="nav-link-text">Tin nhắn</span>
                             </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/notification" >                        
                               <i class="fas fa-bell"></i>
                                <span class="nav-link-text">Thông báo</span>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/profile" >                         
                                <i class="fas fa-address-card"></i>
                                <span class="nav-link-text">Thông tin cá nhân</span>
                             </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/login" >                           
                                <i class="fas fa-sign-in-alt"></i>
                                <span class="nav-link-text">Đăng nhập</span>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
    <router-view></router-view>
</div>
</template>