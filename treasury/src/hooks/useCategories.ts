import { useState, useEffect } from 'react';
import type { ListCategories } from '../types/category';
import categoryService from '../api/categoryService';


export function useCategories() {
  const [categories, setCategories] = useState<ListCategories>({
    expenses: [],
    incomes: []
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      setLoading(true);
      setCategories(await categoryService.getCategories());
    } catch (err) {
        if (err instanceof Error) {
            setError(err.message);
          } else if (typeof err === 'string') {
            setError(err);
          } else {
            setError('Getting categories failed');
          }
          console.log('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return { categories, loading, error, refetch: fetchCategories };
}