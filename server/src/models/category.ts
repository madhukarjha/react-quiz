import client from "../db/client.ts";
import { TABLE } from "../db/config.ts";
import Category from "../interfaces/category.ts";

export default {
  /**
   * Get all the records from category table
   */
 getAll: async () => {
  return await client.query(
    `SELECT categoryId, categoryName from ${TABLE.CATEGORY}`
  );
},


/**
   * Adds a new todo item to todo table
   * @param todo
   * @param isCompleted
   */
 add: async (
    { categoryName }: Category,
  ) => {
    return await client.query(
      `INSERT INTO ${TABLE.CATEGORY}(categoryName) values(?)`,
      [
        categoryName,
      ],
    );
  },

    /**
   * Updates the content of a single todo item
   * @param id
   * @param todo
   * @param isCompleted
   * @returns integer (count of effect rows)
   */
     updateById: async ({ categoryId, categoryName }: Category) => {
        const result = await client.query(
          `UPDATE ${TABLE.CATEGORY} SET todo=?, isCompleted=? WHERE id=?`,
          [
            categoryId,
            categoryName,
        
          ],
        );
        // return count of rows updated
        return result.affectedRows;
      },

      /**
   * Deletes a todo by ID
   * @param id
   * @returns integer (count of effect rows)
   */
  deleteById: async ({ categoryId }: Category) => {
    const result = await client.query(
      `DELETE FROM ${TABLE.CATEGORY} WHERE id = ?`,
      [categoryId],
    );
    // return count of rows updated
    return result.affectedRows;
  },
};