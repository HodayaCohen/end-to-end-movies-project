"use static";


$(document).ready(function() {

    $('#submit').click(function() {
        var value = $('#submit').val();
        var Movies = new MovieModule();
        let name;
        let valResult;
        let id;
        let valid;
        let d_id;
        let vald_id;

        switch (value) {
            case 'create':
                name = $('#name').val();
                d_id = $("#select_id option:selected").val();
                valResult = validate.ValidateName(name);
                vald_id = validate.isSelectes("select_id");

                if (valResult == true && vald_id == true) {
                    Movies.createMovies(name, d_id);
                }
                break;

            case 'get-all':
                Movies.GetAllMovies();
                break;

            case 'update':
                id = $('#id').val();
                valid = validate.ValidateId(id);
                name = $('#name').val();
                valResult = validate.ValidateName(name);
                d_id = $("#select_id option:selected").val();
                vald_id = validate.isSelectes("select_id");

                if (valResult == true && valid == true && vald_id == true) {
                    Movies.UpdateMovies(id, name, d_id);
                }
                break;

            case 'delete':
                id = $('#id').val();
                valid = validate.ValidateId(id);
                if (valid == true) {
                    Movies.deleteMovie(id);
                    break;
                }

        }

    });

    $('#id').change(function() {
        let id = $('#id').val();
        let valid = validate.ValidateId(id);
        if (valid == true) {
            var Movies = new MovieModule();
            Movies.CheckIfIdExist(id);
        }

    });



    // director module
    var MovieModule = function() {
        let MoviesApiMethod = 'Movie';
        let MoviesApiUrl = "../../Back/api/api.php";
        var data = {
            ctrl: MoviesApiMethod
        };

        return {

            createMovies: function(name, d_id) {
                data.name = name;
                data.d_id = d_id;
                sendAJAX("POST", MoviesApiUrl, data, 'create');


            },

            CheckIfIdExist: function(id) {
                data.id = id;
                sendAJAX("GET", MoviesApiUrl, data, 'find_id');

            },

            GetAllMovies: function() {
                sendAJAX("GET", MoviesApiUrl, data, 'getall');

            },

            UpdateMovies: function(id, name, d_id) {
                data.id = id;
                data.name = name;
                data.d_id = d_id;
                sendAJAX("PUT", MoviesApiUrl, data, 'update');
            },

            deleteMovie: function(id) {
                data.id = id;
                sendAJAX("DELETE", MoviesApiUrl, data, 'delete');

            }
        }

    }




});