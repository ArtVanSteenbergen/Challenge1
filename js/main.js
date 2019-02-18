google.charts.load('current', {'packages':['corechart', 'bar']});
google.charts.setOnLoadCallback(drawSpeedChart);
google.charts.setOnLoadCallback(drawFuelChart);
google.charts.setOnLoadCallback(drawOccupationChart);

function drawSpeedChart() {
  var data = google.visualization.arrayToDataTable([
    ['Month', 'Speed'],
    ['February', {v:42172, f:'42,172 km/h'}],
    ['March', {v:55863, f:'55,863km/h'}],
    ['April', {v:78133, f:'78,133km/h'}],
    ['May', {v:78177, f:'78,177km/h'}],
    ['June', {v:78181, f:'78181km/h'}]
  ]);

  var options = {
    title: 'Speed of the Interplanetary Transport System',
    titleTextStyle: {color: '#FFFFFF'},
    colors:['#005288'],
    pointShape: 'star',
    chartArea: {'backgroundColor':'#181c1f', left: '5%', top: '5%', width: '90%', height: '90%'},
    curveType: 'function',
    backgroundColor: '#181c1f',
    legend: {position: 'top', titleTextStyle: {color: '#FFFFFF'}, textStyle:{color:'#FFFFFF'}},
    fontSize: 16,
    fontName: 'Varela Round',
    hAxis: {title: 'Month',  titleTextStyle: {color: '#FFFFFF'}, textStyle:{color:'#FFFFFF'},textPosition: 'in'},
    vAxis: {title: 'Speed in km/h',format:'short',  titleTextStyle: {color: '#FFFFFF'}, textStyle:{color:'#FFFFFF'},textPosition: 'in'},
    dataOpacity: 1,
  }
  var chart = new google.visualization.LineChart(document.getElementById('speed'));
  chart.draw(data, options);
}

function drawFuelChart() {
  var data = google.visualization.arrayToDataTable([
    ['Month', 'CH4','LOX'],
    ['February', {v:240000, f:'240,000kg '}, {v:860000, f:'860,000kg'}],
    ['March', {v:24234, f:'24,234kg'}, {v:6843, f:'6,843kg'}],
    ['April', {v:23782, f:'23,782kg'}, {v:6842, f:'6,842kg'}],
    ['May', {v:22921, f:'22,921kg'}, {v:6838, f:'6,838kg'}],
    ['June', {v:19302, f:'19,302kg'}, {v:6340, f:'6,340kg'}]
  ]);

  var options = {
    title: 'Fuel and Oxidizer aboard',
    height: '500px',
    titleTextStyle: {color: '#FFFFFF'},
    colors:['#008852','#005288'],
    pointShape: 'star',
    pointSize: 30,
    chartArea: {'backgroundColor':'#181c1f', left: '5%', top: '5%', width: '90%', height: '90%'},
    backgroundColor: '#181c1f',
    legend: {position: 'top', titleTextStyle: {color: '#FFFFFF'}, textStyle:{color:'#FFFFFF'}},
    fontSize: 16,
    fontName: 'Varela Round',
    hAxis: {title: 'Month',  titleTextStyle: {color: '#FFFFFF'}, textStyle:{color:'#FFFFFF'},textPosition: 'in'},
    vAxis: {title: 'Fuel in kg',format:'short', minValue: 0,  titleTextStyle: {color: '#FFFFFF'}, textStyle:{color:'#FFFFFF'},textPosition: 'in'},
    dataOpacity: 1,
    animation: {
      duration: 1000,
      startup: false
    }
  }
  var chart = new google.visualization.ColumnChart(document.getElementById('fuel'));
  chart.draw(data, options);
}

function drawOccupationChart() {
  var data = google.visualization.arrayToDataTable([
    ['Type', 'amount'],
    ['Men', 420],
    ['Women',369],
    ['Other',103]
  ]);

  var options = {
    title: 'Current habitation on Mars',
    height: '500px',
    titleTextStyle: {color: '#FFFFFF'},
    colors:['#dd5800','#ff7f2a','#ffad77'],
    chartArea: {'backgroundColor':'#181c1f', left: '5%', top: '5%', width: '90%', height: '90%'},
    backgroundColor: '#181c1f',
    legend: {position: 'right', titleTextStyle: {color: '#FFFFFF'}, textStyle:{color:'#FFFFFF'}},
    fontSize: 16,
    fontName: 'Varela Round',
    hAxis: {title: 'Month',  titleTextStyle: {color: '#FFFFFF'}, textStyle:{color:'#FFFFFF'},textPosition: 'in'},
    vAxis: {title: 'Fuel',format:'short', minValue: 0,  titleTextStyle: {color: '#FFFFFF'}, textStyle:{color:'#FFFFFF'},textPosition: 'in'},
    dataOpacity: 1,
    pieSliceBorderColor : '#181C1F',
  }
  var chart = new google.visualization.PieChart(document.getElementById('occupation'));
  chart.draw(data, options);
}

$( window ).resize(function() {
  setTimeout(()=> location = location, 500);
});
