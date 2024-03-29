import React from 'react';
import getUserQuery from '../../queries/CurrentUser';
import { graphql } from 'react-apollo';
import { hashHistory } from 'react-router';

export default (WrappedComponent) => {
  return graphql(getUserQuery)((props) => {
    if (props.data.user) {
      return <WrappedComponent {...props} />;
    } else if (!props.data.loading && !props.data.user){
       hashHistory.push('/login');
       return <div />
    } else {
      return (
        <div />
      )
    }
  });
 };
 