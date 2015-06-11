$function(){
	$('#search').keyup(function() {
		$.ajax({
			type: "POST",
			url: "",
			data: {
				'search_text' : $('#search').val(),
				'csrfmiddlewaretoken' : $("input[name=csrfmiddlewaretoken]").val()
			},
			success: searchSuccess,
			dataType: 'html'
		});
	});
});

function searchSuccess(data, textStatus, jqXHR)
{
	$('#search-results').html(data);
}

def movie_search(request):
	if request.method == "POST":
		search_text = request.POST['search_text']
	else:
		search_text = ''
		movie_file = open('starter/data/movies.json').read() # object.get(movie_id=movie_id opens the json file and saves the raw contents
		movie_data = json.loads(movie_file)
		movie_result = []
		for text in movie_data["movies"]
			if search_text in text
			movie_result.extend(text)
	    return render_to_response('movie_search.html',{ 'movie_result' : movie_result,'js' :movie_data })	

