<template>
  <div>
    <navbar></navbar>
    <el-row style="margin-top: 30px; z-index: 1">
      <el-row>
        <el-col :span="20" offset="2">
          <h2>技术通报管理</h2>
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
                        <el-form-item label="技术通报">
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
            :data="bulletin_info"
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
            <el-table-column prop="bulletin_name" label="通报名称" width="180"></el-table-column>
            <el-table-column
              prop="installOrNot"
              label="是否闭环"
              width="180">
              <template slot-scope="scope">
                <el-tag
                  :type="scope.row.closed_loop === '是' ? 'success' : 'danger'"
                  disable-transitions>{{scope.row.closed_loop}}</el-tag>
              </template>
            </el-table-column>
            <el-table-column prop="importance" label="重要度标识" width="180"></el-table-column>
            <el-table-column prop="aircraft_number" label="所属飞机" width="180"></el-table-column>
            <el-table-column prop="system_number" label="所属系统" width="180"></el-table-column>
            <el-table-column prop="part_number" label="所属零件" width="180"></el-table-column>
            <el-table-column prop="keyword" label="关键字" width="180"></el-table-column>
            <el-table-column
              align="right" width="450px">
              <template slot-scope="scope">
                <el-button size="mini" @click="edit_bulletin(scope.row)" >修改</el-button>
                <el-button size="mini" type="success" @click="check_bulletin(scope.row)" >查看</el-button>
                <el-button size="mini" type="danger" @click.native.prevent="deleteRow(scope.$index, part_info)">删除</el-button>
                <el-button size="mini" type="warning" @click.native.prevent="">指令卡管理</el-button>
                <el-button size="mini" type="danger" @click.native.prevent="">关闭通报</el-button>
              </template>
            </el-table-column>
          </el-table>
          <el-button type="primary" style="margin-top: 30px" icon="el-icon-plus" @click="add_technical_bulletin">增加技术通报</el-button>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import Navbar from '../../../components/Navbar'
  export default {
    name: 'technical_bulletin_manage',
    components: { Navbar },
    data() {
      return {
        centerDialogVisible: false,
        labelPosition: 'left',
        search_conditions:{
          type:'',// 飞机型号
          number:'', //飞机编号
          subsystem:'', //子系统
          part:'', //零部件
          bulletin_number:'' // 技术通报
        },
        bulletin_info:[{
          number:'001',// 编号
          bulletin_name:'通报1',// 通报名称
          closed_loop:'是', // 是否闭环
          importance:'1', // 重要度标识
          aircraft_number:'1号机', // 所属飞机
          system_number:'001系统', // 所属系统
          part_number: '003零件',// 所属零件
          keyword:'key1'
        },{
          number:'001',
          bulletin_name:'通报1',
          closed_loop:'是',
          importance:'1',
          aircraft_number:'1号机',
          system_number:'001系统',
          part_number: '003零件',
          keyword:'key1'
        },{
          number:'001',
          bulletin_name:'通报1',
          closed_loop:'是',
          importance:'1',
          aircraft_number:'1号机',
          system_number:'001系统',
          part_number: '003零件',
          keyword:'key1'
        },{
          number:'001',
          bulletin_name:'通报1',
          closed_loop:'否',
          importance:'1',
          aircraft_number:'1号机',
          system_number:'001系统',
          part_number: '003零件',
          keyword:'key1'
        },{
          number:'001',
          bulletin_name:'通报1',
          closed_loop:'是',
          importance:'1',
          aircraft_number:'1号机',
          system_number:'001系统',
          part_number: '003零件',
          keyword:'key1'
        },{
          number:'001',
          bulletin_name:'通报1',
          closed_loop:'否',
          importance:'1',
          aircraft_number:'1号机',
          system_number:'001系统',
          part_number: '003零件',
          keyword:'key1'
        },{
          number:'001',
          bulletin_name:'通报1',
          closed_loop:'否',
          importance:'1',
          aircraft_number:'1号机',
          system_number:'001系统',
          part_number: '003零件',
          keyword:'key1'
        },{
          number:'001',
          bulletin_name:'通报1',
          closed_loop:'是',
          importance:'1',
          aircraft_number:'1号机',
          system_number:'001系统',
          part_number: '003零件',
          keyword:'key1'
        },{
          number:'001',
          bulletin_name:'通报1',
          closed_loop:'是',
          importance:'1',
          aircraft_number:'1号机',
          system_number:'001系统',
          part_number: '003零件',
          keyword:'key1'
        }]
      }


    },
    methods: {
      add_bulletin(){
        this.$router.push('/add_technical_bulletin');
      },
      set_part_states(index,row){
        this.centerDialogVisible = true;
        this.set_part_state.number = row.number;
        this.set_part_state.state = row.part_state;
      },
      edit_bulletin(index,row){
        this.$router.push('/edit_technical_bulletin');
      },
      add_technical_bulletin(){
        this.$router.push('/add_technical_bulletin');
      },
      check_bulletin(index,row){
        this.$router.push('/technical_bulletin_detail');
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


