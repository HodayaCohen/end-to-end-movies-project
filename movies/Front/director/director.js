$(document).ready(function() {

    "use static";

    $('#submit').click(function() {
        var value = $('#submit').val();
        var dirercotr = new DirectorModule();
        switch (value) {
            case 'create':
                var name = $('#name').val();
                dirercotr.createDirector(name);
                break;
            case 'get-all':
                dirercotr.GetAllDirectors();
                break;
            case 'update':
                var id = $('#id').val();
                var name = $('#name').val();
                dirercotr.UpdateDirectors(id, name);
                break;

            case 'delete':
                var send_id = $('#id').val();
                dirercotr.deleteDirector(send_id);
                break;

        }
    });

    $('#id').change(function() {
        var id = $('#id').val();
        var dirercotr = new DirectorModule();
        dirercotr.CheckIfIdExist(id);
    });




    // director module
    var DirectorModule = function() {
        let DirectorApiMethod = 'Director';
        let customerApiUrl = "../../Back/api/api.php";
        var data = {
            ctrl: DirectorApiMethod
        };

        // director constructor
        function Director(id, name) {
            this.id = id;
            this.name = name;
        }

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
                data.update = 'update';
                sendAJAX("PUT", customerApiUrl, data, 'update');
            },

            deleteDirector: function(id) {
                if (id) {
                    data.id = id;
                    // data.method = 'DELETE';
                    sendAJAX("DELETE", customerApiUrl, data, 'delete');
                }
            }
        }

    }




});