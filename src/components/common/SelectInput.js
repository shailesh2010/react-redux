import React, {PropTypes} from 'react';

const SelectInput = ({name, value, options, error, onChange, defaultOption, label}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <select
        name={name}
        value={value}
        onChange={onChange}
        className="form-control">
          <option value="">{defaultOption}</option>
          {options.map((option) => {
            return (
              <option key={option.value} value={option.value}>{option.text}</option>
            );
          })}
        </select>
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  defaultOption: PropTypes.string,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  options:PropTypes.arrayOf(PropTypes.object),
  value: PropTypes.string
};

export default SelectInput;
