<template>
  <div>
    <navbar></navbar>
    <el-row style="margin-top: 30px; z-index: 1">
      <el-row>
        <el-col :span="20" offset="2">
          <h2>试飞数据管理</h2>
        </el-col>
      </el-row>
      <el-col :span="20" offset="2"><!-- 主体部分 -->
        <el-card class="box-card">
          <div slot="header" style="height: 20px;">
            <span style="float: left"><strong>查询</strong></span>
          </div>
          <el-row>
            <el-col :span="20">
              <el-form :label-position="labelPosition" label-width="80px">
                <el-row>
                  <el-col :span="24">
                    <el-row :gutter="20" type="flex" justify="space-around">
                      <el-col :span="12">
                        <el-form-item label="飞机型号">
                          <el-input v-model="search_conditions.type" ></el-input>
                        </el-form-item>
                      </el-col>
                      <el-col :span="12">
                        <el-form-item label="飞机编号">
                          <el-input v-model="search_conditions.number" ></el-input>
                        </el-form-item>
                      </el-col>
                    </el-row>
                    <el-row :gutter="20" type="flex" justify="space-around">
                      <el-col :span="12">
                        <el-form-item label="试飞编号">
                          <el-input v-model="search_conditions.subsystem"></el-input>
                        </el-form-item>
                      </el-col>
                      <el-col :span="12">
                        <div class="block">
                          <el-date-picker
                            v-model="search_conditions.time"
                            type="daterange"
                            align="right"
                            unlink-panels
                            range-separator="至"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期"
                            :picker-options="pickerOptions2" style="width: 15rem">
                          </el-date-picker>
                        </div>
                      </el-col>

                    </el-row>
                  </el-col>
                </el-row>
              </el-form>
            </el-col>
            <el-col :span="4">
              <el-button type="primary" icon="el-icon-search" style="position: relative;margin-top:1rem;margin-left: 1rem;height: 4rem;width: 6rem;">查询</el-button>
            </el-col>
          </el-row>
        </el-card>
        <el-card style="margin-top: 30px">
          <el-table
            :data="flight_records"
            border
            style="width: 100%"
            height="500"><!-- :default-sort = "{prop: 'time', order: 'descending'}" 按时间降序排列（可选） -->

            <el-table-column prop="aircraft_type" label="型号" width="100"></el-table-column>
            <el-table-column prop="aircraft_number" label="编号" width="180"></el-table-column>
            <el-table-column prop="run_time" label="开车时间" width="180"></el-table-column>
            <el-table-column prop="fly_time" label="飞行时间" width="180"></el-table-column>
            <el-table-column prop="subject" label="试飞科目" width="180"></el-table-column>
            <el-table-column prop="tasklist_name" label="任务单名称" width="180"></el-table-column>
            <el-table-column prop="tasklist_number" label="任务单编号" width="180"></el-table-column>
            <el-table-column
              align="right" width="300px">
              <template slot-scope="scope">
                <el-button size="mini" @click="edit_flight_record(scope.$index,scope.row)" >修改</el-button>
                <el-button size="mini" type="success" @click="check_flight_record(scope.$index,scope.row)" >查看</el-button>
                <el-button size="mini" type="danger" @click.native.prevent="deleteRow(scope.$index, part_info)">删除</el-button>
                <el-button size="mini" type="warning" @click="submit_flight_record(scope.$index,scope.row)" >提交</el-button>
              </template>
            </el-table-column>
          </el-table>
          <el-button type="primary" style="margin-top: 30px" icon="el-icon-plus" @click="add_flight_record">增加试飞数据</el-button>
        </el-card>

      </el-col>
    </el-row>
  </div>
</template>

<script>
  import Navbar from '../../../components/Navbar'
  export default {
    name: 'Flight_manage',
    components: { Navbar },
    data() {
      return {
        pickerOptions2: {
          shortcuts: [{
            text: '最近一周',
            onClick (picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick (picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick (picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        labelPosition: 'left', // 表单中标签相对于输入框的位置
        search_conditions: { // 查询条件
          aircraft_type: '',// 飞机型号
          aircraft_number: '', // 飞机编号
          flight_number: '', // 试飞数据编号
          time: '', // 开始时间和结束时间
        },
        flight_records:[{
          aircraft_type: '001型',// 飞机型号
          aircraft_number: '001', // 飞机编号
          run_time:'10' , // 开车时间
          fly_time:'5', // 飞行时间
          subject:'科目1', // 试飞科目
          tasklist_name:'第1任务单',// 任务单名称
          tasklist_number:'1', // 任务单编号
        },{
          aircraft_type: '001型',
          aircraft_number: '002',
          run_time:'10' ,
          fly_time:'5',
          subject:'科目3',
          tasklist_name:'第5任务单',
          tasklist_number:'5',
        },{
          aircraft_type: '002型',
          aircraft_number: '002',
          run_time:'10' ,
          fly_time:'5',
          subject:'科目3',
          tasklist_name:'第4任务单',
          tasklist_number:'4',
        },{
          aircraft_type: '001型',
          aircraft_number: '003',
          run_time:'10' ,
          fly_time:'5',
          subject:'科目3',
          tasklist_name:'第5任务单',
          tasklist_number:'5',
        },{
          aircraft_type: '001型',
          aircraft_number: '010',
          run_time:'10' ,
          fly_time:'5',
          subject:'科目3',
          tasklist_name:'第6任务单',
          tasklist_number:'6',
        },{
          aircraft_type: '025型',
          aircraft_number: '002',
          run_time:'10' ,
          fly_time:'5',
          subject:'科目3',
          tasklist_name:'第10任务单',
          tasklist_number:'10',
        },{
          aircraft_type: '001型',
          aircraft_number: '002',
          run_time:'10' ,
          fly_time:'5',
          subject:'科目3',
          tasklist_name:'第30任务单',
          tasklist_number:'30',
        },{
          aircraft_type: '015型',
          aircraft_number: '020',
          run_time:'10' ,
          fly_time:'5',
          subject:'科目3',
          tasklist_name:'第20任务单',
          tasklist_number:'20',
        }]
      }


    },
    methods:{
      add_flight_record(index,row){
        this.$router.push('/add_flight_record');
      },
      edit_flight_record(index,row){
        this.$router.push('/edit_flight_record');
      },
      check_flight_record(index,row){
        this.$router.push('/flight_record_details');
      }
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

