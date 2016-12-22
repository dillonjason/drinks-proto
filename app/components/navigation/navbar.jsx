class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar-component"></div>
    );
  }
}

Navbar.propTypes = {
  items: React.PropTypes.arrayOf(React.PropTypes.objectOf({
    to: React.PropTypes.string.isRequired,
    icon: React.PropTypes.element.isRequired,
    label: React.PropTypes.string.isRequired,
  })).isRequired,
};

Navbar.defaultProps = {};

export default Navbar;
