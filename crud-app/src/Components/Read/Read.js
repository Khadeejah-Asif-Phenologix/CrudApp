import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Delete from "../Delete/Delete";

const Read = () => {
  const [Data, setData] = useState([]);
  
  const getData = () => {
    axios
      .get("https://673df2580118dbfe86097ea0.mockapi.io/crud-app/crud-app")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const setLocalStorage = (Id, Name, Email) => {
    localStorage.setItem("Id", Id);
    localStorage.setItem("Name", Name);
    localStorage.setItem("Email", Email);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="d-flex justify-content-center bg-danger text-white p-3">
        <h2>Read - CRUD Page</h2>
      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {Data.map((eachData) => (
            <tr key={eachData.id}>
              <th scope="row">{eachData.id}</th>
              <td>{eachData.name}</td>
              <td>{eachData.email}</td>
              <td>
                <Link to={`/update/${eachData.id}`}>
                  <button
                    className="btn btn-success"
                    onClick={() =>
                      setLocalStorage(
                        eachData.id,
                        eachData.name,
                        eachData.email
                      )
                    }
                  >
                    Edit
                  </button>
                </Link>
              </td>
              <td>
                <Delete id={eachData.id} deleteData={getData} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="logout-button align-self-end m-5">
        <Link to="/">
          <button className="btn btn-dark">LogOut</button>
        </Link>
      </div>
    </>
  );
};

export default Read;
