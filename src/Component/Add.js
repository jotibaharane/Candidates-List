import { Box, Container } from "@mui/system";
import React, { useState } from "react";

function Add() {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
  });
  const handelsubmit = (e) => {
    e.preventDefault();
  };

  const handelchange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Container maxWidth="lg">
        <form onSubmit={handelsubmit}>
          <main>
            <div class="py-5 text-center">
              <h2>Add Candidate</h2>
            </div>

            <div class="row g-5">
              <div class="col-md-7 col-lg-8 ms-auto me-auto">
                <h4 class="mb-3">Basic Info</h4>
                <div class="row g-3">
                  <div class="col-sm-6">
                    <label class="form-label">First name</label>
                    <input
                      type="text"
                      class="form-control"
                      name="firstname"
                      value={data.firstname}
                      onChange={handelchange}
                    />
                  </div>

                  <div class="col-sm-6">
                    <label class="form-label">Last name</label>
                    <input
                      type="text"
                      class="form-control"
                      name="lastname"
                      value={data.lastname}
                      onChange={handelchange}
                    />
                  </div>

                  <div class="col-12">
                    <label class="form-label">Gender</label>
                    <div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="gender"
                          value={data.gender}
                          onChange={handelchange}
                        />
                        <label class="form-check-label">Male</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="gender"
                          value={data.gender}
                          onChange={handelchange}
                        />
                        <label class="form-check-label">Female</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="gender"
                          value={data.gender}
                          onChange={handelchange}
                        />
                        <label class="form-check-label">Other</label>
                      </div>
                    </div>
                  </div>

                  <div class="col-12">
                    <label class="form-label">Email</label>
                    <input
                      type="email"
                      class="form-control"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div class="col-12">
                    <label class="form-label">Address</label>
                    <textarea
                      class="form-control"
                      placeholder="1234 Main St"
                    ></textarea>
                  </div>

                  <div class="col-md-5">
                    <label class="form-label">Country</label>
                    <select class="form-select">
                      <option value="">Choose...</option>
                      <option>India</option>
                      <option>United States</option>
                    </select>
                  </div>

                  <div class="col-md-4">
                    <label class="form-label">State</label>
                    <select class="form-select">
                      <option value="">Choose...</option>
                      <option>Maharashtra</option>
                      <option>Karnataka</option>
                    </select>
                  </div>

                  <div class="col-md-3">
                    <label class="form-label">Pin / Zip</label>
                    <input type="text" class="form-control" />
                  </div>
                </div>

                <hr class="my-4" />

                <h4 class="mb-3">Professional Info</h4>

                <div class="row g-3">
                  <div class="col-12">
                    <label class="form-label">
                      Choose your skills
                      <span class="small text-muted">(min 3 skills)</span>
                    </label>
                    <div class="mb-3">
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" />
                        <label class="form-check-label">Angular</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" />
                        <label class="form-check-label">React</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" />
                        <label class="form-check-label">Node.JS</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" />
                        <label class="form-check-label">JavaScript</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" />
                        <label class="form-check-label">Flutter</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" />
                        <label class="form-check-label">Java</label>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="row gy-3">
                  <div class="col-12">
                    <label class="form-label">
                      <strong>
                        Experience
                        <span class="small text-muted">
                          (min 2, max 5 items)
                        </span>
                      </strong>
                    </label>
                    <div class="card mx-3 mt-3">
                      <div class="card-body">
                        <h6 class="card-title text-muted mb-3">
                          Experience #1
                          <a href="#" class="float-end text-danger fw-normal">
                            Remove
                          </a>
                        </h6>
                        <div class="row g-3">
                          <div class="col-6">
                            <label class="form-label">Company Name</label>
                            <input type="text" class="form-control" />
                          </div>
                          <div class="col-6">
                            <label class="form-label">
                              Duration{" "}
                              <span class="text-muted">(in months)</span>
                            </label>
                            <input type="number" class="form-control" />
                          </div>
                          <div class="col-12">
                            <label class="form-label">
                              Describe your responsibilities
                            </label>
                            <textarea class="form-control"></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card mx-3 mt-3">
                      <div class="card-body">
                        <h6 class="card-title text-muted mb-3">
                          Experience #2
                          <a href="#" class="float-end text-danger fw-normal">
                            Remove
                          </a>
                        </h6>
                        <div class="row g-3">
                          <div class="col-6">
                            <label class="form-label">Company Name</label>
                            <input type="text" class="form-control" />
                          </div>
                          <div class="col-6">
                            <label class="form-label">
                              Duration{" "}
                              <span class="text-muted">(in months)</span>
                            </label>
                            <input type="number" class="form-control" />
                          </div>
                          <div class="col-12">
                            <label class="form-label">
                              Describe your responsibilities
                            </label>
                            <textarea class="form-control"></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                    <a class="d-block mt-3" href="#">
                      Add more experience
                    </a>
                  </div>
                </div>

                <hr class="my-4" />

                <button class="btn btn-primary" type="submit">
                  Save Candidate
                </button>
              </div>
            </div>
          </main>
        </form>
      </Container>
    </Box>
  );
}

export default Add;
