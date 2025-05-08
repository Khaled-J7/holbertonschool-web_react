import PropTypes from "prop-types";

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
            <th colSpan={2} role="cell">
              {textFirstCell}
            </th>
          </tr>
        </>
      );
    } else {
      return (
        <>
          <tr>
            <th role="cell">{textFirstCell}</th>
            <th role="cell">{textSecondCell}</th>
          </tr>
        </>
      );
    }
  } else {
    return (
      <>
        <tr>
          <td role="cell">{textFirstCell}</td>
          <td role="cell">{textSecondCell}</td>
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
