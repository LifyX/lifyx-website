import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";

const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-083cfbbf/health", (c) => {
  return c.json({ status: "ok" });
});

// Contact form submission
app.post("/make-server-083cfbbf/contact", async (c) => {
  try {
    const data = await c.req.json();
    const timestamp = new Date().toISOString();
    const key = `contact:${timestamp}:${data.email || 'unknown'}`;
    
    // Store in KV store
    await kv.set(key, data);
    
    return c.json({ success: true, message: "Contact form submitted successfully" });
  } catch (error) {
    console.error("Error processing contact form:", error);
    return c.json({ success: false, message: "Failed to process submission" }, 500);
  }
});

Deno.serve(app.fetch);