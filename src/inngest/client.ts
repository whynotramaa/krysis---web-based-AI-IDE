import * as Sentry from "@sentry/node";
import { Inngest } from "inngest";
import { sentryMiddleware } from "@inngest/middleware-sentry";

// Initialize Sentry as usual wherever is appropriate


export const inngest = new Inngest({
  id: "krysis",
  middleware: [sentryMiddleware()],
});
