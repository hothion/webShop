<template>
    <div class="main-content" id="panel">
        <!-- Topnav -->
        <Header></Header>
        <div class="content">
            <h1>Danh sách đơn hàng</h1>
            <div class="content list">
                <button @click.prevent="orderAll">Tất cả đơn hàng</button>
                <button @click.prevent="orderConfirm"> Đơn chưa xác nhận</button>
                <button @click.prevent="orderFinished">Hoàn thành</button>
            </div>
            <div class="content table">
                <div class="content table_title">
                    <p>Id</p>
                    <p>Tên khách hàng </p>
                    <p>Địa chỉ</p>
                    <p>Ngày đặt hàng</p>
                    <p>Tổng tiền</p>
                    <p>Tình trạng</p>
                    <p>Chi tiết </p>
                    <p>Hủy đơn</p>
                </div>
                <div class="content table_content" v-for="order in orders" :key="order.id">
                    <p>{{ order.id }}</p>
                    <p>{{ order.users[0].firstName }} {{ order.users[0].lastName }}</p>
                    <p>{{ order.users[0].address }}</p>
                    <p>{{ order.created_at }}</p>
                    <p>{{order.product[0].price*order.quantity}}</p>
                    <p>
                        <button type="submit" id="order_status" @click.prevent="editOrder(order.id)">
                            {{ order.order_status[0].content }}
                        </button>
                    </p>
                    <p>
                    <a class="btn btn-danger" href="#detailOrder">
                        <button @click.prevent="getOrderDetail(order.users[0].id)"><i class="fas fa-eye"></i></button>
                    </a>
                    </p>
                    <p>
                        <button @click.prevent="deleteOrder(order.id)"><i class="fas fa-minus-circle"></i></button>
                    </p>
                </div>
            </div>
            <div id="detailOrder" class="modal-window-order">
                <div class="form">
                    <a href="#" title="Close" class="modal-close">Close</a>
                <center> <h2> Sản phẩm</h2></center>
                <div id="product_detail" v-for="detail in Orderdetails" :key="detail" >
                    <div id="img">
                        <img :src="detail.img" id="img_order_detail" alt="image" /> 
                    </div>
                    <div style ="margin-left:30px">
                        <h2> {{detail.name}}</h2>
                        <h3> Số lượng: {{detail.quantityCart}}</h3>
                        <h3> Giá sản phẩm: {{detail.price}}</h3>
                    </div>
                </div>
                </div>
            </div>
        </div>
           <Footer></Footer>
    </div>
</template>
<script>
import Vue from 'vue';
import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);
import Footer from './Footer.vue'
import Header from './Header.vue'
export default {
   components:{
         Footer,
         Header
    },
    data() {
        return {
            orders: [],
            Orderdetails: [],
            currentYear: new Date().getFullYear(),
            orderbyStatus: 0
        };
    },
    created() {
        this.getData();
    },
    methods: {
        deleteOrder(id) {
            axios.delete(
                'https://damp-woodland-88343.herokuapp.com/api/order/'+id
            );
            alert("Delete order succes");
            this.getData();
        },
        getOrderDetail(id) {
            let uri = 'https://damp-woodland-88343.herokuapp.com/api/order/'+id;
            this.axios.get(uri).then((response) => {
                this.Orderdetails = response.data;
            });           
        },
        orderConfirm() {
            this.orderbyStatus = +1;
            fetch('https://damp-woodland-88343.herokuapp.com/api/order/' + this.orderbyStatus)
                .then((response) => response.json())
                .then((data) => (this.orders = data));
        },
        orderFinished() {
            this.orderbyStatus = +5;
            fetch('https://damp-woodland-88343.herokuapp.com/api/order/' +this.orderbyStatus)
                .then((response) => response.json())
                .then((data) => (this.orders = data));
        },
        orderAll() {
            fetch('https://damp-woodland-88343.herokuapp.com/api/order')
                .then((response) => response.json())
                .then((data) => (this.orders = data));
        },
        getData() {
            if (this.orderbyStatus == 0) {
                fetch('https://damp-woodland-88343.herokuapp.com/api/order')
                    .then((response) => response.json())
                    .then((data) => (this.orders = data));
            }
            // this.date_order = moment("13:30 9 11 2021").format('YYYY-MM-DD');
        },
        editOrder(id) {
            axios.put(
               'https://damp-woodland-88343.herokuapp.com/api/order/'+id
            );
            this.getData();
        },
    },
};
</script>
<style lang="scss">
.order_table table, th, td{
            border:1px solid #ccc;
        }
        .order_table table{
            border-collapse:collapse;
            width:100%;
            th, td{
            text-align:left;
            padding:10px;
            }
            tr:hover{
                background-color:#ddd;
                cursor:pointer;
            }
        }
        .order{
            margin-left: 1%;
            width: 100%;
        }
        .order_header{
            display: flex;
        }
        .order_header button{
            float: right;
        }
        td a{
            background-color: rgb(236, 63, 10); /* Màu của Quản trị mạng ^^ */
            border: none;
            color: white;
            padding: 10px 10px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            margin: 4px 2px;
            -webkit-transition-duration: 0.4s; /* Safari */
            transition-duration: 0.4s;
            cursor: pointer;
            border-radius: 4px;
        }
        td #order_status{
            background-color: crimson; /* Màu của Quản trị mạng ^^ */
            border: none;
            color: white;
            padding: 13px 10px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            margin: 4px 2px;
            -webkit-transition-duration: 0.4s; /* Safari */
            transition-duration: 0.4s;
            cursor: pointer;
            border-radius: 4px;
        }
        td #pay{
            background-color: rgb(107, 73, 199); /* Màu của Quản trị mạng ^^ */
            border: none;
            color: white;
            padding: 13px 10px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            margin: 4px 2px;
            -webkit-transition-duration: 0.4s; /* Safari */
            transition-duration: 0.4s;
            cursor: pointer;
            border-radius: 4px;
        }
        td #shipping{
            background-color: rgb(29, 223, 132); /* Màu của Quản trị mạng ^^ */
            border: none;
            color: white;
            padding: 13px 10px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            margin: 4px 2px;
            -webkit-transition-duration: 0.4s; /* Safari */
            transition-duration: 0.4s;
            cursor: pointer;
            border-radius: 4px;
        }

        .modal-window-order {
            position: fixed;
            background-color: rgba(255, 255, 255, 0.25);
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: 999;
            visibility: hidden;
            opacity: 0;
            pointer-events: none;
            transition: all 0.3s;
            &:target {
                visibility: visible;
                opacity: 1;
                pointer-events: auto;
            }
            & > div {
                width: 55%;
                position: absolute;
                top: 50%;
                left: 55%;
                height: 75%;
                overflow: auto;
                border-radius: 0.4rem;
                transform: translate(-50%, -50%);
                padding: 2em;
                background-image: linear-gradient(to right,#ddd4d7, #ebddd9);
                box-shadow: 0 4px 8px 0 rgba(211, 202, 202, 0.2), 0 20px 20px 0 rgba(0, 0, 0, 0.19);
            }
            header {
                font-weight: bold;
            }
            h1 {
                font-size: 150%;
                margin: 0 0 15px;
            }
            }
            .modal-close {
                color: #aaa;
                line-height: 50px;
                font-size: 80%;
                position: absolute;
                right: 0;
                text-align: center;
                top: 0;
                width: 70px;
                text-decoration: none;
                &:hover {
                    color: black;
            }

            }
    #product_detail{
        display: flex;
        #content{
            margin-left: 2%;
        }
    }
</style>
