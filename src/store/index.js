import Vue from 'vue'
import Vuex from 'vuex'
import img from '@/img/img.jpg'
Vue.use(Vuex);
const state = {
    // 获取用户名
    userId:JSON.parse(localStorage.getItem('user'))[0].admin,
    // 获取教师总人数
    infonum:(JSON.parse(localStorage.getItem('infotabledata')) || []).length || null,
    fabnum:(JSON.parse(localStorage.getItem('fabtabledata')) || []).length || null,
    finnum:(JSON.parse(localStorage.getItem('fintabledata')) || []).length || null,
    mecnum:(JSON.parse(localStorage.getItem('mectabledata')) || []).length || null,
    sernum:(JSON.parse(localStorage.getItem('sertabledata')) || []).length || null,
    tranum:(JSON.parse(localStorage.getItem('tratabledata')) || []).length || null,
    vennum:(JSON.parse(localStorage.getItem('ventabledata')) || []).length || null,
    //获取学生总人数
    stunum:(JSON.parse(localStorage.getItem('students')) || []).length || null,
    // 引用引入的图片路径
    img:img
}


export default new Vuex.Store({
        state,
        // state:{
        //   userId:JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')).admin : null
        // },
        // mutations: {
        //   setUserId(state,userId) {
        //     state.userId.push(userId)
        //   }
        // }
        // mutations:{
        //     getTeacherNum(state){
        //         state.infonum
        //     }
        // }


  
});
