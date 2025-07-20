// src/services/productService.js
import { 
  collection, 
  doc, 
  getDocs, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  serverTimestamp 
} from 'firebase/firestore';
import { db } from '../firebase'; // Adjust path to your firebase config

// Get all products from Firestore
export const getAllProducts = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'products'));
    const products = [];
    querySnapshot.forEach((doc) => {
      products.push({
        id: doc.id,
        ...doc.data()
      });
    });
    return products;
  } catch (error) {
    console.error('Error getting products:', error);
    throw error;
  }
};

// Add new product to Firestore
export const addProduct = async (productData) => {
  try {
    const docRef = await addDoc(collection(db, 'products'), {
      ...productData,
      status: 'Active',
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    });
    console.log('Product added with ID:', docRef.id);
    return docRef.id;
  } catch (error) {
    console.error('Error adding product:', error);
    throw error;
  }
};

// Update product in Firestore
export const updateProduct = async (productId, productData) => {
  try {
    const productRef = doc(db, 'products', productId);
    await updateDoc(productRef, {
      ...productData,
      updatedAt: serverTimestamp()
    });
    console.log('Product updated successfully');
  } catch (error) {
    console.error('Error updating product:', error);
    throw error;
  }
};

// Delete product from Firestore
export const deleteProduct = async (productId) => {
  try {
    await deleteDoc(doc(db, 'products', productId));
    console.log('Product deleted successfully');
  } catch (error) {
    console.error('Error deleting product:', error);
    throw error;
  }
};

// Get all inquiries from Firestore
export const getAllInquiries = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'inquiries'));
    const inquiries = [];
    querySnapshot.forEach((doc) => {
      inquiries.push({
        id: doc.id,
        ...doc.data()
      });
    });
    return inquiries;
  } catch (error) {
    console.error('Error getting inquiries:', error);
    throw error;
  }
};

// Add inquiry to Firestore
export const addInquiry = async (inquiryData) => {
  try {
    const docRef = await addDoc(collection(db, 'inquiries'), {
      ...inquiryData,
      status: 'New',
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    });
    console.log('Inquiry added with ID:', docRef.id);
    return docRef.id;
  } catch (error) {
    console.error('Error adding inquiry:', error);
    throw error;
  }
};