import { createContext, useState, useEffect } from 'react';

import { getCategoriesAndDocuments, addCollectionAndDocuments } from '../utils/firebase/firebase.utils';
import SHOP_DATA from '../shop-data.js';

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      try {
        const categoryMap = await getCategoriesAndDocuments();
        
        // If no categories exist, upload the shop data
        if (Object.keys(categoryMap).length === 0) {
          await addCollectionAndDocuments('categories', SHOP_DATA);
          // Fetch again after upload
          const newCategoryMap = await getCategoriesAndDocuments();
          setCategoriesMap(newCategoryMap);
        } else {
          setCategoriesMap(categoryMap);
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    getCategoriesMap();
  }, []);

  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
