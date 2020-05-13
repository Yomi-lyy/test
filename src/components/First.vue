<template>
  <div id="app">
    <div class="q">待办事项清单</div>
    <p class="e">不积跬步无以至千里</p>
    <hr style="margin: 0 10% 6% 10%;" />
    <div class="u">
      <p>添加到待办事项列表</p>
      <input
        id="ap"
        type="text"
        placeholder="请输入待办项目名称"
        v-model="content"
        style="text-indent:1em;height:40px;width:200px;font-size:15px;"
      />
      <button
        id="pl"
        @click="addTask()"
        style="text-indent:0.3em;height:47px;width:100px;font-size:15px;background-color:#EE6363;color:white;"
      >添加项目</button>
      <button
        id="cjx"
        onclick
        style="text-indent:0.3em;height:47px;width:100px;font-size:15px;background-color:#EE6363;color:white;"
      >创建项目</button>
    </div>
    <div class="t" id="k">
      <div style="padding-top:20px;padding-left:40%;color:white;font-size:30px;">待办事项列表</div>
    </div>

    <!-- <input type="text" v-for="(item,i) of items" v-model="items[i]" :key="i">
    <button @click="onAdd">添加</button>-->

    <table
      id="yh"
      border="solid 8 white"
      cellspacing="8"
      style="border-width:0px 0px 0px 0px;border-color:rgba(255,251,240, 0.2);"
    >
      <tbody id="tbMain"></tbody>
      <!-- <input
        class="rt"
        v-for="(item,i) of items"
        v-model="items[i]"
        :key="i"
        style="background-Color:rgba(255,251,240, 0.2);height:40px;
     width:1000px;margin-top:30px"
      />-->
    </table>
    <!-- <input type="text" v-model="content"/><button @click="addTask">添加任务</button> -->
    <!--代办事项的输入框-->
    <ul>
      <li
        v-for="(task,index) of list"
        :id="forId(index)"
        :key="index"
        class="ty"
        style="background-Color:rgba(255,251,240, 0.2);height:80px; width:100%;margin-top:10px"
      >
        <!--利用v-for完成待办事项的循环展示-->
        <!--//利用span把代办事项的内容包裹起来，样式展示利用:class来实现   {{task.name}}-->
        <input
          :class="{'done':task.isDone}"
          v-model="task.name"
          style="text-indent:2em;width=500px;height=90px;margin-right:250px;padding:10px 200px 10px 0;background-Color:white;"
        />&nbsp;&nbsp;
        <button
          @click="maskDone(task)"
          style="margin-top:30px;color:white;height:30px;width:100px"
        >标记已完成</button>
        <!--添加标记已完成的按钮-->
        <!-- <button @click="edit()" style="color:white;height:30px;width:100px">编辑</button> -->
        <!--添加删除代办事项的按钮-->
        <button @click="deleteTask(index)" style="color:white;height:30px;width:100px">删除待办事项</button>
        <!-- <router-link :to="{name: 'Edit', query: {id: this}}"> 编辑</router-link> -->
        <!-- <button type="primary" @click="addRoute">跳转页面</button> -->
      </li>
    </ul>
  </div>
</template>

<script>
// import Vue from "vue"
// import Msg from'./msg.js'
export default {
  data () {
    return {
      items: [],
      list: [],
      content: ''
    }
  },
  methods: {
    onAdd () {
      this.items.push('')
    },
    addTask () {
      if (this.content !== '' || this.content.length !== 0) {
        let task = {
          /* 创建一个对象，并存入list数组 */
          name: this.content,
          isDone: false
        }
        this.list.push(task)
        const arr = []
        // 过滤重复push
        Object.keys(this.list).forEach(key => {
          for (var i = 0; i < this.list.length; i++) {
            for (var j = 0; j < arr.length; j++) {
              if (arr[j] === this.list[i]) {
                break
              }
            }
            if (j === arr.length) {
              arr[arr.length] = this.list[i]
            }
          } // arr.push(this.list);
        })
        console.log(arr)
        window.localStorage.setItem('forid', JSON.stringify('forid_'))
        window.localStorage.setItem('lister', JSON.stringify(arr))
        this.content = ''
      }
      /* 最后把输入框的内容置为空 */
    },
    deleteTask (index) {
      this.list.splice(index, 1)
    },
    maskDone (task) {
      task.isDone = true
    },
    forId (index) {
      return 'forid_' + index
    },
    edit () {
      // 把选中行的参数id传到URL里
      // var gid = localStorage.getItem('id')
      // window.location.href = url
      // this.$router.push({ path: './components/Edit.vue'+'/'+'type=edit'+this.id })
    },
    addRoute () {
      // this.$router.push('/Edit.vue')
    }
  }
}
</script>
<style scoped>
* {
  background-color: #ee6363;
  margin: 0;
  padding: 0;
}
.q {
  height: 60px;
  color: white;
  padding-top: 30px;
  padding-left: 10%;
  font-family: 微软雅黑;
  font-size: 50px;
}
.e {
  padding-left: 10%;
  color: white;
}
.w {
  width: 100%;
  height: 80px;
  position: relative;
  background-color: rgba(255, 251, 240, 0.2);
}
.r {
  width: 100%;
  height: 80px;
  margin-top: 25px;
  position: relative;
  background-color: rgba(255, 251, 240, 0.2);
}
.t {
  width: 100%;
  height: 80px;
  margin-top: 25px;
  position: relative;
  background-color: rgba(255, 251, 240, 0.2);
}
.y {
  margin-left: 50%;
  position: relative;
  color: white;
  font-size: 20px;
}
.u {
  padding-left: 10%;
  position: relative;
  color: white;
  top: -10px;
  font-size: 25px;
  font-weight: bold;
}
.rt {
  background-color: rgba(255, 251, 240, 0.2);
  height: "40px";
  width: 100%;
}
</style>
