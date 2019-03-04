<template>
  <div>
    <navbar></navbar>
    <el-row style="margin-top: 30px">
      <el-col :span="20" offset="2">
        <h2>新增技术通报</h2>
        <el-row style="margin-top: 30px">
          <el-col :span="24">
            <el-card class="box-card" style="height: auto;">
              <el-form :model="technical_bulletin" ref="technical_bulletin" :label-position="labelPosition" label-width="6em">
                <el-row style="top: 30px">
                  <el-col :span="10" offset="2">
                    <el-form-item label="名称">
                      <el-input v-model="technical_bulletin.name" style="width: 10em;float: left;"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="10" offset="2">
                    <el-form-item label="机型">
                      <el-select v-model="technical_bulletin.aircraft_type" placeholder="请选择机型" style="width: 10em;float: left;">
                        <el-option v-for="(item,index) in aircraft_types" :key="index" :label="item.name" :value="item.name"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row style="top: 30px">
                  <el-col :span="10" offset="2">
                    <el-form-item label="架次">
                      <el-select v-model="technical_bulletin.sortie" placeholder="请选择架次" style="width: 10em;float: left;">
                        <el-option v-for="(item,index) in sorties" :key="index" :label="item.name" :value="item.name"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-col :span="10" offset="2">
                    <el-form-item label="零件">
                      <el-select v-model="technical_bulletin.part" placeholder="请选择零件" style="width: 10em;float: left;">
                        <el-option v-for="(item,index) in parts" :key="index" :label="item.name" :value="item.name"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                </el-row>
                  <el-row style="top: 30px">
                    <el-col :span="10" offset="2">
                      <el-form-item label="系统">
                        <el-select v-model="technical_bulletin.system" placeholder="请选择系统" style="width: 10em;float: left;">
                          <el-option v-for="(item,index) in systems" :key="index" :label="item.name" :value="item.name"></el-option>
                        </el-select>
                      </el-form-item>
                    </el-col>
                    <el-col :span="10" offset="2">
                      <el-form-item label="等级">
                        <el-select v-model="technical_bulletin.level" placeholder="请选择等级" style="width: 10em;float: left;">
                          <el-option v-for="(item,index) in levels" :key="index" :label="item.name" :value="item.name"></el-option>
                        </el-select>
                      </el-form-item>
                    </el-col>
                  </el-row>
                <el-row style="top: 30px">
                  <el-col :span="22" offset="2">
                    <el-form-item label="备注">
                      <el-input type="textarea" v-model="technical_bulletin.other"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row style="top: 30px">
                  <el-col :span="22" offset="2">
                    <el-form-item label="详细信息">
                      <el-input type="textarea" v-model="technical_bulletin.detail"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row style="top: 30px;">
                  <el-col :span="10" offset="2" style="text-align: left;">
                    <el-form-item label="上传文件">

                    </el-form-item>
                    <el-upload
                      class="upload-demo"
                      ref="upload"
                      action="https://jsonplaceholder.typicode.com/posts/"
                      :on-preview="handlePreview"
                      :on-remove="handleRemove"
                      :file-list="fileList"
                      :auto-upload="false"
                      drag
                      multiple>
                      <i class="el-icon-upload"></i>
                      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                      <!--<div class="el-upload__tip" slot="tip">上传文件</div>-->
                    </el-upload>
                  </el-col>
                  <el-col :span="12"></el-col>
                </el-row>
                <el-row style="margin-top: 80px;">
                  <el-col>
                    <el-form-item  >
                      <el-button type="primary" @click="add_bulletin">确定新增</el-button>
                      <el-button type="default" @click="cancel">取消</el-button>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-form-item> <!-- 占位 -->
                  <div style="height: 100px;"></div>
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
  import Navbar from '../../../components/Navbar'
  export default {
    name: 'Add_technical_bulletin',
    components: { Navbar  },
    data(){
      return {
        technical_bulletin:{
          number:'',// 编号
          name: '', // 名称
          aircraft_type: '', // 机型
          sortie: '', // 架次
          part: '', // 零件
          system: '', // 系统
          level: '', // 等级
          other: '', // 备注
          detail:'', // 详细信息
        },
        fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
        haha:'',
        aircraft_types:[{name:'翼龙'},{name:'翼龙2'},{name: '彩虹'},{name: '彩虹2'}],
        sorties: [{name:'001'},{name:'002'},{name:'003'},{name:'004'},{name:'005'}],
        parts: [{name:'零件1'},{name:'零件2'},{name:'零件3'}],
        systems:[{name:'system1'},{name:'system2'}],
        levels:[{name:'level1'},{name:'level2'},{name:'level3'},{name:'level4'}],
        labelPosition:'left',
      }
    },
    methods:{
      add_bulletin(){
        this.$router.push('/technical_bulletin_manage');
      },
      cancel(){
        this.$router.push('/technical_bulletin_manage');
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      }
    },
    mounted () {
      document.getElementsByClassName('el-select-dropdown__list').height = 300;
    }
  }
</script>

<style scoped>

</style>



