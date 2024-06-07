import './Footer.css'
import Box from '@mui/material/Box';
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
    return (
        <div id = 'footer' className='footer'>
            <h2>FAQ</h2>
            <h3>DID YOU KNOW?</h3>
            <div className='box-flex'>
                <Box
                    height={200}
                    width={200}
                    my={4}
                    display="flex"
                    alignItems="center"
                    gap={4}
                    p={2}
                    sx={{ border: '2px solid grey' }}
                >
                    The Daiquiri was a favorite of Ernest Hemingway. He often enjoyed a variation known as the Hemingway Daiquiri, which includes grapefruit juice and maraschino liqueur.                </Box>
                <Box
                    height={200}
                    width={200}
                    my={4}
                    display="flex"
                    alignItems="center"
                    gap={4}
                    p={2}
                    sx={{ border: '2px solid grey' }}
                >
                    The Mint Julep is known as the official drink of the Kentucky Derby. It's a refreshing cocktail made with bourbon, mint, sugar, and water, traditionally served in a silver or pewter cup.
                </Box>
                <Box
                    height={200}
                    width={200}
                    my={4}
                    display="flex"
                    alignItems="center"
                    gap={4}
                    p={2}
                    sx={{ border: '2px solid grey' }}
                >
                    The classic garnish for a Pina Colada is a slice of pineapple and a maraschino cherry. Sometimes, it's also served with a paper umbrella for a tropical touch.
                </Box>
            </div>
            <div className='footer-accordian'>
                <Accordion sx={{ backgroundColor: 'antiquewhite' }} className='fixed-height-summary'>
                    <AccordionSummary
                        
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        Q: What is the origin of the word "cocktail"?
                    </AccordionSummary>
                    <AccordionDetails >
                        A: The origin of the word "cocktail" is somewhat debated,
                        but one popular theory is that it comes from the French term
                        "coquetier," meaning egg cup, which was used to serve mixed drinks
                        in New Orleans in the early 19th century.
                    </AccordionDetails>
                </Accordion>
                <Accordion sx={{ backgroundColor: 'antiquewhite' }} className='fixed-height-summary'>
                    <AccordionSummary

                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        Q: What makes a Martini "dirty"?
                    </AccordionSummary>
                    <AccordionDetails>
                        A: A Martini is considered "dirty" when olive brine is added to the mix, giving the drink a cloudy appearance and a slightly salty taste.
                    </AccordionDetails>
                </Accordion>
                <Accordion sx={{ backgroundColor: 'antiquewhite' }} className='fixed-height-summary'>
                    <AccordionSummary

                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        Q: What is the difference between a cocktail and a mocktail?
                    </AccordionSummary>
                    <AccordionDetails>
                        A: A cocktail is an alcoholic mixed drink, while a mocktail is a non-alcoholic version of a mixed drink, designed to replicate the taste and experience of a cocktail without any alcohol content.
                    </AccordionDetails>
                </Accordion>
                <Accordion sx={{ backgroundColor: 'antiquewhite' }} className='fixed-height-summary'>
                    <AccordionSummary

                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        Q: Which cocktail is traditionally served in a copper mug?
                    </AccordionSummary>
                    <AccordionDetails>
                        A: The Moscow Mule is traditionally served in a copper mug. The mug helps keep the drink cold and adds a unique aesthetic appeal to this classic cocktail made with vodka, ginger beer, and lime juice.
                    </AccordionDetails>
                </Accordion>

            </div>
            <div className='contact'>
                <h2>Contact Us</h2>
                <div className='contact2'>
                    <a href=""><FacebookIcon style={{ fontSize: '3em', color: '#196aff' }} /></a>
                    <a href=""><InstagramIcon style={{ fontSize: '3em', color: '#fe1867' }} /></a>
                    <a href=""><LinkedInIcon style={{ fontSize: '3em', color: 'white' }} /></a>

                </div>
                <p>
                    Prefer the old fashion way?
                    <a href='mailto:sgfaught1@gmail.com'>Send us an email!</a>
                </p>
            </div>
        </div>
    );
}
