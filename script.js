function drawChart()
{
    let num1 = parseFloat(document.getElementById('mean').value);
    let num2 = parseFloat(document.getElementById('desv').value);
    let num3 = parseFloat(document.getElementById('xuno').value);
    let num4 = parseFloat(document.getElementById('xdos').value);

    if (num1 > 0 && num2 > 0) {
    
    ERROR.style.display = 'none';
        
    var data = new google.visualization.DataTable();
    data.addColumn('number', 'X Value');
    data.addColumn('number', '');

    function NormalDensityZx(X, Mean, StdDev)
    {
        var a = X - Mean;
        return Math.exp(-(a * a) / (2 * StdDev * StdDev) / (Math.sqrt(2 * Math.PI) * StdDev));
    }

    var ChartData = new Array([]);
    var index = 0;

    for (var i = (num3) ; i < (num4); i++ ){ ChartData[index] = new Array(2); ChartData[index][0] = i;   ChartData[index][1] = NormalDensityZx(i,(num1),(num2));  index++;} 
     data.addRows(ChartData);
    options = { height: 450, widht: 650, legend: 'distribucion normal'};
    options.hAxis = {};
    options.hAxis.minorGridlines = {};
    options.hAxis.minorGridlines.count = 12;
    var chart = new google.visualization.AreaChart(document.getElementById('grafica'));
    chart.draw(data, options);

}else{
    ERROR.style.display = 'block';
}
}
const GO = document.getElementById('go');
const RESET = document.getElementById('reset');
const ERROR = document.getElementById('error');

GO.addEventListener('click',() => {
    google.load('visualization', '1', {packages: ['corechart'], callback: drawChart}) 
})
RESET.addEventListener('click',() => {
   location.reload();
})
GO.addEventListener('mouseover',() => {
    GO.style.backgroundColor = '#D5DFE5';
})
GO.addEventListener('mouseleave',() => {
    GO.style.backgroundColor = '';
})
RESET.addEventListener('mouseover',() => {
    RESET.style.backgroundColor = '#D5DFE5';
})
RESET.addEventListener('mouseleave',() => {
    RESET.style.backgroundColor = '';
})