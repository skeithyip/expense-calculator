import React from 'react';
import NumberFormat from 'react-number-format';

class InputAmount extends React.Component<any> {
  onValueChange = (values: { value: string }) => {
    const { id, onChange } = this.props;

    onChange({ target: { id, value: values.value } });
  };

  render() {
    const { inputRef, id, onChange, ...other } = this.props;

    return (
      <NumberFormat
        {...other}
        getInputRef={inputRef}
        onValueChange={this.onValueChange}
        thousandSeparator
        prefix="$"
      />
    );
  }
}

export default InputAmount;
