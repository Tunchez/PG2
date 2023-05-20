import { API_URL } from "../utils/constants";
import { axios } from "axios";

export async function searchProductsApi(search) {
  try {
    const url = `${API_URL}/api/products?_q=${search}&populate=images`;
    const response = await axios.get(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getProductApi(id) {
  try {
    const url = `${API_URL}/api/products/${id}?populate=images`;
    const response = await axios.get(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getLastProuctsApi(limit = 30) {
  try {
    const url = `${API_URL}/api/products?_limit=${limit}&_sort=createdAt:DESC&populate=images`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}
