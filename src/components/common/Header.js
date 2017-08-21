import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';

const Header = ({loading}) => {
  return(
    <nav>
      <IndexLink to="/">Home</IndexLink>
      {"|"}
      <Link to="courses">Courses</Link>
      {"|"}
      <Link to="about">About</Link>
      {
        loading &&
        <LoadingDots interval={100} dots={20}/>
      }
    </nav>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
