<template>
    <div class="Echart-colum" id="pie">
    </div>
</template>
<script setup >
import * as echarts from 'echarts';
import 'echarts/theme/macarons'
import '@/components/EchartTheme/walden'
import { onMounted } from 'vue'
onMounted(() => {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('pie'), 'walden');
    window.addEventListener('resize', function () {
        myChart.resize();
    });
    // 绘制图表
    const option = {
        title: {
            text: 'Referer of a Website',
            left: 'center',
            top: 'top'
        },
        tooltip: {
            trigger: 'item',
            //     formatter: (params) => {
            //         console.log(params);
            //         return `${params.marker}<span >占比: ${params.percent} %</span><br/>
            //   ${params.marker}<span >数量: ${params.data.value} (家)</span><br/>      `
            //     }
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
            orient: 'vertical',
            left: 'left'
        },
        series: [
            {
                name: '语言占比',
                type: 'pie',
                radius: ['40%', '70%'],
                data: [
                    { value: 1048, name: 'javascript' },
                    { value: 735, name: 'java' },
                    { value: 580, name: 'c' },
                    { value: 484, name: 'c++' },
                    { value: 300, name: 'python' }
                ],
                emphasis: {
                    label: {
                        show: true,
                        fontSize: 40,
                        fontWeight: 'bold'
                    }
                },
                label: {
                    show: true,
                    position: 'outside',
                    formatter: '{b}: {c}',
                    color: "red"
                }
            }
        ]
    };
    myChart.setOption(option);
    myChart.on('click', function (params) {
        console.log(params);
    });
})
</script>


<style lang='scss' scoped>
.Echart-colum {

    width: 100%;
    height: 80%;


}
</style>