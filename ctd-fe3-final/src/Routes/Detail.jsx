import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [dentist, setDentist] = useState({});

  useEffect(() => {
    const fetchDentist = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        setDentist(response.data);
      } catch (error) {
        console.error("Error al obtener detalles del dentista:", error);
      }
    };

    fetchDentist();
  }, [id]);

  return (
    <div>
      <h2>Detalle del dentista</h2>
      <p>Nombre: {dentist.name}</p>
      <p>Email: {dentist.email}</p>
      <p>Teléfono: {dentist.phone}</p>
      <p>Sitio web: {dentist.website}</p>
    </div>
  );
};

export default Detail;
