<template>
  <div>
    <div style="height:300px;">
      <el-scrollbar style="height:100%">
        <!--<div style="width:700px;height:700px;border:solid;" >
          ....... blabla.....
        </div>-->
        <el-row>
          <el-col :span="8">
            <div style="width: 100%;height: 200px; background: skyblue"></div>
            <div style="width: 100%;height: 200px; background: skyblue"></div><div style="width: 100%;height: 200px; background: skyblue"></div>
            <div style="width: 100%;height: 200px; background: skyblue"></div>
            <div style="width: 100%;height: 200px; background: skyblue"></div>
            <div style="width: 100%;height: 200px; background: skyblue"></div>
            <div style="width: 100%;height: 200px; background: skyblue"></div>
            <div style="width: 100%;height: 200px; background: skyblue"></div>
            <div style="width: 100%;height: 200px; background: skyblue"></div>
            <div style="width: 100%;height: 200px; background: skyblue"></div>
            <div style="width: 100%;height: 200px; background: skyblue"></div>


          </el-col>
        </el-row>
      </el-scrollbar>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Test',
    data(){
      return{
        num: 30
      }

    }
  }
</script>

<style scoped>

</style>
