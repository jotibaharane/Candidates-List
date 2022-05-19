import { Box, Container } from "@mui/system";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
let a = {
  companyname: "",
  duration: "",
  responsibilities: "",
};
function Edit() {
  const navigate = useNavigate();
  const a = useParams().id;
  const list = JSON.parse(localStorage.getItem("list"))
    ? JSON.parse(localStorage.getItem("list"))
    : [];

  const [data, setData] = useState(list.find((data) => data.id === a));

  const handelsubmit = (e) => {
    e.preventDefault();
    let index = list.findIndex((x) => x.id === a);
    console.log(index);
    console.log(data);
    list.splice(index, 1, data);
    localStorage.setItem("list", JSON.stringify(list));
    navigate("/");
  };
  const handelchange = (e) => {
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

  const handexp = (e, i) => {
    let newFormValue = [...data.experience];
    if (newFormValue.length < 6) {
      newFormValue[i] = {
        ...newFormValue[i],
        [e.target.name]: e.target.value,
      };
      setData({ ...data, experience: newFormValue });
    } else {
      alert("max 5 exp alowed");
    }
  };

  const handelremove = (id) => {
    let newFormValue = [...data.experience];
    if (newFormValue.length > 2) {
      newFormValue.splice(id, 1);
      setData({ ...data, experience: newFormValue });
    } else {
      alert("min 2 exp require");
    }
  };
  const handeladd = () => {
    let newFormValue = [...data.experience];
    newFormValue.push(a);
    setData({ ...data, experience: newFormValue });
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Container maxWidth="lg">
        <form onSubmit={handelsubmit}>
          <main>
            <div className="py-5 text-center">
              <h2>Edit Candidate</h2>
            </div>

            <div className="row g-5">
              <div className="col-md-7 col-lg-8 ms-auto me-auto">
                <h4 className="mb-3">Basic Info</h4>
                <div className="row g-3">
                  <div className="col-sm-6">
                    <label className="form-label">First name</label>
                    <input
                      type="text"
                      className={
                        data.firstname
                          ? "form-control is-valid"
                          : "form-control is-invalid"
                      }
                      name="firstname"
                      value={data.firstname}
                      onChange={handelchange}
                      required
                    />
                  </div>

                  <div className="col-sm-6">
                    <label className="form-label">Last name</label>
                    <input
                      type="text"
                      className={
                        data.lastname
                          ? "form-control is-valid"
                          : "form-control is-invalid"
                      }
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
                          className={
                            data.gender
                              ? "form-check-input is-valid"
                              : "form-check-input is-invalid"
                          }
                          type="radio"
                          name="gender"
                          defaultChecked={data.gender === "male"}
                          value="male"
                          onChange={handelchange}
                        />
                        <label className="form-check-label">Male</label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className={
                            data.gender
                              ? "form-check-input is-valid"
                              : "form-check-input is-invalid"
                          }
                          type="radio"
                          name="gender"
                          defaultChecked={data.gender === "Female"}
                          value="Female"
                          onChange={handelchange}
                        />
                        <label className="form-check-label">Female</label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className={
                            data.gender
                              ? "form-check-input is-valid"
                              : "form-check-input is-invalid"
                          }
                          type="radio"
                          name="gender"
                          defaultChecked={data.gender === "Other"}
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
                      className={
                        data.email
                          ? "form-control is-valid"
                          : "form-control is-invalid"
                      }
                      placeholder="you@example.com"
                      name="email"
                      value={data.email}
                      onChange={handelchange}
                      required
                    />
                  </div>

                  <div className="col-12">
                    <label className="form-label">Address</label>
                    <textarea
                      className={
                        data.address
                          ? "form-control is-valid"
                          : "form-control is-invalid"
                      }
                      placeholder="1234 Main St"
                      name="address"
                      value={data.address}
                      onChange={handelchange}
                    />
                  </div>

                  <div className="col-md-5">
                    <label className="form-label">Country</label>
                    <select
                      className={
                        data.country
                          ? "form-select is-valid"
                          : "form-select is-invalid"
                      }
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
                      className={
                        data.state
                          ? "form-select is-valid"
                          : "form-select is-invalid"
                      }
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
                    <input
                      type="number"
                      name="pin"
                      value={data.pin}
                      onChange={handelchange}
                      className={
                        data.pin
                          ? "form-control is-valid"
                          : "form-control is-invalid"
                      }
                      required
                    />
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
                          defaultChecked={data.skill.includes("Angular")}
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
                          defaultChecked={data.skill.includes("React")}
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
                          defaultChecked={data.skill.includes("Node.JS")}
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
                          defaultChecked={data.skill.includes("JavaScript")}
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
                          defaultChecked={data.skill.includes("Flutter")}
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
                          defaultChecked={data.skill.includes("Java")}
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

                    {data.experience.map((data, id) => {
                      return (
                        <div className="card mx-3 mt-3" key={id}>
                          <div className="card-body">
                            <h6 className="card-title text-muted mb-3">
                              Experience #{id + 1}
                              <a
                                href="#"
                                className="float-end text-danger fw-normal"
                                onClick={() => handelremove(id)}
                              >
                                Remove
                              </a>
                            </h6>
                            <div className="row g-3">
                              <div className="col-6">
                                <label className="form-label">
                                  Company Name
                                </label>
                                <input
                                  type="text"
                                  className={
                                    data.companyname
                                      ? "form-control is-valid"
                                      : "form-control is-invalid"
                                  }
                                  value={data.companyname}
                                  name="companyname"
                                  onChange={(e) => handexp(e, id)}
                                />
                              </div>
                              <div className="col-6">
                                <label className="form-label">
                                  Duration{" "}
                                  <span className="text-muted">
                                    (in months)
                                  </span>
                                </label>
                                <input
                                  type="number"
                                  className={
                                    data.duration
                                      ? "form-control is-valid"
                                      : "form-control is-invalid"
                                  }
                                  value={data.duration}
                                  name="duration"
                                  onChange={(e) => handexp(e, id)}
                                />
                              </div>
                              <div className="col-12">
                                <label className="form-label">
                                  Describe your responsibilities
                                </label>
                                <textarea
                                  className={
                                    data.responsibilities
                                      ? "form-control is-valid"
                                      : "form-control is-invalid"
                                  }
                                  value={data.responsibilities}
                                  name="responsibilities"
                                  onChange={(e) => handexp(e, id)}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}

                    <a className="d-block mt-3" href="#" onClick={handeladd}>
                      Add more experience
                    </a>
                  </div>
                </div>

                <hr className="my-4" />

                <button className="btn btn-primary" type="submit">
                  Edit Candidate
                </button>
              </div>
            </div>
          </main>
        </form>
      </Container>
    </Box>
  );
}

export default Edit;
