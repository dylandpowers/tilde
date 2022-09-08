import { useEffect, useState } from "react";
import { get } from "../../utils/ajax";

type Quote = {
  quote: string;
  isLoading: boolean;
};

export default function useQuote(): Quote {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [quote, setQuote] = useState<string>("");

  useEffect(() => {
    get("https://quotes.rest/qod").then((json) => {
      setIsLoading(false);
      const quotes = json.contents?.quotes;
      if (!quotes || !quotes.length) {
        setQuote("(WEEGER)");
        return;
      }

      setQuote(`${quotes[0].quote} - ${quotes[0].author}`);
    });
  });

  return {
    isLoading,
    quote,
  };
}
