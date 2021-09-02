<template>
  <div class="select">
    <el-row>
      <el-col :span="12">
        <el-select v-model="value" placeholder="选择" clearable multiple filterable allow-create default-first-option>
          <el-option v-for="item in options2"
          :label="item.lable"
          :value="item.value"
          :key="item.value"
          >
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="10">
        <el-select v-model="value1" placeholder="选择" >
        <el-option-group v-for="group in options1"
          :label="group.lable"
          :key="group.lable">
          <el-option v-for="item in group.options"
          :label="item.lable"
          :value="item.value"
          :key="item.value">
          </el-option>
        </el-option-group>
          
        </el-select>
      </el-col>
    </el-row>
    <el-row>
       <el-col :span="12">
        <el-cascader
          :options="options4"
          v-model="value3"
          :props="props"
          :show-all-levels=false
          clearable
          filterable>
          
        </el-cascader>
      </el-col>


    </el-row>
    <el-row>
       <el-col :span="12">
        <el-switch v-model="value5" 
        active-color="#13ce66" 
        inactive-color="#ff4949"
        active-text="打开"
        inactive-text="关闭"
        active-value="100"
        inactive-value="0"
        @change="change">
        </el-switch>
      </el-col>


    </el-row>
    <el-row  :gutter=10>
      <el-col :span="6">
        <el-time-select
          v-model="value6"
          :picker-options="{start: '08:30',step: '00:15',end: '18:30'}"
          placeholder="输入">
        </el-time-select>
      </el-col>
       <el-col :span="6">
        <el-time-picker
          v-model="value7"
          :picker-options="{ selectableRange: '18:30:00 - 20:30:00' }"
          placeholder="输入"
          range-separator
          is-range
          arrow-control
          range-separator="至"
          start-placeholder="开始"
          end-placeholder="结束">
        </el-time-picker>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="6">
        <el-date-picker 
        v-model="value8" 
        type="datetime" 
        placeholder="date">

        </el-date-picker>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="6">
        <el-rate v-model="value9"
        :colors="colors"
        show-score disabled>

        </el-rate>
      </el-col>
    </el-row>

    
    
  </div>
</template>

<script>


export default {
  name: 'Home',
  
  data(){
    return{
      value:'',
      value1: '',
      value3:'',
      value5:"100",
      value6:'',
      value7:'',
      value8:'',
      value9:'3.5',
      colors: ['#99A9BF', '#F7BA2A', '#FF9900'],
      props: {
      multiple:true,
      expandTrigger:'hover'
    },
      options2:[
        {
          value: 1,
          lable:'北极'
        },
        {
          value: 2,
          lable:'南极'
        },
        {
          value:3,
          lable:'华北'
        },
        {
          value:4,
          lable:'华南'
        }
      ],
      options1: [{
          label: '热门城市',
          options: [{
            value: 'Shanghai',
            label: '上海'
          }, {
            value: 'Beijing',
            label: '北京'
          }]
        }, {
          label: '城市名',
          options: [{
            value: 'Chengdu',
            label: '成都'
          }, {
            value: 'Shenzhen',
            label: '深圳'
          }, {
            value: 'Guangzhou',
            label: '广州'
          }, {
            value: 'Dalian',
            label: '大连'
          }]
        }],
        options4:[{
          value:1,
          label: '指南',
          children:[{
            value: '3',
            label: '设计原则',
          },
          {
            value: '4',
              label: '一致'
          }]
        },
        {
          value:2,
          label: '应用'
        },

        ]
    }
  },
  methods:{
    change(e){
      console.log(e)

    }
    
    }
 
}
</script>


<style>
.el-row {
  margin: 100px;
}



</style>
