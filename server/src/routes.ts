
import { Router } from "https://deno.land/x/oak/mod.ts";
import quizes from "./controllers/quizes.ts";
const router = new Router();

router
    //.get('/quiz:id', quizes)
    .get('/quizes', quizes.getAllCategory)
    .post('/createCategory', quizes.createCategory);
export default router;