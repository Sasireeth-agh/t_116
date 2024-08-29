import React, { useState, useEffect } from "react";
import { ThreeDots } from "react-loader-spinner";
import ProductForm from "../../../components/admin/ProductManagement/ProductForm/ProductForm";
import ProductList from "../../../components/admin/ProductManagement/ProductList/ProductList";
import {
  fetchProducts,
  addProduct,
  updateProduct,
  deleteProduct,
} from "../../../components/services/api";
import { notifyAffiliates } from "../../../components/services/notificationService";
import {
  ProductManagementContainer,
  Title,
  AddButton,
  LoaderContainer,
  Modal,
  ModalContent,
} from "./ProductManagement.style";

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [isAddingProduct, setIsAddingProduct] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditingProduct, setIsEditingProduct] = useState(false);
  const [productToEdit, setProductToEdit] = useState(null);

  useEffect(() => {
    const fetchProductsData = async () => {
      try {
        const productsData = await fetchProducts();
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProductsData();
  }, []);

  const handleAddProduct = async (product) => {
    try {
      const newProduct = await addProduct(product);
      setProducts((prevProducts) => [...prevProducts, newProduct]);
      notifyAffiliates("New product added");
    } catch (error) {
      console.error("Error adding product:", error);
    } finally {
      setIsAddingProduct(false);
    }
  };

  const handleEditProduct = async (updatedProduct) => {
    try {
      const updated = await updateProduct(productToEdit._id, updatedProduct);
      setProducts((prevProducts) =>
        prevProducts.map((p) => (p._id === productToEdit._id ? updated : p))
      );
      notifyAffiliates("Product updated");
    } catch (error) {
      console.error("Error updating product:", error);
    } finally {
      setIsEditingProduct(false);
      setProductToEdit(null);
    }
  };

  const handleRemoveProduct = async (id) => {
    try {
      await deleteProduct(id);
      setProducts((prevProducts) =>
        prevProducts.filter((p) => p._id !== id)
      );
      notifyAffiliates("Product removed");
    } catch (error) {
      console.error("Error removing product:", error);
    }
  };

  const openEditModal = (product) => {
    setProductToEdit(product);
    setIsEditingProduct(true);
  };

  const closeEditModal = () => {
    setIsEditingProduct(false);
    setProductToEdit(null);
  };

  return (
    <ProductManagementContainer>
      <Title>Product Management</Title>
      <AddButton onClick={() => setIsAddingProduct(true)}>
        Add Product
      </AddButton>
      {isAddingProduct && (
        <ProductForm
          onSubmit={handleAddProduct}
          onCancel={() => setIsAddingProduct(false)}
        />
      )}
      {isLoading ? (
        <LoaderContainer>
          <ThreeDots color="#007bff" height={80} width={80} />
        </LoaderContainer>
      ) : (
        <ProductList
          products={products}
          onEdit={openEditModal}
          onRemove={handleRemoveProduct}
        />
      )}
      {isEditingProduct && (
        <Modal>
          <ModalContent>
            <ProductForm
              product={productToEdit}
              onSubmit={handleEditProduct}
              onCancel={closeEditModal}
            />
          </ModalContent>
        </Modal>
      )}
    </ProductManagementContainer>
  );
};

export default ProductManagement;
