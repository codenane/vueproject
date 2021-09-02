<template>
  <div>
    <el-row class="elrow">
      <el-col :span=12 style="background-color:blue">24</el-col>
    </el-row>
    <hr/>
    <el-row class="elrow" >
      <el-col :span=1 style="background-color:blue" >3</el-col>
      <el-col :span=1 style="background-color:yellow" >3</el-col>
      <el-col :span=1 style="background-color:green">3</el-col>
      <el-col :span=1 style="background-color:purple">3</el-col>
    </el-row>
     <hr/>
    <el-row class="elrow" >
      <el-col :span=1 style="background-color:blue" :offset=1 :push=1 >3</el-col>
      <el-col :span=1 style="background-color:yellow" :offset=1>3</el-col>
      <el-col :span=1 style="background-color:green" :offset=1 :pull=1>3</el-col>
      <el-col :span=1 style="background-color:purple" :offset=1 >3</el-col>
    </el-row>
    <hr/>
    <el-row class="elrow" >
      <el-col :span=3 style="background-color:blue" >3</el-col>
      <el-col :span=3 style="background-color:yellow" >3</el-col>
      <el-col :span=3 style="background-color:green">3</el-col>
      <el-col :span=3 style="background-color:purple">3</el-col>
    </el-row>
    <hr/>
    <el-row class="elrow1" >
      <el-col :span=6  class="elcol2">3</el-col>
      <el-col :span=6  class="elcol2" >3</el-col>
      <el-col :span=6 class="elcol2" >3</el-col>
      <el-col :span=6 class="elcol2" >3</el-col>
    </el-row>
    <hr/>
    <el-row class="elrow1" :gutter=20>
      <el-col :span=6  class="elcol2"><div style="background-color:blue">3</div></el-col>
      <el-col :span=6  class="elcol2" >3</el-col>
      <el-col :span=6 class="elcol2" >3</el-col>
      <el-col :span=6 class="elcol2" >3</el-col>
    </el-row>
    <!-- <div class="container">
      <el-container>
        <el-header>header</el-header>
        <el-container>
          <el-aside>aside</el-aside>
         <el-main>main</el-main>
        </el-container>
        
        <el-footer>footer</el-footer>
    </el-container>
    </div> -->
    <div>
      <i class="el-icon-document"></i>
      <i class="el-icon-edit"></i>
      <i class="el-icon-eleme"></i>
      <el-button type="primary" class="el-icon-search">搜索</el-button></el-button>
    </div>
    
  
  </div>

 
    
    
    
    


</template>

<style>
.elrow{
  background-color:red;
  text-align:center;
  color:white;
  /* display: flex;
  justify-content:center; */
}
.elrow1{
  background-color:aqua;
  margin:5px;
  text-align: center;
}
.elcol2{
  background-color:coral;
  padding:10px;
  border: 1px solid white;
  /* margin-left: -1px; */
}
.el-container{
  background-color:blue;
  color:white;
}
.el-header{
  background-color:blueviolet;

}
.el-footer{
  background-color:chartreuse;
}
.el-aside{
  background-color:brown;
  max-width: 100px;
  min-height: 200px;
}
.el-main{
  background-color:crimson;
}
.el-icon-document,.el-icon-eleme{
  font-size:30px;
}
/* .el-button{
  size:10px;
} */



</style>
