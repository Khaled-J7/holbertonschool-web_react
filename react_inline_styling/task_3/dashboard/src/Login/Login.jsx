import withLogging from "../HOC/WithLogging.jsx";
import { StyleSheet, css } from "aphrodite";

const style = StyleSheet.create({
  appBody: {
    height: "500px",
    margin: "30px 15px",
    display: "flex",
    "@media (max-width: 900px)": {
      flexDirection: "column",
      justifyContent: "space-between",
      height: "100px",
    },
  },
  input: {
    marginRight: "10px",
    marginLeft: "10px",
    height: "20px",
  },
  btn: {
    height: "25px",
    width: "40px",
  },
});

function Login() {
  return (
    <>
      <p>Login to access the full dashboard</p>
      <div className={css(style.appBody)}>
        <form>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            data-testid="email"
            className={css(style.input)}
          ></input>
        </form>
        <form>
          <label htmlFor="pw">Password</label>
          <input id="pw" data-testid="pw" className={css(style.input)}></input>
        </form>
        <button className={css(style.btn)} type="submit">
          OK
        </button>
      </div>
    </>
  );
}

export default withLogging(Login);
