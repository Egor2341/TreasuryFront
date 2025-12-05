type CategoryType = "expenses | incomes"

export interface Category {
    name: string;
    type: CategoryType;
}

export interface ListCategories {
    expenses: string[];
    incomes: string[];
}