<template>
    <div style="width: 100%;height: 100%;" id="main">
    </div>
</template>
<script setup >
import * as echarts from 'echarts';
import 'echarts-wordcloud';

import { onMounted, toRefs, nextTick } from 'vue'
onMounted(() => {
    nextTick(() => {
        init();
        console.log(data);
    });
})

const name = [
    "冯秀英",
    "蒋静",
    "程艳",
    "宋勇",
    "卢敏",
    "徐艳",
    "郭涛",
    "郭勇",
    "文平",
    "沈秀",
    "邵勇",
    "钱超",
    "孔秀",
    "孔洋",
    "赖勇",
    "郑刚",
    "程超",
    "孙娟",
    "张刚",
    "赖磊",
    "蔡静",
    "夏磊",
    "龚静",
    "钱洋",
    "尹明",
    "冯娜",
    "萧娟",
    "叶平",
    "叶秀英",

]

const data = name.map(item => {
    return {
        name: item,
        value: Math.floor(Math.random() * 1000)
    }
})

function init() {
    const echartDom = document.getElementById('main')
    const myChart = echarts.init(echartDom)
    const option = {

        series: [{
            type: 'wordCloud',
            shape: 'triangle',
            keepAspect: false,

            // 根据图片展示的形状
            // maskImage: maskImage,
            left: 'center',
            top: 'center',
            width: '100%',
            height: '90%',
            right: null,
            bottom: null,
            sizeRange: [12, 60],// 用来调整字的大小范围
            rotationRange: [-45, 275],//每个词旋转的角度范围和旋转的步进
            rotationStep: 45,
            gridSize: 8,            //来调整词之间的距离
            drawOutOfBound: false,
            layoutAnimation: true,   // 布局的时候是否有动画
            textStyle: {
                fontFamily: 'sans-serif',
                fontWeight: 'bold',
                color: function () {
                    return 'rgb(' + [
                        Math.round(Math.random() * 160),
                        Math.round(Math.random() * 160),
                        Math.round(Math.random() * 160)
                    ].join(',') + ')';
                }
            },
            emphasis: {
                // focus: 'self',
                textStyle: {
                    textShadowBlur: 3,
                    textShadowColor: '#333'
                }
            },
            //data属性中的value值却大，权重就却大，展示字体就却大
            data: data
        }]

    }
    option && myChart.setOption(option)

    //随着屏幕大小调节图表
    // window.addEventListener("resize", () => {
    //     myChart.resize();
    // });
}
</script>


<style lang='scss' scoped></style>