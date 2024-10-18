import React, { Component } from 'react';
import { Table } from 'antd';

export default class TableData extends Component {
  columns = [
    {
      title: 'First Name',
      dataIndex: 'fname',
      key: 'fname',
    },
    {
      title: 'Last Name',
      dataIndex: 'lname',
      key: 'lname',
    },
    {
      title: 'Phone Number',
      dataIndex: 'numbar',
      key: 'numbar',
    },
    {
      title: 'City',
      dataIndex: 'city',
      key: 'city',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, item, index) => (
        <>
          <button
            type="button"
            className="btn"
            onClick={() => this.props.onEditUser(index)}
            id='edit'
            >
            Edit
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => this.props.onDeleteUser(index)}
            id='dell'
          >
            Delete
          </button>
        </>
      ),
    },
  ];

  render() {
    return (
      <div className="container-fluid" style={{ marginTop: "5px" }}>
        <Table
          dataSource={this.props.data.map((item, index) => ({ ...item, key: index }))}
          columns={this.columns}
        />
      </div>
    );
  }
}
