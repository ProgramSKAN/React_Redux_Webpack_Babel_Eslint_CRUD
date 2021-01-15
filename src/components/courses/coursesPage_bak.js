import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

class CoursesPage_bak extends React.Component {
  /*constructor(props) {
    super(props);
    this.state = {
      course: {
        title: "",
      },
    };

    this.handleChange = this.handleChange.bind(this); //keeping this in constructor is preferred than onChange, since now function is bound once instead of every render
  }

  handleChange(e) {
    const course = { ...this.state.course, title: e.target.value }; //cloned state because we should treat react state as immutable
    //this.setState({ course: course });
    this.setState({ course });
  }  OR*/
  state = {
    course: {
      title: "",
    },
  };

  handleChange = (e) => {
    //class fields / arrow functions inherit binding context of enclosing scope.
    const course = { ...this.state.course, title: e.target.value };
    this.setState({ course });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    //this.props.dispatch(courseActions.createCourse(this.state.course));  //1.without mapDispatchToProps
    //this.props.createCourse(this.state.course);  //2.with mapDispatchToProps
    // this.props.actions.createCourse(this.state.course); //3.with BindActionCreators
    this.props.createCourse(this.state.course); //4.with declare mapDispatchToProps as an object
  };

  render() {
    return (
      //enter key also submits form
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h3>Add Course</h3>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.course.title}
        />
        <input type="submit" value="Save" />
        {this.props.courses.map((course) => (
          <div key={course.title}>{course.title}</div>
        ))}
      </form>
    );
  }
}

CoursesPage_bak.propTypes = {
  courses: PropTypes.array.isRequired,
  //dispatch: PropTypes.func.isRequired, //1.without mapDispatchToProps
  //createCourse: PropTypes.func.isRequired, //2.with mapDispatchToProps
  //actions: PropTypes.object.isRequired, //3.with BindActionCreators
  createCourse: PropTypes.func.isRequired, //4.with declare mapDispatchToProps as an object
};

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses,
  };
}

//2.with mapDispatchToProps
function mapDispatchToProps2(dispatch) {
  return {
    createCourse: (course) => dispatch(courseActions.createCourse(course)),
  };
}

//3.with BindActionCreators
function mapDispatchToProp3(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch),
  };
}

//4.with declare mapDispatchToProps as an object instead of function.in this case each property is automatically bound to dispatch.
const mapDispatchToProps = {
  createCourse: courseActions.createCourse,
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage_bak);
