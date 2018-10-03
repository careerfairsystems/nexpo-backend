import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isNil } from 'lodash/fp';
import { List, Avatar, Popconfirm } from 'antd';
import NotFound from '../NotFound';
import LoadingSpinner from '../../Components/LoadingSpinner';
import HtmlTitle from '../../Components/HtmlTitle';

class SessionApplications extends Component {
  componentWillMount() {
    const { getAllCompanies } = this.props;
    getAllCompanies();
  }

  getCompany = ({ company }) => this.props.companies[company] || {};

  renderApplication = application => (
    <List.Item
      actions={[
        <Popconfirm
          title="Sure to delete?"
          onConfirm={() => this.props.destroyStudentSessionAppl(application.id)}
        >
          <span style={{ color: '#ff4d4f', cursor: 'pointer' }}>Delete</span>
        </Popconfirm>
      ]}
    >
      <List.Item.Meta
        title={this.getCompany(application).name}
        description={`Motivation: ${application.motivation}`}
        avatar={
          <Avatar
            src={this.getCompany(application).logoUrl}
            size={128}
            shape="square"
            alt="Company Logotype"
          />
        }
      />
    </List.Item>
  );

  render() {
    const { applications, fetching } = this.props;

    if (fetching) {
      return <LoadingSpinner />;
    }
    if (isNil(applications)) {
      return <NotFound />;
    }
    return (
      <div style={{ padding: 24 }}>
        <HtmlTitle title="Student Session Application" />
        <h1>Student Session Applications</h1>
        <List
          size="large"
          bordered
          dataSource={applications}
          renderItem={this.renderApplication}
          locale={{ emptyText: 'No Applications' }}
        />
      </div>
    );
  }
}

SessionApplications.propTypes = {
  applications: PropTypes.array.isRequired,
  getAllCompanies: PropTypes.func.isRequired,
  destroyStudentSessionAppl: PropTypes.func.isRequired
};

export default SessionApplications;