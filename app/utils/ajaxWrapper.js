var $ = require('jQuery');

var ajaxWrapper = function(url, type, data, callback) {
	$.ajax({
    url: url,
    type: type,
    data: data,
    success: callback,
		error: function(request, status, errorThrow) {
			console.log('API call error');	
		}
	});
}

module.exports = ajaxWrapper;