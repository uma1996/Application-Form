function addDetails()
{
    console.log("form");
    if(validateFirstName())
        {
            if(validateFullName())
                {
                    return true;
                }
                return false;
        }
}

function validateFirstName()
{
    const data = $('#FirstName').show();
    data : JSON.stringify('data');
    success:onpostsuccess();
    

}



const onpostsuccess=(data) => {
    console.log("posting to firebase");
    console.log(data);
}

$(document).ready(function() 
{
$('#FirstName').on('input', function() {
	var input=$(this);
	var is_name=input.val();
	if(is_name){input.removeClass("invalid").addClass("valid");}
	else{input.removeClass("valid").addClass("invalid");}
});
});