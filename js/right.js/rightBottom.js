var viewBar = echarts.init(document.getElementById('right-bottom'));
optionBar = {
    tooltip: {
        trigger: 'axis',
    },
    grid: {
        show: false,
        containLabel: true,
        tooltip: {},
        left: '5%',
        right: '5%',
        top: '5%',
        bottom: '5%'
    },

    xAxis: {
        show: false,
        type: 'value',
        max: 100,
        inverse: true,
        axisLabel: {
            formatter: function(value, index) {

                return Math.abs(value)
            }
        },


    },
    yAxis: {
        type: 'category',
        data: ['文史', '理工', '经管', '医学', '理学', '农学', '艺术'],
        boundaryGap: true,
        axisTick: {
            alignWithLabel: true
        }
    },
    series: [{
            name: '学科评估',
            type: 'bar',
            stack: '1',
            barWidth: 15,
            itemStyle: {},
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },

            data: [32, 10, 30, 53, 29, 33, 32]
        },
        {
            name: '学科建设',
            type: 'bar',
            stack: '1',
            barWidth: 15,
            itemStyle: {},
            label: {
                normal: {
                    show: true,
                    position: 'insideRight',
                    formatter: function(v) {
                        return Math.abs(v.data)

                    }
                }
            },
            data: [-32, -30, -20, -33, -39, -33, -90]
        }


    ]
};
viewBar.setOption(optionBar);