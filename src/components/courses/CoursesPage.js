import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';

class CoursesPage extends React.Component {
  constructor(props, context)  {
    super(props, context);
    this.state = {
      course : {
        title: ""
      }
    };
    this.onTileChange = this.onTileChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }
  onTileChange(event) {
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({course:course});
  }

  onClickSave() {
    this.props.actions.createCourse(this.state.course);
  }
  courseRow(course, index) {
    return (
      <div key={index}>
        {course.title}
      </div>
    );
  }
  render() {
    return (
      <div>
        <h1>This is courses Page</h1>
        <CourseList courses={this.props.courses} />
        <h1>Add courses below</h1>
        <input
          type="text"
          onChange={this.onTileChange}
          value={this.state.course.title} />
        <input
          type="submit"
          onClick={this.onClickSave}
          value="Save" />
      </div>
    );
  }
}
CoursesPage.propTypes = {
  actions: PropTypes.object.isRequired,
  courses: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}
function mapDispatchToProps(dispatch) {
  return {
    //createCourse: (course) => dispatch(courseActions.createCourse(course))
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
