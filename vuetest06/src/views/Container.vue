<template>

<div>
    <el-link type="primary">链接</el-link>|
    <el-link type="success">链接</el-link>|
    <el-link type="warning" class="el-icon-edit">链接</el-link>|
    <el-link type="danger" disabled>链接</el-link>|
    <el-link type="info" :underline=false>链接</el-link>|

    <div class="button">
        <el-button type="primary" size="mini" plain>按钮</el-button>
        <el-button type="success" size="mini" plain>按钮</el-button>
        <el-button type="warning"  circle class="el-icon-user" >按钮</el-button>
        <el-button type="danger" size="mini" round>按钮</el-button>
        <el-button type="info" size="mini">按钮</el-button>
        <el-row >
            <el-button-group>
            <el-button type="primary">U</el-button>
            <el-button type="primary">D</el-button>
           </el-button-group>

        </el-row>
        <div class="radiocheckbox">
            <el-radio v-model="sex" :label="1">男</el-radio>
            <el-radio v-model="sex" label="2">女</el-radio>
            <el-row >
               <el-radio-group v-model="place">
                   <el-radio :label="1">jj</el-radio>
                   <el-radio :label="2" border>kk</el-radio>
                   <el-radio :label="3" disabled>ll</el-radio>
               </el-radio-group>
            </el-row>
            <el-row >
               <el-radio-group v-model="place" @change="change">
                   <el-radio-button :label="1">jj</el-radio-button>
                   <el-radio-button :label="2" >kk</el-radio-button>
                   <el-radio-button :label="3" >ll</el-radio-button>
               </el-radio-group>
            </el-row>
            <el-row >
                <el-checkbox-group v-model="box" >
                    <el-checkbox lable='hh'>hh</el-checkbox>
                    <el-checkbox lable='gg'>gg</el-checkbox>
                    <el-checkbox lable='ll'>ll</el-checkbox>
                </el-checkbox-group>
            </el-row>

            <hr/>
            <el-row :gutter="10">
                <el-col :span="6"><div ><el-input  v-model="input1" placeholder="输入"></el-input></div></el-col>
                <el-col :span="6"><div ><el-input  v-model="input2" placeholder="输入" clearable></el-input></div></el-col>
                <el-col :span="6"><div ><el-input  v-model="input3" placeholder="输入" show-password></el-input></div></el-col>
                <el-col :span="6"><div ><el-input  v-model="input4" placeholder="输入" maxlength=10 show-word-limit></el-input></div></el-col>
            </el-row>

            <el-row :gutter="10">
                <el-col :span="8"><div ><el-input  v-model="input1" placeholder="输入" prefix-icon="el-icon-search"></el-input></div></el-col>
                <el-col :span="8"><div ><el-input  v-model="input2" placeholder="输入" suffix-icon="el-icon-date" size="mini"></el-input></div></el-col>
                <el-col :span="8"><div ><el-input  v-model="input3" placeholder="输入" ><i slot="suffix" class=" el-input__icon el-icon-date"></i></el-input></div></el-col>
                
            </el-row>

            <el-row>
                <el-col :span=18><el-input  v-model="input1" placeholder="输入" ><div slot="prepend">https://</div><div slot="append">.com</div></el-input></el-col>
            </el-row>
            <el-row>
                <el-col :span=8><el-input-number v-model="num" @change="inputchange" :min="1" :max="10" label="1"></el-input-number></el-col>
            </el-row>
        </div>
       
    </div>
    <div>
        <el-form ref="form" :model="form" label-width="80px" inline refs="form"
        rules="rules">
            <el-form-item label="活动名称">
                <el-input v-model="form.name" placeholder="输入"></el-input>

            </el-form-item>
            <el-form-item >
                <el-button type="primary" @click="clickvalue(form)">提交</el-button>

            </el-form-item>
        </el-form>
            
    </div>


</div>
    



  
</template>

<script>
export default {
    name:'Container',
    data(){
        return{
            sex:1,
            place:1,
            box:['gg','ll'],
            input1:'',
            input2:'',
            input3:'',
            input4:'',
            form:{
                name:'',
            },
            num:1,
        }
    },
    methods: {
        change(e){
            console.log(e)

        },
        inputchange(e){
            console.log(e)

        },
        clickvalue(forName){
            this.$refs[forName].validate((valid)=>{
                if(valid){
                    alert("submitted")
                }else{
                    return false
                }
            })
            
        }
    }
}
</script>

<style>
.el-button{
    font-size: 10px;
    
}
.el-row{
    margin: 10px;
}



</style>