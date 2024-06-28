import { Box, Grid, List, ListItem, TextField, useMediaQuery, useTheme } from '@mui/material';
import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ChevronDownIcon from '@mui/icons-material/ExpandMore';
import TwitterIcon from '@mui/icons-material/Twitter';
import SendIcon from '@mui/icons-material/Send';
import FAQS from './FAQS';

import PropTypes from 'prop-types';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import Button from '@mui/material/Button';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
// import TabPanel from '@mui/material/TabPanel';
import Modal from '@mui/material/Modal';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import PhoneMissedIcon from '@mui/icons-material/PhoneMissed';
import ResponsiveTabsSection from './TabsSection';


const cards = [
    {
        cardImg: "https://www.megadicetoken.com/_next/image?url=%2Fassets%2Fimages%2Fcasino-slots.png&w=384&q=100",
        numbers: "4000",
        title: "Games from top providers",
        secNum: "50",
        secTitle: "Sports and eSports"
    },
    {
        cardImg: "https://www.megadicetoken.com/_next/image?url=%2Fassets%2Fimages%2Fsportsbook.png&w=384&q=100",
        numbers: "50,000",
        title: "Players"
    },
    {
        cardImg: "https://www.megadicetoken.com/_next/image?url=%2Fassets%2Fimages%2Fwhat-is-megadice-chips.png&w=384&q=100",
        numbers: "10,000",
        title: "Active monthly players"
    },
    {
        cardImg: "https://www.megadicetoken.com/_next/image?url=%2Fassets%2Fimages%2Fwhat-is-megadice-roulette.png&w=384&q=100",
        numbers: "$50M",
        title: "Monthly wagering"
    }
];

const cardAirDrop = [
    {
        season: "Season 1",
        desc: "Join the excitement with a stake in our $750,000 USD airdrop. Stay active, hit a wager volume of $5,000 USD within 21 days, and enjoy retroactive rewards. Based on expected launch value",
        icon: "https://www.megadicetoken.com/assets/images/logo-notext.svg",
        active: true
    },
    {
        season: "Season 2",
        desc: "Don't miss out on your share of the $750,000 USD airdrop. Wager with any cryptocurrency from presale to token launch and win big.Based on expected launch value.",
        icon: "https://www.megadicetoken.com/assets/images/logo-notext.svg"
    },
    {
        season: "Season 3",
        desc: "Grab your piece of the $750,000 USD airdrop pie. Keep your game strong within 21 days and wager at least $5,000 USD retroactively. *Based on expected launch value.",
        icon: "https://www.megadicetoken.com/assets/images/logo-notext.svg"
    },
]

const cardFeature = [
    {
        title: "DAILY REWARDS TO HOLDERS BASED ON CASINO PERFORMANCE",
        desc: "No other platform does it quite like Mega Dice. For holders of $DICE that have their tokens staked, we introduce our first of its kind daily rewards based on the performance of Mega Dice Casino. Now everyone can share in the success of one of the worlds fastest growing online crypto casinos. There is no better time than now to to enjoy the benefits that come with holding $DICE"
    },
    {
        title: "LIMITED EDITION NFTS",
        desc: "Select holders of $DICE and Mega Dice players will receive limited edition NFTs that will give access to special privileges and rewards, or can be traded on the market. The choice is yours"
    },
    {
        title: "GAMING ECOSYSTEM",
        desc: "$DICE is seamlessly integrated to Mega Dice casino, offering exclusive access, rewards, and benefits"
    },
    {
        title: "EARLY BIRD BONUSES",
        desc: "Early participants in the pre-sale receive bonus $DICE tokens, increasing their initial investment value"
    },
    {
        title: "REFERRAL PROGRAM",
        desc: "$DICE holders can enjoy a generous 25% rev-share through the Mega Dice Referral Program"
    },

]

const tokenomics = [
    {
        fund: "Presale",
        allocation: "35%",
        token: "147,000,000",
        color: "#06946C"
    },
    {
        fund: "Airdrops for players",
        allocation: "15%",
        token: "63,000,000",
        color: "#0AC18E"

    },
    {
        fund: "LP",
        allocation: "15%",
        token: "63,000,000",
        color: "#0EEBAD"
    },
    {
        fund: "Casino $DICE pool",
        allocation: "15%",
        token: "63,000,000",
        color: "#65F6CD"

    },

    {
        fund: "Staking rewards",
        allocation: "10%",
        token: "42,000,000",
        color: "#B3F9E6"
    },
    {
        fund: "Marketing/KOL deals",
        allocation: "5%",
        token: "21,000,000",
        color: "#B3F9E6"

    },

    {
        fund: "Affiliates",
        allocation: "5%",
        token: "21,000,000",
        color: "#D9FCF2"

    },


]

