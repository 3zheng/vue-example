<template>
    <div>
        <el-form ref="form" :model="form" class="login-box">
            <el-form-item lable="账号">
                <el-input type="text" placeholder="请输入用户名" v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item lable="密码">
                <el-input type="password" placeholder="请输入密码" v-model="form.passwd"></el-input>
            </el-form-item>
            <el-form-item >
                <el-button type="primary" @click="onSubmit">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default{
        name:'Login',
        data(){
            return{
                form:{
                    name:'',
                    passwd:'',
                }
            }
        },
        methods:{
            onSubmit(){
                alert('submit')
                this.$router.push('/bg')
            }
        }
    }
</script>

<style  scoped>
    .login-box{
        width:350px;
        margin:150px auto;
        border: 1px solid #dcdfd6;
        padding: 20px;
        border-radius: 5px;
    }
</style>