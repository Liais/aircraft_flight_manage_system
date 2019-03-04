<template>
  <div>
    <navbar></navbar>
    <el-row style="margin-top: 30px">
      <el-col :span="20" offset="2">
        <h2>零件安装记录</h2>
        <el-row>
          <el-col :span="24" style="text-align: left">
            <el-button type="primary" @click="add_part_install_history">新增拆卸记录</el-button>
          </el-col>
        </el-row>
        <el-row style="margin-top: 30px">
          <el-col :span="24">
            <el-table
              :data="part_install_history"
              border
              height="500"><!-- :default-sort = "{prop: 'time', order: 'descending'}" 按时间降序排列（可选） -->
              <el-table-column type="expand">
                <template slot-scope="props">
                  <el-form label-position="left" inline class="demo-table-expand">
                    <el-form-item label="原因">
                      <span>{{ props.row.reason }}</span>
                    </el-form-item>
                    <el-form-item label="其他信息">
                      <span>{{ props.row.other }}</span>
                    </el-form-item>
                  </el-form>
                </template>
              </el-table-column>
              <el-table-column :key="1" prop="number" label="编号" width="100"></el-table-column>
              <el-table-column prop="name" label="零件名称" width="180"></el-table-column>
              <el-table-column label="时间" width="180">
                <template slot-scope="scope">
                  <i class="el-icon-time"></i>
                  <span style="margin-left: 10px">{{ scope.row.time}}</span>
                </template>
              </el-table-column>
              <!-- ctrl + D 复制当前行到下面 ctrl + Y 删除当前行-->
              <el-table-column prop="operator" label="操作者" width="180"></el-table-column>
              <el-table-column prop="state" label="安装时零件的状态" width="200px"></el-table-column>
              <el-table-column
                align="right" width="160px">
                <template slot-scope="scope">
                  <el-button size="mini" @click="edit_part_install_history(scope.row)" >修改</el-button>
                  <el-button size="mini" type="danger" @click.native.prevent="deleteRow(scope.$index, part_install_history)">删除</el-button>
                </template>
              </el-table-column>
            </el-table>

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
    name: 'Part_install_history',
    components: { Navbar },
    store,
    data(){
      return {
        part_install_history:[{
          number:'001',// 编号
          name:'零件1',// 零件名称
          time:'2016-01-01',//时间
          operator:'张三',// 操作者
          state:'完好',// 安装时零件的状态
          reason: '这时一个无法原因',
          other:'无',//其他说明
        },{
          number:'002',// 编号
          name:'零件2',// 零件名称
          time:'2016-01-01',//时间
          operator:'张三',// 操作者
          state:'完好',// 安装时零件的状态
          reason: '这时一个无法原因',
          other:'无',//其他说明
        },{
          number:'003',// 编号
          name:'零件3',// 零件名称
          time:'2016-01-01',//时间
          operator:'张三',// 操作者
          state:'完好',// 安装时零件的状态
          reason: '这时一个无法原因',
          other:'无',//其他说明
        },{
          number:'004',// 编号
          name:'零件4',// 零件名称
          time:'2016-01-01',//时间
          operator:'张三',// 操作者
          state:'完好',// 安装时零件的状态
          reason: '这时一个无法原因',
          other:'无',//其他说明
        },{
          number:'005',// 编号
          name:'零件5',// 零件名称
          time:'2016-01-01',//时间
          operator:'张三',// 操作者
          state:'完好',// 安装时零件的状态
          reason: '这时一个无法原因',
          other:'无',//其他说明
        },{
          number:'006',// 编号
          name:'零件6',// 零件名称
          time:'2016-01-01',//时间
          operator:'张三',// 操作者
          state:'完好',// 安装时零件的状态
          reason: '这时一个无法原因',
          other:'无',//其他说明
        },{
          number:'007',// 编号
          name:'零件7',// 零件名称
          time:'2016-01-01',//时间
          operator:'张三',// 操作者
          state:'完好',// 安装时零件的状态
          reason: '这时一个无法原因',
          other:'无',//其他说明
        },{
          number:'008',// 编号
          name:'零件8',// 零件名称
          time:'2016-01-01',//时间
          operator:'张三',// 操作者
          state:'完好',// 安装时零件的状态
          reason: '这时一个无法原因',
          other:'无',//其他说明
        },]
      }
    },
    methods:{
      deleteRow(index, rows) {
        rows.splice(index, 1);
      },
      add_part_install_history(){
        this.$router.push('/add_part_install_history');
      },
      edit_part_install_history(row){
        store.commit('set_install_history',{ number:row.number,time:row.time,
          reason: row.reason,
          operator:row.operator,
          state:row.state
        });
        this.$router.push('/edit_part_install_history');
      }
    },

  }
</script>

<style scoped>

</style>
<style>
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>

