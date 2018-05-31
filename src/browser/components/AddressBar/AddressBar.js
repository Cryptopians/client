import React from 'react';
import classNames from 'classnames';
import { func, number, string } from 'prop-types';
import { noop } from 'lodash';

import ButtonBar from '../ButtonBar';
import styles from './AddressBar.scss';

const RETURN_KEY = 13;

export default class AddressBar extends React.Component {
  static propTypes = {
    className: string,
    query: string,
    tabCount: number,
    onQuery: func
  };

  static defaultProps = {
    className: null,
    query: '',
    tabCount: 1,
    onQuery: noop
  };

  componentDidUpdate(prevProps) {
    if (this.props.query !== prevProps.query) {
      this.input.value = this.props.query;
      this.input.blur();
    }

    if (this.props.tabCount > prevProps.tabCount) {
      // Focus the address field after opening a new tab
      this.input.value = '';
      this.input.focus();
    }
  }

  render() {
    return (
      <div className={classNames(styles.addressBar, this.props.className)}>
        <input
          ref={this.registerRef}
          type="text"
          placeholder="Search or enter address"
          onKeyDown={this.handleKeyDown}
          defaultValue={this.props.query}
        />
        <ButtonBar />
      </div>
    );
  }

  handleKeyDown = (event) => {
    if (event.which === RETURN_KEY) {
      this.props.onQuery(event.target.value);
    }
  }

  registerRef = (el) => {
    this.input = el;
  }
}
