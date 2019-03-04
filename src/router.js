import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Test from './views/Test.vue'
import Aircraft_type_info from './views/aircraft_manage/Aircraft_type_info'
import Aircraft_state from './views/aircraft_states/Aircraft_state'
import Part_detail_state from './views/aircraft_states_manage/part_manage/Part_detail_state'
import Edit_part from './views/aircraft_states_manage/part_manage/Edit_part'
import Part_install_uninstall_history from './views/aircraft_states_manage/part_manage/part_install_uninstall_history/Part_install_uninstall_history'
import Add_part_install_uninstall_history
  from './views/aircraft_states_manage/part_manage/part_install_uninstall_history/Add_part_install_uninstall_history'
import Edit_part_install_uninstall_history
  from './views/aircraft_states_manage/part_manage/part_install_uninstall_history/Edit_part_install_uninstall_history'
import Part_install_history from './views/aircraft_states_manage/part_manage/part_install_history/Part_install_history'
import Add_part_install_history
  from './views/aircraft_states_manage/part_manage/part_install_history/Add_part_install_history'
import Edit_part_install_history
  from './views/aircraft_states_manage/part_manage/part_install_history/Edit_part_install_history'
import Add_part from './views/aircraft_states_manage/part_manage/Add_part'
import Part_manage from './views/aircraft_states_manage/part_manage/Part_manage'
import Part_fault_record from './views/aircraft_states_manage/part_manage/Part_fault_record'
import Flight_manage from './views/aircraft_states_manage/flight_manage/Flight_manage'
import Add_flight_record from './views/aircraft_states_manage/flight_manage/Add_flight_record'
import Edit_flight_record from './views/aircraft_states_manage/flight_manage/Edit_flight_record'
import Flight_record_details from './views/aircraft_states_manage/flight_manage/Flight_record_details'
import Fault_record from './views/aircraft_states_manage/fault_record/Fault_record'
import Technical_bulletin_manage
  from './views/aircraft_states_manage/technical_bulletin_manage/Technical_bulletin_manage'
import Add_technical_bulletin from './views/aircraft_states_manage/technical_bulletin_manage/Add_technical_bulletin'
import Edit_technical_bulletin from './views/aircraft_states_manage/technical_bulletin_manage/Edit_technical_bulletin'
import Technical_bulletin_detail
  from './views/aircraft_states_manage/technical_bulletin_manage/Technical_bulletin_detail'
import InstructionCard_manage from './views/aircraft_states_manage/instructcard_manage/InstructionCard_manage'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    },
    {
      path: '/aircraft_type_info',
      name: 'aircraft_type_info',
      component: Aircraft_type_info
    },
    {
      path: '/part_detail_state',
      name: 'part_detail_state',
      component: Part_detail_state
    },
    {
      path: '/edit_part',
      name: 'edit_part',
      component: Edit_part
    },
    {
      path: '/part_install_uninstall_history',
      name: 'part_install__uninstall_history',
      component: Part_install_uninstall_history
    },
    {
      path: '/add_part_install_uninstall_history',
      name: 'add_part_install_uninstall_history',
      component: Add_part_install_uninstall_history
    },
    {
      path: '/edit_part_install_uninstall_history',
      name: 'edit_part_install_uninstall_history',
      component: Edit_part_install_uninstall_history
    },
    {
      path: '/part_install_history',
      name: 'part_install_history',
      component: Part_install_history
    },
    {
      path: '/add_part_install_history',
      name: 'add_part_install_history',
      component: Add_part_install_history
    },
    {
      path: '/edit_part_install_history',
      name: 'edit_part_install_history',
      component: Edit_part_install_history
    },
    {
      path: '/add_part',
      name: 'add_part',
      component: Add_part
    },
    {
      path: '/edit_part',
      name: 'edit_part',
      component: Edit_part
    },
    {
      path: '/part_manage',
      name: 'part_manage',
      component: Part_manage
    },
    {
      path: '/part_fault_record',
      name: 'part_fault_record',
      component: Part_fault_record
    },
    {
      path: '/flight_manage',
      name: 'flight_manage,',
      component: Flight_manage
    },
    {
      path: '/add_flight_record',
      name: 'add_flight_record',
      component: Add_flight_record
    },
    {
      path: '/edit_flight_record',
      name: 'edit_flight_record',
      component: Edit_flight_record
    },
    {
      path: '/flight_record_details',
      name: 'flight_record_details',
      component: Flight_record_details
    },
    {
      path: '/Fault_record',
      name: 'Fault_record',
      component: Fault_record
    },
    {
      path: '/technical_bulletin_manage',
      name: 'technical_bulletin_manage',
      component: Technical_bulletin_manage
    },
    {
      path: '/add_technical_bulletin',
      name: 'add_technical_bulletin',
      component: Add_technical_bulletin
    },
    {
      path: '/edit_technical_bulletin',
      name: 'edit_technical_bulletin',
      component: Edit_technical_bulletin
    },
    {
      path: '/technical_bulletin_detail',
      name: 'technical_bulletin_detail',
      component: Technical_bulletin_detail
    },
    {
      path: '/instructionCard_manage',
      name: 'instructionCard_manage',
      component: InstructionCard_manage
    }



    // {
     // path: '/about',
     // name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
     // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }

  ]
})
