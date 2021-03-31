<template>
  <el-dialog
    :title="type == 'add' ? '添加分类' : '修改分类'"
    v-model="visible"
    width="400px"
  >
    <el-form :model="ruleForm" :rules="rules" ref="formRef" label-width="100px" class="good-form">
      <el-form-item label="商品名称" prop="name">
        <el-input type="text" v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="排序值" prop="rank">
        <el-input type="number" v-model="ruleForm.rank"></el-input>
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
import { useRoute } from 'vue-router'
import axios from '@/utils/axios'
import { hasEmoji } from '@/utils/index'
import { ElMessage } from 'element-plus'
export default {
  name: 'DialogAddCategory',
  props: {
    type: String,
    reload: Function
  },
  setup(props) {
    const formRef = ref(null)
    const route = useRoute()
    const state = reactive({
      visible: false,
      categoryLevel: 1,
      parentId: 0,
      ruleForm: {
        name: '',
        rank: ''
      },
      rules: {
        name: [
          { required: 'true', message: '名称不能为空', trigger: ['change'] }
        ],
        rank: [
          { required: 'true', message: '编号不能为空', trigger: ['change'] }
        ]
      },
      id: ''
    })
    // 获取详情
    const getDetail = (id) => {
      axios.get(`/categories/${id}`).then(res => {
        state.ruleForm = {
          name: res.categoryName,
          rank: res.categoryRank
        }
        state.parentId = res.parentId
        state.categoryLevel = res.categoryLevel
      })
    }
    // 开启弹窗
    const open = (id) => {
      state.visible = true
      if (id) {
        state.id = id
        getDetail(id)
      } else {
        // 新增类目，从路由获取父分类id 和 分类级别
        const { level, parent_id } = route.query
        state.ruleForm = {
          name: '',
          rank: ''
        }
        state.parentId = parent_id
        state.categoryLevel = level
      }
    }
    // 关闭弹窗
    const close = () => {
      state.visible = false
    }
    const submitForm = () => {
      formRef.value.validate((valid) => {
        if (valid) {
          if (hasEmoji(state.ruleForm.name)) {
            ElMessage.error('不要输入表情包，再输入就打死你个龟孙儿~')
            return
          }
          if (props.type == 'add') {
            axios.post('/categories', {
              categoryLevel: state.categoryLevel,
              parentId: state.parentId,
              categoryName: state.ruleForm.name,
              categoryRank: state.ruleForm.rank
            }).then(() => {
              ElMessage.success('添加成功')
              state.visible = false
              if (props.reload) props.reload()
            })
          } else {
            axios.put('/categories', {
              categoryId: state.id,
              categoryLevel: state.categoryLevel,
              parentId: state.categoryLevel,
              categoryName: state.ruleForm.name,
              categoryRank: state.ruleForm.rank
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
      submitForm
    }
  }
}
</script>

<style scoped>
</style>