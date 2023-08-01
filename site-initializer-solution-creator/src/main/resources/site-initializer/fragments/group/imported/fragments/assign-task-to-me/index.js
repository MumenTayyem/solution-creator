$(".task-button .assign-to-me").off('click').on('click', function(e){  

	  var selectedObjectId = $(".task-button").attr('id');
    submitTaskUpdate(selectedObjectId);
});

function submitTaskUpdate(objectId){
    
    Liferay.Util.fetch(
        "/o/c/tickets/"+objectId+"/object-actions/assignTicketToMe?p_auth="+Liferay.authToken, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json; charset=utf8'
            },
            method: 'PUT'
        }
    )
    .then((response) => {
        //console.log("Return1");
        //console.log(data);
        location.reload();
    })
    .then((data) => {
        //console.log("Return2");
        //console.log(data);
        location.reload();
    })
}