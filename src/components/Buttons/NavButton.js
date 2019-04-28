import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'gatsby';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  navButton: {
    marginLeft: theme.spacing.unit * 3
  }
});

const NavButton = ({ classes, children, color = 'inherit', internal = true, to, variant = '' }) =>
  internal ? (
    <Button component={Link} className={classes.navButton} color={color} to={to} variant={variant}>
      {children}
    </Button>
  ) : (
    <Button component='a' className={classes.navButton} color={color} href={to} variant={variant}>
      {children}
    </Button>
  );

NavButton.propTypes = {
  classes: PropTypes.object,
  color: PropTypes.string,
  to: PropTypes.string.isRequired,
  variant: PropTypes.string
};

export default memo(withStyles(styles)(NavButton));
