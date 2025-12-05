import axiosInstance from './axiosInstance';
import type { Category, EditCategory, ListCategories } from '../types/category';

class CategoryService {
  
  async getCategories(): Promise<ListCategories> {
    const response = await axiosInstance.get<ListCategories>('/categories');
    return response.data;
  }

  async addCategory(category: Category){
    await axiosInstance.post<Category>(
      '/categories',
      category
    )
  }

  async deleteCategory(category: Category){
    await axiosInstance.delete(
      '/categories',
      {
        params: {
          name: category.name,
          type: category.type
        }
      }
    );
  }

  async editCategory(category: EditCategory){
    await axiosInstance.patch(
      '/categories',
      category
    );
  }
}

export default new CategoryService();