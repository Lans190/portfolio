from flask import Flask, render_template
from flask import Flask, render_template, request


app = Flask(__name__)

@app.route('/')
def home():
    return render_template('Portfolio1/home.html')

@app.route('/certifications')
def certifications():
    return render_template('certifications.html')

@app.route('/cv')
def cv():
    return render_template('cv.html')

@app.route('/parcours')
def parcours():
    return render_template('parcours.html')



@app.route('/contact')
def contact():
    return render_template('contact.html')


if __name__ == '__main__':
    app.run(debug=True)
