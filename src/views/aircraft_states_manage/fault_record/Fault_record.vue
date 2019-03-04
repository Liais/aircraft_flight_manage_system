<template>
  <div>
    <navbar></navbar>
    <el-row style="margin-top: 30px; z-index: 1">
      <el-row>
        <el-col :span="20" offset="2">
          <h2>故障记录管理</h2>
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
                      <el-col :span="8">
                        <el-form-item label="子系统">
                          <el-input v-model="search_conditions.subsystem"></el-input>
                        </el-form-item>
                      </el-col>
                      <el-col :span="8">
                        <el-form-item label="零部件">
                          <el-input v-model="search_conditions.part"></el-input>
                        </el-form-item>
                      </el-col>
                      <el-col :span="8">
                        <el-form-item label="故障编号">
                          <el-input v-model="search_conditions.fault_number"></el-input>
                        </el-form-item>
                      </el-col>
                    </el-row>
                  </el-col>
                </el-row>
              </el-form>
            </el-col>
            <el-col :span="4">
              <el-button type="primary" icon="el-icon-search" style="position: relative;margin-top: 40px;margin-left: 20px;">查询</el-button>
            </el-col>
          </el-row>
        </el-card>
        <el-card style="margin-top: 30px">
          <el-table
            :data="fault_info"
            border
            style="width: 100%"
            height="500"><!-- :default-sort = "{prop: 'time', order: 'descending'}" 按时间降序排列（可选） -->
            <!--<el-table-column label="创建时间" width="180">-->
              <!--<template slot-scope="scope">-->
                <!--<i class="el-icon-time"></i>-->
                <!--<span style="margin-left: 10px">{{ scope.row.create_time}}</span>-->
              <!--</template>-->
            <!--</el-table-column>-->
            <el-table-column :key="1" prop="number" label="编号" width="100"></el-table-column>
            <el-table-column prop="fault_type" label="故障种类" width="180"></el-table-column>
            <el-table-column prop="fault_name" label="故障名称" width="180"></el-table-column>
            <el-table-column
              prop="installOrNot"
              label="故障是否闭环"
              width="180">
              <template slot-scope="scope">
                <el-tag
                  :type="scope.row.closed_loop === '是' ? 'success' : 'danger'"
                  disable-transitions>{{scope.row.closed_loop}}</el-tag>
              </template>
            </el-table-column>
            <el-table-column prop="aircraft_number" label="所属飞机" width="180"></el-table-column>
            <el-table-column prop="system_number" label="所属系统" width="180"></el-table-column>
            <el-table-column prop="part_number" label="所属零件" width="180"></el-table-column>
            <el-table-column prop="" label="故障开始时间" width="180">
              <template slot-scope="scope">
                <i class="el-icon-time"></i>
                <span style="margin-left: 10px">{{ scope.row.start_time}}</span>
              </template>
            </el-table-column>
            <el-table-column label="故障结束时间" width="180">
              <template slot-scope="scope">
                <i class="el-icon-time"></i>
                <span style="margin-left: 10px">{{ scope.row.end_time}}</span>
              </template>
            </el-table-column>
            <el-table-column prop="operator" label="操作员" width="180"></el-table-column>
            <el-table-column
              align="right" width="600px">
              <template slot-scope="scope">
                <el-button size="mini" @click="edit_part(scope.row)" >修改</el-button>
                <el-button size="mini" type="success" @click="edit_part(scope.row)" >查看</el-button>
                <el-button size="mini" type="danger" @click.native.prevent="deleteRow(scope.$index, part_info)">删除</el-button>
                <el-button size="mini" type="warning" @click.native.prevent="">故障处理</el-button>
                <el-button size="mini" type="warning" @click.native.prevent="">指令卡管理</el-button>
                <el-button size="mini" type="danger" @click.native.prevent="">关闭故障</el-button>
              </template>
            </el-table-column>
          </el-table>
          <el-button type="primary" style="margin-top: 30px" icon="el-icon-plus" @click="add_part">增加故障记录</el-button>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import Navbar from '../../../components/Navbar'
  export default {
    name: 'Fault_record',
    components: { Navbar },
    data() {
      return {
        centerDialogVisible: false,
        labelPosition: 'left',
        part_states:[
          {name:'完好'},
          {name:'故障'},
          {name:'缺件-返厂'},
          {name:'缺件-维修'},
          {name:'缺件-报废'},
          {name:'缺件-周检'},
          {name:'串件'}
        ],
        search_conditions:{
          type:'',// 飞机型号
          number:'', //飞机编号
          subsystem:'', //子系统
          part:'', //零部件
          fault_number:'' // 故障编号
        },
        set_part_state:{
          number:'',// 零件编号
          state:'',// 零件状态
          time:'', // 更改时间
          reason:'', // 更改原因
          oprator: '', // 更改者
        },
        fault_info:[{
          number:'001',// 编号
          fault_type:'零件种类1',// 故障种类
          fault_name:'零件1',// 故障名称
          closed_loop:'是', // 故障是否闭环
          aircraft_number:'1号机', // 所属飞机
          system_number:'001系统', // 所属系统
          part_number: '003零件',// 所属零件
          start_time: '2016-01-01', // 故障开始时间
          end_time: '2016-01-02', // 故障结束时间
          operator: "张柳"
        },{
          number:'001',
          fault_type:'零件种类1',
          fault_name:'零件1',
          closed_loop:'是',
          aircraft_number:'1号机',
          system_number:'001系统',
          part_number: '003零件',
          start_time: '2016-01-01',
          end_time: '2016-01-02',
          operator: "张柳"
        },{
          number:'001',
          fault_type:'零件种类1',
          fault_name:'零件1',
          closed_loop:'是',
          aircraft_number:'1号机',
          system_number:'001系统',
          part_number: '003零件',
          start_time: '2016-01-01',
          end_time: '2016-01-02',
          operator: "张柳"
        },{
          number:'001',
          fault_type:'零件种类1',
          fault_name:'零件1',
          closed_loop:'否',
          aircraft_number:'1号机',
          system_number:'001系统',
          part_number: '003零件',
          start_time: '2016-01-01',
          end_time: '2016-01-02',
          operator: "张柳"
        },{
          number:'001',
          fault_type:'零件种类1',
          fault_name:'零件1',
          closed_loop:'否',
          aircraft_number:'1号机',
          system_number:'001系统',
          part_number: '003零件',
          start_time: '2016-01-01',
          end_time: '2016-01-02',
          operator: "张柳"
        },{
          number:'001',
          fault_type:'零件种类1',
          fault_name:'零件1',
          closed_loop:'是',
          aircraft_number:'1号机',
          system_number:'001系统',
          part_number: '003零件',
          start_time: '2016-01-01',
          end_time: '2016-01-02',
          operator: "张柳"
        },{
          number:'001',
          fault_type:'零件种类1',
          fault_name:'零件1',
          closed_loop:'是',
          aircraft_number:'1号机',
          system_number:'001系统',
          part_number: '003零件',
          start_time: '2016-01-01',
          end_time: '2016-01-02',
          operator: "张柳"
        },{
          number:'001',
          fault_type:'零件种类1',
          fault_name:'零件1',
          closed_loop:'否',
          aircraft_number:'1号机',
          system_number:'001系统',
          part_number: '003零件',
          start_time: '2016-01-01',
          end_time: '2016-01-02',
          operator: "张柳"
        },{
          number:'001',
          fault_type:'零件种类1',
          fault_name:'零件1',
          closed_loop:'否',
          aircraft_number:'1号机',
          system_number:'001系统',
          part_number: '003零件',
          start_time: '2016-01-01',
          end_time: '2016-01-02',
          operator: "张柳"
        }]
      }


    },
    methods: {
      add_part(){
        this.$router.push('');
      },
      set_part_states(index,row){
        this.centerDialogVisible = true;
        this.set_part_state.number = row.number;
        this.set_part_state.state = row.part_state;
      },
      edit_part(index,row){
        this.$router.push('');
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

