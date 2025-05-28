/** @format */

import "./loginPage.scss";
import { Formik, Field, Form } from "formik";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/slices/autSlice";

export function LoginPage() {
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated, error } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/line");
    }
  }, [isAuthenticated, navigate]);
  return (
    <div className="loginPageContainer">
      <div className="loginForm">
        <h1 className="loginPageTitle">Inlogning</h1>
        <Formik
          initialValues={{
            scaniaId: "",
            password: "",
          }}
          enableReinitialize={true}
          onSubmit={async (values, { setErrors }) => {
            setSubmitting(true);
            try {
              await dispatch(
                loginUser({
                  userId: values.scaniaId,
                  password: values.password,
                })
              ).unwrap(); // Ensure we get the error if rejected

              navigate("/line"); // Redirect after successful login
            } catch (error) {
              setErrors({ credentialsFailed: error });
            } finally {
              setSubmitting(false);
            }
          }}
        >
          <Form>
            <div className="formDiv">
              <div className="formRow">
                <label htmlFor="scaniaId">Scania Id</label>
                <Field id="scaniaId" name="scaniaId" placeholder="sss-xxx" />
              </div>

              <div className="formRow">
                <label htmlFor="password">Lösenord</label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  placeholder="XXXX"
                />
              </div>
              {error && <p className="errorMessage">{error}</p>}
              <button className="loginPageSubmit" type="submit">
                {" "}
                {submitting ? "Loggar in..." : "Logga in"}
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
