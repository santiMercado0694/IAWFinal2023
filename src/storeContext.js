import React, { useState, useContext, useEffect } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [productos, setProductos] = useState([]);
  const [cart, setCart] = useState([]);


  const getProductsFromAPI = async() => {
      setLoading(true)
      const URL_productos = process.env.REACT_APP_API_URL+"/products";
      const response_productos = await fetch(URL_productos);
      const dataProductos = await response_productos.json();
      setProductos(dataProductos);
      setLoading(false)
 
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
    
        useEffect( () => {
            getProductsFromAPI();
            getCartFromAPI();
        }, []);



  return <AppContext.Provider value={{
    loading,
    productos,
    cart,
    addProductCart,
    updateProductQuantity,
    deleteCart,
    deleteProductCart,
  }}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }