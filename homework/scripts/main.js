$(document).ready(onReady);

function onReady() {
	$('#searchbutton').on('click', onSearchButtonClick);

	
	function onSearchButtonClick() {
		imdbSearch($('#search-box').val());
		$('#results tr.created').html('');
	}	

	function imdbSearch(query)	{
		$.get(
			'http://www.omdbapi.com',
			{s: query,
				},
			onSearchResults, 
			'json'
			);
	}

	function onSearchResults(data) {
		console.log(data);
		var i = 0;
		var rowTemplate = _.template('<tr class="created"> <td> <%= Title %> </td> <td><%= Year %> </td> <td> <%= Type %> </td> </tr>');
		for(var key in data.Search)	{ 
			
			i++;

			$('#results').append(rowTemplate(data.Search[i]));

			$('.created').on('click', addtoWatchList);
				
				function addtoWatchList() {
					
					$(this).appendTo($('#watchlist'));
					console.log('you click me');
					

					

						

					$(this).on('click', addtoWatchedList);
					$(this).off('click', addtoWatchList);

						function addtoWatchedList() {
						
						$(this).appendTo($('#watched'));		
						console.log('you clicked me');
				}	

			}

					
		}


	}	



}


	// 	$.post(
	// 	'http://tiny-pizza-server.herokuapp.com/collections/burkyburk',
	// 	{
	// 		message: 'hello!',
	// 		name: 'A-Aron'
	// 	},
	// 	function(message) {
	// 		console.log(message);
	// 		// render(messages);
	// 	},
	// 	'json'
	// );




		
