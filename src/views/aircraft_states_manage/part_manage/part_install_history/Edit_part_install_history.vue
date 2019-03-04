<template>
  <div>
    <navbar></navbar>
    <el-row style="margin-top: 30px">
      <el-col :span="20" offset="2">
        <h2>修改零件安装记录</h2>
        <el-row style="margin-top: 30px">
          <el-col :span="24">
            <el-card class="box-card">
              <el-form :model="install_history" ref="install_history" label-width="140px" style="text-align: left">
                <el-form-item label="记录编号" prop="install_or_not">
                  <el-input v-model="install_history.number" style="width: 200px" :disabled="true"></el-input>
                </el-form-item>
                <el-form-item label="操作者" prop="operator">
                  <el-input v-model="install_history.operator" style="width: 200px"></el-input>
                </el-form-item>
                <el-form-item label="安装时间" prop="install_time">
                  <el-date-picker type="date" placeholder="选择拆装日期" v-model="install_history.time" style="width: 200px"></el-date-picker>
                </el-form-item>
                <el-form-item label="安装原因" prop="reason">
                  <el-input type="textarea" v-model="install_history.reason"></el-input>
                </el-form-item>
                <el-form-item label="零件状态置为" prop="part_state">
                  <el-select v-model="install_history.state" placeholder="请选择零件状态" style="width: 200px">
                    <el-option
                      v-for="(item,index) in part_states" :key="index"
                      :label="item.name" :value="item.name">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="submit_history">确定修改</el-button>
                  <el-button @click="return_to_histories">返回</el-button>
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
  import store from '@/store'
  export default {
    name: 'Edit_part_install_history',
    components: { Navbar },
    store,
    data(){
      return {
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
      },
      return_to_histories(){
        this.$router.push('/part_install_history');
      }
    },
    mounted () {
      console.log(store.state.install_history);
    },
    computed: {
      install_history () {
        return store.state.install_history
      }
    }
  }
</script>

<style scoped>

</style>




