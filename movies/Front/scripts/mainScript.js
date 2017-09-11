// $(document).ready(function() {

// "use static";

function callback(response_text, calltype) {
    var respnse = JSON.parse(response_text);
    switch (calltype) {
        case 'create':
            wasDone(respnse, 'created');
            break;
        case 'getall':
            creaTable(respnse);
            break;
        case 'find_id':
            idtest(respnse);
            break;
        case 'delete':
            wasDone(respnse, 'deleted');
            break;
        case 'update':
            wasDone(respnse, 'updated');
            break;

        default:
            alert('Nobody Wins!');

    }

}

function wasDone(response_text, calltype) {
    if (JSON.parse(response_text) == true) {
        $('#result').html("your request was " + calltype + " sucssesfuly.");
    } else {
        $('#result').html("error");
    }

}

// function to create a table with all data
function creaTable(response_text) {
    document.getElementById('result').innerHTML = "";
    var array = response_text;
    var tableBody = document.getElementById('result');
    var tr = document.createElement('TR');
    tr.setAttribute("id", 'th');
    tableBody.appendChild(tr);
    var keys = Object.keys(array[0]);
    for (i = 0; i < keys.length; i++) {
        var th = document.createElement('TH');
        th.appendChild(document.createTextNode(keys[i]));
        document.getElementById('th').appendChild(th);
    }


    for (i = 0; i < array.length; i++) {
        var tr = document.createElement('TR');
        tr.setAttribute("id", i);
        tableBody.appendChild(tr);

        for (var prop in array[i]) {
            var td = document.createElement('TD');
            td.appendChild(document.createTextNode(array[i][prop]));
            document.getElementById(i).appendChild(td);
        }
    }

}

function idtest(response_text) {
    var check = response_text;
    if (check != true) {
        $("#id_error").html("this id doesn't exsist!");
        $("#hide").addClass("hide");
    } else {
        $("#id_error").html("");
        $("#hide").removeClass("hide");
    }
}

// });