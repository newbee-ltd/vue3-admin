<template>
  <el-card class="account-container">
    <el-form :model="state.nameForm" :rules="state.rules" ref="nameRef" label-width="80px" label-position="right" class="demo-ruleForm">
      <el-form-item label="登录名：" prop="loginName">
        <el-input style="width: 200px" v-model="state.nameForm.loginName"></el-input>
      </el-form-item>
      <el-form-item label="昵称：" prop="nickName">
        <el-input style="width: 200px" v-model="state.nameForm.nickName"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="danger" @click="submitName">确认修改</el-button>
      </el-form-item>
    </el-form>
  </el-card>
  <el-card class="account-container">
    <el-form :model="state.passForm" :rules="state.rules" ref="passRef" label-width="80px" label-position="right" class="demo-ruleForm">
      <el-form-item label="原密码：" prop="oldpass">
        <el-input style="width: 200px" v-model="state.passForm.oldpass"></el-input>
      </el-form-item>
      <el-form-item label="新密码：" prop="newpass">
        <el-input style="width: 200px" v-model="state.passForm.newpass"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="danger" @click="submitPass">确认修改</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue'
import axios from '@/utils/axios'
import { ElMessage } from 'element-plus'
import md5 from 'js-md5'

const nameRef = ref(null)
const passRef = ref(null)
const state = reactive({
  user: null,
  nameForm: {
    loginName: '',
    nickName: ''
  },
  passForm: {
    oldpass: '',
    newpass: ''
  },
  rules: {
    loginName: [
      { required: 'true', message: '登录名不能为空', trigger: ['change'] }
    ],
    nickName: [
      { required: 'true', message: '昵称不能为空', trigger: ['change'] }
    ],
    oldpass: [
      { required: 'true', message: '原密码不能为空', trigger: ['change'] }
    ],
    newpass: [
      { required: 'true', message: '新密码不能为空', trigger: ['change'] }
    ]
  },
})
onMounted(() => {
  axios.get('/adminUser/profile').then(res => {
    state.user = res
    state.nameForm.loginName = res.loginUserName
    state.nameForm.nickName = res.nickName
  })
})
const submitName = () => {
  nameRef.value.validate((vaild) => {
    if (vaild) {
      axios.put('/adminUser/name', {
        loginUserName: state.nameForm.loginName,
        nickName: state.nameForm.nickName
      }).then(() => {
        ElMessage.success('修改成功')
        window.location.reload()
      })
    }
  })
}
const submitPass = () => {
  passRef.value.validate((vaild) => {
    if (vaild) {
      axios.put('/adminUser/password', {
        originalPassword: md5(state.passForm.oldpass),
        newPassword: md5(state.passForm.newpass)
      }).then(() => {
        ElMessage.success('修改成功')
        window.location.reload()
      })
    }
  })
}
</script>

<style>
  .account-container {
    margin-bottom: 20px;
  }
</style>