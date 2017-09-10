// $(document).ready(function() {

"use static";
var callback = function callback(modelname, data, calltype) {
    if (JSON.parse(data) == true) {
        $('#result').html(modelname + " was " + calltype + " sucssesfuly.");
    } else { $('#result').html("error"); }

}

// });