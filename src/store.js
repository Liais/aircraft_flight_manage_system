import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    install_uninstall_history:{ // 零件拆卸历史记录
      number:'',// 编号
      install_or_not:'',// 拆/装
      install_time:'',// 拆卸时间
      reason:'',// 拆卸原因
      operator:'',// 操作者
      part_state:'',// 零件状态
    },
    install_history:{
      number: '', // 记录编号
      time: '',// 安装时间
      reason: '', // 安装原因
      operator: '', // 操作者
      state: '', // 零部件状态
    }
  },
  mutations: {
    set_install_uninstall_history(state,value){
      state.install_uninstall_history.number = value.number;
      state.install_uninstall_history.install_or_not = value.install_or_not;
      state.install_uninstall_history.install_time = value.install_time;
      state.install_uninstall_history.reason = value.reason;
      state.install_uninstall_history.operator = value.operator;
      state.install_uninstall_history.part_state = value.part_state;
      console.log(state.install_uninstall_history.number);
    },
    set_install_history(state,value){
      state.install_history.number = value.number;
      state.install_history.time = value.time;
      state.install_history.reason = value.reason;
      state.install_history.operator = value.operator;
      state.install_history.state = value.state;
    },
    test(state,value){
      console.log(value);
    }
  },
  actions: {

  }
})
