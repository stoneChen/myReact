import React from 'react';
import Confirm from '../../widget/Confirm';

export default function ({ title, onConfirm, onCancel }) {
  React.render(<Confirm title={title} onConfirm={onConfirm} onCancel={onCancel} show />,
    document.getElementById('overlay'));
}
