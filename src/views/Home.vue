<link rel="stylesheet" href="../css/tools.css">
<template>
  <div>
    <Navbar></Navbar>
    <!--<el-row>-->
      <!--<el-col :span="20" offset="2">-->
        <!--<el-row :gutter="20">-->
          <!--<el-col :span="10">-->
            <!--<el-card id="aircraft_info">-->
              <!--飞机基本信息-->
                <!--<div id="aircraft_types" >-->

                    <!--<el-row :gutter="10" >-->
                      <!--<el-col :span="8" v-for="(item,index) in aircraft_types" :key="index">-->
                        <!--<div class="aircraft_type">-->
                          <!--<img src="#" onerror="">-->
                          <!--<p>{{item.name}}</p>-->
                        <!--</div>-->
                      <!--</el-col>-->
                    <!--</el-row>-->

                <!--</div>-->

            <!--</el-card>-->
            <!--<el-card id="backlog">待办提醒</el-card>-->
          <!--</el-col>-->
          <!--<el-col :span="14"><el-card id="aircraft_states">飞机状态概览</el-card></el-col>-->
        <!--</el-row>-->
      <!--</el-col>-->
    <!--</el-row>-->

  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

import Navbar from '../components/Navbar'
export default {
  name: 'home',
  components: {
    Navbar
    /* HelloWorld */
  },
  // data(){
  //   return {
  //     aircraft_types:[
  //       {img_path:'',name:'a1'},
  //       {img_path:'',name:'a2'},
  //       {img_path:'',name:'a3'},
  //       {img_path:'',name:'a4'},
  //       {img_path:'',name:'a5'},
  //       {img_path:'',name:'a6'},
  //       {img_path:'',name:'a7'},
  //       {img_path:'',name:'a8'},
  //       {img_path:'',name:'a9'},
  //       {img_path:'',name:'a1'},
  //       {img_path:'',name:'a2'},
  //       {img_path:'',name:'a3'},
  //       {img_path:'',name:'a4'},
  //       {img_path:'',name:'a5'},
  //       {img_path:'',name:'a6'},
  //       {img_path:'',name:'a7'},
  //       {img_path:'',name:'a8'},
  //       {img_path:'',name:'a9'}
  //     ]
  //   }
  // }
}
</script>

<style scoped>
 /* .el-row{
    margin-top: 10px;
  }
  .el-col{
    border-radius: 4px;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  #aircraft_info{
    width: 100%;
    height: 300px;
    text-align: center;
  }
  #backlog{
    width: 100%;
    height: 200px;
    margin-top: 20px;
  }
  #aircraft_states{
    width: 100%;
    height: 520px;
  }
  #aircraft_types{
    margin: 0 auto;
    width: 90%;
    height: 210px;
    overflow-y: auto;
    overflow-x: hidden;
  }
  .el-scrollbar__wrap{
    overflow-x: hidden;
  }
</style>
<style>
  .el-scrollbar__wrap{
    overflow-x: hidden;
  }
  .is-horizontal {
    width: 100px;
  }*/
</style>

