from flask import *

main = Blueprint('main', __name__, template_folder='views')

@main.route('/')
def main_route():
	try:
		return render_template("main.html", title = "Main" )
	except:
		abort(404)