


// getting data from wikipedia

function ajaxCall(){


$.ajax({
	url:'https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=' + $('#search').val(),
	type: 'GET',
	dataType: 'jsonp',
	success:function(data){
		console.log(data)

		$('#update').empty();

		var data = JSON.stringify(data);

		data = JSON.parse(data);

		//loop through data and output

		var output = '';

		data.query.search.forEach( function(data) {
			// statements

			var title = "<h2>" + data.title + "</h2>" + "<br>";

			var snippet = "<p>" + data.snippet + "</p>" ;

			var url = '<a href="https://en.wikipedia.org/wiki/' + data.title + '" target="_blank">';

			var endUrl = '</a>';

		 output += url + title + endUrl + snippet + '<hr>';

		});

		$("#update").append(output);

		


	}
});

}


// getting random article

function randomFunction(){

$('#update').empty();

$('#search').empty();

$('iframe').attr('src','https://en.wikipedia.org/wiki/Special:Random');

}

// the dom

$(document).ready(function(){

	$('#search').focus();
	$('#search').off('keyup');
	$('#search').on('keyup', function(){
		ajaxCall();

		$('iframe').attr('src','');

	});


	//show random wiki article

	$('#random').on('click', function(){

		randomFunction();

		$(this).text("Show me another article").addClass('btn-danger');

	});

	

});