import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../schemas/authSchema";
import { useDispatch, useSelector } from "react-redux";
import { registerUser, clearAuthState } from "../../features/auth/authSlice";
import { useEffect } from "react";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const { loading, error, success } = useSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = (data) => {
    dispatch(registerUser(data));
  };

  useEffect(() => {
    if (success) {
      alert("Registration successful");
      reset();
      dispatch(clearAuthState());
    }
  }, [success]);

  return (
    <div style={{ maxWidth: 400, margin: "auto" }}>
      <h2>Register</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input placeholder="Name" {...register("name")} />
          <p>{errors.name?.message}</p>
        </div>

        <div>
          <input placeholder="Email" {...register("email")} />
          <p>{errors.email?.message}</p>
        </div>

        <div>
          <input placeholder="Mobile" {...register("mobile")} />
          <p>{errors.mobile?.message}</p>
        </div>

        <div>
          <input type="password" placeholder="Password" {...register("password")} />
          <p>{errors.password?.message}</p>
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Registering..." : "Register"}
        </button>

        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
};

export default RegisterPage;