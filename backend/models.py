from sqlalchemy import create_engine, Column, Integer, String, Float, JSON, ForeignKey, Table
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship

Base = declarative_base()

class Food(Base):
    __tablename__ = 'foods'
    
    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    category = Column(String)
    
    # Environmental Impact Scores
    environmental_scores = Column(JSON, default={
        'carbon_footprint': None,
        'water_usage': None,
        'land_use': None,
        'biodiversity_impact': None
    })
    
    # Ethical Scores
    ethical_scores = Column(JSON, default={
        'animal_welfare': None,
        'labor_conditions': None,
        'fair_trade': None
    })
    
    # Dietary Information
    dietary_flags = Column(JSON, default={
        'vegan': False,
        'vegetarian': False,
        'halal': False,
        'kosher': False,
        'gluten_free': False
    })
    
    # Nutritional Information
    nutrition = Column(JSON, default={
        'calories': None,
        'protein': None,
        'carbs': None,
        'fats': None,
        'vitamins': {}
    })
    
    # Source Citations
    sources = Column(JSON, default=[])

class User(Base):
    __tablename__ = 'users'
    
    id = Column(Integer, primary_key=True)
    email = Column(String, unique=True, nullable=False)
    password_hash = Column(String, nullable=False)
    
    # User Preferences
    preferences = Column(JSON, default={
        'environmental_priority': 50,
        'animal_welfare_priority': 50,
        'labor_conditions_priority': 50,
        'religious_restrictions': []
    })
    
    # Dietary Restrictions
    dietary_restrictions = Column(JSON, default=[])
    
    # Saved meal plans and shopping lists can be added later
    
    def __repr__(self):
        return f'<User {self.email}>'

# We can add Recipe and MealPlan models later as needed 