<template>
<div class="header">
    <el-row>
        <el-col :span="24">
            <h2><img src="../assets/logo.jpg" alt="" class="img"> 快 马</h2>
        </el-col>
    </el-row>
    <Table :columns="columns" :data="data" stripe :loading="tableLoading"></Table>
    <el-button style="float:right;margin-top:20px;margin-right:20px;" @click="goBack()">返回</el-button>
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
            tableLoading: true,
            columns: [{
                    key: 'lineArrangement',
                    title: '线路'
                },
                {
                    key: 'largeMoney',
                    title: '大件(元/件)'
                },
                {
                    key: 'smallMoney',
                    title: '小件(元/件)'
                }
            ],
            data: []

        }
    },
    methods: {
        search(p) {
            this.$http.getPrice()
                .then(res => {
                    console.log(res.data)
                    this.tableLoading = false;
                    if (res.data.success) {
                        this.data = res.data.rows.map(el => {
                            return {
                                id: el.id,
                                lineArrangement: el.lineArrangement,
                                largeMoney: el.largeMoney,
                                smallMoney: el.smallMoney
                            }
                        })
                    } else {
                        this.data = [];
                    }
                })
        },
        goBack(){
            this.$router.go(-1);//返回上一层
        }
    },
    mounted() {
        this.search();

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
