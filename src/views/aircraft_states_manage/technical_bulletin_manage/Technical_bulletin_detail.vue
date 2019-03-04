<template>
  <div>
    <navbar></navbar>
    <el-row style="margin-top: 30px; z-index: 1">
      <el-row>
        <el-col :span="20" offset="2">
          <h2>技术通报详细信息</h2>
        </el-col>
      </el-row>
      <el-col :span="22" offset="1"><!-- 主体部分 -->
        <el-row><!-- 左边的主体部分 -->
          <el-col :span="22" offset="1" style="text-align: left" >
            <el-card class="box-card" >
              <el-form :label-position="labelPosition" label-width="7em">
                <h4>基本信息</h4>
                <el-row type="flex" justify="">
                  <el-col :span="10" offset="2">
                    <el-form-item label="名称">
                      <label>{{technical_bulletin.name}}</label>
                    </el-form-item>
                  </el-col>
                  <el-col :span="10" offset="2">
                    <el-form-item label="编号">
                      <label>{{technical_bulletin.number}}</label>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row type="flex" justify="space-around">
                  <el-col :span="10" offset="2">
                    <el-form-item label="机型">
                      <label>{{technical_bulletin.aircraft_type}}</label>
                    </el-form-item>
                  </el-col>
                  <el-col :span="10" offset="2">
                    <el-form-item label="架次">
                      <label>{{technical_bulletin.sortie}}</label>
                    </el-form-item>
                  </el-col>

                </el-row>
                <el-row type="flex" justify="space-around">
                  <el-col :span="10" offset="2">
                    <el-form-item label="零件">
                      <label>{{technical_bulletin.part}}</label>
                    </el-form-item>
                  </el-col>
                  <el-col :span="10" offset="2">
                    <el-form-item label="系统">
                      <label>{{technical_bulletin.system}}</label>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row type="flex" justify="space-around">
                  <el-col :span="10" offset="2">
                    <el-form-item label="等级">
                      <label>{{technical_bulletin.level}}</label>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12"></el-col>
                </el-row>
                <el-row tye="flex" justify="space-around">
                  <el-col :span="20" offset="2">
                    <el-form-item label="备注">
                      <label>{{technical_bulletin.other}}</label>
                    </el-form-item>
                  </el-col>
                </el-row>
                <h4>详细信息</h4>
                <el-row type="flex" justify="space-around">
                  <el-col :span="20" offset="2">
                    <el-form-item >
                      <label>{{technical_bulletin.detail}}</label>
                    </el-form-item>
                  </el-col>
                </el-row>

              </el-form>

              <el-row style="margin-top: 30px;">
                <el-col :span="6" offset="9">
                  <el-button @click="return_to_bulletin_manage">返回</el-button>
                </el-col>
                <el-col :span="9"></el-col>
              </el-row>

            </el-card>

          </el-col>
        </el-row>

      </el-col>

    </el-row>
  </div>
</template>

<script>
  import Navbar from '../../../components/Navbar'
  export default {
    name: 'Technical_bulletin_detail',
    components: { Navbar },
    data() {
      return {
        technical_bulletin:{
          number: '001', // 编号
          name: '技术通报1', // 名称
          aircraft_type: '翼龙', // 机型
          sortie: 'GZ001', // 架次
          part: '零件1', // 零件
          system: '武器系统', // 系统
          level: '1', // 等级
          other: '这是备注这是备注这是备注这是备注这是备注这是备注这是备注这是备注这是备注这是备注这是备注这是备注这是备注这是备注', // 备注
          detail:'这是详细信息，这是详细信息，这是详细信息，这是详细信息，这是详细信息，这是详细信息，这是详细信息，这是详细信息，这是详细信息，这是详细信息，这是详细信息，这是详细信息，这是详细信息，这是详细信息，这是详细信息，这是详细信息，这是详细信息，', // 详细信息
        },
        labelPosition:'left',
        activeNames: ['1']
      }


    },
    methods: {
      return_to_bulletin_manage(){
        this.$router.push('/technical_bulletin_manage');
      }
    },
    computed:{

    }
  }
</script>

<style scoped>
  .awsButton{
    width: 80px;
    height: 80px;
    border-radius: 50%;
    z-index: 1000;
  }
</style>
<style>
  .el-form-item__label {
    color:#99a9bf;
  }
</style>



