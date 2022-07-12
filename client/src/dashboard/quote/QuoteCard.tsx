import { Card, CardContent, Skeleton } from "@mui/material";
import React from "react";
import useQuote from "./useQuote";

const QuoteCard: React.FC = () => {
  const { isLoading, quote } = useQuote();

  return (
    <Card>
      <CardContent sx={{ }}>
        {isLoading ? (
          <Skeleton />
        ) : (
          quote
        )}
      </CardContent>
    </Card>
  );
};

export default QuoteCard;