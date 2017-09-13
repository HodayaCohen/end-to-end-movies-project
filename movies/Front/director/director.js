"use static";

$(document).ready(function() {

    $('#submit').click(function() {
        var value = $('#submit').val();
        var dirercotr = new DirectorModule();
        let name;
        let valResult;
        let id;
        let valid;

        switch (value) {
            case 'create':
                name = $('#name').val();
                valResult = validate.ValidateName(name);
                if (valResult == true) {
                    dirercotr.createDirector(name);
                }
                break;

            case 'get-all':
                dirercotr.GetAllDirectors();
                break;

            case 'update':
                id = $('#id').val();
                valid = validate.ValidateId(id);
                name = $('#name').val();
                valResult = validate.ValidateName(name);
                if (valResult == true && valid == true) {
                    dirercotr.UpdateDirectors(id, name);
                }
                break;

            case 'delete':
                id = $('#id').val();
                valid = validate.ValidateId(id);
                if (valid == true) {
                    dirercotr.deleteDirector(id);
                    break;
                }

        }

    });

    $('#id').change(function() {
        let id = $('#id').val();
        let valid = validate.ValidateId(id);
        if (valid == true) {
            var dirercotr = new DirectorModule();
            dirercotr.CheckIfIdExist(id);
        }

    });



    // director module
    var DirectorModule = function() {
        let DirectorApiMethod = 'Director';
        let customerApiUrl = "../../Back/api/api.php";
        var data = {
            ctrl: DirectorApiMethod
        };

        return {

            createDirector: function(name) {
                if (name) {
                    data.name = name;
                    data.create = 'create';
                    sendAJAX("POST", customerApiUrl, data, 'create');

                }
            },

            CheckIfIdExist: function(id) {
                if (id) {
                    data.id = id;
                    sendAJAX("GET", customerApiUrl, data, 'find_id');
                }
            },

            GetAllDirectors: function() {
                sendAJAX("GET", customerApiUrl, data, 'getall');

            },

            UpdateDirectors: function(id, name) {
                data.id = id;
                data.name = name;
                sendAJAX("PUT", customerApiUrl, data, 'update');
            },

            deleteDirector: function(id) {
                if (id) {
                    data.id = id;
                    sendAJAX("DELETE", customerApiUrl, data, 'delete');
                }
            }
        }

    }




});