var API = 'https://waterservices.usgs.gov/'

var printTemperature = function(data) {
  $('#entries').html('');
  $('#dynamic-table-head')[0]
    .innerHTML = "";
  $('#dynamic-table-head')[0]
    .innerHTML = "Temperature";
  for (var i=0; i<data.value.timeSeries.length; i++) {
    if (data.value.timeSeries[i].values[0].value[0].value == '-999999') {
      $('#entries')
        .append('<tr class="entry">' +
                '<th>' + (i + 1) + '</th>' +
                '<th>' + new Date(data.value.timeSeries[i].values[0].value[0].dateTime).toUTCString() + '</th>' +
                // '<th>' + data.value.timeSeries[i].sourceInfo.siteName + '</th>' +
                '<th>' + '<a href=/stations/'+data.value.timeSeries[1].sourceInfo.siteCode[0].value+ '>' + data.value.timeSeries[1].sourceInfo.siteName + '</a>' + '</th>' +
                '<th>' + 'N/A' + '</th>' +
                '</tr>')
    }else{
      $('#entries')
        .append('<tr class="entry">' +
                '<th>' + (i + 1) + '</th>' +
                '<th>' + new Date(data.value.timeSeries[i].values[0].value[0].dateTime).toUTCString() + '</th>' +
                '<th>' + '<a href=/stations/'+data.value.timeSeries[i].sourceInfo.siteCode[0].value+ '>' + data.value.timeSeries[i].sourceInfo.siteName + '</a>' + '</th>' +
                // '<th>' + data.value.timeSeries[i].sourceInfo.siteName + '</th>' +
                '<th>' + Math.floor(data.value.timeSeries[i].values[0].value[0].value * 9/5 + 32) + '</th>' +
                '/tr')
    }
  }
}
var printPh = function(data) {
  $('#entries').html('');
  $('#dynamic-table-head')[0]
    .innerHTML = "";
  $('#dynamic-table-head')[0]
    .innerHTML = "pH";
  for (var i=0; i<data.value.timeSeries.length; i++) {
    if (data.value.timeSeries[i].values[0].value[0].value == '-999999') {
      $('#entries')
        .append('<tr class="entry">' +
                '<th>' + (i + 1) + '</th>' +
                '<th>' + new Date(data.value.timeSeries[i].values[0].value[0].dateTime).toUTCString() + '</th>' +
                '<th>' + '<a href=/stations/'+data.value.timeSeries[i].sourceInfo.siteCode[0].value+ '>' + data.value.timeSeries[i].sourceInfo.siteName + '</a>' + '</th>' +
                // '<th>' + data.value.timeSeries[i].sourceInfo.siteName + '</th>' +
                '<th>' + 'N/A' + '</th>' +
                '/tr')
    }else{
      $('#entries')
        .append('<tr class="entry">' +
                '<th>' + (i + 1) + '</th>' +
                '<th>' + new Date(data.value.timeSeries[i].values[0].value[0].dateTime).toUTCString() + '</th>' +
                '<th>' + '<a href=/stations/'+data.value.timeSeries[i].sourceInfo.siteCode[0].value+ '>' + data.value.timeSeries[i].sourceInfo.siteName + '</a>' + '</th>' +
                // '<th>' + data.value.timeSeries[i].sourceInfo.siteName + '</th>' +
                '<th>' + data.value.timeSeries[i].values[0].value[0].value + '</th>' +
                '/tr')
    }
  }
}
var printDissolvedOxygen = function(data) {
  $('#entries').html('');
  $('#dynamic-table-head')[0]
    .innerHTML = "";
  $('#dynamic-table-head')[0]
    .innerHTML = "Dissolved Oxygen mg/L";
  for (var i=0; i<data.value.timeSeries.length; i++) {
    if (data.value.timeSeries[i].values[0].value[0].value == '-999999') {
      $('#entries')
        .append('<tr class="entry">' +
                '<th>' + (i + 1) + '</th>' +
                '<th>' + new Date(data.value.timeSeries[i].values[0].value[0].dateTime).toUTCString() + '</th>' +
                '<th>' + '<a href=/stations/'+data.value.timeSeries[i].sourceInfo.siteCode[0].value+ '>' + data.value.timeSeries[i].sourceInfo.siteName + '</a>' + '</th>' +
                // '<th>' + data.value.timeSeries[i].sourceInfo.siteName + '</th>' +
                '<th>' + 'N/A' + '</th>' +
                '/tr')
    }else{
      $('#entries')
        .append('<tr class="entry">' +
                '<th>' + (i + 1) + '</th>' +
                '<th>' + new Date(data.value.timeSeries[i].values[0].value[0].dateTime).toUTCString() + '</th>' +
                '<th>' + '<a href=/stations/'+data.value.timeSeries[i].sourceInfo.siteCode[0].value+ '>' + data.value.timeSeries[i].sourceInfo.siteName + '</a>' + '</th>' +
                // '<th>' + data.value.timeSeries[i].sourceInfo.siteName + '</th>' +
                '<th>' + data.value.timeSeries[i].values[0].value[0].value + '</th>' +
                '/tr')
    }
  }
}
var printSpecificConductance = function(data) {
  $('#entries').html('');
  $('#dynamic-table-head')[0]
    .innerHTML = "";
  $('#dynamic-table-head')[0]
    .innerHTML = "Specific Conductance uS/cm @77f";
  for (var i=0; i<data.value.timeSeries.length; i++) {
    if (data.value.timeSeries[i].values[0].value[0].value == '-999999') {
      $('#entries')
        .append('<tr class="entry">' +
                '<th>' + (i + 1) + '</th>' +
                '<th>' + new Date(data.value.timeSeries[i].values[0].value[0].dateTime).toUTCString() + '</th>' +
                '<th>' + '<a href=/stations/'+data.value.timeSeries[i].sourceInfo.siteCode[0].value+ '>' + data.value.timeSeries[i].sourceInfo.siteName + '</a>' + '</th>' +
                // '<th>' + data.value.timeSeries[i].sourceInfo.siteName + '</th>' +
                '<th>' + 'N/A' + '</th>' +
                '/tr')
    }else{
      $('#entries')
        .append('<tr class="entry">' +
                '<th>' + (i + 1) + '</th>' +
                '<th>' + new Date(data.value.timeSeries[i].values[0].value[0].dateTime).toUTCString() + '</th>' +
                '<th>' + '<a href=/stations/'+data.value.timeSeries[i].sourceInfo.siteCode[0].value+ '>' + data.value.timeSeries[i].sourceInfo.siteName + '</a>' + '</th>' +
                // '<th>' + data.value.timeSeries[i].sourceInfo.siteName + '</th>' +
                '<th>' + data.value.timeSeries[i].values[0].value[0].value + '</th>' +
                '/tr')
    }
  }
}
var printDischarge = function(data) {
  $('#entries').html('');
  $('#dynamic-table-head')[0]
    .innerHTML = "";
  $('#dynamic-table-head')[0]
    .innerHTML = "Discharge, cubic feet per second";
  for (var i=0; i<data.value.timeSeries.length; i++) {
    if (data.value.timeSeries[i].values[0].value[0].value == '-999999') {
      $('#entries')
        .append('<tr class="entry">' +
                '<th>' + (i + 1) + '</th>' +
                '<th>' + new Date(data.value.timeSeries[i].values[0].value[0].dateTime).toUTCString() + '</th>' +
                '<th>' + '<a href=/stations/'+data.value.timeSeries[i].sourceInfo.siteCode[0].value+ '>' + data.value.timeSeries[i].sourceInfo.siteName + '</a>' + '</th>' +
                // '<th>' + data.value.timeSeries[i].sourceInfo.siteName + '</th>' +
                '<th>' + 'N/A' + '</th>' +
                '/tr')
    }else{
      $('#entries')
        .append('<tr class="entry">' +
                '<th>' + (i + 1) + '</th>' +
                '<th>' + new Date(data.value.timeSeries[i].values[0].value[0].dateTime).toUTCString() + '</th>' +
                '<th>' + '<a href=/stations/'+data.value.timeSeries[i].sourceInfo.siteCode[0].value+ '>' + data.value.timeSeries[i].sourceInfo.siteName + '</a>' + '</th>' +
                // '<th>' + data.value.timeSeries[i].sourceInfo.siteName + '</th>' +
                '<th>' + data.value.timeSeries[i].values[0].value[0].value + '</th>' +
                '/tr')
    }
  }
}

