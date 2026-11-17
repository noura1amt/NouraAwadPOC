/**
 * Singleton class representing an in-memory mock database for food items.
 * Ensures only one instance of the data store exists across the application.
 */
class FoodDatabase {
  constructor() {
    if (FoodDatabase.instance) {
      return FoodDatabase.instance;
    }

    // Initialize mock database with five food items, each with a price
    this.foods = [
      { id: 1, name: "Margherita Pizza", price: 14.99 },
      { id: 2, name: "Chicken Shawarma Wrap", price: 11.50 },
      { id: 3, name: "Caesar Salad", price: 9.75 },
      { id: 4, name: "Cheeseburger & Fries", price: 13.25 },
      { id: 5, name: "Mango Smoothie", price: 6.50 }
    ];

    FoodDatabase.instance = this;
  }

  /**
   * Retrieves all food items stored in the mock database.
   * @returns {Array<Object>} List of food items
   */
  getAll() {
    console.log("[FoodDatabase] Fetching all food items...");
    return this.foods;
  }
}

const instance = new FoodDatabase();
Object.freeze(instance);

module.exports = instance;