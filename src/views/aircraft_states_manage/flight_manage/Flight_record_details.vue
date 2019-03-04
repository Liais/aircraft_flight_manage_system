<template>
  <div>
    <navbar></navbar>
    <el-row style="margin-top: 30px; z-index: 1">
      <el-row>
        <el-col :span="20" offset="2">
          <h2>试飞数据</h2>
        </el-col>
      </el-row>
      <el-col :span="22" offset="1"><!-- 主体部分 -->
        <el-row><!-- 左边的主体部分 -->
          <el-col :span="22" offset="1" style="text-align: left" >
            <el-card class="box-card" >
              <el-form :label-position="labelPosition" label-width="7em">
                <h4>归属信息</h4>
                <el-row type="flex" justify="space-around">
                  <el-col :span="6">
                    <el-form-item label="所属机型">
                      <label>{{flight_record.aircraft_type}}</label>
                    </el-form-item>
                  </el-col>
                  <el-col :span="6">
                    <el-form-item label="所属架次">
                      <label>{{flight_record.sortie}}</label>
                    </el-form-item>
                  </el-col>
                  <el-col :span="6">
                  </el-col>
                </el-row>
                <hr>
                <h4>详细信息</h4>
                <el-row type="flex" justify="space-around">
                  <el-col :span="6">
                    <el-form-item label="名称">
                      <label>{{flight_record.name}}</label>
                    </el-form-item>
                  </el-col>
                  <el-col :span="6">
                    <el-form-item label="编号">
                      <label>{{flight_record.number}}</label>
                    </el-form-item>
                  </el-col>
                  <el-col :span="6">
                    <el-form-item label="试验试飞科目">
                      <label>{{flight_record.subject}}</label>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row type="flex" justify="space-around">
                  <el-col :span="6">
                    <el-form-item label="开车日期">
                      <label>{{flight_record.name}}</label>
                    </el-form-item>
                  </el-col>
                  <el-col :span="6">
                    <el-form-item label="开车次数">
                      <label>{{flight_record.run_sortie}}</label>
                    </el-form-item>
                  </el-col>
                  <el-col :span="6">
                    <el-form-item label="开车时间">
                      <label>{{flight_record.run_time}}</label>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row type="flex" justify="space-around">
                  <el-col :span="6">
                    <el-form-item label="飞行次数">
                      <label>{{flight_record.fly_sortie}}</label>
                    </el-form-item>
                  </el-col>
                  <el-col :span="6">
                    <el-form-item label="飞行时间">
                      <label>{{flight_record.fly_time}}</label>
                    </el-form-item>
                  </el-col>
                  <el-col :span="6"></el-col>
                </el-row>
                <el-row type="flex" justify="space-around">
                  <el-col :span="6">
                    <el-form-item label="发生故障？">
                      <label>{{flight_record.fault_happened === true ? '是':'否'}}</label>
                    </el-form-item>
                  </el-col>
                  <el-col :span="6">
                    <el-form-item label="完成任务">
                      <label>{{flight_record.task_finished === true ? '是':'否'}}</label>
                    </el-form-item>
                  </el-col>
                  <el-col :span="6"></el-col>
                </el-row>
                <el-row tye="flex" justify="space-around">
                  <el-col :span="18" offset="1">
                    <el-form-item label="备注">
                      <label>{{flight_record.other}}</label>
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-form>

              <el-row style="margin-top: 30px;">
                <el-col :span="6" offset="9">
                  <el-button @click="return_to_part_manage">返回</el-button>
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
    name: 'Flight_record_details',
    components: { Navbar },
    data() {
      return {
        flight_record:{
          aircraft_type:'彩虹1',// 所属机型
          sortie:'001', // 所属架次
          name:'试飞1',// 名称
          number:'001',// 编号
          subject:'科目1', // 试验试飞科目
          run_date:'2016-01-01', // 开车日期
          run_sortie:'3', // 开车架次
          run_time:'12', // 开车时间
          fly_time:'12', // 飞行时间
          fly_sortie:'2', // 飞行架次
          fault_happened:'false', // 是否故障
          task_finished:'true',// 是否完成任务
          other:'这是备注这是备注这是备注这是备注这是备注这是备注这是备注这是备注这是备注这是备注这是备注这是备注这是备注' // 备注
        },
        labelPosition:'left',
        activeNames: ['1']
      }


    },
    methods: {
      return_to_part_manage(){
        this.$router.push('/flight_manage');
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


