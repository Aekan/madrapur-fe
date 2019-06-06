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
    const pageContent = responseData;

    document.querySelectorAll('meta').forEach(
      (element, i) => {
        if (i < 3) {
          return;
        }


        element.remove();
      }
    );

    Object.entries(pageContent).forEach(
      (metaEntry) => {
        const name = metaEntry[0];

        if (name.indexOf('meta') === 0) {
          const content = metaEntry[1];

          const details = name.substring(5).split(/:(.+)/);
          const type = details[0];
          const typeValue = details[1];

          const element = document.createElement('meta', [type]);
          element.setAttribute(type, typeValue);
          element.setAttribute('content', content);
          document.head.appendChild(element);

          console.log(element);
        }
      }
    );

    this.setState({ pageContent });
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
