import React, { Fragment } from "react";

const AccountItem = ({ title, value }) => {
  return (
    <Fragment>
      <label for={title.toLowerCase()} className='label'>
        {title}
      </label>
      <p className='value'>{value}</p>
    </Fragment>
  );
};

export default AccountItem;
