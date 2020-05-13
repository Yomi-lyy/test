<template>
  <div id="ed">
    <div class="q">编辑事项清单</div>
    <p class="e">不积跬步无以至千里</p>
    <hr style="margin: 0 10% 6% 10%;" />
    <div id="p">
      <label
        style="width:18%;top:35px;color:white;font-size:18px;position:relative;padding-left:10%;padding-right:5px;"
      >事项名称：</label>
      <input
        id="t"
        class="ee"
        type="text"
        onblur="ty()"
        style="text-indent:1em;border-radius:10px;"/>
    </div>
    <label
      style="width:18%;top:35px;color:white;font-size:18px;position:relative;padding-left:10%;padding-right:5px;"
    >待办时间：</label>
    <input id="o" onblur="ti()" style="text-indent:1em;border-radius:10px;" />

    <label
      style="width:18%;top:35px;color:white;font-size:18px;position:relative;padding-left:10%;padding-right:5px;"
    >事项内容：</label>
    <textarea id="y" type="text" onblur="ah()" style="text-indent:1em;border-radius:10px;"></textarea>
    <button type="submit" id="hu" class="u" onclick="th()">提交</button>
    <button id="io" type="submit" class="u" onclick="bg()">保存</button>
  </div>
</template>
<script>
// import Vue from "vue";
// import laydate from './latedate.js'
export default {
  // methods: {},
  // data: {}
}
</script>
<style scoped>
* {
  background-color: #ee6363;
  margin: 0;
  padding: 0;
}
.ed {
  background-color: #ee6363;
  margin: 0;
  padding: 0;
}
.q {
  height: 60px;
  color:  black;
  padding-top: 30px;
  padding-left: 10%;
  font-family: 微软雅黑;
  font-size: 50px;
}
.e {
  padding-left: 10%;
  color: white;
}
#t {
  color: black;
  padding-top: 10px;
  margin-left: 20%;
  font-family: 微软雅黑;
  font-size: 20px;
  width: 65%;
  height: 30px;
  position: relative;
  background-color: white;
  margin: 0 10% 6% 25%;
}
#o {
  color: black;
  padding-top: 10px;
  margin-left: 20%;
  font-family: 微软雅黑;
  font-size: 20px;
  width: 65%;
  height: 30px;
  position: relative;
  background-color: white;
  margin: 0 10% 6% 25%;
}
#y {
  color: black;
  padding-top: 10px;
  margin-left: 20%;
  font-family: 微软雅黑;
  font-size: 20px;
  width: 65%;
  height: 400px;
  position: relative;
  background-color: white;
  margin: 0 10% 6% 25%;
}
.u {
  height: 50px;
  width: 100px;
  border-radius: 8%;
  color: white;
  margin: 0 10% 6% 25%;
  font-family: 微软雅黑;
  font-size: 20px;
  background-color: #ee6363;
}

</style>
