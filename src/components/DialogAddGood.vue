<template>
  <el-dialog
    :title="type == 'add' ? '添加商品' : '修改商品'"
    v-model="state.visible"
    width="400px"
  >
    <el-form :model="state.ruleForm" :rules="state.rules" ref="formRef" label-width="100px" class="good-form">
      <el-form-item label="商品名称" prop="name">
        <el-input type="text" v-model="state.ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="跳转链接" prop="link">
        <el-input type="text" v-model="state.ruleForm.link"></el-input>
      </el-form-item>
      <el-form-item label="商品编号" prop="id">
        <el-input type="number" min="0" v-model="state.ruleForm.id"></el-input>
      </el-form-item>
      <el-form-item label="排序值" prop="sort">
        <el-input type="number" v-model="state.ruleForm.sort"></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="state.visible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm">确 定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { reactive, ref } from 'vue'
import axios from '@/utils/axios'
import { ElMessage } from 'element-plus'

const props = defineProps({
  type: String,
  configType: Number,
  reload: Function
})
const formRef = ref(null)
const state = reactive({
  visible: false,
  ruleForm: {
    name: '',
    link: '',
    id: '',
    sort: ''
  },
  rules: {
    name: [
      { required: 'true', message: '名称不能为空', trigger: ['change'] }
    ],
    id: [
      { required: 'true', message: '编号不能为空', trigger: ['change'] }
    ],
    sort: [
      { required: 'true', message: '排序不能为空', trigger: ['change'] }
    ]
  },
  id: ''
})
// 获取详情
const getDetail = (id) => {
  axios.get(`/indexConfigs/${id}`).then(res => {
    state.ruleForm = {
      name: res.configName,
      id: res.goodsId,
      link: res.redirectUrl,
      sort: res.configRank
    }
  })
}
// 开启弹窗
const open = (id) => {
  state.visible = true
  if (id) {
    state.id = id
    getDetail(id)
  } else {
    state.ruleForm = {
      name: '',
      id: '',
      link: '',
      sort: ''
    }
  }
}
// 关闭弹窗
const close = () => {
  state.visible = false
}
const submitForm = () => {
  formRef.value.validate((valid) => {
    if (valid) {
      if (state.ruleForm.id < 0 || state.ruleForm.id > 200) {
        ElMessage.error('商品编号不能小于 0 或大于 200')
        return
      }
      if (props.type == 'add') {
        axios.post('/indexConfigs', {
          configType: props.configType || 3,
          configName: state.ruleForm.name,
          redirectUrl: state.ruleForm.link,
          goodsId: state.ruleForm.id,
          configRank: state.ruleForm.sort
        }).then(() => {
          ElMessage.success('添加成功')
          state.visible = false
          if (props.reload) props.reload()
        })
      } else {
        axios.put('/indexConfigs', {
          configId: state.id,
          configType: props.configType || 3,
          configName: state.ruleForm.name,
          redirectUrl: state.ruleForm.link,
          goodsId: state.ruleForm.id,
          configRank: state.ruleForm.sort
        }).then(() => {
          ElMessage.success('修改成功')
          state.visible = false
          if (props.reload) props.reload()
        })
      }
    }
  })
}
defineExpose({ open, close })
</script>

<style scoped>
</style>