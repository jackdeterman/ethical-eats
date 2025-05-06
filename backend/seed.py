from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from models import Base, Food
from config import Config

def seed_database():
    # Create database engine and session
    engine = create_engine(Config.SQLALCHEMY_DATABASE_URI)
    Session = sessionmaker(bind=engine)
    session = Session()

    try:
        # Sample food data
        foods = [
            Food(
                name="Beef (per 100g)",
                carbon_footprint=27.0,  # kg CO2e per kg
                sources=["Our World in Data: Environmental Impacts of Food Production"]
            ),
            Food(
                name="Chicken (per 100g)",
                carbon_footprint=6.9,
                sources=["Our World in Data: Environmental Impacts of Food Production"]
            ),
            Food(
                name="Tofu (per 100g)",
                carbon_footprint=2.0,
                sources=["Our World in Data: Environmental Impacts of Food Production"]
            ),
            Food(
                name="Rice (per 100g)",
                carbon_footprint=2.7,
                sources=["Our World in Data: Environmental Impacts of Food Production"]
            )
        ]

        # Add foods to database
        session.add_all(foods)
        session.commit()
        print("Database seeded successfully!")

    except Exception as e:
        print(f"Error seeding database: {e}")
        session.rollback()
    finally:
        session.close()

if __name__ == "__main__":
    seed_database() 