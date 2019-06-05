/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/no-danger */
import React, { PureComponent } from 'react';
import { getPageContentBySlug } from '../../api/index';

class HomePage extends PureComponent {
  state = {
    pageContent: {
      body: "<ul><li>one</li><li>two</li><li>three</li></ul>",
      created_at: 1559140754,
      id: 2,
      slug: "my-static-page",
      status: 1,
      title: "My static page",
      updated_at: 1559140754,
      view: "",
    },
    slug: '',
  }

  componentDidMount() {
    const { location } = this.props;
    const locationPieces = location.pathname.split('/');
    const slug = locationPieces[locationPieces.length - 1];

    this.setState({
      slug,
    });

    getPageContentBySlug(slug, this.getPageContentCb);
  }

  getPageContentCb = (responseData) => {
    this.setState({ pageContent: responseData });

    console.log(responseData);
  }

  render() {
    const { pageContent } = this.state;

    return (
      <div>
        <h1>{pageContent.title}</h1>

        <div id="pageContent" dangerouslySetInnerHTML={{ __html: pageContent.body }} />
      </div>
    );
  }
}

export default HomePage;
