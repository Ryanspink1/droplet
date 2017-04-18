var API = 'https://waterservices.usgs.gov/'

var printEntries = function(data) {
  // debugger;
  $('#entries').html('');
  for (var i=0; i<data.value.timeSeries.length; i++) {
    if (data.value.timeSeries[i].values[0].value[0].value == '-999999') {
      $('#entries')
        .append('<tr class="entry">' +
                '<th>' + (i + 1) + '</th>' +
                '<th>' + new Date(data.value.timeSeries[i].values[0].value[0].dateTime).toUTCString() + '</th>' +
                '<th>' + data.value.timeSeries[i].sourceInfo.siteName + '</th>' +
                '<th>' + 'N/A' + '</th>' +
                '/tr')
    }else{
      $('#entries')
        .append('<tr class="entry">' +
                '<th>' + (i + 1) + '</th>' +
                '<th>' + new Date(data.value.timeSeries[i].values[0].value[0].dateTime).toUTCString() + '</th>' +
                '<th>' + data.value.timeSeries[i].sourceInfo.siteName + '</th>' +
                '<th>' + Math.floor(data.value.timeSeries[i].values[0].value[0].value * 9/5 + 32) + '</th>' +
                '/tr')
    }
  }
}

var searchUSGS = function() {
  return $.ajax({
    url: API + "nwis/iv/?format=json&stateCd=" + $('#dropdown').val() + "&parameterCd=00010,00400&siteStatus=all",
    method:'GET'
  })
  .done(printEntries)
  .fail(function(error){
    console.error(error)
});
}




$(document).ready(function(){
  // #tabs for CRUD actions activated
  $('#search').on('submit', searchUSGS);
  // getAllPosts();

});
