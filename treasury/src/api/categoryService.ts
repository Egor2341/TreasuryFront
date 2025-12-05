import axiosInstance from './axiosInstance';
import type { ListCategories } from '../types/category';

class CategoryService {
  async getCategories(): Promise<ListCategories> {
    const response = await axiosInstance.get<ListCategories>('/categories');
    return response.data;
  }
}

export default new CategoryService();