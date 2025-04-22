from flask import Flask, render_template, jsonify
from flask_cors import CORS
import data

app = Flask(__name__)
CORS(app)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/api/foods")
def list_foods():
    return jsonify(data.foods)

if __name__ == "__main__":
    app.run(debug=True)