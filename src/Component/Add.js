import { Box, Container } from "@mui/system";
import React, { useState } from "react";

const exp = {
  companyname: "",
  duration: "",
  responsibilities: "",
};

function Add() {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    address: "",
    state: "",
    country: "",
    skill: [],
    experience: [exp, exp],
  });
  const handelsubmit = (e) => {
    e.preventDefault();
  };

  const handelchange = (e) => {
    console.log(data);
    if (e.target.type === "checkbox") {
      if (e.target.checked) {
        data.skill.push(e.target.value);
      } else {
        let a = data.skill.indexOf(e.target.value);
        data.skill.splice(a, 1);
      }
    } else {
      setData({
        ...data,
        [e.target.name]: e.target.value,
      });
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Container maxWidth="lg">
        <form onSubmit={handelsubmit}>
          <main>
            <div className="py-5 text-center">
              <h2>Add Candidate</h2>
            </div>

            <div className="row g-5">
              <div className="col-md-7 col-lg-8 ms-auto me-auto">
                <h4 className="mb-3">Basic Info</h4>
                <div className="row g-3">
                  <div className="col-sm-6">
                    <label className="form-label">First name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="firstname"
                      value={data.firstname}
                      onChange={handelchange}
                    />
                  </div>

                  <div className="col-sm-6">
                    <label className="form-label">Last name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="lastname"
                      value={data.lastname}
                      onChange={handelchange}
                    />
                  </div>

                  <div className="col-12">
                    <label className="form-label">Gender</label>
                    <div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="gender"
                          value="male"
                          onChange={handelchange}
                        />
                        <label className="form-check-label">Male</label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="gender"
                          value="Female"
                          onChange={handelchange}
                        />
                        <label className="form-check-label">Female</label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="gender"
                          value="Other"
                          onChange={handelchange}
                        />
                        <label className="form-check-label">Other</label>
                      </div>
                    </div>
                  </div>

                  <div className="col-12">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="you@example.com"
                      name="email"
                      value={data.email}
                      onChange={handelchange}
                    />
                  </div>

                  <div className="col-12">
                    <label className="form-label">Address</label>
                    <textarea
                      className="form-control"
                      placeholder="1234 Main St"
                      name="address"
                      value={data.address}
                      onChange={handelchange}
                    />
                  </div>

                  <div className="col-md-5">
                    <label className="form-label">Country</label>
                    <select
                      className="form-select"
                      name="country"
                      value={data.country}
                      onChange={handelchange}
                    >
                      <option value="">Choose...</option>
                      <option>India</option>
                      <option>United States</option>
                    </select>
                  </div>

                  <div className="col-md-4">
                    <label className="form-label">State</label>
                    <select
                      className="form-select"
                      name="state"
                      value={data.state}
                      onChange={handelchange}
                    >
                      <option value="">Choose...</option>
                      <option>Maharashtra</option>
                      <option>Karnataka</option>
                    </select>
                  </div>

                  <div className="col-md-3">
                    <label className="form-label">Pin / Zip</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>

                <hr className="my-4" />

                <h4 className="mb-3">Professional Info</h4>

                <div className="row g-3">
                  <div className="col-12">
                    <label className="form-label">
                      Choose your skills
                      <span className="small text-muted">(min 3 skills)</span>
                    </label>
                    <div className="mb-3">
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="skill"
                          value="Angular"
                          onChange={handelchange}
                        />
                        <label className="form-check-label">Angular</label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="skill"
                          value="React"
                          onChange={handelchange}
                        />
                        <label className="form-check-label">React</label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="skill"
                          value="Node.JS"
                          onChange={handelchange}
                        />
                        <label className="form-check-label">Node.JS</label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="skill"
                          value="JavaScript"
                          onChange={handelchange}
                        />
                        <label className="form-check-label">JavaScript</label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="skill"
                          value="Flutter"
                          onChange={handelchange}
                        />
                        <label className="form-check-label">Flutter</label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="skill"
                          value="Java"
                          onChange={handelchange}
                        />
                        <label className="form-check-label">Java</label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row gy-3">
                  <div className="col-12">
                    <label className="form-label">
                      <strong>
                        Experience
                        <span className="small text-muted">
                          (min 2, max 5 items)
                        </span>
                      </strong>
                    </label>

                    {data.experience.map((data,id) => {
                     return (<div className="card mx-3 mt-3" key={id}>
                        <div className="card-body">
                          <h6 className="card-title text-muted mb-3">
                            Experience #{id+1}
                            <a
                              href="#"
                              className="float-end text-danger fw-normal"
                              onClick={()=>data.experience.splice(id,1)}
                            >
                              Remove
                            </a>
                          </h6>
                          <div className="row g-3">
                            <div className="col-6">
                              <label className="form-label">Company Name</label>
                              <input type="text" className="form-control" />
                            </div>
                            <div className="col-6">
                              <label className="form-label">
                                Duration{" "}
                                <span className="text-muted">(in months)</span>
                              </label>
                              <input type="number" className="form-control" />
                            </div>
                            <div className="col-12">
                              <label className="form-label">
                                Describe your responsibilities
                              </label>
                              <textarea className="form-control"></textarea>
                            </div>
                          </div>
                        </div>
                      </div>)
                    })}

                    <div className="card mx-3 mt-3">
                      <div className="card-body">
                        <h6 className="card-title text-muted mb-3">
                          Experience #2
                          <a
                            href="#"
                            className="float-end text-danger fw-normal"
                          >
                            Remove
                          </a>
                        </h6>
                        <div className="row g-3">
                          <div className="col-6">
                            <label className="form-label">Company Name</label>
                            <input type="text" className="form-control" />
                          </div>
                          <div className="col-6">
                            <label className="form-label">
                              Duration{" "}
                              <span className="text-muted">(in months)</span>
                            </label>
                            <input type="number" className="form-control" />
                          </div>
                          <div className="col-12">
                            <label className="form-label">
                              Describe your responsibilities
                            </label>
                            <textarea className="form-control"></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                    <a className="d-block mt-3" href="#">
                      Add more experience
                    </a>
                  </div>
                </div>

                <hr className="my-4" />

                <button className="btn btn-primary" type="submit">
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
