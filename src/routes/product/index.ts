import { Router } from "express";

const productRouter = Router();

productRouter.get("/product", (req, res) => {
  res.json({
    message: "hello",
  });
});

productRouter.get("/product/:id", () => {});

productRouter.put("/product/:id", () => {});

productRouter.post("/product", () => {});

productRouter.delete("/product/:id", () => {});

export default productRouter;
