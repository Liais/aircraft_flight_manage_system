<template>
  <div>
    <navbar></navbar>
    <el-row style="margin-top: 30px; z-index: 1">
      <el-row>
        <el-col :span="20" offset="2">
          <h2>指令卡维护</h2>
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
                        <el-form-item label="指令卡">
                          <el-input v-model="search_conditions.bulletin_number"></el-input>
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
            :data="instructionCard_info"
            border
            style="width: 100%"
            height="500"><!-- :default-sort = "{prop: 'time', order: 'descending'}" 按时间降序排列（可选） -->
            <el-table-column :key="1" prop="number" label="指令卡编号" width="100"></el-table-column>
            <el-table-column prop="aircraft_type" label="所属机型" width="180"></el-table-column>
            <el-table-column prop="aircraft_number" label="所属编号" width="180"></el-table-column>
            <el-table-column prop="subsystem" label="所属子系统" width="180"></el-table-column>
            <el-table-column
              prop="isFault"
              label="关联技术通报/故障"
              width="180">
              <template slot-scope="scope">
                <el-tag v-if="scope.row.isFault === true" disable-transitions>{{scope.row.isFault}}</el-tag>
                <el-tag v-else disable-transitions>{{"\"fjalfja\""}}</el-tag>
              </template>
            </el-table-column>
            <!--<el-table-column-->
              <!--align="right" width="400px">-->
              <!--<template slot-scope="scope">-->
                <!--<el-button size="mini" @click="edit_part(scope.row)" >修改</el-button>-->
                <!--<el-button size="mini" type="success" @click="edit_part(scope.row)" >查看</el-button>-->
                <!--<el-button size="mini" type="danger" @click.native.prevent="deleteRow(scope.$index, part_info)">删除</el-button>-->
                <!--<el-button size="mini" type="warning" @click="set_part_states(scope.$index,scope.row)" >更改状态</el-button>-->
              <!--</template>-->
            <!--</el-table-column>-->
          </el-table>
          <!--<el-button type="primary" style="margin-top: 30px" icon="el-icon-plus" @click="add_part">增加零件</el-button>-->
        </el-card>

      </el-col>
    </el-row>
    <!--<el-dialog title="更改状态" :visible.sync="centerDialogVisible">-->
      <!--<el-form :model="form" label-width="5em" style="text-align: left;">-->
        <!--<el-form-item label="零件编号" id="set_part_state_number">-->
          <!--<el-input v-model="set_part_state.number" :disabled="true" style="width: 200px;"></el-input>-->
        <!--</el-form-item>-->
        <!--<el-form-item label="零件状态" id="set_part_state_state">-->
          <!--<el-select v-model="set_part_state.state" placeholder="请选择零件状态">-->
            <!--<el-option v-for="(item,index) in part_states" :key="index" :label="item.name" :value="item.name" style="width: 200px"></el-option>-->
          <!--</el-select>-->
        <!--</el-form-item>-->
        <!--<el-form-item label="更改原因" id="set_part_state_reason">-->
          <!--<el-input type="textarea" placeholder="请输入原因" v-model="set_part_state.reason"></el-input>-->
        <!--</el-form-item>-->
        <!--<el-form-item label="更改者" id="set_part_state_time">-->
          <!--<el-input v-model="set_part_state.oprator" style="width: 200px;" :disabled="true"></el-input>-->
        <!--</el-form-item>-->
      <!--</el-form>-->
      <!--<div slot="footer" class="dialog-footer">-->
        <!--<el-button @click="centerDialogVisible = false">取 消</el-button>-->
        <!--<el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>-->
      <!--</div>-->
    <!--</el-dialog>-->
  </div>
</template>

<script>
  import Navbar from '../../../components/Navbar'
  export default {
    name: 'instructionCard_manage',
    components: { Navbar },
    data() {
      return {
        centerDialogVisible: false,
        labelPosition: 'left',
        search_conditions:{
          type:'',// 飞机型号
          number:'', // 飞机编号
          subsystem:'', // 子系统
          part:'', // 零部件
          instructCard:'', // 指令卡
        },
        set_part_state:{
          number:'',// 零件编号
          state:'',// 零件状态
          time:'', // 更改时间
          reason:'', // 更改原因
          oprator: '', // 更改者
        },
        instructionCard_info:[{
          number:'001', // 指令卡编号
          aircraft_type:'翼龙', // 所属机型
          aircraft_number:'GZ001', // 所属编号
          subsystem: '飞行控制系统', // 所属子系统
          isFault: 'false', // 关联技术通报/故障
          closed_loop: 'true'
        },{
          number:'002', // 指令卡编号
          aircraft_type:'彩虹', // 所属机型
          aircraft_number:'CH001', // 所属编号
          subsystem: '武器系统', // 所属子系统
          isFault: 'true', // 关联技术通报/故障
          closed_loop: 'false'
        },{
          number:'003', // 指令卡编号
          aircraft_type:'翼龙', // 所属机型
          aircraft_number:'YL001', // 所属编号
          subsystem: '飞行控制系统', // 所属子系统
          isFault: 'false', // 关联技术通报/故障
          closed_loop: 'true'
        },{
          number:'004', // 指令卡编号
          aircraft_type:'翼龙2', // 所属机型
          aircraft_number:'YL010', // 所属编号
          subsystem: '飞行控制系统', // 所属子系统
          isFault: 'false', // 关联技术通报/故障
          closed_loop: 'true'
        },{
          number:'005', // 指令卡编号
          aircraft_type:'翼龙', // 所属机型
          aircraft_number:'NB001', // 所属编号
          subsystem: '飞行控制系统', // 所属子系统
          isFault: 'false', // 关联技术通报/故障
          closed_loop: 'true'
        },{
          number:'006', // 指令卡编号
          aircraft_type:'彩虹2', // 所属机型
          aircraft_number:'CH100', // 所属编号
          subsystem: '飞行控制系统', // 所属子系统
          isFault: 'false', // 关联技术通报/故障
          closed_loop: 'true'
        },]
      }


    },
    methods: {

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

