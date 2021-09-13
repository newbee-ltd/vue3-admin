<template>
  <el-dialog
    :title="type == 'add' ? '添加商品' : '修改商品'"
    v-model="visible"
    width="400px"
    @close="handleClose"
  >
    <el-form :model="ruleForm" :rules="rules" ref="formRef" label-width="100px" class="good-form">
      <el-form-item label="商品名称" prop="name">
        <el-input type="text" v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="跳转链接" prop="link">
        <el-input type="text" v-model="ruleForm.link"></el-input>
      </el-form-item>
      <el-form-item label="商品编号" prop="id">
        <el-input type="number" min="0" v-model="ruleForm.id"></el-input>
      </el-form-item>
      <el-form-item label="排序值" prop="sort">
        <el-input type="number" v-model="ruleForm.sort"></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="visible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm">确 定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script>
import { reactive, ref, toRefs } from 'vue'
import axios from '@/utils/axios'
import { hasEmoji } from '@/utils/index'
import { ElMessage } from 'element-plus'
export default {
  name: 'DialogAddHotGood',
  props: {
    type: String,
    configType: Number,
    reload: Function
  },
  setup(props) {
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
    const handleClose = () => {
      formRef.value.resetFields()
    }
    const submitForm = () => {
      formRef.value.validate((valid) => {
        if (valid) {
          if (hasEmoji(state.ruleForm.name) || hasEmoji(state.ruleForm.link)) {
            ElMessage.error('不要输入表情包，再输入就打死你个龟孙儿~')
            return
          }
          if (state.ruleForm.name.length > 128) {
            ElMessage.error('商品名称不能超过128个字符')
            return
          }
          if (state.ruleForm.sort < 0 || state.ruleForm.sort > 200) {
            ElMessage.error('排序值不能小于 0 或大于 200')
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
    return {
      ...toRefs(state),
      open,
      close,
      formRef,
      submitForm,
      handleClose
    }
  }
}
</script>

<style scoped>
</style>