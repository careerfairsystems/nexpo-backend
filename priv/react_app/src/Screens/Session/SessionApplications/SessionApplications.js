import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isNil, sortBy } from 'lodash/fp';
import { List, Avatar, Popconfirm, Button } from 'antd';
import NotFound from '../../NotFound';
import LoadingSpinner from '../../../Components/LoadingSpinner';
import HtmlTitle from '../../../Components/HtmlTitle';
import UpdateSessionApplicationForm from '../../../Forms/UpdateSessionApplicationForm';
import '../Session.css';

class SessionApplications extends Component {
  static propTypes = {
    applications: PropTypes.array,
    companies: PropTypes.object,
    getAllCompanies: PropTypes.func.isRequired,
    destroyStudentSessionAppl: PropTypes.func.isRequired,
    fetching: PropTypes.bool.isRequired,
    updateStudentSessionAppl: PropTypes.func.isRequired
  };

  static defaultProps = {
    companies: {},
    applications: null
  };

  constructor(props) {
    super(props);
    this.state = { editing: {} };
  }

  componentWillMount() {
    const { getAllCompanies } = this.props;
    getAllCompanies();
  }

  getCompany = ({ company }) => {
    const { companies } = this.props;
    return companies[company] || {};
  };

  toggleEditMode = id => {
    const { editing: stateEditing } = this.state;
    const editing = {};
    editing[id] = !stateEditing[id];
    this.setState({ editing });
  };

  updateStudentSessionAppl = (id, values) => {
    const { updateStudentSessionAppl } = this.props;
    updateStudentSessionAppl(id, { studentSessionApplication: values });
    this.setState({ editing: {} });
  };

  renderApplication = application => {
    const { editing } = this.state;
    const { destroyStudentSessionAppl } = this.props;
    return (
      <List.Item
        actions={[
          <Button
            type={editing[application.id] ? 'default' : 'primary'}
            onClick={() => this.toggleEditMode(application.id)}
          >
            {editing[application.id] ? 'Cancel' : 'Edit'}
          </Button>,
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => destroyStudentSessionAppl(application.id)}
          >
            <span style={{ color: '#ff4d4f', cursor: 'pointer' }}>Delete</span>
          </Popconfirm>
        ]}
      >
        <List.Item.Meta
          title={this.getCompany(application).name}
          description={this.renderMotivationField(
            application.motivation,
            application.id
          )}
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
  };

  renderMotivationField = (motivation, id) => {
    const { editing } = this.state;
    if (editing[id])
      return (
        <UpdateSessionApplicationForm
          initialValues={{ motivation }}
          id={id}
          onSubmit={values => this.updateStudentSessionAppl(id, values)}
        />
      );
    return `Motivation: ${motivation}`;
  };

  render() {
    const { applications, fetching } = this.props;

    if (fetching) {
      return <LoadingSpinner />;
    }

    if (isNil(applications)) {
      return <NotFound />;
    }

    return (
      <div className="session-applications">
        <HtmlTitle title="Student Session Application" />
        <h1>Student Session Applications</h1>
        <List
          size="large"
          bordered
          dataSource={sortBy(appl => this.getCompany(appl).name, applications)}
          renderItem={this.renderApplication}
          locale={{ emptyText: 'No Applications' }}
        />
      </div>
    );
  }
}

export default SessionApplications;