const faqs = [
    {
        question: "What is a presale?",
        ans: "A presale represents a unique opportunity in the cryptocurrency realm where investors are granted the chance to purchase a new token or cryptocurrency before its official release to the broader market. This early access phase allows participants to invest in a project's potential from its inception."
    },
    {
        question: "What is Mega Dice casino?",
        ans: "Mega Dice Casino is a cutting-edge online platform that offers an extensive range of top-tier casino games, sports betting options, and more, tailored for the modern gambler. Beyond just a gaming site, MegaDice is dedicated to fostering a community where loyalty is valued and rewarded. Through the integration of the $DICE token, it introduces a unique ecosystem where players can enjoy exclusive benefits, including revenue sharing and enhanced rewards. MegaDice.com stands out by combining the thrill of gaming with the benefits of cryptocurrency innovation, ensuring a rewarding experience for all its users."
    },
    {
        question: "What is $Dice token?",
        ans: "At megadice.com, not only do you get to enjoy the best online casino games, sportsbooks, and more, but we're also focused on building a loyalty-driven ecosystem. In line with our commitment, we're redistributing a share of our casino's revenue back to our community through the buyback of the $DICE token. It's our way of saying thank you: play, earn, and reap the rewards!"
    },
    {
        question: "How can I get $Dice airdrop?",
        ans: "To become eligible for the $DICE airdrop, there are several pathways designed to reward our community's engagement and loyalty. Participants who maintain activity on megadice.com within 21 days and achieve a total wagering volume of $5,000 USD can qualify for an airdrop, showcasing our appreciation for your consistent play. Additionally, for those actively wagering in any cryptocurrency from the onset of the presale to the official launch of the $DICE token, an exclusive airdrop awaits. Furthermore, a special airdrop is reserved for users who choose to wager in $DICE or $MEGA tokens during the same timeframe, further enriching their investment in our community. Engage with us through these avenues to not only enjoy the exhilarating MegaDice.com experience but also to secure your share of the $DICE airdrop rewards."
    },
    {
        question: "What is a presale?",
        ans: "A presale represents a unique opportunity in the cryptocurrency realm where investors are granted the chance to purchase a new token or cryptocurrency before its official release to the broader market. This early access phase allows participants to invest in a project's potential from its inception."
    },
    {
        question: "What benefits does $Dice offer?",
        ans: "megadice.com offers the flexibility to play using the leading cryptocurrencies, yet it's the exclusive $DICE token that unlocks remarkable benefits, including staking rewards and additional perks simply for possessing it. Although not mandatory for participation in the casino's various games, $DICE serves as an additional currency option for wagering, standing out with its unique advantages."
    },
    {
        question: "When does the presale end?",
        ans: "The presale will be open until the hard cap is reached - which is 10 million USD. The soft cap for the presale is 5 million USD."
    },
    {
        question: "How do I contact support?",
        ans: "Our support team can be contacted on support@megadice.com."
    },

]



function TabPanel(props) {
    const { children, value, index, ...other } = props;
    console.log(index)
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};


function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

