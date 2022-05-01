import React from 'react'
import { useState, useEffect } from "react";

function UseLocalStorage(itemName, valueInitial) {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [item, setItem] = useState(valueInitial);
  
    useEffect(() => {
      setTimeout(() => {
        try {
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
          if (!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(valueInitial));
            parsedItem = valueInitial;
          } else {
            parsedItem = JSON.parse(localStorageItem);
          }
          setItem(parsedItem);
          setLoading(false);
        } catch (error) {
          setError(error);
        }
      }, 3000);
    });
  
    const saveItem = (newItem) => {
      try {
        const stingifyItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stingifyItem);
        setItem(newItem);
      } catch (error) {
        setError(error);
      }
    };
  
    return { item, saveItem, loading, error };
  }

  export default UseLocalStorage;