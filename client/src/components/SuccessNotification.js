import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { hideSuccess } from "../actions/auth";
import { hideCartSuccess } from "../actions/cart";
import "../styles/main.css";

export function SuccessNotification() {
  const isSignedIn = useSelector(state => state.auth.isSignedIn);
  const message = useSelector(state => state.auth.success);
  const itemInCart = useSelector(state => state.cart.success);

  const dispatch = useDispatch();

  function handleClose() {
    dispatch(hideSuccess());
  }

  function cartClose() {
    dispatch(hideCartSuccess());
  }
  useEffect(() => {
    function cClose() {
      dispatch(hideCartSuccess());
    }
    const timeout = setTimeout(() => {
      cClose();
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, [itemInCart, dispatch]);

  if (itemInCart) {
    return (
      <>
        <article
          className="message is-success"
          style={{ width: "fit-content", position: "fixed", zIndex: "2" }}
        >
          <span className="message-body">{itemInCart}</span>
          <button className="button is-success is-small" onClick={cartClose}>
            Close
          </button>
        </article>
      </>
    );
  }
  return (
    <>
      {isSignedIn && message && (
        <article
          className="message is-success"
          style={{ width: "fit-content", position: "absolute" }}
        >
          <span className="message-body">{message}</span>
          <button className="button is-success is-small" onClick={handleClose}>
            Close
          </button>
        </article>
      )}
    </>
  );
}
