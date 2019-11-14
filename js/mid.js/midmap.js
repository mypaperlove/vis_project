//数据纯属虚构
var datap = [{
        name: '江苏省',
        value: 5.3
    },
    {
        name: '北京市',
        value: 3.8
    },
    {
        name: '上海',
        value: 4.6
    },
    {
        name: '重庆',
        value: 3.6
    },
    {
        name: '河北',
        value: 3.4
    },
    {
        name: '河南',
        value: 3.2
    },
    {
        name: '云南',
        value: 1.6
    },
    {
        name: '辽宁',
        value: 4.3
    },
    {
        name: '黑龙江',
        value: 4.1
    },
    {
        name: '湖南',
        value: 2.4
    },
    {
        name: '安徽',
        value: 3.3
    },
    {
        name: '山东',
        value: 3.0
    },
    {
        name: '新疆',
        value: 1
    },
    {
        name: '江苏',
        value: 3.9
    },
    {
        name: '浙江',
        value: 3.5
    },
    {
        name: '江西',
        value: 2.0
    },
    {
        name: '湖北',
        value: 2.1
    },
    {
        name: '广西',
        value: 3.0
    },
    {
        name: '甘肃',
        value: 1.2
    },
    {
        name: '山西',
        value: 3.2
    },
    {
        name: '内蒙古',
        value: 3.5
    },
    {
        name: '陕西',
        value: 2.5
    },
    {
        name: '吉林',
        value: 4.5
    },
    {
        name: '福建',
        value: 2.8
    },
    {
        name: '贵州',
        value: 1.8
    },
    {
        name: '广东',
        value: 3.7
    },
    {
        name: '青海',
        value: 0.6
    },
    {
        name: '西藏',
        value: 0.4
    },
    {
        name: '四川',
        value: 3.3
    },
    {
        name: '宁夏',
        value: 0.8
    },
    {
        name: '海南',
        value: 1.9
    },
    {
        name: '台湾',
        value: 0.1
    },
    {
        name: '香港',
        value: 0.1
    },
    {
        name: '澳门',
        value: 0.1
    }
];

var yData = [];
var barData = [];

for (var i = 0; i < 10; i++) {
    barData.push(datap[i]);
    yData.push(i + datap[i].name);
}

var midMapOption = {
    tooltip: {
        show: true,
        // formatter: function(params) {
        //     return params.name + '：' + params.datap['value'] + '%'
        // },
    },
    visualMap: {
        type: 'continuous',
        orient: 'horizontal',
        itemWidth: 10,
        itemHeight: 80,
        text: ['高', '低'],
        showLabel: true,
        seriesIndex: [0],
        min: 0,
        max: 2,
        inRange: {
            color: ['#6FCF6A', '#FF5000']
        },
        textStyle: {
            color: '#7B93A7'
        },
        bottom: 30,
        left: 'left',
    },


    geo: {
        roam: true,
        map: 'china',
        left: 'center',
        label: {
            emphasis: {
                show: false
            }
        },
        itemStyle: {
            emphasis: {
                areaColor: '#fff464'
            }
        }
    },
    series: [{
        name: 'mapSer',
        type: 'map',
        roam: true,
        geoIndex: 0,
        label: {
            show: false,
        },
        data: datap,

    }]
};

var midMap = echarts.init(document.getElementById('mid-top'));
midMap.setOption(midMapOption);