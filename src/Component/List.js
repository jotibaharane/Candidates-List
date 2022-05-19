import * as React from "react";

import { Box, Button, Container } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";

function List() {
  const navigate = useNavigate();
  const [list, setList] = React.useState(
    JSON.parse(localStorage.getItem("list"))
      ? JSON.parse(localStorage.getItem("list"))
      : []
  );

  const remove = (id) => {
    let a = list.filter((data) => data.id !== id);
    localStorage.setItem("list", JSON.stringify(a));
    setList(a);
  };

  return (
    <Box sx={{ minWidth: "100%" }}>
      <Container maxWidth="lg">
        <main>
          <div className="py-5">
            <h2>
              Candidates List
              <button
                className="btn btn-primary float-end"
                onClick={() => navigate("/add")}
              >
                Add Candidate
              </button>
            </h2>
          </div>

          <div className="row">
            <div className="col-12 ms-auto me-auto">
              <div className="card">
                <div className="card-body">
                  <table className="table">
                    <tbody>
                      <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Number of Skills</th>
                        <th>Total Work Experience (in months)</th>
                        <th>Actions</th>
                      </tr>

                      {list.map((data, id) => {
                        let val = 0;
                        return (
                          <tr key={data.id}>
                            <td>{id + 1}</td>
                            <td>
                              {data.firstname} {data.lastname}
                            </td>
                            <td>{data.email}</td>
                            <td>{data.skill.length}</td>
                            <td>
                              {data.experience
                                .map((datum) => Number(datum.duration))
                                .reduce((a, b) => a + b)}
                            </td>
                            <td>
                              <a href={`/edit/${data.id}`}>Edit</a>
                              <a
                                href="/"
                                className="text-danger ms-2"
                                onClick={() => remove(data.id)}
                              >
                                Delete
                              </a>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </main>
      </Container>
    </Box>
  );
}

export default List;
