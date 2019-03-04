<template>
  <el-menu :default-active="this.$route.path" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-menu-item index="1">首页</el-menu-item>
    <el-menu-item index="2"><a href="/#/flight_manage">试飞管理数据</a></el-menu-item>
    <el-submenu index="3">
      <template slot="title">维护维修记录</template>
      <a href="/#/Fault_record"><el-menu-item index="3-1">故障记录管理</el-menu-item></a>
      <a href="/#/technical_bulletin_manage"><el-menu-item index="3-2">技术通报管理</el-menu-item></a>
      <a href="/#/instructionCard_manage"><el-menu-item index="3-3">指令卡管理</el-menu-item></a>
    </el-submenu>
    <el-menu-item index='4' ><a href='/#/part_manage'>零部件管理</a></el-menu-item>
    <el-submenu index="5">
      <template slot="title">仪器设备管理</template>
      <el-menu-item index="5-1">仪器设备种类</el-menu-item>
      <el-menu-item index="5-2">仪器设备管理</el-menu-item>
    </el-submenu>
    <el-submenu index="6">
      <template slot="title">报表生成</template>
      <el-menu-item index="6-1">工作信息统计</el-menu-item>
      <el-menu-item index="6-2">故障统计</el-menu-item>
    </el-submenu>
    <el-submenu index="7">
      <template slot="title">系统管理管理</template>
      <el-menu-item index="7-1">账号管理</el-menu-item>
      <el-menu-item index="7-2">账户类型管理</el-menu-item>
    </el-submenu>
    <!--<el-submenu index="2">
      <template slot="title">我的工作台</template>
      <el-menu-item index="2-1">选项1</el-menu-item>
      <el-menu-item index="2-2">选项2</el-menu-item>
      <el-menu-item index="2-3">选项3</el-menu-item>
      <el-submenu index="2-4">
        <template slot="title">选项4</template>
        <el-menu-item index="2-4-1">选项1</el-menu-item>
        <el-menu-item index="2-4-2">选项2</el-menu-item>
        <el-menu-item index="2-4-3">选项3</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-menu-item index="3" disabled>消息中心</el-menu-item>
    <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>-->
  </el-menu>
</template>

<script>
  export default {
    name: 'Navbar',
    data(){
      return {
        activeIndex: '1',
        activeIndex2: '1',

      }
    }
  }
</script>

<style scoped>
  el-menu-item{
    width: 100px;
  }
  a{
    text-decoration: none;
  }
</style>
