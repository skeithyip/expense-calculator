import { connect } from 'react-redux';

import Hello from '../components/Hello';
import * as actions from '../actions/';
import { StoreState } from '../types/index';

export function mapStateToProps({ enthusiasmLevel, languageName }: StoreState) {
  return {
    enthusiasmLevel,
    name: languageName
  };
}

const mapDispatchToProps = {
  onIncrement: actions.incrementEnthusiasm,
  onDecrement: actions.decrementEnthusiasm
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hello);
