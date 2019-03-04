<template>
    <div>
      <navbar></navbar>

      <el-row :gutter="20">
        <el-col :span="20" offset="2">
          <el-breadcrumb separator-class="el-icon-arrow-right" style="margin-top: 15px;margin-bottom: 15px">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>飞机型号详情</el-breadcrumb-item>
          </el-breadcrumb><!-- 面包屑导航 -->
          <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item name="1">
              <template slot="title" >
                <h2>飞机管理</h2>
              </template>
              <el-table
                :data="aircraftsOfSameType.filter(data => !search_aircraft || data.name.toLowerCase().includes(search_aircraft.toLowerCase()))"
                style="width: 100%;"
                height="300px">
                <el-table-column
                  label="机型"
                  prop="type">
                </el-table-column>
                <el-table-column
                  label="名称"
                  prop="name">
                </el-table-column>
                <el-table-column
                  align="right">
                  <template slot="header" slot-scope="scope">
                    <el-input
                      v-model="search_aircraft"
                      size="mini"
                      placeholder="输入关键字搜索"/>
                  </template>
                  <template slot-scope="scope">
                    <el-button
                      size="mini"
                      @click="handleEdit(scope.$index, scope.row)">查看</el-button>
                    <el-button
                      size="mini"
                      type="danger"
                      @click.native.prevent="deleteRow(scope.$index, aircraftsOfSameType)">删除</el-button>
                  </template>
                </el-table-column>
              </el-table>
              <el-button type="primary" icon="el-icon-plus" @click="addAircraft">增加飞机</el-button>
            </el-collapse-item>
            <el-collapse-item name="2">
              <template slot="title">
                <h2>子系统及零件管理</h2>
              </template>
              <el-row>
                <el-col :span="6"><!-- 左侧子系统表 -->
                  <h3>子系统列表</h3>
                  <el-menu
                    default-active="1"
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose"
                    style="height: 300px;overflow-y: scroll;overflow-x: hidden">
                    <el-menu-item v-for="(item,index) in subsystemsOfThisType" :key="index" @click="showParts(index)">
                      <span slot="title">{{item.name}}</span>
                    </el-menu-item>
                    <el-menu-item v-for="(item,index) in subsystemsOfThisType" :key="index" @click="showParts(index)">
                      <span slot="title">{{item.name}}</span>
                    </el-menu-item>
                  </el-menu>
                  <el-button type="primary" icon="el-icon-plus">增加子系统</el-button>
                </el-col>
                <el-col :span="18"><!-- 右侧零件表 -->
                  <h3>子系统"{{subsystemsOfThisType[subsystemIndex].name}}"包含以下零件</h3>
                  <el-table v-for="(item,index) in subsystemsOfThisType" :key="index"
                    :data="subsystemsOfThisType[index].parts.filter(data => !search_part || data.name.toLowerCase().includes(search_part.toLowerCase()))"
                            v-show="index === subsystemIndex"
                    style="width: 100%;"
                    height="350px">
                    <el-table-column
                      label="零件名称"
                      prop="name">
                    </el-table-column>
                    <el-table-column
                      align="right">
                      <template slot="header" slot-scope="scope">
                        <el-input
                          v-model="search_part"
                          size="mini"
                          placeholder="输入关键字搜索"/>
                      </template>
                      <template slot-scope="scope">
                        <el-button
                          size="mini"
                          @click="handleEdit(scope.$index, scope.row)">查看</el-button>
                        <el-button
                          size="mini"
                          type="danger"
                          @click.native.prevent="deleteRow(scope.$index, subsystemsOfThisType[subsystemIndex].parts)">删除</el-button>
                      </template>
                    </el-table-column>
                  </el-table>
                  <el-button type="primary" icon="el-icon-plus">增加零件</el-button>
                </el-col>
              </el-row>
            </el-collapse-item>
          </el-collapse>
        </el-col>
      </el-row>
    </div>
</template>

