import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  tableHeader: {
    border: "0.5px solid #ababab",
    backgroundColor: "#deb5b545",
  },
  tableData: {
    border: "0.5px solid #ababab",
    height: "20px",
    backgroundColor: "#f5f5f5ab",
  },
});

export default function CourseListRow({
  isHeader = false,
  textFirstCell = "",
  textSecondCell = null,
}) {
  if (isHeader == true) {
    if (textSecondCell == null) {
      return (
        <>
          <tr>
            <th className={css(styles.tableHeader)} colSpan={2} role="cell">
              {textFirstCell}
            </th>
          </tr>
        </>
      );
    } else {
      return (
        <>
          <tr>
            <th className={css(styles.tableHeader)} role="cell">
              {textFirstCell}
            </th>
            <th className={css(styles.tableHeader)} role="cell">
              {textSecondCell}
            </th>
          </tr>
        </>
      );
    }
  } else {
    return (
      <>
        <tr>
          <td role="cell" className={css(styles.tableData)}>
            {textFirstCell}
          </td>
          <td role="cell" className={css(styles.tableData)}>
            {textSecondCell}
          </td>
        </tr>
      </>
    );
  }
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string,
  textSecondCell: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.object,
  ]),
};
