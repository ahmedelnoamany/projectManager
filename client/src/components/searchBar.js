import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: false,
      searchString: '',
    }
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }
  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }
  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }
  setWrapperRef(node) {
    this.wrapperRef = node;
  }
  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.setState({ search: false })
    }
  }
  render() {
    return (
      <div className="search">
        <a onClick={() => this.setState({ search: true })} className="header__header-link">
          <svg className="header__header-icon">
            <use href="../assets/symbol-defs.svg#icon-search"></use>
          </svg>
        </a>
        {(this.state.search) &&
          <div className="search__main-container" ref={this.setWrapperRef}>
            <div className="menu-card">
              <div className="search__form-group">
                <input type="email" className="search__form-group--input" id="search" placeholder="Search..."/>
                <button className="search__form-group--submit-btn">
                  <svg className="header__header-icon">
                    <use href="../assets/symbol-defs.svg#icon-search"></use>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        }
      </div>
    )
  }
}
