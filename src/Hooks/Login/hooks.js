import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { update } from "../../Slice/Login/loginSlice";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = useCallback(async (username, password) => {
    dispatch(
      update({
        isLoading: true,
        error: false,
        data: {},
      })
    );
    console.log("line80");

    try {
      console.log("line83");

      const res = await fetch("http://localhost:8000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const result = await res.json();
      console.log("result", result);

      if (result.success) {
        console.log("line99");

        dispatch(
          update({
            isLoading: false,
            error: false,
            data: {
              message: result.message,
            },
          })
        );
        navigate("/homepage");
      } else {
        console.log("line112");

        dispatch(
          update({
            isLoading: false,
            error: true,
            data: {
              message: result.message,
            },
          })
        );
      }
    } catch (error) {
      console.log("line125");

      dispatch(
        update({
          isLoading: false,
          error: true,
          data: {
            message: "Something went wrong.",
          },
        })
      );
    }
  }, []);

  return { login };
};
