from flask import Flask, redirect, url_for, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('jeju.html')

@app.route('/jeju.quiz')
def quiz():
    return render_template('jeju_quiz.html')

@app.route('/jeju.qgis')
def qgis():
    return render_template('jeju_qgis.html')

if __name__ == '__main__':
    app. run ('0.0.0.0', port=5000, debug=True)