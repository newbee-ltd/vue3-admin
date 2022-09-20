<template>
  <el-card class="order-container">
    <div class="data">
      <el-card class="data-item" shadow="hover">
        <template #header>
          <div class="card-header">
            <span>订单状态</span>
          </div>
        </template>
        <div>
          {{ state.data.orderStatusString }}
        </div>
      </el-card>
      <el-card class="data-item" shadow="hover">
        <template #header>
          <div class="card-header">
            <span>创建时间</span>
          </div>
        </template>
        <div>
          {{ state.data.createTime }}
        </div>
      </el-card>
      <el-card class="data-item" shadow="hover">
        <template #header>
          <div class="card-header">
            <span>订单号</span>
          </div>
        </template>
        <div>
          {{ state.data.orderNo }}
        </div>
      </el-card>
    </div>
    <el-table
      :data="state.tableData"
      tooltip-effect="dark"
      style="width: 100%"
    >
      <el-table-column
        label="商品图片"
      >
        <template #default="scope">
          <img style="width: 100px" :key="scope.row.goodsId" :src="$filters.prefix(scope.row.goodsCoverImg)" alt="商品主图">
        </template>
      </el-table-column>
      <el-table-column
        prop="goodsId"
        label="商品编号"
      >
      </el-table-column>
      <el-table-column
        prop="goodsName"
        label="商品名"
      ></el-table-column>
      <el-table-column
        prop="goodsCount"
        label="商品数量"
      >
      </el-table-column>
      <el-table-column
        prop="sellingPrice"
        label="价格"
      >
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script setup>
import { onMounted, reactive } from 'vue'
import { useRoute } from 'vue-router'
import axios from '@/utils/axios'

const route = useRoute()
const { id } = route.query
const state = reactive({
  data: {},
  tableData: []
})
onMounted(() => {
  axios.get(`/orders/${id}`).then(res => {
    console.log(res)
    state.data = res
    state.tableData = res.newBeeMallOrderItemVOS
  })
})
</script>

<style scoped>
  .data {
    display: flex;
    margin-bottom: 50px;
  }
  .data .data-item {
    flex: 1;
    margin: 0 10px;
  }
  .el-table {
    border: 1px solid #EBEEF5;
    border-bottom: none;
  }
  .has-gutter th {
    border-right: 1px solid #EBEEF5;
  }

  .has-gutter th:last-child {
    border-right: none;
  }
  .el-table__row td {
    border-right: 1px solid #EBEEF5;
  }
  .el-table__row td:last-child {
    border-right: none;
  }
</style>