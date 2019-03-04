<template>
  <div>
    <navbar></navbar>
    <el-row style="margin-top: 30px; z-index: 1">
      <el-row>
        <el-col :span="20" offset="2">
          <h2>新增零部件</h2>
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
    name: 'Add_part',
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
        activeNames: ['1']
      }

    },
    methods: {
      add_part(){
        this.$router.push('/part_manage');
      },
      return_to_part_manage(){
        this.$router.push('/part_manage');
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

