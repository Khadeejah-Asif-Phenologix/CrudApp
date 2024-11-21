import React, { useState } from "react";
import axios from "axios";

export default function Delete({ id, deleteData }) 
{
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = () => {
    setIsDeleting(true);
    axios
      .delete(`https://673df2580118dbfe86097ea0.mockapi.io/crud-app/crud-app/${id}`)
      .then(() => {
        setIsDeleting(false);
        if (deleteData) 
        {
            deleteData();
        }
      })
      .catch((error) => {
        setIsDeleting(false);
        console.error("Error deleting user:", error);
        alert("Failed to delete user");
      });
  };

  return (
    <button
      className="btn btn-danger"
      onClick={handleDelete}
    >
      {isDeleting ? "Deleting..." : "Delete"}
    </button>
  );
}
