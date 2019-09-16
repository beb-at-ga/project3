
const ListItemLink = (props) => {
  const { icon, primary, to } = props;

  const renderLink = useMemo(
    () =>
      forwardRef((itemProps, ref) => (
        // with react-router-dom@^5.0.0 use `ref` instead of `innerRef`
        <Link to={to} {...itemProps} innerRef={ref} />
      )),
    [to],
  );

  return (
    <li>
      <ListItem button component={renderLink} >
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
}
ListItemLink.propTypes = {
  icon: PropTypes.node.isRequired,
  primary: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
};
const Nav = (props) => {
  const classes = useStyles();
  const [state, setState] = useState({
    left: false,
  });

  const { container } = props;
  // const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setState(!state.mobileOpen);
  };


  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div className={classes.list} role="presentation" onClick={toggleDrawer(side, false)} onKeyDown={toggleDrawer(side, false)} >
      <List component="nav" aria-label="home login logout about">
        <ListItemLink to="/" primary="Home" icon={<InboxIcon />} />
        <ListItemLink to="/signup" primary="Signup" icon={<DraftsIcon />} />
        <ListItemLink to="/login" primary="Login" icon={<DraftsIcon />} />
      </List>

      <Divider />
      <List component="nav" aria-label="home projects blog about">
        <ListItemLink to="/about" primary="About" icon={<DraftsIcon />} />
        <ListItemLink to="/logout" primary="Logout" icon={<DraftsIcon />} />
      </List>
    </div>
  );

  return (
    <div>
      <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer('left', true)}>
        <MenuIcon />
      </IconButton>
      <SwipeableDrawer open={state.left} onClose={toggleDrawer('left', false)} onOpen={toggleDrawer('left', true)} >
        {sideList('left')}
      </SwipeableDrawer>
    </div>
  );
}
