<template>
    <div>
      <navbar></navbar>
      <el-row style="margin-top: 30px; z-index: 1">
        <el-row>
          <el-col :span="20" offset="2">
            <h2>零部件详细信息</h2>
          </el-col>
        </el-row>

        <el-col :span="20" offset="2"><!-- 主体部分 -->
          <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item  name="1">
              <template slot="title" >
                <h2>基本信息</h2>
              </template>
              <el-row><!-- 左边的主体部分 -->
                <el-col :span="24" style="text-align: left">
                  <el-card class="box-card" >
                    <el-row type="flex" justify="space-around"> <!-- 上面四个按钮 -->
                      <el-col :span="3" >
                        <el-button type="primary" >修改</el-button>
                      </el-col>
                      <el-col :span="3">
                        <el-button type="primary" >串装</el-button>
                      </el-col>
                      <el-col :span="3" >
                        <el-button type="primary" @click="uninstall_part">拆卸</el-button>
                      </el-col>
                      <el-col :span="3" >
                        <el-button type="primary" @click="install_part">安装</el-button>
                      </el-col>
                    </el-row>
                    <el-form :label-position="labelPosition">
                      <h4>归属信息</h4>
                      <el-row type="flex" justify="space-around">
                        <el-col :span="6">
                          <el-form-item label="飞机型号">
                            <el-select v-model="form.aircraftType" placeholder="请选择飞机型号">
                              <el-option label="区域一" value="shanghai"></el-option>
                              <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                          </el-form-item>
                        </el-col>
                        <el-col :span="6">
                          <el-form-item label="编号">
                            <el-select v-model="form.aircraftNumber" placeholder="请选择编号">
                              <el-option label="区域一" value="shanghai"></el-option>
                              <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                          </el-form-item>
                        </el-col>
                        <el-col :span="6">
                          <el-form-item label="子系统">
                            <el-select v-model="form.subsystem" placeholder="请选择子系统">
                              <el-option label="区域一" value="shanghai"></el-option>
                              <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                          </el-form-item>
                        </el-col>
                      </el-row>
                      <h4>基本信息</h4>
                      <el-row type="flex" justify="space-around">
                        <el-col :span="6">
                          <el-form-item label="零部件名称">
                            <el-input v-model="form.name"></el-input>
                          </el-form-item>
                        </el-col>
                        <el-col :span="6">
                          <el-form-item label="型号">
                            <el-input v-model="form.type"></el-input>
                          </el-form-item>
                        </el-col>
                        <el-col :span="6">
                          <el-form-item label="编号">
                            <el-input v-model="form.number"></el-input>
                          </el-form-item>
                        </el-col>
                      </el-row>
                      <el-row type="flex" justify="space-around">
                        <el-col :span="6">
                          <el-form-item label="厂家">
                            <el-input v-model="form.factory"></el-input>
                          </el-form-item>
                        </el-col>
                        <el-col :span="6">
                          <el-form-item label="装机时间">
                            <el-input v-model="form.installTime"></el-input>
                          </el-form-item>
                        </el-col>
                        <el-col :span="6">
                          <el-form-item label="必装(Y)/选装(N)">
                            <el-switch v-model="form.mustOrNot"></el-switch>
                          </el-form-item>
                        </el-col>
                      </el-row>
                      <el-row type="flex" justify="space-around">
                        <el-col :span="6">
                          <el-form-item label="状态">
                            <el-select v-model="form.state" placeholder="">
                              <el-option label="区域一" value="shanghai"></el-option>
                              <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                          </el-form-item>
                        </el-col>
                        <el-col :span="6">
                          <el-form-item label="影响飞行">
                            <el-select v-model="form.effectFlight" placeholder="">
                              <el-option label="区域一" value="shanghai"></el-option>
                              <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                          </el-form-item>
                        </el-col>
                        <el-col :span="6">
                          <el-form-item label="影响地面开车">
                            <el-select v-model="form.effectGround" placeholder="">
                              <el-option label="区域一" value="shanghai"></el-option>
                              <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                          </el-form-item>
                        </el-col>
                      </el-row>
                      <h4>寿命控制</h4>
                      <el-row type="flex" justify="space-around">
                        <el-col :span="6">
                          <el-form-item label="使用期限">
                            <el-input >
                              <template slot="append">Fh</template>
                            </el-input>
                            <el-date-picker type="date" placeholder="选择日期" style="width: 100%; margin-top: 10px" v-model="form.useTime"></el-date-picker>
                          </el-form-item>
                        </el-col>
                        <el-col :span="6">
                          <el-form-item label="首次翻修期限">
                            <el-input >
                              <template slot="append">Fh</template>
                            </el-input>
                            <el-date-picker type="date" placeholder="选择日期" style="width: 100%; margin-top: 10px" v-model="form.firstFixTime"></el-date-picker>
                          </el-form-item>
                        </el-col>
                        <el-col :span="6">
                          <el-form-item label="翻修间隔期">
                            <el-input >
                              <template slot="append">Fh</template>
                            </el-input>
                            <el-date-picker type="date" placeholder="选择日期" style="width: 100%; margin-top: 10px" v-model="form.fixInterval"></el-date-picker>
                          </el-form-item>
                        </el-col>
                      </el-row>
                      <el-row type="flex" justify="space-around">
                        <el-col :span="6">
                          <el-form-item label="寿命">
                            <el-input >
                              <template slot="append">Fh</template>
                            </el-input>
                            <el-date-picker type="date" placeholder="选择日期" style="width: 100%; margin-top: 10px" v-model="form.lifetime"></el-date-picker>
                          </el-form-item>
                        </el-col>
                        <el-col :span="6">
                          <el-form-item label="工作时间">
                            <el-input >
                              <template slot="append">Fh</template>
                            </el-input>
                            <el-date-picker type="date" placeholder="选择日期" style="width: 100%; margin-top: 10px" v-model="form.workTime"></el-date-picker>
                          </el-form-item>
                        </el-col>
                        <el-col :span="6"></el-col> <!-- 占位，无实际作用 -->
                      </el-row>
                    </el-form>
                  </el-card>
                </el-col>
              </el-row>
            </el-collapse-item>
            <el-collapse-item name="2" id="test">
              <template slot="title" >
                <h2>故障记录</h2>
              </template>
              <el-row>
                <el-col :span="24"> <!-- 右半部分 -->
                  <el-card style="width: 100%;margin-top:30px" class="box-card">
                    <div class="text item">
                      <el-table
                        :data="faults"
                        style="width: 100%; font-size: 14px"
                        height="300px">
                        <el-table-column
                          label="编号"
                          prop="number">
                        </el-table-column>
                        <el-table-column
                          label="发生时间"
                          prop="happenedTime">
                        </el-table-column>
                        <el-table-column >
                          <template slot-scope="scope">
                            <el-button
                              type=" primary"
                              size="mini"
                              @click="open_fault_record(scope.$index, scope.row)">查看</el-button>
                          </template>
                        </el-table-column>
                      </el-table>
                    </div>
                  </el-card>
                </el-col>
              </el-row>
            </el-collapse-item>
            <el-collapse-item name="3">
              <template slot="title" >
                <h2>装卸记录</h2>
              </template>
              <el-row>
                <el-col :span="24"> <!-- 右半部分 -->
                  <el-card style="width: 100%;margin-top:30px" class="box-card">
                    <div class="text item">
                      <el-table
                        :data="installRecord"
                        style="width: 100%; font-size: 14px"
                        height="300px">
                        <el-table-column
                          label="编号"
                          prop="number">
                        </el-table-column>
                        <el-table-column
                          label="发生时间"
                          prop="happenedTime">
                        </el-table-column>
                        <el-table-column >
                          <template slot-scope="scope">
                            <el-button
                              type=" primary"
                              size="mini"
                              @click="open_install_uninstall_history(scope.$index, scope.row)">查看</el-button>
                          </template>
                        </el-table-column>
                      </el-table>
                    </div>
                  </el-card>
                </el-col>
              </el-row>
            </el-collapse-item>
          </el-collapse>


        </el-col>

      </el-row>
    </div>
