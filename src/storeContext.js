import React, { useState, useContext, useEffect } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [productos, setProductos] = useState([]);
  const [cart, setCart] = useState([]);
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState("");


  const getProductsFromAPI = async() => {
      setLoading(true)
      const URL_productos = process.env.REACT_APP_API_URL+"/products";
      const response_productos = await fetch(URL_productos);
      const dataProductos = await response_productos.json();
      setProductos(dataProductos);
      setLoading(false)
 
  }

  const getProductsByCategory = async(id) => {
    const URL_productos = process.env.REACT_APP_API_URL+"/products/category/"+id;
    const response_productos = await fetch(URL_productos);
    const dataProductos = await response_productos.json();
    setProductos(dataProductos);

}
 
  const addProductCart= async(id,name,price,stock,image_path,rating) => {
   const data = {
     id: id,
     name: name,
     price: price,
     stock: stock,
     quantity: 1,
     image_path: image_path,
     rating: rating
   }
     const URL_POST_PRODUCTO = process.env.REACT_APP_API_URL+"/products";
     const response_cart = await fetch(URL_POST_PRODUCTO, {
       method: 'POST',
       headers:{
         'Content-Type': 'application/json'
       },
       body: JSON.stringify(data)
     }).then(res => response_cart.json())
     .catch(error => console.error('Error:', error))
     .then(response => console.log('Success:', response));
     await getCartFromAPI();
 
  }
      
        const getCartFromAPI = async() => {   
            setLoading(true)    
            const URL_CART = process.env.REACT_APP_API_URL+"/cart";
            const response_cart = await fetch(URL_CART);
            const dataCart = await response_cart.json();
            setCart(dataCart);
            setLoading(false)
    
        }
  
        const updateProductQuantity= async(id, quantity) => {
          const data = {
            id: id,
            quantity: quantity
          }

            const URL_PUT_CANTIDAD = process.env.REACT_APP_API_URL+"/cart/update/";
            const response_cart = await fetch(URL_PUT_CANTIDAD, {
              method: 'PUT',
              headers:{
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(data)
            }).then(res => response_cart.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response));
            await getCartFromAPI();
        
         }
         
         const updateProductStock= async(id, stock) => {
          const data = {
            id: id,
            stock: stock
          }

            const URL_PUT_STOCK = process.env.REACT_APP_API_URL+"/products/update/";
            const response_cart = await fetch(URL_PUT_STOCK, {
              method: 'PUT',
              headers:{
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(data)
            }).then(res => response_cart.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response));
            await getProductsFromAPI();
        
         }  
  
        const deleteProductCart = async (id) => {
          const URL_DELETE_PRODUCTO = process.env.REACT_APP_API_URL+"/cart/delete/"+id;
          await fetch(URL_DELETE_PRODUCTO, { method: 'DELETE' });
          await getCartFromAPI();
        }

        const deleteCart = async () => {
          const URL_DELETE_PRODUCTO = process.env.REACT_APP_API_URL+"/cart/delete/";
          await fetch(URL_DELETE_PRODUCTO, { method: 'DELETE' });
          await getCartFromAPI();
        }

        const getCategoriesFromAPI = async() => {    
          const URL_CATEGORIES = process.env.REACT_APP_API_URL+"/categories/";
          const response_categories = await fetch(URL_CATEGORIES);
          const dataCategories = await response_categories.json();
          setCategories(dataCategories);
  
      }

        useEffect( () => {
            getProductsFromAPI();
            getCartFromAPI();
            getCategoriesFromAPI();
        }, []);

  return <AppContext.Provider value={{
    loading,
    productos,
    cart,
    search,
    categories,
    setCategories,
    setSearch,
    getProductsByCategory,
    addProductCart,
    updateProductStock,
    updateProductQuantity,
    deleteCart,
    deleteProductCart,
  }}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }