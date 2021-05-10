<template>
    <div class="main-content" id="panel">
        <!-- Topnav -->
        <Header></Header>
        <div class="row align-items-center py-4">
            <div class="col-lg-6 col-7">
                <nav aria-label="breadcrumb" class="d-none d-md-inline-block ml-md-4">
                    <ol class="breadcrumb breadcrumb-links breadcrumb-dark">
                        <li class="breadcrumb-item">
                            <router-link to="/dashboard"><i class="fas fa-home"></i></router-link>
                        </li>
                        <li class="breadcrumb-item">
                            <router-link to="/order">Quản lý đơn hàng</router-link>
                        </li>
                    </ol>
                </nav>
            </div>
        </div>
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
                <p>{{ order.users.firstName }} {{ order.users.lastName }}</p>
                <p>{{ order.users.address }}</p>
                <p>{{ order.created_at }}</p>
                <p>{{order.product[0].price}}</p>
                <p>
                    <button type="submit" id="order_status" @click.prevent="editOrder(order.id)">
                        <!-- {{ order.order_status.content }} --> hh
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
                <center>
                    <h2> Sản phẩm</h2>
                </center>
                <div id="product_detail" v-for="detail in Orderdetails" :key="detail">
                    <div id="img">
                        <img :src="detail.img" id="img_order_detail" alt="image" />
                    </div>
                    <div style="margin-left:30px">
                        <h2> {{detail.name}}</h2>
                        <h3> Số lượng: {{detail.quantityCart}}</h3>
                        <h3> Giá sản phẩm: {{detail.price}}</h3>
                    </div>
                </div>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
    import Vue from 'vue';
    import VueAxios from 'vue-axios';
    import axios from 'axios';
    Vue.use(VueAxios, axios);
    import Header from './Header.vue'
    export default {
        components: {
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
                    'https://api-gilo.herokuapp.com/api/order/' + id
                );
                alert("Delete order succes");
                this.getData();
            },
            getOrderDetail(id) {
                let uri = 'https://api-gilo.herokuapp.com/api/order/' + id;
                this.axios.get(uri).then((response) => {
                    this.Orderdetails = response.data;
                });
            },
            orderConfirm() {
                this.orderbyStatus = +1;
                fetch('https://api-gilo.herokuapp.com/api/order/' + this.orderbyStatus)
                    .then((response) => response.json())
                    .then((data) => (this.orders = data));
            },
            orderFinished() {
                this.orderbyStatus = +5;
                fetch('https://api-gilo.herokuapp.com/api/order/' + this.orderbyStatus)
                    .then((response) => response.json())
                    .then((data) => (this.orders = data));
            },
            orderAll() {
                fetch('https://api-gilo.herokuapp.com/api/order')
                    .then((response) => response.json())
                    .then((data) => (this.orders = data));
            },
            getData() {
                if (this.orderbyStatus == 0) {
                    fetch('https://api-gilo.herokuapp.com/api/order')
                        .then((response) => response.json())
                        .then((data) => (this.orders = data));
                }
                // this.date_order = moment("13:30 9 11 2021").format('YYYY-MM-DD');
            },
            editOrder(id) {
                axios.put(
                    'https://api-gilo.herokuapp.com/api/order/' + id
                );
                this.getData();
            },
        },
    };
</script>
<style lang="scss">
    #img_order_detail {
        width: 150px;
        height: 150px;
    }

    #product_detail {
        display: flex;

    }

    .content .table_content,
    .content .table_title {
        width: 100%;
        display: grid;
        grid-template-columns: 0.5fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-column-gap: 10px;
        grid-row-gap: 20px;
        border-radius: 10px;
    }

    .content .table {
        width: 85%;
        margin-left: auto;
        margin-right: auto;
    }

    .content {
        width: 85%;
        margin-left: auto;
        margin-right: auto;

        h1 {
            margin-bottom: 10px;
            color: black;
            font-size: 2rem;
            font-size: 1.5rem;
            font-family: Helvetica, Arial, sans-serif;
        }

        .list {
            display: flex;
            margin-bottom: 10px;

            button {
                padding: 10px;
                background: none;
                border-bottom: 2px solid red;
                border-right: 2px solid red;
                border-radius: 10px;
                font-size: 1rem;
            }
        }

        .table_title {
            margin-left: 0;
            text-align: center;
            background: #009688;
            color: white;
            font-size: 1.2rem;
            padding: 10px 0;
            box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.35);
        }

        .table_content {
            margin-top: 10px;
            font-size: 1.1rem;
            background: white;
            margin-left: 0;
            text-align: center;
            box-shadow: 0px 7px 29px 0px rgba(100, 100, 111, 0.2);

            p {
                padding: 17px 15px;
            }

            a {
                padding: 8px;
                background: red;
                color: white;
                border: 0;
                border-radius: 10px;
            }

            button {
                padding: 8px;
                background: rgba(244, 63, 94);
                ;
                color: white;
                border: 0;
                border-radius: 10px;
            }
        }
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

        &>div {
            width: 40%;
            position: absolute;
            top: 50%;
            left: 50%;
            height: 70%;
            overflow: auto;
            border-radius: 0.4rem;
            transform: translate(-50%, -50%);
            padding: 2em;
            background-image: linear-gradient(to right, #f2e6eb, #e6d3e8);
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
                0 20px 20px 0 rgba(0, 0, 0, 0.19);
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
</style>