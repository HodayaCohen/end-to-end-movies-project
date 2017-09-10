$(document).ready(function() {
    "use static";

    $('#submit').click(function() {
        name = $('#name').val();
        var dirercotr = new DirectorModule();
        dirercotr.createDirector(name);

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
                if (name)
                    data.name = name;

                sendAJAX("POST", customerApiUrl, data, 'Director', 'created');
                // $.ajax({
                //     type: "POST",
                //     url: "../../Back/api/api.php",
                //     data: { arraydata: data },
                //     success: function(data) {
                //             callback(data, 'created');
                //         }

                // });
            },
            getCustomer: function(id, callback) {
                var data = {
                    ctrl: customerApiMethod
                };
                if (id)
                    data.id = id;

                jQuery.ajax({
                    url: customerApiUrl,
                    data: data,
                    type: 'GET',
                    success: function(result) {

                        this.callback(result);
                    }
                });
            },
            deleteCustomer: function() {
                jQuery.ajax({
                    url: '/api/api.php',
                    data: {
                        ctrl: customerApiMethod
                    },
                    type: 'DELETE',
                    success: function(result) {
                        console.log(result);
                    }
                });
            }
        }

    }




});