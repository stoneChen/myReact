import React from 'react';
import Confirm from '../../widget/Confirm';
import Q from 'q';

const doc = document;
const body = doc.body;

export default function (content) {
  const defer = Q.defer();
  const promise = defer.promise;
  const wrapper = body.appendChild(doc.createElement('div'));
  const onConfirm = () => {
    defer.resolve();
  };
  const onCancel = () => {
    defer.reject();
  };
  promise.fin(function () {
    React.unmountComponentAtNode(wrapper);
    setTimeout(() => wrapper.remove(), 1);
  });
  React.render(<Confirm content={content} onConfirm={onConfirm} onCancel={onCancel} show/>, wrapper);
  return promise;
}
