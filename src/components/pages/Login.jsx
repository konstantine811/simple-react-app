import { ErrorMessage, Field, Form, Formik } from "formik";

import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  username: Yup.string().required("Required"),
  // email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6, "Password too short").required("Required"),
});

const Login = () => {
  return (
    <div className="grow flex justify-center items-center">
      <div className="p-10 bg-black/15 backdrop-blur-md rounded-lg shadow-lg">
        <h1 className="text-center text-3xl py-2">Login Form</h1>
        <Formik
          initialValues={{ username: "", password: "" }}
          validationSchema={SignupSchema}
          onSubmit={async (values) => {
            let response = await fetch("http://localhost:3000/login", {
              method: "POST",
              headers: {
                "Content-Type": "application/json;charset=utf-8",
              },
              body: JSON.stringify(values),
            });
            response.json().then((data) => {
              console.log(data);
            });
          }}
        >
          {({ touched, isValid }) => {
            console.log("Erorrs:", !Object.keys(touched).length);
            return (
              <Form className="flex flex-col gap-4">
                <div>
                  <Field
                    className="input input-solid"
                    placeholder="Username"
                    type="text"
                    name="username"
                  />
                  <ErrorMessage
                    className="text-red-700"
                    name="username"
                    component="div"
                  />
                </div>
                {/*                 <div>
                  <Field
                    className="input input-solid"
                    type="email"
                    name="email"
                    placeholder="Email"
                  />
                  <ErrorMessage
                    className="text-red-700"
                    name="email"
                    component="div"
                  />
                </div> */}
                <div>
                  <Field
                    className="input input-solid"
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                  <ErrorMessage
                    className="text-red-700"
                    name="password"
                    component="div"
                  />
                </div>
                <button
                  className="btn"
                  type="submit"
                  disabled={!isValid || !Object.keys(touched).length}
                >
                  Submit
                </button>
              </Form>
            );
          }}
        </Formik>
      </div>
      {/*   <form
        className="p-10 bg-black/15 backdrop-blur-md rounded-lg shadow-lg"
        onSubmit={handleSubmit}
      >
        <h1 className="text-center text-3xl py-2">Login Form: </h1>
        <div>
          <label>
            <div>Username:</div>
            <input
              type="text"
              name="username"
              className="border p-1 rounded"
              value={formData.username}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            <div>Email:</div>
            <input
              type="email"
              name="email"
              className="border p-1 rounded"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            <div>Password:</div>
            <input
              type="password"
              name="password"
              className="border p-1 rounded"
              value={formData.password}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="flex justify-center py-4">
          <button className="btn" type="submit">
            Submit
          </button>
        </div>
      </form> */}
    </div>
  );
};

export default Login;
