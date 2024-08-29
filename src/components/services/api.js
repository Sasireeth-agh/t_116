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

export const fetchCommissionRates = async (type) => {
  console.log(type);
  if (!type) {
    throw new Error("Type parameter is required");
  }

  try {
    const response = await fetch(`http://localhost:5501/api/commissions/view?type=${type}`);
    
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP error! status: ${response.status} - ${errorText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error("Error fetching commission rates:", error);
    throw error;
  }
};





export const updateCommissionRate = async (type, option, rate) => {
  try {
    const response = await fetch(`http://localhost:5501/api/commissions/update`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ type, option, rate }),
    });

    if (!response.ok) {
      throw new Error('Failed to update commission rate');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error updating commission rate:', error);
    return null;
  }
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