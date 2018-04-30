
function random() {
    return Math.floor((Math.random() * 20) + 1);
}

function showCat() {
    //add a cat to the page
}


$(document).ready(function() {

    $('.btn').click(function(){
        $('#root').append('<img width="100px" src="assets/'+ random() + '.png " />');
    })
});