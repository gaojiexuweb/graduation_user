<template>
<div class="header">
    <el-row>
        <el-col :span="24">
            <h2><img src="../assets/logo.jpg" alt="" class="img"> 快 马</h2>
        </el-col>
    </el-row>
    <div style="color:black;">
        <span style="font-size:14px;margin-right:20px;">快递单号:</span>
        <el-input v-model="input" placeholder="请输入内容" clearable style="width:180px;"></el-input>
        <el-button icon="el-icon-search" style="margin-left:10px;" @click="search()">搜索</el-button>
    </div>
    <Table stripe :columns="columns1" :data="data" :loading='loading'></Table>
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
            loading:true,
            input: '',
            columns1: [{
                    title: '订单编号',
                    key: 'orderNumber',
                    render: (h, params) => {
                        return h('a', {
                            attrs: {
                                title: params.row.orderNumber
                            },
                            on: {
                                click: () => {
                                    this.$router.push({
                                        name: 'mapbp',
                                        params: {
                                            receivingAddress: params.row.receivingAddress
                                        }
                                    })
                                }
                            }
                        }, params.row.orderNumber)
                    }
                },
                {
                    title: '状态',
                    key: 'statuss'
                },
                {
                    title: '操作',
                    key: 'action',
                    width: 150,
                    align: 'center',
                    render: (h, params) => {
                        return h('div', [
                            h('Button', {
                                props: {
                                    type: 'primary',
                                    size: 'small'
                                },
                                style: {
                                    marginRight: '5px'
                                },
                                on: {
                                    click: () => {
                                        this.require(params.row)
                                    }
                                }
                            }, '确认收货')
                        ]);
                    }
                }
            ],
            data: [],
            statuses: [{
                    value: 0,
                    label: "未发货"
                },
                {
                    value: 1,
                    label: "已发货"
                },
                {
                    value: 2,
                    label: "已签收"
                }
            ]
        }
    },
    methods: {
        goBack() {
            this.$router.go(-1); //返回上一层
        },
        search() {
            let req = {
                orderNumber: this.input
            }
            this.$http.getInquiry(req)
                .then(res => {
                    this.loading = false;
                    if (res.data.success) {
                        this.data = res.data.rows.map(el => {
                            return {
                                id: el.id,
                                orderNumber: el.orderNumber,
                                receivingAddress: el.receivingAddress,
                                statuss: this.statuses.filter(ol => Number(ol.value) === Number(el.status.substr(15, 1)))[0].label
                            }
                        })
                    }
                })
        },
        require(val){
            let req ={
                id:val.id,
                status:2
            }
            this.$http.getRequire(req)
            .then(res=>{
                if (res.data.success) {
                        this.search();
                        this.$popSuccess('确认收货！')
                    }
            })
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
    }

    .text {
        margin: 0;
        padding-left: 20px;
        color: #bbbbbb;
        position: absolute;
        top: 30px;
        font-size: 12px;

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
