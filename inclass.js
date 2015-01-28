$(document).ready(onReady); 

	function onReady() {
	$('#submitbutton').on('click', onSubmitButtonClick);



	function onSubmitButtonClick() {

		$.post(
		'http://tiny-pizza-server.herokuapp.com/collections/austinfe',
		{
			message: $('#search-box').val(),
			
			name: 'JacobRyan'
		},
		function(message) {
			console.log(message)
			// render(messages);
		},
		'json'
	);

		

}
}

	// var getMessages = function() {
	// 	$.get(
	// 		'http://tiny-pizza-server.herokuapp.com/collections/austinfe',
	// 		function(messages) {
	// 			render(messages);
	// 		},
	// 		'json'
	// 	);
	// };

	
// 	var inputMessage = function(message) {
	
// }

// }

