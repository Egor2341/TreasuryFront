type CategoryType = "expenses" | "incomes"

export interface Category {
    name: string;
    type: CategoryType;
}

export interface EditCategory{
    type: CategoryType;
    old_name: string;
    new_name: string;
}

export interface ListCategories {
    expenses: string[];
    incomes: string[];
}

