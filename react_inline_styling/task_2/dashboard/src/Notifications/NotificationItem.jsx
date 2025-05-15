import PropTypes from "prop-types";
import { v4 as uuid4 } from "uuid";
import { PureComponent } from "react";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  defaultStyle: {
    color: "blue",
  },
  urgentStyle: {
    color: "red",
  },
});

class NotificationItem extends PureComponent {
  render() {
    if (this.props.html != undefined) {
      let id = uuid4();
      let newfn = this.props.fn.bind(this, id);
      return (
        <li
          key={id}
          className={css(
            this.props.type == "urgent"
              ? styles.urgentStyle
              : styles.defaultStyle
          )}
          dangerouslySetInnerHTML={{ __html: this.props.html }}
          role="listitem"
          onClick={newfn}
        ></li>
      );
    } else {
      let id = uuid4();
      let newfn = this.props.fn.bind(this, id);
      return (
        <li
          key={uuid4()}
          className={css(
            this.props.type == "urgent"
              ? styles.urgentStyle
              : styles.defaultStyle
          )}
          role="listitem"
          onClick={newfn}
        >
          {this.props.value}
        </li>
      );
    }
  }
}

NotificationItem.propTypes = {
  type: PropTypes.string,
  html: PropTypes.string,
  value: PropTypes.string,
  fn: PropTypes.func,
};

export default NotificationItem;
