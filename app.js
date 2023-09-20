var input = "";
function displayVals() {
    $(".buttons").click(function() {
        var value = $(this).find('p').html();
        try {
            if (value === "=") {
            input = eval(input);
            $("input").val(input);
        }else if (value === "C") {
            input = "";
            $("input").val(input);
        } else if (value === "⌫") {
            input = input.slice(0 ,-1);
            $("input").val(input);
        } 
        else {
            input += value; 
            $("input").val(input);
            console.log(input);
        }
        } catch (error) {
            alert(error);
        }
        

    }); 
};
function operation() {}
displayVals();