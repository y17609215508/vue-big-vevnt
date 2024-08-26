<script setup>
import { ref } from 'vue'

const userPassword = ref({
    oldPassword:'',
    newPassword:'',
    rePassword:''
})

const validatePass2 = (rule, value, callback) => {
    if (value === '') {
        callback(new Error('请再次确认密码'))
    } else if (value !== userPassword.value.newPassword) {
        callback(new Error('请确保两次输入的密码一致'))
    } else {
        callback()
    }
}

const rules = {
    oldPassword: [
        { required: true, message: '请输入原密码', trigger: 'blur' },
        { min: 5, max: 16, message: '请输入5-16位非空字符', trigger: 'blur' }
    ],
    newPassword: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { min: 5, max: 16, message: '请输入5-16位非空字符', trigger: 'blur' }
    ],
    rePassword: [
        { required:true, validator: validatePass2, trigger: 'blur' }
    ]
}

import { ElMessage } from 'element-plus';
import { userUpdatePassword } from '../../api/user';
const updatePassword = async ()=>{
    let result = await userUpdatePassword(userPassword.value)
    ElMessage.success(result.msg ? result.msg : '修改成功')
}


</script>
<template>
    <el-card class="page-container">
        <template #header>
            <div class="header">
                <span>重置密码</span>
            </div>
        </template>
        <el-row>
            <el-col :span="12">
                <el-form :model="userPassword" :rules="rules" label-width="100px" size="large">
                    <el-form-item label="原密码" prop="oldPassword">
                        <el-input v-model="userPassword.oldPassword"></el-input>
                    </el-form-item>
                    <el-form-item label="新密码" prop="newPassword">
                        <el-input v-model="userPassword.newPassword"></el-input>
                    </el-form-item>
                    <el-form-item label="确认密码" prop="rePassword">
                        <el-input v-model="userPassword.rePassword"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="updatePassword">提交修改</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </el-card>
</template>