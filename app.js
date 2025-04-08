import { Hono } from "jsr:@hono/hono@4.6.5";
import { cors } from "jsr:@hono/hono@4.6.5/cors";
const app = new Hono();

app.use("/*", cors());
app.get("/", (c) => c.text("Hello world!"));

export default app;
