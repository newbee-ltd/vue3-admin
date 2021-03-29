<template>
  <div class="header">
    <div class="left">
      <i v-if="hasBack" class="el-icon-back" @click="back"></i>
      <span style="font-size: 20px">{{ name }}</span>
    </div>
    <div class="right">
      <el-popover
        placement="bottom"
        :width="320"
        trigger="click"
        popper-class="popper-user-box"
      >
        <template #reference>
          <div class="author">
            <i class="icon el-icon-s-custom" />
            {{ userInfo && userInfo.nickName || '' }}
            <i class="el-icon-caret-bottom" />
          </div>
        </template>
        <div class="nickname">
          <p>登录名：{{ userInfo && userInfo.loginUserName || '' }}</p>
          <p>昵称：{{ userInfo && userInfo.nickName || '' }}</p>
          <el-tag size="small" effect="dark" class="logout" @click="logout">退出</el-tag>
        </div>
      </el-popover>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import axios from '@/utils/axios'
export default {
  name: 'Header',
  setup() {
    const router = useRouter()
    const pathMap = {
      dashboard: '大盘数据',
      add: '添加商品',
      swiper: '轮播图配置',
      hot: '热销商品配置',
      new: '新品上线配置',
      recommend: '为你推荐配置',
      category: '分类管理',
      level2: '分类二级管理',
      level3: '分类三级管理',
      good: '商品管理',
      guest: '会员管理',
      order: '订单管理',
      order_detail: '订单详情',
      account: '修改账户'
    }
    const state = reactive({
      name: 'dashboard',
      userInfo: null,
      hasBack: false
    })
    onMounted(() => {
      const pathname = window.location.hash.split('/')[1] || ''
      if (!['login'].includes(pathname)) {
        getUserInfo()
      }
    })
    const getUserInfo = async () => {
      const userInfo = await axios.get('/adminUser/profile')
      state.userInfo = userInfo
    }
    const logout = () => {
      axios.delete('/logout').then(() => {
        router.push({ path: '/login' })
      })
    }
    const back = () => {
      router.back()
    }
    router.afterEach((to) => {
      console.log('to', to)
      const { id } = to.query
      state.name = pathMap[to.name]
      if (id && to.name == 'add') {
        state.name = '编辑商品'
      }
      state.hasBack = ['level2', 'level3', 'order_detail'].includes(to.name)
    })
    return {
      ...toRefs(state),
      logout,
      back
    }
  }
}
</script>

<style scoped>
  .header {
    height: 50px;
    border-bottom: 1px solid #e9e9e9;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
  }
  .el-icon-back {
    border: 1px solid #e9e9e9;
    padding: 4px;
    border-radius: 50px;
    margin-right: 10px;
  }
  .right > div > .icon{
    font-size: 18px;
    margin-right: 6px;
  }
  .author {
    margin-left: 10px;
    cursor: pointer;
  }
</style>
<style>
  .popper-user-box {
    background: url('https://s.yezgea02.com/lingling-h5/static/account-banner-bg.png') 50% 50% no-repeat!important;
    background-size: cover!important;
    border-radius: 0!important;
  }
  .popper-user-box .nickname {
    position: relative;
    color: #ffffff;
  }
  .popper-user-box .nickname .logout {
    position: absolute;
    right: 0;
    top: 0;
    cursor: pointer;
  }
</style>