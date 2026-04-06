import { useState, useEffect } from "react";

export function useGetCardData() {
  const [cardData, setCardData] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getCardData = async () => {
      try {
        const response = await fetch("/api/card-data");
        const data = await response.json();
        setCardData(data);
        setIsLoading(false);
      } catch (e) {
        console.log(e);
        setIsLoading(false);
      }
    };

    getCardData();
  }, []);

  return {
    cardData,
    isLoading,
  };
}
