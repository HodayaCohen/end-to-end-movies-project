var validate = {
    // clears the error when user types a new value
    emptyError: $("input").change(function() {
        $("#result").html("");
    }),

    NotEmpty: function(inputtxt) {
        if (inputtxt == "" || inputtxt == "undefined") {
            return false;
        }
    },

    // Validation for name input
    ValidateName: function(name) {
        var pattern = /[0-9a-zA-Zא-ת\s!?=+-.,']+$/m;
        if (this.NotEmpty(name) == false) {
            alert("You must fill all input fields!");

        } else if (!pattern.test(name)) {
            alert("The field contains invalid characters, only letters or numbers must be entered!");

        } else {
            return true;
        }
    },

    ValidateId: function(id) {
        if (this.NotEmpty(id) == false) {
            alert("You must fill all input fields!");
        } else if (isNaN(id)) {
            alert("the id can contian only numbers!");
        } else {
            return true;
        }
    },
    isSelectes: function(selectid) {
        var selectedid = document.getElementById(selectid);
        var selectedValue = selectedid.options[selectedid.selectedIndex].value;
        if (selectedValue == "Select a director") {
            alert("Please select a director");
        } else {
            return true;

        }
    }

}