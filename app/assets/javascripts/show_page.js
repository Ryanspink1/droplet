var API = 'https://waterservices.usgs.gov/'

var tempGraphAxes = {
  dataX: [],
  dataY: []
}
var phGraphAxes = {
  dataX: [],
  dataY: []
}
var oxygenGraphAxes = {
  dataX: [],
  dataY: []
}
var conductivityGraphAxes = {
  dataX: [],
  dataY: []
}
var dischargeGraphAxes = {
  dataX: [],
  dataY: []
}

var printShowTemperature = function(data){
  $('.station-show-header').html('');
  $('.station-show-header').append(data.value.timeSeries[0].sourceInfo.siteName);
  $('#show-temperature').html('');
  for(var i=0; i<data.value.timeSeries[0].values[0].value.length; i++){
    if (data.value.timeSeries[0].values[0].value[i].value == '-999999'){
      $('#show-temperature')
        .append('<tr class="temp">' +
                '<th>' + (i + 1) + '</th>' +
                '<th>' + new Date(data.value.timeSeries[0].values[0].dateTime).toUTCString() + '</th>' +
                '<th class="text-center"> ' + 'N/A' + '</th>' +
                '</tr>')
   }else{
      $('.show-top-row').css("display", "inline");
      tempGraphAxes.dataY.push(parseInt(Math.floor(data.value.timeSeries[0].values[0].value[i].value * 9/5 + 32)));
      tempGraphAxes.dataX.push(new Date(data.value.timeSeries[0].values[0].value[i].dateTime).toUTCString());
      $('#show-temperature')
        .append('<tr class="temp">' +
                '<th>' + (i + 1) + '</th>' +
                '<th>' + new Date(data.value.timeSeries[0].values[0].value[i].dateTime).toUTCString() + '</th>' +
                '<th class="text-center">' +  Math.floor(data.value.timeSeries[0].values[0].value[i].value * 9/5 + 32) + '</th>' +
                '</tr>'
      )
    }
  }
  var tempGraphParams =
  $(function () {
  var myChart = Highcharts.chart('temp-graph', {
      chart: {
          type: 'line'
      },
      title: {
          text: 'Water Temperature Change'
      },
      xAxis: {
          categories: tempGraphAxes.dataX
      },
      yAxis: {
          title: {
              text: 'Temperature Farenheit'
          }
      },
      series: [{
          name: 'Temperature',
          data: tempGraphAxes.dataY
      }]
  });
  });
  $('#temp-graph-script').add(tempGraphParams)
}

var printShowPh = function(data){
  $('#show-ph').html('');
  for(var i=0; i<data.value.timeSeries[0].values[0].value.length; i++){
    if (data.value.timeSeries[0].values[0].value[i].value == '-999999'){
      $('#show-ph')
        .append('<tr class="pH">' +
                '<th>' + (i + 1) + '</th>' +
                '<th>' + new Date(data.value.timeSeries[0].values[0].dateTime).toUTCString() + '</th>' +
                '<th class="text-center">' + 'N/A' + '</th>' +
                '</tr>')
   }else{
     $('.show-second-row').css("display", "inline");
     phGraphAxes.dataY.push(parseFloat(data.value.timeSeries[0].values[0].value[i].value));
     phGraphAxes.dataX.push(new Date(data.value.timeSeries[0].values[0].value[i].dateTime).toUTCString());
      $('#show-ph')
        .append('<tr class="pH">' +
                '<th>' + (i + 1) + '</th>' +
                '<th>' + new Date(data.value.timeSeries[0].values[0].value[i].dateTime).toUTCString() + '</th>' +
                '<th class="text-center">' +  data.value.timeSeries[0].values[0].value[i].value + '</th>' +
                '</tr>'
      )
    }
  }
  var phGraphParams =
  $(function () {
  var myChart = Highcharts.chart('ph-graph', {
      chart: {
          type: 'line'
      },
      title: {
          text: 'pH Change'
      },
      xAxis: {
          categories: phGraphAxes.dataX
      },
      yAxis: {
          title: {
              text: 'pH'
          }
      },
      series: [{
          name: 'pH',
          data: phGraphAxes.dataY
      }]
  });
  });
  $('#ph-graph-script').add(phGraphParams)
}

