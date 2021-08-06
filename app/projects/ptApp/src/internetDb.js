import React, { useEffect, useState } from 'react'

export const loadInternetDb = () => {
    useEffect(() => {
        fetch ('https://pack-trade.com/site/json/')
          .then((response) => response.json())
          .then((json) => setData(json))
      }, [])
      
      const [dataState, setData] = useState([]);

      console.log('InternetBase:', dataState)
}