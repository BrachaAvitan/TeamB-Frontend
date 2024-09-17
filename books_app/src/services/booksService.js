import { apiClient } from "../api/apiClient";

const getAllBooks = async () => {
    try {
        const res = await apiClient.get("Books");
        return res.data
    } catch (error) {
        throw error;
    }
};

const deleteBook = async (bookId) => {
    try {
      await apiClient.delete(`Books/${bookId}`);
    } catch (error) {
      throw error;
    }
};

const updateBook = async (bookDetails) => {
    try {
       const res = await apiClient.put("Books", bookDetails);
       return res.data;
    } catch (error) {
        throw error;
    }
};

export {getAllBooks, deleteBook, updateBook}