var printShowDissolvedOxygen = function(data){
  $('#show-dissolved-oxygen').html('');
  for(var i=0; i<data.value.timeSeries[0].values[0].value.length; i++){
    if (data.value.timeSeries[0].values[0].value[i].value == '-999999'){
      $('#show-dissolved-oxygen')
        .append('<tr class="dO">' +
                '<th>' + (i + 1) + '</th>' +
                '<th>' + new Date(data.value.timeSeries[0].values[0].dateTime).toUTCString() + '</th>' +
                '<th class="text-center">' + 'N/A' + '</th>' +
                '</tr>')
   }else{
     $('.show-third-row').css("display", "inline");
     oxygenGraphAxes.dataY.push(parseFloat(data.value.timeSeries[0].values[0].value[i].value));
     oxygenGraphAxes.dataX.push(new Date(data.value.timeSeries[0].values[0].value[i].dateTime).toUTCString());
      $('#show-dissolved-oxygen')
        .append('<tr class="dO">' +
                '<th>' + (i + 1) + '</th>' +
                '<th>' + new Date(data.value.timeSeries[0].values[0].value[i].dateTime).toUTCString() + '</th>' +
                '<th class="text-center">' +  data.value.timeSeries[0].values[0].value[i].value + '</th>' +
                '</tr>'
      )
    }
  }
  var oxygenGraphParams =
  $(function () {
  var myChart = Highcharts.chart('oxygen-graph', {
      chart: {
          type: 'line'
      },
      title: {
          text: 'Dissolved Oxygen Change'
      },
      xAxis: {
          categories: oxygenGraphAxes.dataX
      },
      yAxis: {
          title: {
              text: 'Dissolved Oxygen mg/L'
          }
      },
      series: [{
          name: 'Dissolved Oxygen',
          data: oxygenGraphAxes.dataY
      }]
  });
  });
  $('#oxygen-graph-script').add(oxygenGraphParams)
}

var printShowSpecificConductivity = function(data){
  $('#show-specific-conductivity').html('');
  for(var i=0; i<data.value.timeSeries[0].values[0].value.length; i++){
    if (data.value.timeSeries[0].values[0].value[i].value == '-999999'){
      $('#show-specific-conductivity')
        .append('<tr class="cond">' +
                '<th>' + (i + 1) + '</th>' +
                '<th>' + new Date(data.value.timeSeries[0].values[0].dateTime).toUTCString() + '</th>' +
                '<th class="text-center">' + 'N/A' + '</th>' +
                '</tr>')
   }else{
     conductivityGraphAxes.dataY.push(parseFloat(data.value.timeSeries[0].values[0].value[i].value));
     conductivityGraphAxes.dataX.push(new Date(data.value.timeSeries[0].values[0].value[i].dateTime).toUTCString());
     $('.show-fourth-row').css("display", "inline");
      $('#show-specific-conductivity')
        .append('<tr class="cond">' +
                '<th>' + (i + 1) + '</th>' +
                '<th>' + new Date(data.value.timeSeries[0].values[0].value[i].dateTime).toUTCString() + '</th>' +
                '<th class="text-center">' +  Math.floor(data.value.timeSeries[0].values[0].value[i].value) + '</th>' +
                '</tr>'
      )
    }
  }
  var conductivityGraphParams =
  $(function () {
  var myChart = Highcharts.chart('conductivity-graph', {
      chart: {
          type: 'line'
      },
      title: {
          text: 'Conductivity Change'
      },
      xAxis: {
          categories: conductivityGraphAxes.dataX
      },
      yAxis: {
          title: {
              text: 'Specific Conductance uS/cm @77f'
          }
      },
      series: [{
          name: 'Dissolved Oxygen',
          data: conductivityGraphAxes.dataY
      }]
  });
  });
  $('#conductivity-graph-script').add(oxygenGraphParams)
}