function Landingpage() {
    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));


    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const [openModal, setOpenModal] = React.useState(false);


    const handleModalOpen = () => {
        setOpenModal(true);
    };

    const handleModalClose = () => {
        setOpenModal(false);
    };


    const [valueTab, setValueTab] = React.useState(0);

    const handleChangeTab = (event, newValue) => {
        setValueTab(newValue);
    };



    return (
        <Box>

            <Box>
                <nav style={{ display: "flex", padding: "40px", justifyContent: "space-around" }}>
                    <Box sx={{ width: "150px", padding: "10px" }}>
                        <img src="https://www.megadicetoken.com/assets/images/logo.svg" alt="" style={{ width: "100%", height: "auto" }} />
                    </Box>
                    <List sx={{ display: "flex", }}>
                        <ListItem>
                            ABOUT
                        </ListItem>
                        <ListItem>
                            HOW TO BUY
                        </ListItem>
                        <ListItem>
                            ROADMAP
                        </ListItem>
                        <ListItem>
                            FAQS
                        </ListItem>
                    </List>

                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{ height: "10vh", backgroundColor: "white", width: "2px", margin: "0 10px" }}>
                            {/* Divider */}
                        </div>
                        <Box sx={{ marginRight: "10px", display: "flex", alignItems: "center" }}>
                            <Typography>
                                EN <ChevronDownIcon />
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', marginRight: "10px" }}>
                            <TwitterIcon sx={{ fontSize: 20, color: '#0AC18E', marginRight: "5px", padding: "10px", border: "1px solid #0AC18E", borderRadius: "50%", }} />
                            <SendIcon sx={{ fontSize: 20, color: '#0AC18E', marginRight: "5px", padding: "10px", border: "1px solid #0AC18E", borderRadius: "50%", }} />
                        </Box>
                        <Box>
                            <button style={{ backgroundColor: "#0AC18E", border: "none", padding: "10px 20px", color: "white" }}>
                                PLAY NOW
                            </button>
                        </Box>
                    </Box>
                </nav>
            </Box>


            <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
                <Box sx={{ width: "35%" }}>
                    <Typography fontWeight={"bold"} fontSize={"36px"}>
                        THE #1 GAMEFI ON SOL
                    </Typography>
                    <Typography sx={{ fontSize: "50px" }}>
                        <TransparentText text="$DICE" />
                    </Typography>
                    <Typography>
                        The ultimate casino token experience. Exclusive benefits retroactively, and with every wager!
                    </Typography>
                    <br />
                    <Box>
                        <button style={{ border: "none", backgroundColor: "#0AC18E", padding: "10px 20px", width: "70%" }}>
                            JOIN COMMUNITY
                        </button>
                        <br />
                        <br />
                        <button style={{ border: " 1px solid #0AC18E", padding: "10px 20px", width: "70%" }}>
                            PLAY NOW (TELEGRAM)
                        </button>
                        <br />
                        <br />
                        <button style={{ border: " 1px solid #0AC18E", padding: "10px 20px", width: "70%" }}>
                            Play Now (WEB)
                        </button>
                    </Box>

                </Box>
                <Box sx={{ border: "4px solid #0AC18E", padding: "20px", textAlign: "center", width: "35%" }}>
                    <Typography my={3}>
                        Mega Dice Presale
                    </Typography>
                    <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
                        <Box sx={{ borderRadius: "10px", backgroundColor: "#0AC18E", textAlign: "center", minWidth: "20%" }}>
                            <Typography sx={{ color: "black" }}>
                                Days
                            </Typography>
                            <Typography sx={{ color: "white", fontSize: "40px" }}>
                                2
                            </Typography>
                        </Box>

                        <Box sx={{ borderRadius: "10px", backgroundColor: "#0AC18E", textAlign: "center", minWidth: "20%" }}>
                            <Typography sx={{ color: "black" }}>
                                Hours
                            </Typography>
                            <Typography sx={{ color: "white", fontSize: "40px" }}>
                                2
                            </Typography>

                        </Box>

                        <Box sx={{ borderRadius: "10px", backgroundColor: "#0AC18E", textAlign: "center", minWidth: "20%" }}>
                            <Typography sx={{ color: "black" }}>
                                Minutes
                            </Typography>
                            <Typography sx={{ color: "white", fontSize: "40px" }}>
                                2
                            </Typography>

                        </Box>

                        <Box sx={{ borderRadius: "10px", backgroundColor: "#0AC18E", textAlign: "center", minWidth: "20%" }}>
                            <Typography sx={{ color: "black" }}>
                                Seconds
                            </Typography>
                            <Typography sx={{ color: "white", fontSize: "40px" }}>
                                2
                            </Typography>

                        </Box>
                    </Box>
                    <br />
                    <Box sx={{ backgroundColor: "white", padding: "4px 0" }}>
                        <Box sx={{ backgroundColor: "#0AC18E", width: "90%" }}>
                            <Typography fontSize={"14px"}>
                                BUY BEFORE NEXT STAGE PRICE INCREASE
                            </Typography>
                        </Box>
                    </Box>
                    <br />
                    <Typography fontWeight={"bold"}>
                        $USD RAISED: $1,543,819.69
                    </Typography>
                    <br />
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <Box sx={{ width: "30%", height: "1px", backgroundColor: "white" }}></Box>
                        1 $DICE = $0.0825
                        <Box sx={{ width: "30%", height: "1px", backgroundColor: "white" }}></Box>
                    </Box>
                    <br />
                    <br />
                    <Box>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            aria-label="icon position tabs example"
                            variant="fullWidth"
                        >
                            <Tab
                                icon={<img src="https://www.megadicetoken.com/_next/static/media/sol.ef9563a3.svg" alt="SOL" style={{ width: "20px", height: "20px", marginRight: "5px" }} />}
                                label="SOL"
                            />
                            <Tab
                                icon={<img src="https://www.megadicetoken.com/_next/static/media/eth.6808f1cc.svg" alt="ETH" style={{ width: "20px", height: "20px", marginRight: "5px" }} />}
                                label="ETH"
                            />
                            <Tab
                                icon={<img src="https://www.megadicetoken.com/_next/static/media/bsc.1ac4cd63.svg" alt="BSC" style={{ width: "20px", height: "20px", marginRight: "5px" }} />}
                                label="BNB"
                                onClick={handleModalOpen}
                            />
                        </Tabs>

                        {/* Content for each tab */}
                        {value === 0 && (
                            <Box sx={{ p: 2 }}>
                                <TextField
                                    label="Buy with SOL"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                />
                                <TextField
                                    label="Receive $Dice"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                />
                            </Box>
                        )}
                        {value === 1 && (
                            <Box sx={{ p: 2 }}>
                                <TextField
                                    label="Buy with ETH"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                />
                                <TextField
                                    label="Receive $Dice"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                />
                            </Box>
                        )}
                        {value === 2 && (
                            <Box sx={{ p: 2 }}>
                                <TextField
                                    label="Buy with BNB"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                />
                                <TextField
                                    label="Receive $Dice"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                />
                            </Box>
                        )}

                        {/* Modal for BNB tab */}
                        <Modal
                            open={openModal}
                            onClose={handleModalClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box
                                sx={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    width: "40%",
                                    bgcolor: 'background.paper',
                                    boxShadow: 24,
                                    p: 1,
                                    height: "70vh"
                                }}
                            >
                                <Typography id="modal-modal-title" variant="h6" component="h2" color="black">
                                    Connect Wallet
                                </Typography>
                                <Box>

                                    <Typography color="#B2B2B2">
                                        Recommended
                                    </Typography>
                                    <Box
                                        sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
                                    >
                                        <Tabs
                                            orientation="vertical"
                                            variant="scrollable"
                                            value={valueTab}
                                            onChange={handleChangeTab}
                                            aria-label="Vertical tabs example"
                                            sx={{ borderRight: 1, borderColor: 'divider' }}
                                        >
                                            <Tab label="Scan with MetaMask" {...a11yProps(0)} />
                                            <Tab label="Item Two" {...a11yProps(1)} />
                                            <Tab label="Item Three" {...a11yProps(2)} />
                                            <Tab label="Item Four" {...a11yProps(3)} />
                                        </Tabs>
                                        <TabPanel value={valueTab} index={0}>
                                            <Box>
                                                <Typography>
                                                    Scan with MetaMask
                                                </Typography>
                                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Qehbc6rhmKbnnjGzzGDsE561DKTT7KLD6CqXBJC1hBWx2o-Csme9GIR84d5mCnNuVPE&usqp=CAU" alt="" />
                                            </Box>
                                        </TabPanel>
                                        <TabPanel value={valueTab} index={1}>
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Qehbc6rhmKbnnjGzzGDsE561DKTT7KLD6CqXBJC1hBWx2o-Csme9GIR84d5mCnNuVPE&usqp=CAU" alt="" />
                                        </TabPanel>
                                        <TabPanel value={valueTab} index={2}>
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Qehbc6rhmKbnnjGzzGDsE561DKTT7KLD6CqXBJC1hBWx2o-Csme9GIR84d5mCnNuVPE&usqp=CAU" alt="" />
                                        </TabPanel>
                                        <TabPanel value={valueTab} index={3}>
                                            <Typography>
                                                This tab doesn't require MetaMask.
                                            </Typography>
                                        </TabPanel>
                                    </Box>
                                </Box>

                            </Box>
                        </Modal>

                    </Box>


                </Box>
            </Box>


            {/* <ResponsiveTabsSection /> */}




            <Box sx={{ padding: "20px" }}>
                <Box mb={4}>
                    <Typography
                        variant="h4"
                        component="h1"
                        gutterBottom
                        sx={{
                            fontSize: { xs: '30px', md: '50px' },
                            textAlign: "center"
                        }}
                    >
                        <span
                            style={{
                                color: '#091620',
                                textShadow: `-1px -1px 1px #fff, 1px -1px 1px #fff, -1px 1px 0 #fff, 1px 1px 0 #fff`,
                                textTransform: "uppercase"
                            }}
                        >
                            What is </span>
                        <br /> Mega Dice
                    </Typography>
                    <Box mb={2}>
                        <Typography
                            variant="h6"
                            sx={{
                                textAlign: "center",
                                fontSize: { xs: '16px', md: '20px' }
                            }}
                        >
                            ALREADY A RAPIDLY GROWING GLOBAL CRYPTO CASINO BRAND WITH OVER 50K PLAYERS
                        </Typography>
                        <Typography
                            sx={{
                                textAlign: "center",
                                fontSize: { xs: '14px', md: '16px' }
                            }}
                        >
                            Mega Dice is not a new casino. As one of the top brands in the crypto casino space, our focus is growth and adding value to our players, like with the introduction of $DICE.
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '20px', padding: '30px', justifyContent: 'center' }}>
                    {cards.map((card, index) => (
                        <Card
                            key={index}
                            sx={{
                                display: 'flex',
                                flexDirection: { xs: 'column', md: 'row' },
                                border: "1px solid #0AC18E",
                                backgroundColor: "#0E212F",
                                padding: "20px",
                                width: { xs: '100%', sm: '45%', md: '40%' }, // Responsive width
                                maxWidth: '100%',
                                borderRadius: "10px",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            <CardMedia
                                component="img"
                                sx={{ width: { xs: '100%', md: '40%' }, maxWidth: '100%' }}
                                image={card.cardImg}
                                alt="Card image"
                            />
                            <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: "center" }}>
                                <Typography component="div" variant="h5" fontSize={{ xs: "30px", md: "50px" }} color={"#0AC18E"}>
                                    {card.numbers}
                                </Typography>
                                <Typography fontSize={{ xs: "30px", md: "50px" }} color={"#0AC18E"}>
                                    +
                                </Typography>
                                <Typography fontSize={{ xs: "20px", md: "30px" }} textWrap={"wrap"}>
                                    {card.title}
                                </Typography>
                                {card.secNum && <Typography fontSize={{ xs: "30px", md: "50px" }} color={"#0AC18E"}>
                                    {card.secNum}
                                </Typography>}
                                {card.secTitle && <Typography fontSize={{ xs: "20px", md: "30px" }}>
                                    {card.secTitle}
                                </Typography>}
                            </CardContent>
                        </Card>
                    ))}
                </Box>
            </Box>

            {/*  ------------------ recomm section ------------- */}
            <Box sx={{ my: 10, padding: "20px" }}>
      <Grid container alignItems="center" spacing={2}>
        <Grid item xs={12} sm={3}>
          <Typography variant="h6" align="center">
            Recommended By
          </Typography>
        </Grid>
        <Grid item xs={12} sm={1}>
          <div style={{ height: "10vh", backgroundColor: "white", width: "2px", margin: "0 10px" }}>
            {/* Divider */}
          </div>
        </Grid>
        <Grid item xs={6} sm={2}>
          <Box display="flex" justifyContent="center" sx={{ my: 1, mx: 2 }}>
            <img
              src="https://www.megadicetoken.com/_next/image?url=%2Fassets%2Fimages%2Fbitcoinist-logo.png&w=256&q=75"
              alt="Bitcoinist"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Box>
        </Grid>
        <Grid item xs={6} sm={2}>
          <Box display="flex" justifyContent="center" sx={{ my: 1, mx: 2 }}>
            <img
              src="https://www.megadicetoken.com/_next/image?url=%2Fassets%2Fimages%2Fcryptonews-logo.png&w=256&q=75"
              alt="Crypto News"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Box>
        </Grid>
        <Grid item xs={6} sm={2}>
          <Box display="flex" justifyContent="center" sx={{ my: 1, mx: 2 }}>
            <img
              src="https://www.megadicetoken.com/assets/images/be-in-crypto-logo.svg"
              alt="Be In Crypto"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>

            {/* ------------ Air Drop Sec------------ */}
            <Box sx={{ padding: "20px" }}>
                <Box sx={{ textAlign: "center", mb: 4 }}>
                    <Typography variant="h3" fontWeight={"bold"} fontSize={{ xs: "40px", sm: "60px" }}>
                        AIRDROP <TransparentText text="FOR" /> CASINO <TransparentText text="players" />
                    </Typography>
                    <Typography variant="h5" fontSize={{ xs: "24px", sm: "30px", lg: "40px" }} mt={2} fontWeight={"bold"} >
                        $2,250,000+ USD airdrop
                    </Typography>
                </Box>

                <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center" }}>
                    {cardAirDrop.map((card, index) => (
                        <Box
                            key={index}
                            sx={{
                                backgroundColor: card.active ? "#0AC18E" : "#0E212F",
                                border: "1px solid #0AC18E",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                padding: "15px",
                                borderRadius: "10px",
                                width: "100%",
                                maxWidth: "400px", // Limit maximum width to avoid taking too much space
                                mb: 3, // Margin bottom between cards
                                flex: { xs: "0 0 100%", sm: "0 0 100%", md: "0 0 50%", lg: "0 0 25%" }, // Adjust flex basis for responsiveness
                                mx: 4
                            }}
                        >
                            <Box sx={{ backgroundColor: card.active ? "#0E212F" : "transparent", padding: "10px", borderRadius: "5px" }}>
                                <img src={card.icon} alt={card.season} style={{ maxWidth: "100%" }} />
                            </Box>
                            <Box sx={{ backgroundColor: "transparent", paddingTop: "10px" }}>
                                <Typography variant="h6">
                                    {card.season}
                                </Typography>
                            </Box>
                            <Box sx={{ background: "transparent", paddingTop: "5px", textAlign: "center" }}>
                                <Typography color={card.active ? "#091620" : "#789797"}>
                                    {card.desc}
                                </Typography>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>


            {/* ---------------- Our Feature ------------- */}
            <Box sx={{ mt: 20 }}>
                <Box sx={{ my: 6 }}>
                    <Typography fontSize={"50px"} textAlign={"center"}>
                        <TransparentText text={"our"} /> FEATURES
                    </Typography>
                </Box>


                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', }}>
                    <Box sx={{ width: '90%', marginBottom: '20px', }}>
                        <Grid container >
                            {/* First card spanning 2 rows */}
                            <Grid item xs={12} md={6} lg={6} >
                                <Box sx={{
                                    border: "1px solid #0AC18E",
                                    backgroundColor: "#0E212F",
                                    borderRadius: "10px",
                                    padding: "30px",
                                    marginBottom: '10px',
                                    height: '100vh',
                                    width: "50%"
                                }}>
                                    <Box sx={{ width: "150px", padding: "10px" }}>
                                        <img src="https://www.megadicetoken.com/assets/images/logo.svg" alt="" style={{ width: "100%", height: "auto" }} />
                                    </Box>
                                    <Box>
                                        <Typography color={"#0AC18E"} fontSize={"25px"}>{cardFeature[0].title}</Typography>
                                    </Box>
                                    <Box>
                                        <Typography>{cardFeature[0].desc}</Typography>
                                    </Box>
                                    <br />
                                    <Box>
                                        <button style={{ border: "none", backgroundColor: "#0AC18E", padding: "10px 20px", width: "70%" }}>
                                            Buy Now
                                        </button>
                                    </Box>
                                </Box>
                            </Grid>

                            {/* Second row with two cards */}
                            <Grid item xs={12} md={6} >
                                <Grid container spacing={2}>
                                    {/* Second card */}
                                    <Grid item xs={12} md={6}>
                                        <Box sx={{
                                            border: "1px solid #0AC18E",
                                            backgroundColor: "#0E212F",
                                            borderRadius: "10px",
                                            padding: "30px",
                                            marginBottom: '10px',
                                            height: "50vh",
                                            // width:"60%"
                                        }}>
                                            <Box>
                                                <Typography color={"#0AC18E"}>{cardFeature[1].title}</Typography>
                                            </Box>
                                            <Box>
                                                <Typography>{cardFeature[1].desc}</Typography>
                                            </Box>
                                        </Box>
                                    </Grid>
                                    {/* Third card */}
                                    <Grid item xs={12} md={6}>
                                        <Box sx={{
                                            border: "1px solid #0AC18E",
                                            backgroundColor: "#0E212F",
                                            borderRadius: "10px",
                                            padding: "30px",
                                            marginBottom: '10px',
                                            height: "50vh"

                                        }}>
                                            <Box>
                                                <Typography color={"#0AC18E"}>{cardFeature[2].title}</Typography>
                                            </Box>
                                            <Box>
                                                <Typography>{cardFeature[2].desc}</Typography>
                                            </Box>
                                        </Box>
                                    </Grid>
                                    {/* Fourth card */}
                                    <Grid item xs={12} md={6}>
                                        <Box sx={{
                                            border: "1px solid #0AC18E",
                                            backgroundColor: "#0E212F",
                                            borderRadius: "10px",
                                            padding: "30px",
                                            marginBottom: '10px',
                                            height: "50vh"
                                        }}>
                                            <Box>
                                                <Typography color={"#0AC18E"}>{cardFeature[3].title}</Typography>
                                            </Box>
                                            <Box>
                                                <Typography>{cardFeature[3].desc}</Typography>
                                            </Box>
                                        </Box>
                                    </Grid>
                                    {/* Fifth card */}
                                    <Grid item xs={12} md={6}>
                                        <Box sx={{
                                            border: "1px solid #0AC18E",
                                            backgroundColor: "#0E212F",
                                            borderRadius: "10px",
                                            padding: "30px",
                                            marginBottom: '10px',
                                            height: "50vh"

                                        }}>
                                            <Box>
                                                <Typography color={"#0AC18E"}>{cardFeature[4].title}</Typography>
                                            </Box>
                                            <Box>
                                                <Typography>{cardFeature[4].desc}</Typography>
                                            </Box>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Grid>

                        </Grid>
                    </Box>
                </Box>

            </Box>

            {/* -------------- How to buy --------------- */}
            <Box sx={{ padding: { xs: "20px", md: "30px" } }}>
                <Box>
                    <Box sx={{ textAlign: "center", mb: 4 }}>
                        <Typography variant="h3" fontSize={{ xs: "40px", md: "50px" }}>
                            <TransparentText text={"how to "} />BUY
                        </Typography>
                    </Box>
                </Box>

                <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, justifyContent: "space-around", alignItems: "center" }}>
                    <Box sx={{ width: { xs: "100%", md: "40%" }, position: "relative" }}>
                        {/* Logo placed at the top of the image */}
                        <Box sx={{ position: 'absolute', top: '20px', left: '50%', transform: 'translateX(-50%)', width: { xs: "80px", md: "150px" }, padding: "10px" }}>
                            <img src="https://www.megadicetoken.com/assets/images/logo.svg" alt="Mega Dice Logo" style={{ width: "100%", height: "auto" }} />
                        </Box>
                        {/* Image with centered text */}
                        <Box>
                            <img src="https://www.megadicetoken.com/_next/image?url=%2Fassets%2Fimages%2Fhow_to_buy.png&w=640&q=75" alt="How to Buy" style={{ width: '100%', borderRadius: "20px" }} />
                        </Box>
                        <Box
                            sx={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                textAlign: 'center',
                                color: '#ffffff', // Text color
                                padding: { xs: '10px', md: '20px' },
                                borderRadius: '10px',
                                maxWidth: '90%', // Adjust width as needed
                            }}
                        >
                            <Typography fontSize={{ xs: "24px", md: "30px" }}>
                                How to Buy <Typography color="#0AC18E" component="span" fontSize={{ xs: "40px", md: "60px" }} fontWeight="bold"> $DICE </Typography> on PreSale
                            </Typography>
                        </Box>
                    </Box>

                    <Box sx={{ width: { xs: "100%", md: "40%" }, marginTop: { xs: "30px", md: "0" } }}>
                        <Box>
                            <Typography sx={{ color: "#0AC18E", fontSize: { xs: "20px", md: "24px" } }}>
                                STEP 1
                            </Typography>
                            <Typography fontSize={{ xs: "30px", md: "40px" }}>
                                CONNECT <TransparentText text="YOUR" /> WALLET
                            </Typography>
                            <Typography sx={{ color: "#859797", fontSize: { xs: "14px", md: "16px" } }} mt={1}>
                                Use Metamask or Trust Wallet to connect your wallet in seconds
                            </Typography>
                        </Box>
                        <Box mt={3}>
                            <Typography sx={{ color: "#0AC18E", fontSize: { xs: "20px", md: "24px" } }}>
                                STEP 2
                            </Typography>
                            <Typography fontSize={{ xs: "30px", md: "40px" }}>
                                <TransparentText text="ENTER " /> PRESALE
                            </Typography>
                            <Typography sx={{ color: "#859797", fontSize: { xs: "14px", md: "16px" } }} mt={1}>
                                Determine how much $DICE you want to buy. You can purchase with USDT along with ETH, BNB and SOL
                            </Typography>
                        </Box>
                        <Box mt={3}>
                            <Typography sx={{ color: "#0AC18E", fontSize: { xs: "20px", md: "24px" } }}>
                                STEP 3
                            </Typography>
                            <Typography fontSize={{ xs: "30px", md: "40px" }}>
                                <TransparentText text="CLAIM " /> $DICE
                            </Typography>
                            <Typography sx={{ color: "#859797", fontSize: { xs: "14px", md: "16px" } }} mt={1}>
                                Congratulations! You can claim your $DICE after the presale ends
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>

            {/* --------------- OUR tOKENOSM */}

            <Box sx={{ padding: { xs: "20px", md: "30px" }, my: { xs: 2, md: 4 }, mb: { xs: 6, md: 10 } }}>
                <Box>
                    <Typography variant="h2" fontSize={{ xs: "40px", md: "60px" }} textAlign="center" marginBottom={"30px"}>
                        <TransparentText text="OUR" /> TOKENOMICS
                    </Typography>
                </Box>

                <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, justifyContent: "space-around", alignItems: "center" }}>
                    <Box sx={{ width: { xs: "100%", md: "35%" }, marginBottom: { xs: "30px", md: 0 } }}>
                        <img src="https://www.megadicetoken.com/assets/images/tokenomics-chart.svg" alt="Tokenomics Chart" style={{ width: "100%", height: "auto", borderRadius: "10px" }} />
                    </Box>

                    <Box sx={{ width: { xs: "100%", md: "45%" }, backgroundColor: "#0E212F", padding: { xs: "20px", md: "30px" }, borderRadius: "10px",     }}>
                        <Typography sx={{ fontSize: { xs: "18px", md: "24px" }, color: "#ffffff" }} mb={2}>
                            $DICE has total supply of 420,000,000
                        </Typography>
                        <Typography sx={{ fontSize: { xs: "16px", md: "20px" }, color: "#ffffff" }} mb={2}>
                            The Mega Dice token serves as the utility token of our platform, enabling users to access premium content, participate in community governance, and redeem exclusive rewards and benefits.
                        </Typography>
                        <Box>
                            <table style={{ width: "100%", borderCollapse: "collapse" }}>
                                <thead>
                                    <tr style={{ borderBottom: "1px solid white", textAlign: "left" }}>
                                        <th style={{ padding: "10px", fontSize: { xs: "16px", md: "18px" }, color: "#ffffff" }}>Fund</th>
                                        <th style={{ padding: "10px", fontSize: { xs: "16px", md: "18px" }, color: "#ffffff" }}>Allocation</th>
                                        <th style={{ padding: "10px", fontSize: { xs: "16px", md: "18px" }, color: "#ffffff" }}>Token</th>
                                    </tr>
                                </thead>
                                <tbody style={{ marginTop: "10px" }}>
                                    {tokenomics.map((token, index) => (
                                        <tr key={index} className="table-row">
                                            <td className="table-cell table-cell-fund">
                                                <span className="circle" style={{ backgroundColor: token.color }}></span>
                                                {token.fund}
                                            </td>
                                            <td className="table-cell">{token.allocation}</td>
                                            <td className="table-cell">{token.token}</td>
                                        </tr>
                                    ))}
                                </tbody>

                            </table>
                        </Box>
                    </Box>
                </Box>
            </Box>

            {/* ---------------- whitepaprer----------- */}
            <Box sx={{ padding: { xs: "20px", md: "30px" } }}>
                <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, justifyContent: "space-evenly", alignItems: "center" }}>
                    <Box sx={{ backgroundColor: "black", width: { xs: "100%", md: "40%" }, position: 'relative' }}>
                        <Box sx={{ position: 'absolute', top: '20px', left: '20px', zIndex: 1 }}>
                            <img src="https://www.megadicetoken.com/assets/images/logo.svg" alt="Mega Dice Logo" style={{ width: "50%", height: "auto" }} />
                        </Box>
                        <Box>
                            <img src="https://www.megadicetoken.com/_next/image?url=%2Fassets%2Fimages%2Fplaying-cards.png&w=1920&q=75" alt="Playing Cards" style={{ width: "100%", borderRadius: "10px" }} />
                        </Box>
                        <Box
                            sx={{
                                position: 'absolute',
                                top: '50%',
                                left: '10%',
                                transform: 'translateY(-50%)',
                                textAlign: 'left',
                                color: '#ffffff',
                                padding: '20px',
                                borderRadius: '10px',
                                maxWidth: '80%',
                                zIndex: 2,
                            }}
                        >
                            <Typography gutterBottom variant="h3" fontSize={{ xs: "30px", md: "40px" }} fontWeight="bold">
                                <TransparentText text={"Next"} />
                                <span style={{ color: "#0AC18E", fontSize: "40px" }}>GEN</span> <br />
                                CASINO <br />
                                <TransparentText text={"EXPERIENCE"} />
                            </Typography>
                        </Box>
                        <Box sx={{ padding: "20px", position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)' }}>
                            <Typography variant="h5" fontSize={{ xs: "16px", md: "20px" }} fontWeight="bold">
                                WHITEPAPER
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{ width: { xs: "100%", md: "50%" }, marginTop: { xs: "20px", md: 0 } }}>
                        <Box>
                            <Typography variant="h3" fontSize={{ xs: "30px", md: "40px" }} fontWeight="bold">
                                WHITEPAPER
                            </Typography>
                        </Box>
                        <Box>
                            <Typography fontSize={{ xs: "16px", md: "20px" }}>
                                Want to know more about $DICE and Mega Dice Casino? Our whitepaper has everything you need to know and you can check it out by clicking below!
                            </Typography>
                        </Box>
                        <Box mt={2}>
                            <button style={{ backgroundColor: "#0AC18E", border: "none", padding: { xs: "8px 16px", md: "10px 20px" } }}>
                                READ WHITEPAPER
                            </button>
                        </Box>
                    </Box>
                </Box>
            </Box>

            {/* ---------------- road map section ------------ */}
            <Box sx={{ padding: "30px" }}>
                <Box>
                    <Typography fontSize={"60px"} textAlign={"center"}>
                        <TransparentText text="Our" />
                        ROADMAP
                    </Typography>
                    <Typography textAlign={"center"}>
                        Enjoy early benefits as we embark on our roadmap to make $DICE the leading GameFi token on Solana, seamlessly integrated with Mega Dice casino.
                    </Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "center", padding: "20px" }}>
                    <Box width="18%" border="" sx={{ display: { xs: 'none', md: 'block' } }}>
                        <Box sx={{ my: 7, }}>
                            <Typography fontWeight={"bold"} sx={{ mb: 1 }}>
                                Presale Token Claiming
                            </Typography>
                            <Typography color="#979797">
                                To ensure a fair launch for Mega Dice, presale buyers will be able to claim their tokens from the website at the same time as the DEX listing.
                            </Typography>
                        </Box>
                        <Box>
                            <Typography fontWeight={"bold"} sx={{ mb: 1 }}>
                                Early Staking Incentive
                            </Typography>
                            <Typography color="#979797">
                                Presale buyers of Mega Dice will be able to stake their tokens into the smart contract before listing day to benefit from the high early rewards opportunity.
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        {/* Responsive image */}
                        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                            <img
                                src="https://www.megadicetoken.com/_next/static/media/roadmap-mobile.444ef21b.svg"
                                alt=""
                                style={{ width: "100%" }}
                            />
                        </Box>
                        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                            <img
                                src="https://www.megadicetoken.com/_next/static/media/roadmap-desktop.633c0b46.svg"
                                alt=""
                                style={{ width: "64%" }}
                            />
                        </Box>
                    </Box>
                    <Box sx={{ width: { xs: '55%', md: '18%' }, }}>
                        <Box sx={{ my: 3, display: { xs: 'block', md: 'none' } }}>
                            <Typography fontWeight={"bold"} sx={{ mb: 1 }}>
                                Presale Token Claiming
                            </Typography>
                            <Typography color="#979797">
                                To ensure a fair launch for Mega Dice, presale buyers will be able to claim their tokens from the website at the same time as the DEX listing.
                            </Typography>
                        </Box>
                        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                            <Typography fontWeight={"bold"} sx={{ mb: 1, display: { xs: 'block', md: 'none' } }}>
                                Early Staking Incentive
                            </Typography>
                            <Typography color="#979797">
                                Presale buyers of Mega Dice will be able to stake their tokens into the smart contract before listing day to benefit from the high early rewards opportunity.
                            </Typography>
                        </Box>
                        <Box sx={{ my: 4 }}>
                            <Typography fontWeight={"bold"} sx={{ mb: 1 }}>
                                Presale and Marketing
                            </Typography>
                            <Typography color="#979797">
                                Mega Dice starts on a level playing field with a fair presale. The team will allocate a portion of funds raised towards a professional marketing strategy.
                            </Typography>
                        </Box>
                        <Box sx={{ my: 4 }}>
                            <Typography fontWeight={"bold"} sx={{ mb: 1 }}>
                                Allocated Liquidity Provision
                            </Typography>
                            <Typography color="#979797">
                                The Mega Dice team will add a substantial liquidity pool. For this purpose, 10% of the total token supply has been set aside.
                            </Typography>
                        </Box>
                        <Box>
                            <Typography fontWeight={"bold"} sx={{ mb: 1 }}>
                                DEX Launch
                            </Typography>
                            <Typography color="#979797">
                                Mega Dice will launch on DEX. This will provide the best trading environment and early liquidity.
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>



            {/* -------------- faqs ----------------- */}
            <Box sx={{ padding: "30px" }}>
                <Box>
                    <Typography fontSize={"50px"} textAlign={"center"}>
                        FREQUENTLY  <TransparentText text={"ASKED"} /> QUESTIONS
                    </Typography>
                </Box>
                <Box sx={{ backgroundColor: 'transparent' }}>

                    <div style={{ backgroundColor: 'transparent' }}>
                        {faqs.map((faq, i) => (<Accordion sx={{ backgroundColor: 'transparent', padding: "10px 0" }}
                        // defaultExpanded={i == 0 ? true : false}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                {faq.question}
                            </AccordionSummary>
                            <AccordionDetails>
                                {faq.ans}
                            </AccordionDetails>
                        </Accordion>))}
                    </div>
                </Box>
            </Box>
            {/* ------------- Footer ---------------- */}

            <Box
                sx={{

                    height: "50vh",
                    // border: "1px solid red",
                    // width: "100%",
                    // display: "flex",
                    // justifyContent: "space-between",
                    // px: "50px",
                    // backgroundColor: "white",
                }}
            >
                <Box sx={{ backgroundColor: "#0AC18E", padding: "20px" }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <Box sx={{ display: "flex", }}>

                            <Box mx={"30px"}>
                                <List >
                                    <ListItem color="red !important" >
                                        About
                                    </ListItem>
                                    <ListItem color="black">
                                        How to buy
                                    </ListItem>
                                    <ListItem color="black">
                                        Road map
                                    </ListItem>
                                    <ListItem color="black">
                                        FAQ
                                    </ListItem>
                                </List>
                            </Box>
                            <Box>
                                <List>
                                    <ListItem>
                                        Privacy Policy
                                    </ListItem>
                                    <ListItem>
                                        Cookies
                                    </ListItem>
                                    <ListItem>
                                        Terms & Conditions
                                    </ListItem>
                                </List>
                            </Box>
                        </Box>

                        <Box>
                            <Typography fontWeight={"bold"} sx={{ textDecoration: "underline" }}>
                                contact@megadice.io
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', marginRight: "10px", mt: 2 }}>
                                <TwitterIcon sx={{ fontSize: 20, color: '#0AC18E', marginRight: "5px", padding: "10px", border: "1px solid white", borderRadius: "50%", }} />
                                <SendIcon sx={{ fontSize: 20, color: '#0AC18E', marginRight: "5px", padding: "10px", border: "1px solid white", borderRadius: "50%", }} />
                            </Box>
                        </Box>
                    </Box>
                </Box>

                <Box sx={{ display: "flex", padding: "20px 50px", justifyContent: "space-between" }}>
                    <Box sx={{ width: "30%" }}>
                        <img src="https://www.megadicetoken.com/assets/images/logo.svg" alt="Mega Dice Logo" style={{ width: "50%" }} />
                    </Box>
                    <Box sx={{ textAlign: "right", width: "60%" }}>
                        <Typography fontSize={"12px"} color="#979790">
                            Copyright 2024 Mega Dice. All Rights Reserved.
                        </Typography>
                        <Typography fontSize={"12px"} color="#979790">
                            Disclaimer: Cryptocurrency may be unregulated in your jurisdiction. The value of cryptocurrencies may go down as well as up.
                            Profits may be subject to capital gains or other taxes applicable in your jurisdiction.
                        </Typography>
                    </Box>
                </Box>

            </Box>


        </Box>

    );
}

export default Landingpage;


export function TransparentText({ text }) {
    return (
        <span style={{
            color: '#091620', // Make text transparent
            textShadow: `-1px -1px 1px #fff, 1px -1px 1px #fff, -1px 1px 0 #fff, 1px 1px 0 #fff`,
            textTransform: "uppercase"
        }}>
            {text}
        </span>
    )
}