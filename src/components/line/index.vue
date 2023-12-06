<template>
    <div class="Echart-colum" id="line">
    </div>
</template>
<script setup >
import * as echarts from 'echarts';
import { onMounted } from 'vue'
onMounted(() => {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('line')); window.addEventListener('resize', function () {
        myChart.resize();
    });
    // 绘制图表
    const option = {
        color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],

        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        legend: {
            data: ['Line 1', 'Line 2']
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        dataZoom: [
            {
                id: 'dataZoomX',
                type: 'slider',
                xAxisIndex: 0,
                filterMode: 'none'
            },
            {
                id: 'dataZoomY',
                type: 'slider',
                yAxisIndex: 0,
                filterMode: 'none'
            }
        ],
        series: [
            {
                name: 'Line 1',
                type: 'line',
                stack: 'Total',
                smooth: true,
                lineStyle: {
                    width: 0
                },
                showSymbol: false,
                areaStyle: {
                    opacity: 0.8,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: 'rgb(128, 255, 165)'
                        },
                        {
                            offset: 1,
                            color: 'rgb(1, 191, 236)'
                        }
                    ])
                },
                emphasis: {
                    focus: 'series'
                },
                data: [140, 232, 101, 264, 90, 340, 250]
            },
            {
                name: 'Line 2',
                type: 'line',
                stack: 'Total',
                smooth: true,
                lineStyle: {
                    width: 0
                },
                showSymbol: false,
                areaStyle: {
                    opacity: 0.8,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: 'rgb(0, 221, 255)'
                        },
                        {
                            offset: 1,
                            color: 'rgb(77, 119, 255)'
                        }
                    ])
                },
                emphasis: {
                    focus: 'series'
                },
                data: [120, 282, 111, 234, 220, 340, 310]
            },

        ]
    };
    myChart.setOption(option);
    // 处理点击事件并且跳转到相应的百度搜索页面
    myChart.on('click', function (params) {
        console.log(params, '点击line');
    });
    myChart.on('legendselectchanged', (params) => {
        console.log(params, '图例切换');
    })
})
</script>


<style lang='scss' scoped>
.Echart-colum {

    width: 100%;
    height: 100%;


}
</style>