var printShowDischarge = function(data){
  $('#show-discharge').html('');
  for(var i=0; i<data.value.timeSeries[0].values[0].value.length; i++){
    if (data.value.timeSeries[0].values[0].value[i].value == '-999999'){
      $('#show-discharge')
        .append('<tr class="dis">' +
                '<th>' + (i + 1) + '</th>' +
                '<th>' + new Date(data.value.timeSeries[0].values[0].dateTime).toUTCString() + '</th>' +
                '<th class="text-center">' + 'N/A' + '</th>' +
                '</tr>')
   }else{
     dischargeGraphAxes.dataY.push(parseFloat(data.value.timeSeries[0].values[0].value[i].value));
     dischargeGraphAxes.dataX.push(new Date(data.value.timeSeries[0].values[0].value[i].dateTime).toUTCString());
     $('.show-fifth-row').css("display", "inline");
      $('#show-discharge')
        .append('<tr class="dis">' +
                '<th>' + (i + 1) + '</th>' +
                '<th>' + new Date(data.value.timeSeries[0].values[0].value[i].dateTime).toUTCString() + '</th>' +
                '<th class="text-center">' + data.value.timeSeries[0].values[0].value[i].value + '</th>' +
                '</tr>'
      )
    }
  }
  var dischargeGraphParams =
  $(function () {
  var myChart = Highcharts.chart('discharge-graph', {
      chart: {
          type: 'line'
      },
      title: {
          text: 'Discharge Change'
      },
      xAxis: {
          categories: dischargeGraphAxes.dataX
      },
      yAxis: {
          title: {
              text: 'Discharge cubic feet/second'
          }
      },
      series: [{
          name: 'Discharge',
          data: dischargeGraphAxes.dataY
      }]
  });
  });
  $('#discharge-graph-script').add(oxygenGraphParams)
}

var sortWaterParams = function(data){
  if(data.value.timeSeries["0"].variable.variableCode["0"].value == "00010"){
    printShowTemperature(data)
  }else if(data.value.timeSeries["0"].variable.variableCode["0"].value == "00400"){
    printShowPh(data)
  }else if(data.value.timeSeries["0"].variable.variableCode["0"].value == "00300"){
    printShowDissolvedOxygen(data)
  }else if(data.value.timeSeries["0"].variable.variableCode["0"].value == "00095"){
    printShowSpecificConductivity(data)
  }else if(data.value.timeSeries["0"].variable.variableCode["0"].value == "00060"){
    printShowDischarge(data)
  }
}

var connection = function(i) {
  return $.ajax({
    url: API + "nwis/iv/?format=json&sites=" + window.location.pathname.substr(10,19) + "&period=P" + $('#params-date').val() + "D" + "&parameterCd=" + waterParameters[i] + "&siteStatus=all",
    method:'GET'
  })
  .done(sortWaterParams)
  .fail(function(error){
    console.error(error)
});
}

var iterator = function(){
  tempGraphAxes.dataY = []
  tempGraphAxes.dataX = []
  phGraphAxes.dataY   = []
  phGraphAxes.dataX   = []
  oxygenGraphAxes.dataY   = []
  oxygenGraphAxes.dataX   = []
  conductivityGraphAxes.dataY   = []
  conductivityGraphAxes.dataX   = []
  dischargeGraphAxes.dataY   = []
  dischargeGraphAxes.dataX   = []

  for(var i=0; i < waterParametersLength; i++){
    connection(i)
  }
}

var waterParameters = ["00010","00400","00300","00095","00060"];
var waterParametersLength = waterParameters.length;

$(document).ready(function(){
  if(window.location.pathname.substr(0,10) == "/stations/"){
    iterator()
  };

  $('#date-search').on('submit', iterator)

});
