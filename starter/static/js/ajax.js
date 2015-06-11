
        $(function() {var availableTags = ["Child's Pose","Pompeii","3 Days To Kill","In Secret","Barefoot","Omar","Non-Stop","Son Of God","The Wind Rises","Welcome to Yesterday","Stalingrad","Repentance","The Lunchbox"];
        $( "#search" ).autocomplete({source: availableTags});});
/*$(function(){
  var tags = [
    { value: "Child's Pose", data: '' },
    { value: "Pompeii", data: '' },
    { value: "3 Days To Kill", data: '' },
    { value: "In Secret", data: '' },
    { value: "Barefoot", data: '' },
    { value: "Omar", data: '' },
    { value: "Non-Stop", data: '' },
    { value: "Son Of God", data: '' },
    { value: "The Wind Rises", data: '' },
    { value: "Welcome to Yesterday", data: '' },
    { value: "Stalingrad", data: '' },
    { value: "Repentance", data: '' },
    { value: "The Lunchbox", data: '' },

    
  ];
  
  // setup autocomplete function pulling from currencies[] array
  $('#autocomplete').autocomplete({
    lookup: tags,
    onSelect: function (suggestion) {
      var thehtml = '<strong>Movie:</strong> ' + suggestion.value + ' <br> <strong>Symbol:</strong> ' + suggestion.data;
      $('#outputcontent').html(thehtml);
    }
  });
  

});
*/



//$function(){$('#search').keyup(function() {$.ajax({type: "POST",url: "",data: {'search_text' : $('#search').val(),'csrfmiddlewaretoken' : $("input[name=csrfmiddlewaretoken]").val()},success: searchSuccess,dataType: 'html'});});});

//function searchSuccess(data, textStatus, jqXHR)
//{$('#search-results').html(data);}

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

