<template>
  <div>
    <navbar></navbar>
    <el-row style="margin-top: 30px; z-index: 1">
      <el-row>
        <el-col :span="20" offset="2">
          <h2>新增试飞数据</h2>
        </el-col>
      </el-row>
      <el-col :span="20" offset="2"><!-- 主体部分 -->
        <el-row><!-- 左边的主体部分 -->
          <el-col :span="24" style="text-align: left">
            <el-card class="box-card" >
              <el-form :label-position="labelPosition">
                <h4>归属信息</h4>
                <el-row type="flex" justify="space-around">
                  <el-col :span="6">
                    <el-form-item label="所属机型">
                      <el-select v-model="flight_record.aircraft_type" placeholder="请选择飞机型号">
                        <el-option v-for="(item,index) in aircraft_types" :key="index" :label="item.name" :value="item.name"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-col :span="6">
                    <el-form-item label="所属架次">
                      <el-select v-model="flight_record.sortie" placeholder="请选择架次">
                        <el-option v-for="(item,index) in sorties" :key="index" :label="item.number" :value="item.number"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-col :span="6">
                  </el-col>
                </el-row>
                <h4>详细信息</h4>
                <el-row type="flex" justify="space-around">
                  <el-col :span="6">
                    <el-form-item label="名称">
                      <el-input v-model="flight_record.name"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="6">
                    <el-form-item label="编号">
                      <el-input v-model="flight_record.number"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="6">
                    <el-form-item label="试验试飞科目">
                      <el-input v-model="flight_record.subject"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row type="flex" justify="space-around">
                  <el-col :span="6">
                    <el-form-item label="任务单名称">
                      <el-input v-model="flight_record.tasklist_name"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="6">
                    <el-form-item label="任务单编号">
                      <el-input v-model="flight_record.tasklist_number"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="6"></el-col>
                </el-row>
                <el-row type="flex" justify="space-around">
                  <el-col :span="6">
                    <el-form-item label="飞行时间">
                      <el-input v-model="flight_record.fly_time"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="6">
                    <el-form-item label="开车时间">
                      <el-input v-model="flight_record.run_time"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="6"></el-col>
                </el-row>
                <el-row type="flex" justify="space-around">
                  <el-col :span="6">
                    <el-form-item label="飞行架次">
                      <el-input v-model="flight_record.fly_sortie"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="6">
                    <el-form-item label="开车架次">
                      <el-input v-model="flight_record.run_sortie"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="6"></el-col>
                </el-row>
                <el-row type="flex" justify="space-around">
                  <el-col :span="6">
                    <el-form-item label="故障信息">
                      <el-button type="primary">关联故障</el-button>
                    </el-form-item>
                  </el-col>
                  <el-col :span="6"></el-col>
                  <el-col :span="6"></el-col>
                </el-row>
                <el-row type="flex" justify="space-around">
                  <el-col :span="22">
                    <el-form-item label="备注">
                      <el-input type="textarea"></el-input>

                    </el-form-item>
                  </el-col>
                </el-row>
              </el-form>

              <el-row style="margin-top: 30px;">
                <el-col :span="6" offset="9">
                  <el-button type="primary" @click="add_part">确定添加</el-button>
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
    name: 'Add_flight_record',
    components: { Navbar },
    data() {
      return {
        flight_record:{
          aircraft_type:'',// 所属机型
          sortie:'', // 所属架次
          name:'',// 名称
          number:'',// 编号
          tasklist_name:'', // 任务单名称
          tasklist_number:'', // 任务单编号
          subject:'', // 试验试飞科目
          fly_time:'', // 飞行时间
          run_time:'', // 开车时间
          fly_sortie:'', // 飞行架次
          run_sortie:'', // 开车架次
          other:'' // 备注
        },
        aircraft_types:[{
          name: '翼龙',
        },{
          name: '彩虹,'
        },{
          name: '翼龙2'
        },{
          name: '彩虹2'
        }],
        sorties:[{
          number:'001',
        },{
          number:'002',
        },{
          number:'003',
        },{
          number:'004',
        },{
          number: '005'
        }],
        subjects:[{
          name:'科目1'
        },{
          name:'科目2'
        },{
          name: '科目2'
        }],
        labelPosition:'top',
        activeNames: ['1']
      }


    },
    methods: {
      add_part(){
        this.$router.push('/flight_manage');
      },
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

