<template>
    <div style="width: 100%;height: 100%;" id="main">
    </div>
</template>
<script setup >
import * as echarts from 'echarts';

import { onMounted, toRefs, nextTick } from 'vue'
const props = defineProps({
    list: {
        type: Array,
        default: () => []
    }
})

const { list } = (props)
onMounted(() => {
    nextTick(() => {
        init()
    });

})
function init() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('main'));
    window.addEventListener('resize', function () {
        myChart.resize();
    });
    // 绘制图表
    myChart.setOption({
        title: {
            text: 'ECharts 入门示例'
        },
        tooltip: {
            trigger: 'axis',
            formatter: (params) => {
                // console.log(params);
                return `
               <span> ${params[0].name}</span > <br />
      ${params[0].marker}<span >占比: ${params[0].name}</span><br/>
         ${params[0].marker}<span >值: ${params[0].value}</span><br/>
`
            }
        },
        xAxis: {
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20],
            markPoint: {
                // symbol: "circle",
                // silent: true,
                label: {
                    show: true,
                    position: "top",
                    distance: 8.5,
                    // rotate: 45,
                    formatter: '{b}:{c}'
                },
                itemStyle: {
                    color: 'red'
                },
                data: [
                    {
                        name: '最大值',
                        type: 'max'
                    },

                    {
                        name: '最小值',
                        type: 'min'
                    }
                ]
            }
        }
    });
    myChart.on('click', function (params) {
        console.log(params);
    });
}
</script>


<style lang='scss' scoped></style>