$('#ex1').slider({
    formatter: function(value) {
        console.log(value);
        return 'Current value: ' + value;
    }
});