from flask import Flask, render_template, jsonify
from flask_cors import CORS
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from models import Base, Food
from config import Config

app = Flask(__name__)
CORS(app)

# Set up database connection
engine = create_engine(Config.SQLALCHEMY_DATABASE_URI)
Session = sessionmaker(bind=engine)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/api/foods")
def list_foods():
    session = Session()
    try:
        foods = session.query(Food).all()
        return jsonify([{
            'id': food.id,
            'name': food.name,
            'carbon_footprint': food.carbon_footprint,
            'sources': food.sources
        } for food in foods])
    finally:
        session.close()

if __name__ == "__main__":
    app.run(debug=True)