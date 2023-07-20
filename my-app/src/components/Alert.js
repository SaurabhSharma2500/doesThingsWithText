import React from 'react';

export default function Alert(props) {
  const { alert, closeAlert } = props;

  return (
    alert && (
      <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
        <strong>{alert.type}</strong> {alert.msg}
        <button type="button" className="btn-close" onClick={closeAlert} aria-label="Close"></button>
      </div>
    )
  );
}
