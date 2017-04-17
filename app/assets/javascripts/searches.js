var API = 'https://waterservices.usgs.gov/'

var printEntries = function(data) {
  // debugger;
  $('#entries').html('');
  for (var i=0; i<data.value.timeSeries.length; i++) {
    $('#entries')
      .append('<tr class="entry">' +
      '<th>' + data.value.timeSeries[i].values[0].value[0].value[0].dateTime + '</th>' +

      '<th>' + data.value.timeSeries[i].sourceInfo.siteName + '</th>' +

      '<th>' + data.value.timeSeries[i].values[0].value[0].value + '</th>' + '/tr')
      debugger;
  }
}


var searchUSGS = function() {
  return $.ajax({
    url: API + "nwis/iv/?format=json&stateCd=co&parameterCd=00010,00400&siteStatus=all",
    method:'GET'
  })
  .done(printEntries)
  .fail(function(error){
    console.erroR(error)
});
}





$(document).ready(function(){
  // #tabs for CRUD actions activated
  $('#search').on('submit', searchUSGS);
  // getAllPosts();

});
