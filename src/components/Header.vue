<template>
<div class="header">
    <!-- 折叠按钮 -->
    <el-row>
        <el-col :span="24">
            <h2><img src="../assets/logo.jpg" alt="" class="img"> 快 马</h2>
        </el-col>
    </el-row>
    <!-- 走马灯 -->
    <el-carousel height="150px">
        <el-carousel-item>
            <img src="../assets/1.jpg" alt="">
        </el-carousel-item>
        <el-carousel-item>
            <img src="../assets/2.jpg" alt="">
        </el-carousel-item>
        <el-carousel-item>
            <img src="../assets/3.jpg" alt="">
        </el-carousel-item>
    </el-carousel>
    <!-- 弹出框 -->
    <el-button @click="search">快递查询</el-button>
    <el-button @click="add">在线下单</el-button>
    <el-button @click="price">价格查询</el-button>
    <el-row>
        <el-col :span="6">
            <img src="../assets/4.png" alt="" style="width:50%"><br>
            <p class="text">价格便宜</p>
        </el-col>
         <el-col :span="6">
            <img src="../assets/5.png" alt="" style="width:50%">
            <p class="text">校园覆盖</p>
        </el-col>
         <el-col :span="6">
            <img src="../assets/6.png" alt="" style="width:50%">
            <p class="text">安全便利</p>
        </el-col>
         <el-col :span="6">
            <img src="../assets/7.png" alt="" style="width:50%">
            <p class="text">送货上门</p>
        </el-col>
    </el-row>
    <div class="footer">
        <el-row>
        <el-col :span="12">
            <p>服务热线：8008083</p>
        </el-col>
         <el-col :span="12">
             <p>运营官方：江苏理工学院</p>
        </el-col>
    </el-row>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            value2: 0
        }
    },
    methods: {
        search(){
            this.$router.push('/inquiry')
        },
        add(){
            this.$router.push('/order')
        },
        price(){
            this.$router.push('/price')
        }
    }
}
</script>

<style lang="less" scoped>
.header {
    background: #B3B6B2;
    height: 80px;
    color: white;
    font-family:"Times New Roman",Georgia,Serif;
    line-height: 80px;
    text-align: center;
    font-size: 18px;
    .img{
        float: left;
        display: inline-block;
        height: 80px;
        margin-top: -20px;
    }
    .text{
        margin: 0;
        padding-left: 20px;
        color: #bbbbbb;
        position: absolute;
        top: 30px;
        font-size: 12px;
       
    }
    .el-carousel {
        height: 290px;
         margin: 0;
    }
    .el-carousel__item {
        height: 290px;
        margin: 0;
    }
    .footer{
        width: 100%;
        height: 110px;
        margin-top: 30px;
        background: #dddddd;
        color: #333;
        font-size: 14px;
    }
}
</style>
