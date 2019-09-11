import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import styles from "./FormSubscribe.module.css";

export default class FormSubscribe extends React.Component {
  state = {
    value: ""
  };

  onChange = e => {
    this.setState({ value: e.target.value });
  };

  render() {
    const { value } = this.state;
    return (
      <form className={styles.form}>
        <h3 className={styles.title}>
          <div className={styles.iconWrap}>
            <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
          </div>
          <span>Email Subscribe</span>
        </h3>
        <div className={styles.line}></div>
        <p className={styles.text}>
          Want to be the first to know when new videos available? Subscribe to
          our weekly email newsletter. No spam!
        </p>
        <input
          placeholder="Your email"
          className={styles.input}
          type="text"
          defultvalue={value}
          onChange={this.onChange}
        />
        <button className={styles.button} type="submit">
          Subscribe
        </button>
      </form>
    );
  }
}
