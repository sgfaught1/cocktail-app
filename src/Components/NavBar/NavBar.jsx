import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import './NavBar.css'

function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default function NavBar(props) {
    return (
        <React.Fragment >
            <CssBaseline />
            <HideOnScroll {...props}>
                <AppBar >
                    <Toolbar style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: '#5c0202' }}>
                        <div>
                            <Typography variant="h6" component="div">
                                <a className='nav-links' id = 'first-link' href='#hero'>Scroll to hide App bar</a>
                            </Typography>
                        </div>
                        <div className='middle-nav-flex'>
                            <div>
                                <Typography variant="h6" component="div">
                                    <a className='nav-links' href='#hero'>Scroll to hide App bar</a>
                                </Typography>
                            </div>
                            <div>
                                <Typography variant="h6" component="div">
                                    <a className='nav-links' href='#hero'>Scroll to hide App bar</a>
                                </Typography>
                            </div>
                            <div>
                                <Typography variant="h6" component="div">
                                    <a className='nav-links' href='#hero'>Scroll to hide App bar</a>
                                </Typography>
                            </div>


                        </div>
                        <div>
                            <Typography variant="h6" component="div">
                                <a className='nav-links' href='#hero'>Scroll to hide App bar</a>
                            </Typography>
                        </div>


                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <Toolbar />

        </React.Fragment>
    );
}
