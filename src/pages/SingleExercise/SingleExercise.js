import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

export const SingleExercise = () => {
  // const obiekt = useParams();
  // const params = useParams();
  // możemy użyć słowa trelemorele ponieważ zostało ono użyte przy konfiguracji Routów
  // eg. <Route path="/exercises/:trelemorele" element={<SingleExercise />} />
  const { trelemorele } = useParams();

  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);
    fetch(`https://dummyjson.com/products/${trelemorele}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("");
        }
      })
      .then((data) => {
        setProduct(data);
      })
      .catch(() => {
        setError("Coś poszło nie tak");
      });
  }, [trelemorele]);

  if (error !== null) {
    return (
      <article>
        <h2>Coś poszło nie tak, chyba nie ma takiego produktu 404</h2>
      </article>
    );
  }

  if (product === null) {
    return <article aria-busy="true"></article>;
  }

  return (
    <article>
      <h2>SingleExercise</h2>
      <h4>{trelemorele}</h4>
      <p>Title: {product.title}</p>
      <p>Price: {product.price}</p>

      <img src={product.thumbnail} alt={product.title} />
    </article>
  );
};