</template>

<script>
  import Navbar from '../../../components/Navbar'
  export default {
    name: 'Part_detail_state',
    components: { Navbar },
    data() {
      return {
        form: {
          aircraftType:'',// 型号（飞机）
          aircraftNumber:'', // 编号(飞机)
          subsystem:'', // 子系统
          name:'',// 零部件名称
          type:'',// 型号
          number:'',// 编号
          factory:'' ,// 厂家
          mustOrNot:'',// 必装或者选装
          installTime:'',// 装机时间
          state:'',// 状态
          effectFlight:'',// 影响飞行
          effectGround:'',// 影响地面开车
          useTime:'',//使用期限
          firstFixTime:'',// 手册翻修期限
          fixInterval:'',// 翻修间隔期
          lifetime:'',// 寿命
          workTime:'',// 工作时间
        },
        labelPosition:'top',
        faults:[{ // 故障记录列表
          number:'124',// 故障编号
          happenedTime:'2016-05-02'// 发生时间
        },{
          number:'6224',
          happenedTime:'2016-05-03'
        },{
          number:'131',
          happenedTime:'2016-05-06'
        },{
          number:'1244',
          happenedTime:'2016-05-10'
        },{
          number:'433',
          happenedTime:'2016-05-14'
        },{
          number:'7655',
          happenedTime:'2016-05-16'
        },{
          number:'345',
          happenedTime:'2016-05-20'
        },{
          number:'2431',
          happenedTime:'2016-05-21'
        }],
        installRecord:[{ // 装卸记录列表
          number:'124',// 记录编号
          happenedTime:'2016-05-02'// 发生时间
        },{
          number:'6224',
          happenedTime:'2016-05-03'
        },{
          number:'131',
          happenedTime:'2016-05-06'
        },{
          number:'1244',
          happenedTime:'2016-05-10'
        },{
          number:'433',
          happenedTime:'2016-05-14'
        },{
          number:'7655',
          happenedTime:'2016-05-16'
        },{
          number:'345',
          happenedTime:'2016-05-20'
        },{
          number:'2431',
          happenedTime:'2016-05-21'
        }],
        activeNames: ['1','2','3']
      }

    },
    methods: {
      uninstall_part(){
        this.$router.push('/add_part_install_uninstall_history');
      },
      install_part(){
        this.$router.push('/add_part_install_history');
      },
      open_fault_record(index,row){
        this.$router.push('/part_fault_record');
      },
      open_install_uninstall_history(index,row){
        this.$router.push('/part_install_uninstall_history')
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