var sortOutput = function(data) {
  if ($('#params-dropdown').val() == "00010") {
    printTemperature(data)
  }else if($('#params-dropdown').val() == "00400"){
    printPh(data)
  }else if($('#params-dropdown').val() == "00300"){
    printDissolvedOxygen(data)
  }else if ($('#params-dropdown').val() == "00095"){
    printSpecificConductance(data)
  }else if ($('#params-dropdown').val() == "00060"){
    printDischarge(data)
  }
}

var searchUSGS = function() {
  return $.ajax({
    url: API + "nwis/iv/?format=json&stateCd=" + $('#state-dropdown').val() + "&parameterCd=" + $('#params-dropdown').val() + "&siteStatus=all",
    method:'GET'
  })
  .done(sortOutput)
  .fail(function(error){
    console.error(error)
});
}

var searchBySite = function() {
  return $.ajax({
    url: API + "nwis/iv/?format=json&stateCd=" + $('#state-dropdown').val() + "&parameterCd=" + $('#params-dropdown').val() + "&siteType=" + $('#site-type-dropdown').val() + "&siteStatus=all",
    method:'GET'
  })
  .done(sortOutput)
  .fail(function(error){
    console.error(error)
});
}

var sortParams = function(){
    if( $('#site-type-dropdown').val() == "ALL"){
      searchUSGS()
    }else{
      searchBySite()
    }
  }

$(document).ready(function(){
  $('#search').on('submit', sortParams)
});
