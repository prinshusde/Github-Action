import test from "node:test";
import assert from "node:assert";
import request from "supertest";
import app from "../app.js";

test("GET /hello returns Hello message", async () => {
  const response = await request(app).get("/hello");

  assert.strictEqual(response.statusCode, 200);
  assert.deepStrictEqual(response.body, {
    success: true,
    message: "Hello from github action",
  });
});