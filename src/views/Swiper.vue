<template>
  <el-card class="swiper-container">
    <template #header>
      <div class="header">
        <el-button type="primary" :icon="Plus" @click="handleAdd">增加</el-button>
        <el-popconfirm
          title="确定删除吗？"
          confirmButtonText='确定'
          cancelButtonText='取消'
          @confirm="handleDelete"
        >
          <template #reference>
            <el-button type="danger" :icon="Delete">批量删除</el-button>
          </template>
        </el-popconfirm>
      </div>
    </template>
    <el-table
      :load="state.loading"
      ref="multipleTable"
      :data="state.tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
     >
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        label="轮播图"
        width="200">
        <template #default="scope">
          <img style="width: 150px;height: 150px" :src="scope.row.carouselUrl" alt="轮播图">
        </template>
      </el-table-column>
      <el-table-column
        label="跳转链接"
        >
        <template #default="scope">
          <a target="_blank" :href="scope.row.redirectUrl">{{ scope.row.redirectUrl }}</a>
        </template>
      </el-table-column>
      <el-table-column
        prop="carouselRank"
        label="排序值"
        width="120"
      >
      </el-table-column>
      <el-table-column
        prop="createTime"
        label="添加时间"
        width="200"
      >
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="state.total"
      :page-size="state.pageSize"
      :current-page="state.currentPage"
      @current-change="changePage"
    />
  </el-card>
  <DialogAddSwiper ref='addSwiper' :reload="getCarousels" :type="state.type" />
</template>

<script setup>
import { onMounted, reactive, ref, toRefs } from 'vue'
import { ElMessage } from 'element-plus'
import { Plus, Delete } from '@element-plus/icons-vue'
import axios from '@/utils/axios'
import DialogAddSwiper from '@/components/DialogAddSwiper.vue'

const addSwiper = ref()
const state = reactive({
  loading: false,
  tableData: [], // 数据列表
  currentPage: 1,
  pageSize: 10,
  type: 'add', // 操作类型,
  multipleSelection: [], // 选中项
  total: 0, // 总条数
})

onMounted(() => {
  getCarousels()
})
// 获取轮播图列表
const getCarousels = () => {
  state.loading = true
  axios.get('/carousels', {
    params: {
      pageNumber: state.currentPage,
      pageSize: state.pageSize
    }
  }).then(res => {
    state.tableData = res.list
    state.total = res.totalCount
    state.currentPage = res.currPage
    state.loading = false
  })
}
// 添加轮播项
const handleAdd = () => {
  console.log('addSwiper', addSwiper.value)
  state.type = 'add'
  addSwiper.value.open()
}
// 修改轮播图
const handleEdit = (id) => {
  state.type = 'edit'
  addSwiper.value.open(id)
}
// 选中之后的change方法，一旦选项有变化，就会触发该方法。
  const handleSelectionChange = (val) => {
    state.multipleSelection = val
  }
// 批量删除
const handleDelete = () => {
  if (!state.multipleSelection.length) {
    ElMessage.error('请选择项')
    return
  }
  axios.delete('/carousels', {
    data: {
      ids: state.multipleSelection.map(i => i.carouselId)
    }
  }).then(() => {
    ElMessage.success('删除成功')
    getCarousels()
  })
}
const changePage = (val) => {
  state.currentPage = val
  getCarousels()
}
</script>

<style>

</style>