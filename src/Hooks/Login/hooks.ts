import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { create } from "../../Slice/Login/signupSlice";
import { update } from "../../Slice/Login/loginSlice";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signup = useCallback(
    async (username: string, email: string, password: string) => {
      dispatch(
        create({
          isLoading: true,
          error: false,
          data: {},
        })
      );
      try {
        const res = await fetch("http://localhost:8010/user/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            email,
            password,
          }),
        });
        const result = await res.json();
        if (result.success) {
          dispatch(
            create({
              isLoading: false,
              data: {
                username: result.username,
              },
              error: false,
            })
          );
          alert("Id created successfully");
          navigate("/");
        } else {
          dispatch(
            create({
              isLoading: false,
              data: {
                errorMsg: result.message,
              },
              error: true,
            })
          );
        }
      } catch (error) {
        dispatch(
          create({
            isLoading: false,
            data: {
              errorMsg: "catch error",
            },
            error: true,
          })
        );
      }
    },
    []
  );

  const login = useCallback(async (username: string, password: string) => {
    console.log("line72");
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

      const res = await fetch("http://localhost:8010/user/login", {
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

  return { signup, login };
};
