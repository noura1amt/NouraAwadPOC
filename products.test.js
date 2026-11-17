const request = require("supertest");
const app = require("../server/app");

describe("Food API Endpoints", () => {
  /**
   * Test GET /foods route
   * Verifies 200 status code, JSON response, and expected mock data structure.
   */
  test("GET /foods should return 200 and an array of 5 food items", async () => {
    const response = await request(app).get("/foods");

    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBe(5);
    expect(response.body[0]).toHaveProperty("name");
    expect(response.body[0]).toHaveProperty("price");
  });

  /**
   * Test 404 handling for undefined routes
   */
  test("GET /unknown-route should return 404", async () => {
    const response = await request(app).get("/unknown-route");

    expect(response.statusCode).toBe(404);
    expect(response.body).toHaveProperty("error", "Route not found");
  });
});