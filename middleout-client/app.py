
from flask import Flask, render_template, request, redirect, url_for,session
from datetime import timedelta
import os
import controllers

#path_prefix = "/z1gcpbq33di/pa3"
#api_path_prefix = "/z1gcpbq33di/pa3/api/v1"

app = Flask(__name__, template_folder='views')
app.config.from_object('config')

app.register_blueprint(controllers.main,url_prefix=path_prefix)



@app.errorhandler(404)
def page_not_found(e):
	return render_template('404.html', title ="Page Not Found"), 404

@app.errorhandler(401)
def bad_access(e):
	return render_template('401.html'), 401

@app.before_request
def make_session_permanent():
    session.permanent = True
    app.permanent_session_lifetime = timedelta(minutes=5)


# comment this out using a WSGI like gunicorn
# if you dont, gunicorn will ignore it anyway
if __name__ == '__main__':
    # listen on external IPs
    app.run(host='0.0.0.0', port=3000, debug=True)