<script>
  import Navbar from '../../components/Navbar'
  export default {
    name: 'Aircraft_type',
    components: { Navbar },
    data() {
      return {
        aircraftType:'翼龙',// 当前页面对应的机型
        activeNames: ['1','2'], // 两个折叠面板默认全部打开
        aircraftsOfSameType: [{ // 该机型下所有飞机
          type: '',
          name: 'u1',
        }, {
          type: '',
          name: 'u2',
        }, {
          type: '',
          name: 'u3',
        }, {
          type: '',
          name: 'u4',
        }, {
            type: '',
            name: 'u5',
          }, {
            type: '',
            name: 'u6',

          }, {
            type: '翼龙',
            name: 'u7',

          }, {
            type: '翼龙',
            name: 'u8',
          }],
        search_aircraft: '', // 用于匹配的飞机关键字
        search_part:'', // 用于匹配的零件关键字
        subsystemIndex: 0, // 子系统查看零件，默认第一个子系统
        subsystemsOfThisType:[ // 该型号的子系统以及零件状态
          {
            name:'子系统1',
            parts:[{
                name:'零件1',
              },{
              name:'零件2',
            },{
              name:'零件3',
            },{
              name:'零件4',
            },{
              name:'零件5',
            },{
              name:'零件6',
            },{
              name:'零件7',
            },{ name:'零件8'}
            ]
          },
          {
            name:'子系统2',
            parts:[{
              name:'零件11',
            },{
              name:'零件12',
            },{
              name:'零件13',
            },{
              name:'零件14',
            },{
              name:'零件15',
            },{
              name:'零件16',
            },{
              name:'零件17',
            },{ name:'零件18'}
            ]
          },
          {
            name:'子系统3',
            parts:[{
              name:'零件21',
            },{
              name:'零件22',
            },{
              name:'零件23',
            },{
              name:'零件24',
            },{
              name:'零件25',
            },{
              name:'零件26',
            },{
              name:'零件27',
            },{ name:'零件28'}
            ]
          },
          {
            name:'子系统4',
            parts:[{
              name:'零件31',
            },{
              name:'零件32',
            },{
              name:'零件33',
            },{
              name:'零件34',
            },{
              name:'零件35',
            },{
              name:'零件36',
            },{
              name:'零件37',
            },{ name:'零件38'}
            ]
          },
          {
            name:'子系统5',
            parts:[{
              name:'零件41',
            },{
              name:'零件42',
            },{
              name:'零件43',
            },{
              name:'零件44',
            },{
              name:'零件45',
            },{
              name:'零件46',
            },{
              name:'零件47',
            },{ name:'零件48'}
            ]
          },
          {
            name:'子系统6',
            parts:[{
              name:'零件51',
            },{
              name:'零件52',
            },{
              name:'零件53',
            },{
              name:'零件54',
            },{
              name:'零件55',
            },{
              name:'零件56',
            },{
              name:'零件57',
            },{ name:'零件58'}
            ]
          },
          {
            name:'子系统7',
            parts:[{
              name:'零件61',
            },{
              name:'零件62',
            },{
              name:'零件63',
            },{
              name:'零件64',
            },{
              name:'零件65',
            },{
              name:'零件66',
            },{
              name:'零件67',
            },{ name:'零件68'}
            ]
          },
          {
            name:'子系统8',
            parts:[{
              name:'零件71',
            },{
              name:'零件72',
            },{
              name:'零件73',
            },{
              name:'零件74',
            },{
              name:'零件75',
            },{
              name:'零件76',
            },{
              name:'零件77',
            },{ name:'零件78'}
            ]
          }
        ]
      }
    },
    mounted(){
      // 开始时，所有飞机的机型全部设置为本页面的机型，如果有了后端的话直接将机型保存到 aircraftsType 中即可
      for(var i = 0 ;i<this.aircraftsOfSameType.length;i++){
        this.aircraftsOfSameType[i].type = this.aircraftType;
      }
    },
    methods:{
      handleEdit(index, row) {
        console.log(index, row);
      },
      deleteRow(index, rows) {
        rows.splice(index, 1);
      },
      showParts(index){
        this.subsystemIndex = index;
      }

    }
  }
</script>

<style scoped>


</style>
