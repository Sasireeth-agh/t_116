import {
  dummyProducts,
  dummyCommissionRates,
  dummyAnnouncements,
  dummyUsers
} from "./data";

export const fetchProducts = async () => {
  const response = await fetch('http://localhost:5501/api/products');
  return response.json();
};

export const addProduct = async (product) => {
  const response = await fetch('http://localhost:5501/api/products', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product),
  });
  return response.json();
};

export const updateProduct = async (id, product) => {
  const response = await fetch(`http://localhost:5501/api/products/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product),
  });
  return response.json();
};

export const deleteProduct = async (id) => {
  await fetch(`http://localhost:5501/api/products/${id}`, {
    method: 'DELETE',
  });
};

export const fetchCommissionRates = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(dummyCommissionRates), 500);
  });
};

export const updateCommissionRate = async (occupation, rate) => {
  return new Promise((resolve) => {
    dummyCommissionRates[occupation] = rate;
    setTimeout(() => resolve({ [occupation]: rate }), 500);
  });
};


export const fetchAnnouncements = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(dummyAnnouncements), 500);
  });
};

export const createAnnouncement = async (announcement) => {
  return new Promise((resolve) => {
    const newAnnouncement = {
      ...announcement,
      id: Date.now(),
      date: new Date().toISOString().split("T")[0],
    };
    dummyAnnouncements.push(newAnnouncement);
    setTimeout(() => resolve(newAnnouncement), 500);
  });
};


export const fetchUsers = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(dummyUsers), 500);
  });
};