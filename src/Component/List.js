import * as React from "react";

import { Box, Button, Container } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";




function List() {
  const navigate=useNavigate()
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };



  return (
    <Box sx={{ minWidth: "100%" }}>
      <Container maxWidth="lg">
      <main>
            <div class="py-5">
                <h2>
                    Candidates List
                    <button class="btn btn-primary float-end">Add Candidate</button>
                </h2>
            </div>

            <div class="row">
                <div class="col-12 ms-auto me-auto">
                    <div class="card">
                        <div class="card-body">
                            <table class="table">
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Number of Skills</th>
                                    <th>Total Work Experience (in months)</th>
                                    <th>Actions</th>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Abhijit Borade</td>
                                    <td>abhijit@angularminds.com</td>
                                    <td>5</td>
                                    <td>60</td>
                                    <td>
                                        <a href="#">Edit</a>
                                        <a href="#" class="text-danger ms-2">Delete</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Abhijit Borade</td>
                                    <td>abhijit@angularminds.com</td>
                                    <td>5</td>
                                    <td>60</td>
                                    <td>
                                        <a href="#">Edit</a>
                                        <a href="#" class="text-danger ms-2">Delete</a>
                                    </td>
                                </tr>
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
