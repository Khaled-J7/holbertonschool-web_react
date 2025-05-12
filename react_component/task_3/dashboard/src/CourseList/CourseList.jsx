import CourseListRow from "./CourseListRow";
import "./CourseList.css";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";

export default function CourseList({ courses = [] }) {
  return (
    <>
      <table id="CourseList">
        <thead>
          {courses.length != 0 ? (
            <>
              <CourseListRow
                key={uuidv4()}
                isHeader={true}
                textFirstCell={"Available courses"}
              ></CourseListRow>
              <CourseListRow
                key={uuidv4()}
                isHeader={true}
                textFirstCell={"Course name"}
                textSecondCell={"Credit"}
              ></CourseListRow>
            </>
          ) : null}
        </thead>
        <tbody>
          {courses.length == 0 ? (
            <CourseListRow
              key={uuidv4()}
              isHeader={true}
              textFirstCell={"No course available yet"}
            ></CourseListRow>
          ) : (
            courses.map((obj) => {
              return (
                <CourseListRow
                  key={uuidv4()}
                  isHeader={false}
                  textFirstCell={obj.name}
                  textSecondCell={obj.credit}
                ></CourseListRow>
              );
            })
          )}
        </tbody>
      </table>
    </>
  );
}

CourseList.propTypes = {
  courses: PropTypes.array,
};
