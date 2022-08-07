import CategoryModel from "../models/category.ts";
export default{
    createCategory: async (ctx:any)=>{
        if (!ctx.request.hasBody){
            ctx.response.status = 400;
            ctx.response.body = {
                success: false,
                message: "No data provided",
            };
            return;
        }
        try {
            const categoryName = await ctx.request.body().value;
            await CategoryModel.add(
                {categoryName: categoryName.categoryName}
            );
            ctx.response.status = 200;
            ctx.response.body = {
                success: true,
                message: "Data Saved",
            };
        } catch (error) {
            ctx.response.status = 400;
            ctx.response.body = {
                success: false,
                message: `Error: ${error}`
            }
        }
    },
    getAllCategory: async (ctx: any)=>{
        try {
          const categories =  await CategoryModel.getAll();
          ctx.response.status = 200;
            ctx.response.body = {
                success: true,
                message: categories[0]
            };
        } catch (error) {
            ctx.response.status = 400;
            ctx.response.body = {
                success: false,
                message: `Error: ${error}`
            }
        }
    }
}