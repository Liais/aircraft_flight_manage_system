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
                        <el-form-item label="子系统">
                          <el-input v-model="search_conditions.subsystem"></el-input>
                        </el-form-item>
                      </el-col>
                      <el-col :span="12">
                        <el-form-item label="零部件">
                          <el-input v-model="search_conditions.part"></el-input>
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
            :data="part_info"
            border
            style="width: 100%"
            height="500"><!-- :default-sort = "{prop: 'time', order: 'descending'}" 按时间降序排列（可选） -->
            <el-table-column label="创建时间" width="180">
              <template slot-scope="scope">
                <i class="el-icon-time"></i>
                <span style="margin-left: 10px">{{ scope.row.create_time}}</span>
              </template>
            </el-table-column>
            <el-table-column :key="1" prop="number" label="编号" width="100"></el-table-column>
            <el-table-column prop="part_type" label="零件种类" width="180"></el-table-column>
            <el-table-column prop="part_name" label="零件名称" width="180"></el-table-column>
            <el-table-column prop="part_state" label="状态" width="180"></el-table-column>
            <el-table-column prop="used_time" label="使用时长" width="180"></el-table-column>
            <el-table-column prop="" label="开始使用日期" width="180">
              <template slot-scope="scope">
                <i class="el-icon-time"></i>
                <span style="margin-left: 10px">{{ scope.row.start_time}}</span>
              </template>
            </el-table-column>
            <el-table-column label="下一次定检日期" width="180">
              <template slot-scope="scope">
                <i class="el-icon-time"></i>
                <span style="margin-left: 10px">{{ scope.row.next_check_time}}</span>
              </template>
            </el-table-column>
            <el-table-column label="下一次保养日期" width="180">
              <template slot-scope="scope">
                <i class="el-icon-time"></i>
                <span style="margin-left: 10px">{{ scope.row.next_maintain_time}}</span>
              </template>
            </el-table-column>
            <el-table-column prop="operator" label="操作员" width="180"></el-table-column>
            <el-table-column
              align="right" width="400px">
              <template slot-scope="scope">
                <el-button size="mini" @click="edit_part(scope.row)" >修改</el-button>
                <el-button size="mini" type="success" @click="edit_part(scope.row)" >查看</el-button>
                <el-button size="mini" type="danger" @click.native.prevent="deleteRow(scope.$index, part_info)">删除</el-button>
                <el-button size="mini" type="warning" @click="set_part_states(scope.$index,scope.row)" >更改状态</el-button>
              </template>
            </el-table-column>
          </el-table>
          <el-button type="primary" style="margin-top: 30px" icon="el-icon-plus" @click="add_part">增加零件</el-button>
        </el-card>

      </el-col>
    </el-row>
    <el-dialog title="更改状态" :visible.sync="centerDialogVisible">
      <el-form :model="form" label-width="5em" style="text-align: left;">
        <el-form-item label="零件编号" id="set_part_state_number">
          <el-input v-model="set_part_state.number" :disabled="true" style="width: 200px;"></el-input>
        </el-form-item>
        <el-form-item label="零件状态" id="set_part_state_state">
          <el-select v-model="set_part_state.state" placeholder="请选择零件状态">
            <el-option v-for="(item,index) in part_states" :key="index" :label="item.name" :value="item.name" style="width: 200px"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="更改原因" id="set_part_state_reason">
          <el-input type="textarea" placeholder="请输入原因" v-model="set_part_state.reason"></el-input>
        </el-form-item>
        <el-form-item label="更改者" id="set_part_state_time">
          <el-input v-model="set_part_state.oprator" style="width: 200px;" :disabled="true"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import Navbar from '../../../components/Navbar'
  export default {
    name: 'Part_manage',
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
        },
        set_part_state:{
          number:'',// 零件编号
          state:'',// 零件状态
          time:'', // 更改时间
          reason:'', // 更改原因
          oprator: '', // 更改者
        },
        part_info:[{
          create_time:'2016-01-01',// 创建时间
          number:'001',// 编号
          part_type:'零件种类1',// 零件种类
          part_name:'零件1',// 零件名称
          part_state:'完好',// 状态
          used_time:'100',// 使用时长
          start_time:'2016-01-01',// 开始使用日期
          next_check_time:'2017-01-01',// 下一次定检日期
          next_maintain_time:'2017-01-01', // 下一次保养日期
          operator:'鲁迅'// 操作员
        },{
          create_time:'2016-01-01',// 创建时间
          number:'002',// 编号
          part_type:'零件种类1',// 零件种类
          part_name:'零件2',// 零件名称
          part_state:'完好',// 状态
          used_time:'100',// 使用时长
          start_time:'2016-01-01',// 开始使用日期
          next_check_time:'2017-01-01',// 下一次定检日期
          next_maintain_time:'2017-01-01', // 下一次保养日期
          operator:'保卢斯'// 操作员
        },{
          create_time:'2016-01-02',// 创建时间
          number:'003',// 编号
          part_type:'零件种类2',// 零件种类
          part_name:'零件3',// 零件名称
          part_state:'完好',// 状态
          used_time:'100',// 使用时长
          start_time:'2016-01-01',// 开始使用日期
          next_check_time:'2017-01-01',// 下一次定检日期
          next_maintain_time:'2017-01-01', // 下一次保养日期
          operator:'古德里安'// 操作员
        },{
          create_time:'2016-01-02',// 创建时间
          number:'004',// 编号
          part_type:'零件种类2',// 零件种类
          part_name:'零件4',// 零件名称
          part_state:'完好',// 状态
          used_time:'100',// 使用时长
          start_time:'2016-01-01',// 开始使用日期
          next_check_time:'2017-01-01',// 下一次定检日期
          next_maintain_time:'2017-01-01', // 下一次保养日期
          operator:'曼施坦因'// 操作员
        },{
          create_time:'2016-01-02',// 创建时间
          number:'005',// 编号
          part_type:'零件种类2',// 零件种类
          part_name:'零件5',// 零件名称
          part_state:'完好',// 状态
          used_time:'100',// 使用时长
          start_time:'2016-01-01',// 开始使用日期
          next_check_time:'2017-01-01',// 下一次定检日期
          next_maintain_time:'2017-01-01', // 下一次保养日期
          operator:'邓尼茨'// 操作员
        },{
          create_time:'2016-01-02',// 创建时间
          number:'006',// 编号
          part_type:'零件种类3',// 零件种类
          part_name:'零件6',// 零件名称
          part_state:'完好',// 状态
          used_time:'100',// 使用时长
          start_time:'2016-01-01',// 开始使用日期
          next_check_time:'2017-01-01',// 下一次定检日期
          next_maintain_time:'2017-01-01', // 下一次保养日期
          operator:'威廉利斯特'// 操作员
        },{
          create_time:'2016-01-02',// 创建时间
          number:'007',// 编号
          part_type:'零件种类4',// 零件种类
          part_name:'零件7',// 零件名称
          part_state:'完好',// 状态
          used_time:'100',// 使用时长
          start_time:'2016-01-01',// 开始使用日期
          next_check_time:'2017-01-01',// 下一次定检日期
          next_maintain_time:'2017-01-01', // 下一次保养日期
          operator:'凯赛林'// 操作员
        },{
          create_time:'2016-01-02',// 创建时间
          number:'008',// 编号
          part_type:'零件种类4',// 零件种类
          part_name:'零件8',// 零件名称
          part_state:'完好',// 状态
          used_time:'100',// 使用时长
          start_time:'2016-01-01',// 开始使用日期
          next_check_time:'2017-01-01',// 下一次定检日期
          next_maintain_time:'2017-01-01', // 下一次保养日期
          operator:'伦德施泰特'// 操作员
        },{
          create_time:'2016-01-02',// 创建时间
          number:'009',// 编号
          part_type:'零件种类3',// 零件种类
          part_name:'零件9',// 零件名称
          part_state:'完好',// 状态
          used_time:'140',// 使用时长
          start_time:'2016-01-01',// 开始使用日期
          next_check_time:'2017-01-01',// 下一次定检日期
          next_maintain_time:'2017-01-01', // 下一次保养日期
          operator:'隆美尔'// 操作员
        }]
      }


    },
    methods: {
      add_part(){
        this.$router.push('/add_part');
      },
      set_part_states(index,row){
        this.centerDialogVisible = true;
        this.set_part_state.number = row.number;
        this.set_part_state.state = row.part_state;
      },
      edit_part(index,row){
        this.$router.push('/part_detail_state');
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
