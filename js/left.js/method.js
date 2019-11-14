/*根据id获取对象*/
function $(str) {
    return document.getElementById(str);
}


var prov = $('selectpicker1');
var city = $('selectpicker2');



/*用于保存当前所选的省市区*/
var current = {
    prov: '',
    city: '',
    country: ''
};


/*自动加载省份列表*/
(function showProv() {
    var len = provice.length;
    for (var i = 0; i < len; i++) {
        var provOpt = document.createElement('option');
        provOpt.innerText = provice[i]['name'];
        provOpt.value = i;
        prov.appendChild(provOpt);
    }
})();

/*根据所选的省份来显示城市列表*/
function showCity(obj) {
    // console.log("hhhhhhhhhhhhh")
    var val = obj.options[obj.selectedIndex].value;
    if (val != current.prov) {
        current.prov = val;

    }
    //console.log(val);
    if (val != null) {
        city.length = 1;
        var cityLen = provice[val]["city"].length;
        for (var j = 0; j < cityLen; j++) {
            var cityOpt = document.createElement('option');
            cityOpt.innerText = provice[val]["city"][j].name;
            cityOpt.value = j;
            city.appendChild(cityOpt);
        }
    }
    console.log(obj);
}