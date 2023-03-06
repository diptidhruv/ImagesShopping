import React, { useState, useEffect } from "react";
import axios from "axios";
const Context = React.createContext();

const ContextProvider = (props) => {
  const [allPhotos, setAllPhotos] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  // To hold the actual data
  // const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // const URL =
  //   "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";
  // useEffect(() => {
  //   fetch(URL)
  //     .then((res) => res.json())
  //     .then((data) => setAllPhotos(data));
  // }, []);

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
      )
      .then((res) => {
        // To hold the actual data
        // setData(res.data);
        setAllPhotos(res.data);
        setLoading(false);
      })
      .catch(() => {
        alert("There was an error while retrieving the data");
      });
  }, []);

  // const findItemIdinCart = (id) => {
  //   return cartItems.some((item) => id === item.id);
  // };

  // console.log(findItemIdinCart);

  const addToCart = (newItem) => {
    setCartItems((prevItems) => [...prevItems, newItem]);
  };
  function removeFromCart(id) {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }
  function emptyCart() {
    setCartItems([]);
  }
  const toggleFavorite = (id) => {
    const newArr = allPhotos.map((photo) => {
      if (photo.id === id) {
        // console.log(photo);

        return {
          ...photo,
          isFavorite: !photo.isFavorite,
        };
      }
      return photo;
    });
    setAllPhotos(newArr);
  };

  return (
    <Context.Provider
      value={{
        allPhotos: allPhotos,
        cartItems,
        addToCart,
        removeFromCart,
        toggleFavorite,
        emptyCart,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
