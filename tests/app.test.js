const request = require("supertest");
const app = require("../src/app");

describe("CI/CD Application API Tests", () => {

    test("GET / should return application message", async () => {
        const response = await request(app).get("/");

        expect(response.statusCode).toBe(200);
        expect(response.body.message)
            .toBe("CI/CD Application Running");
    });

    test("GET /health should return healthy status", async () => {
        const response = await request(app).get("/health");

        expect(response.statusCode).toBe(200);
        expect(response.body.status).toBe("healthy");
    });

    test("GET /api/events should return events", async () => {
        const response = await request(app).get("/api/events");

        expect(response.statusCode).toBe(200);
        expect(response.body.length).toBe(2);
    });

});