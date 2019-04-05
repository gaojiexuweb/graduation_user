<template>
<div class="header">
    <el-row>
        <el-col :span="24">
            <h2><img src="../assets/logo.jpg" alt="" class="img"> 快 马</h2>
        </el-col>
    </el-row>
    <Form ref="formInline" :model="sendObj" :label-width="100">
        <FormItem label="收货人" prop="consignee" required>
            <Input v-model="sendObj.consignee" type="text" style="width:260px;"></Input>
        </FormItem>
        <FormItem label="联系方式" prop="contact" required>
            <Input v-model="sendObj.contact" type="text" style="width:260px;"></Input>
        </FormItem>
         <FormItem label="订单编号" prop="orderNumber" required>
            <Input v-model="sendObj.orderNumber" type="text" style="width:260px;"></Input>
        </FormItem>
        <!-- <FormItem label="发货地址" prop="shippingAddress" required>
            <Input v-model="sendObj.shippingAddress" type="text" style="width:260px;"></Input>
        </FormItem> -->
        <FormItem label="收货地址" prop="receivingAddress" required>
            <Input v-model="sendObj.receivingAddress" type="text" style="width:260px;"></Input>
        </FormItem>
    </Form>
    <!-- <footer slot="footer"> -->
    <!-- slot设置之后本身的无用    对话框标题，如果使用 slot 自定义了页头，则 title 无效 -->
    <el-button style="float:right;margin-top:20px;margin-right:20px;" @click="goBack()">返回</el-button>
    <el-button style="float:right;margin-top:20px;margin-right:20px;" @click="commit(sendObj)">提交</el-button>

    <!-- </footer> -->
    <p>&nbsp;</p>
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
            sendObj: {
                consignee: '',
                contact: '',
                shippingAddress: '',
                receivingAddress: '',
                orderNumber:''
            }
        }
    },
    methods: {
        commit(val) {
            let req = {
                consignee: val.consignee,
                contact: val.contact,
                shippingAddress: '江苏理工学院',
                receivingAddress: val.receivingAddress,
                orderTime: this.getNowFormatDate(),
                // orderNumber: this.random(5),
                orderNumber: val.orderNumber,
                status:0
            }
            console.log(req)
            this.$http.orderAdd(req).then(res => {
                if(res.data.code === 1){
                    alert('订单提交成功');
                    this.$router.push('/inquiry')
                    // this.sendObj.consignee = '';
                    // this.sendObj.contact = '';
                    // this.sendObj.shippingAddress = '';
                    // this.sendObj.receivingAddress = '';
                }
            })
        },
        goBack() {
            this.$router.go(-1); //返回上一层
        },
        getNowFormatDate() {
            var date = new Date();
            var seperator1 = "-";
            var year = date.getFullYear();
            var month = date.getMonth() + 1;
            var strDate = date.getDate();
            if (month >= 1 && month <= 9) {
                month = "0" + month;
            }
            if (strDate >= 0 && strDate <= 9) {
                strDate = "0" + strDate;
            }
            var currentdate = year + seperator1 + month + seperator1 + strDate;
            return currentdate;
        },
        random(m) {
                m = m > 13 ? 13 : m;
                var num = new Date().getTime();
                return 'v-'+num.toString().substring(13 - m);
        }
    }
}
</script>

<style lang="less" scoped>
.header {
    background: #B3B6B2;
    height: 80px;
    color: white;
    font-family: "Times New Roman", Georgia, Serif;
    line-height: 80px;
    text-align: center;
    font-size: 18px;

    .img {
        float: left;
        display: inline-block;
        height: 80px;
        margin-top: -20px;
        margin-bottom: 20px;
    }

    .btn {
        margin: 10px 20px;
        float: right;
    }

    .text {
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

    .footer {
        width: 100%;
        height: 110px;
        margin-top: 30px;
        background: #dddddd;
        color: #333;
        font-size: 14px;
    }
}
</style>
