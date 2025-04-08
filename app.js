import { Hono } from "jsr:@hono/hono@4.6.5";
import { cors } from "jsr:@hono/hono@4.6.5/cors";
import * as feedbackRepository from "./feedbackRepository.js";
const app = new Hono();
app.use("/*", cors());

app.get("/feedbacks/1", (c) => {
  const count = feedbackRepository.getFeedbackCount(1);
  return c.json({ count });
});

app.post("/feedbacks/1", (c) => {
  feedbackRepository.incrementFeedback(1);
  const count = feedbackRepository.getFeedbackCount(1);
  return c.json({ count });
});
app.get("/feedbacks/2", (c) => {
  const count = feedbackRepository.getFeedbackCount(2);
  return c.json({ count });
});

app.post("/feedbacks/2", (c) => {
  feedbackRepository.incrementFeedback(2);
  const count = feedbackRepository.getFeedbackCount(2);
  return c.json({ count });
});

app.get("/feedbacks/3", (c) => {
  const count = feedbackRepository.getFeedbackCount(3);
  return c.json({ count });
});

app.post("/feedbacks/3", (c) => {
  feedbackRepository.incrementFeedback(3);
  const count = feedbackRepository.getFeedbackCount(3);
  return c.json({ count });
});

export default app;
