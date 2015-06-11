from django.http import HttpResponse
from django.shortcuts import render
from django.shortcuts import render_to_response
from django.views.generic.base import TemplateView
from django.template import Context
from django.template.loader import get_template
import json


def landing_page(request):
#return render(request, "starter/landing_page.html")
	movie_file = open('starter/data/movies.json').read() #opens the json file and saves the raw contents
	movie_data = json.loads(movie_file)
	return render_to_response("starter/landing_page.html", {"js": movie_data})

#def  movies(request):
#	return render_to_response('movies.html', {'movies':})

def movie(request, movie_id=1):
	movie_file = open('starter/data/movies.json').read() # object.get(movie_id=movie_id opens the json file and saves the raw contents
	movie_data = json.loads(movie_file)
	#dt = datetime.datetime.strptime(movie.release_dates.theater, "%Y-%m-%d")
	#d.strftime("%A %d. %B %Y")
	return render_to_response("starter/movie.html", {"js": movie_data,"movie_id": movie_id})



