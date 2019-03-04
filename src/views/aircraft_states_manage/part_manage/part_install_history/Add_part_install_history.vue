<template>
  <div>
    <navbar></navbar>
    <el-row style="margin-top: 30px">
      <el-col :span="20" offset="2">
        <h2>新增零件拆卸记录</h2>
        <el-row style="margin-top: 30px">
          <el-col :span="24">
            <!--<el-form :model="install_history" ref="install_history"  label-width="80px" :label-position="labelPosition">-->
            <el-card class="box-card">
              <el-form :model="install_history" ref="install_history" label-width="140px" style="text-align: left">
                <el-form-item label="拆装时间" prop="install_time" style="width: 200px">
                  <el-date-picker type="date" placeholder="选择拆装日期" v-model="install_history.install_time"></el-date-picker>
                </el-form-item>
                <el-form-item label="安装原因" prop="reason" >
                  <el-input type="textarea" v-model="install_history.reason"></el-input>
                </el-form-item>
                <el-form-item label="操作者" prop="operator" style="width: 200px">
                  <el-input v-model="install_history.operator" style="width: 200px"></el-input>
                </el-form-item>

                <el-form-item label="零件状态置为" prop="part_state" >
                  <el-select v-model="install_history.part_state" placeholder="请选择零件状态" style="width: 200px">
                    <el-option
                      v-for="(item,index) in part_states" :key="index"
                      :label="item.name" :value="item.name">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="关联指令卡" prop="instruction_card" style="width: 200px">
                  <el-input v-model="install_history.instruction_card" style="width: 200px"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="submit_history">提交</el-button>
                  <el-button @click="resetForm('install_history')">重置</el-button>
                </el-form-item>
              </el-form>
            </el-card>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import Navbar from '../../../../components/Navbar'
  export default {
    name: 'Add_part_install_history',
    components: { Navbar },
    data(){
      return {
        install_history:{
          install_time:'',// 安装时间
          reason:'',// 安装原因
          operator:'',// 操作者
          part_state:'',// 零件状态
          instruction_card:'' // 关联指令卡
        },
        install_or_not:[
          {name:'安装'},{name:'拆卸'}
        ],
        part_states:[
          {name:'完好'},
          {name:'故障'},
          {name:'缺件-返厂'},
          {name:'缺件-维修'},
          {name:'缺件-报废'},
          {name:'缺件-周检'},
          {name:'串件'}
        ],
        labelPosition:'left',
      }
    },
    methods:{
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      submit_history () {
        this.$router.push('/part_install_history')
      }
    },
    mounted () {
      document.getElementsByClassName('el-select-dropdown__list').height = 300;
    }
  }
</script>

<style scoped>

</style>




