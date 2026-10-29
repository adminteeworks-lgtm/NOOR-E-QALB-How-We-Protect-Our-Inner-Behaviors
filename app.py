# NOOR-E-QALB - How We Protect Our Inner Behaviors
# Backend: Python Flask Logic - 4 Languages Connected
from flask import Flask
app = Flask(__name__)

@app.route('/')
def home():
    return "NOOR-E-QALB Backend Connected: HTML+CSS+JS+Python All Working!"

@app.route('/protect')
def protect_inner():
    # Inner Behavior Protection Logic
    response = {
        "message": "Dil Mehfooz Ho Gaya!",
        "status": "protected",
        "technique": "Positive Self Talk + Dua"
    }
    return response

if __name__ == '__main__':
    app.run(debug=True)
