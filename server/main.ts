import { Application } from "https://deno.land/x/oak/mod.ts";
import { green, yellow } from "https://deno.land/std@0.53.0/fmt/colors.ts";

// routes
import todoRouter from "./src/routes.ts";
// logger
import logger from './src/middlewares/logger.ts';
// not found
import notFound from './src/middlewares/notFound.ts';
const certFile = "./cert.pem";
const keyFile = "./key.pem";
const app = new Application();
const port: number = 4000;

// order of execution is important;
app.use(logger.logger);
app.use(logger.responseTime);

app.use(todoRouter.routes());
app.use(todoRouter.allowedMethods());

// 404 page
app.use(notFound);

app.addEventListener("listen", ({ secure, hostname, port }) => {
  const protocol = secure ? "https://" : "http://";
  const url = `${protocol}${hostname ?? "localhost"}:${port}`;
  console.log(
    `${yellow("Listening on:")} ${green(url)}`,
  );
});

await app.listen({ port, certFile, keyFile });

