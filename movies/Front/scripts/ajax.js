// $(document).ready(function() {
//     "use static";

function sendAJAX(method, url, data, modelname, calltype) {
    $.ajax({
        type: method,
        url: url,
        data: { arraydata: data },
        success: function(response_text) {
            callback(modelname, response_text, method);
        }
    });
}
// });