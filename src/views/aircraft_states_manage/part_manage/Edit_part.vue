<template>
    <div>
      <navbar></navbar>
      <el-row style="margin-top: 30px; z-index: 1">
        <el-row>
          <el-col :span="20" offset="2">
            <h2>修改零部件</h2>
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
                        <el-select v-model="part_info.aircraftType" placeholder="请选择机型">
                          <el-option v-for="(item,index) in aircraft_types" :key="index" :label="item.name" :value="item.name" >
                            {{item.name}}
                          </el-option>
                        </el-select>
                      </el-form-item>
                    </el-col>
                    <el-col :span="6">
                      <el-form-item label="所属架次">
                        <el-select v-model="part_info.sortie" placeholder="请选择架次">
                          <el-option v-for="(item,index) in sorties" :key="index" :label="item.number" :value="item.number" >
                            {{item.number}}
                          </el-option>
                        </el-select>
                      </el-form-item>
                    </el-col>
                    <el-col :span="6">
                      <el-form-item label="所属系统">
                        <el-select v-model="part_info.system" placeholder="请选择系统">
                          <el-option v-for="(item,index) in systems" :key="index" :label="item.name" :value="item.name" >
                            {{item.name}}
                          </el-option>
                        </el-select>
                      </el-form-item>
                    </el-col>
                  </el-row>
                  <h4>基本资料</h4>
                  <el-row type="flex" justify="space-around">
                    <el-col :span="6">
                      <el-form-item label="零件名称">
                        <el-input v-model="part_info.name"></el-input>
                      </el-form-item>
                    </el-col>
                    <el-col :span="6">
                      <el-form-item label="零件状态">
                        <el-select v-model="part_info.state" placeholder="请选择零件状态">
                          <el-option v-for="(item,index) in part_state" :key="index" :label="item.name" :value="item.name" >
                            {{item.name}}
                          </el-option>
                        </el-select>
                      </el-form-item>
                    </el-col>
                    <el-col :span="6">
                      <el-form-item label="装机时间">
                        <el-date-picker type="date" placeholder="选择日期" style="width: 100%; margin-top: 10px" v-model="part_info.installTime"></el-date-picker>
                      </el-form-item>
                    </el-col>
                  </el-row>
                  <el-row type="flex" justify="space-around">
                    <el-col :span="6">
                      <el-form-item label="必装(Y)/选装(N)">
                        <el-switch v-model="part_info.mustOrNot"></el-switch>
                      </el-form-item>
                    </el-col>
                    <el-col :span="6">
                      <el-form-item label="型号">
                        <el-input v-model="part_info.type"></el-input>
                      </el-form-item>
                    </el-col>
                    <el-col :span="6">
                      <el-form-item label="编号">
                        <el-input v-model="part_info.number"></el-input>
                      </el-form-item>
                    </el-col>
                  </el-row>
                  <el-row type="flex" justify="space-around">
                    <el-col :span="6">
                      <el-form-item label="是否成品(是:Y,否:N)">
                        <el-switch v-model="part_info.isFinished"></el-switch>
                      </el-form-item>
                    </el-col>
                    <el-col :span="6">
                      <el-form-item label="出厂时间">
                        <el-date-picker type="date" placeholder="选择日期" style="width: 100%; margin-top: 10px" v-model="part_info.leaveTime"></el-date-picker>
                      </el-form-item>
                    </el-col>
                    <el-col :span="6"></el-col>
                  </el-row>
                  <h4>规定寿命</h4>
                  <el-row type="flex" justify="space-around">
                    <el-col :span="6">
                      <el-form-item label="首翻期">
                        <el-date-picker type="date" placeholder="选择日期" style="width: 100%; margin-top: 10px" v-model="part_info.firstTime"></el-date-picker>
                      </el-form-item>
                    </el-col>
                    <el-col :span="6">
                      <el-form-item label="保证期">
                        <el-date-picker type="date" placeholder="选择日期" style="width: 100%; margin-top: 10px" v-model="part_info.ensureTime"></el-date-picker>
                      </el-form-item>
                    </el-col>
                    <el-col :span="6">
                      <el-form-item label="寿命">
                        <el-input v-model="part_info.lifetime"></el-input>
                      </el-form-item>
                    </el-col>
                  </el-row>
                  <el-row type="flex" justify="space-around">
                    <el-col :span="6">
                      <el-form-item label="上一次周检时间">
                        <el-date-picker type="date" placeholder="选择日期" style="width: 100%; margin-top: 10px" v-model="part_info.lastCheckTime"></el-date-picker>
                      </el-form-item>
                    </el-col>
                    <el-col :span="6">
                      <el-form-item label="定检间隔时间">
                        <el-input v-model="part_info.checkInterval">
                          <template slot="append">Day</template>
                        </el-input>
                      </el-form-item>
                    </el-col>
                    <el-col :span="6"></el-col>
                  </el-row>
                  <el-row :gutter="30" type="flex" justify="space-around" style="margin-top: 50px">
                    <el-col :span="4" offset="8">
                      <el-form-item>
                        <el-button type="primary" @click="edit_part">确定修改</el-button>
                      </el-form-item>
                    </el-col>
                    <el-col :span="4">
                      <el-form-item>
                        <el-button @click="return_to_part_manage">取消</el-button>
                      </el-form-item>
                    </el-col>
                    <el-col :span="8"></el-col>
                  </el-row>

                </el-form>
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
    name: 'Edit_part',
    components: { Navbar },
    data(){
      return {
        labelPosition:'top',// 标签相对于输入框的位置
        part_info:{
          aircraftType:'',// 所属机型
          sortie:'', // 所属架次
          system:'',// 所属系统
          name:'',// 零件名称
          state:'',// 零件状态
          installTime:'', // 装机时间
          mustOrNot: '',// 必装/选装
          type:'',// 型号
          number:'',// 编号
          isFinished:'',// 是否成品
          leaveTime:'',// 出厂时间
          firstTime:'',// 首翻期
          ensureTime:'',// 保证期
          lifetime:'',// 寿命
          lastCheckTime:'',// 上一次周检时间
          checkInterval:''//  定检间隔时间
        },
        aircraft_types: [{ // 所属机型
            name:'翼龙',
          },{
          name: '彩虹1',
        },{
          name:'彩虹2'
        }
        ],
        sorties:[{ // 架次
          number:'001',
        },{
          number:'002',
        },{
          number:'003',
        },{
          number:'004',
        },{
          number:'005',
        }
        ],
        systems:[{ // 所属系统
          name:'飞控系统'
        },{
          name:'雷达系统',
        },{
          name:'武器系统',
        }
        ],
        part_state:[{
          name:'完好',
        },{
          name:'故障',
        },{
          name:'缺件',
        },{
          name:'串件'
        }

        ]
      }
    },
    methods:{
      edit_part(){
        this.$router.push('/part_manage');
      },
      return_to_part_manage () {
        this.$router.push('/part_manage');
      }
    }
  }
</script>

<style scoped>

</style>
