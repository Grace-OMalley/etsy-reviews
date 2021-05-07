import React from 'react';

class PageNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pagesCount: Math.ceil(this.props.productList / 4)
    }
    // bindings go here
  }

// methods here

  render() {
    return (
      <div>
        <div>This is the number of pages: {this.props.pagesCount}</div>
        <div>This is the current page: {this.props.currentPage}</div>

      </div>

    )
  }
}

export default PageNav;