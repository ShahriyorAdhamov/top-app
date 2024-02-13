export interface PageItem {
    alias: string;
    title: string;
    _id: string;
    category: string;
} 

export interface MenuItem {
    pages: PageItem[];
    _id: {
        secondCategory: string;
    }

}