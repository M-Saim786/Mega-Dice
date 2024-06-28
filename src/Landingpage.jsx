import { Box, Grid, List, ListItem, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
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

import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import Button from '@mui/material/Button';


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
        token: "147,000,000"
    },
    {
        fund: "Airdrops for players",
        allocation: "15%",
        token: "63,000,000"
    },

    {
        fund: "LP",
        allocation: "15%",
        token: "63,000,000"
    },
    {
        fund: "Casino $DICE pool",
        allocation: "15%",
        token: "63,000,000"
    },

    {
        fund: "Staking rewards",
        allocation: "10%",
        token: "42,000,000"
    },
    {
        fund: "Marketing/KOL deals",
        allocation: "5%",
        token: "21,000,000"
    },

    {
        fund: "Affiliates",
        allocation: "5%",
        token: "21,000,000"
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


function Landingpage() {
    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));

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
                    <Typography>
                        THE #1 GAMEFI ON SOL
                    </Typography>
                    <Typography>
                        $DICE
                    </Typography>
                    <Typography>
                        The ultimate casino token experience. Exclusive benefits retroactively, and with every wager!
                    </Typography>
                    <Box>
                        <button>
                            JOIN COMMUNITY
                        </button>
                        <button>
                            PLAY NOW (TELEGRAM)
                        </button>
                        <button>
                            Play Now (WEB)
                        </button>
                    </Box>
                </Box>
                <Box sx={{ border: "4px solid #0AC18E", padding: "20px" }}>
                    <Typography>
                        Mega Dice Presale
                    </Typography>
                    <Box sx={{ backgroundColor: "white", padding: "10px 0" }}>
                        <Box sx={{ backgroundColor: "#0AC18E", width: "90%" }}>
                            <Typography>
                                BUY BEFORE NEXT STAGE PRICE INCREASE
                            </Typography>
                        </Box>
                    </Box>
                    <Typography>
                        $USD RAISED: $1,543,819.69
                    </Typography>
                    <Box>
                        <hr />
                        1 $DICE = $0.0825
                        <hr />
                    </Box>

                </Box>
            </Box>


            <Box sx={{ padding: "20px" }}>

                <Box mb={4}>
                    <Typography variant="h4" component="h1" gutterBottom
                        sx={{
                            fontSize: '50px',
                            textAlign: "center"
                        }}
                    >
                        <span style={{
                            color: '#091620', // Make text transparent
                            textShadow: `-1px -1px 1px #fff, 1px -1px 1px #fff, -1px 1px 0 #fff, 1px 1px 0 #fff`,
                            textTransform: "uppercase"
                        }}>
                            What is </span><br /> Mega Dice
                    </Typography>
                    <Box mb={2}>
                        <Typography variant="h6" sx={{
                            textAlign: "center"
                        }}>
                            ALREADY A RAPIDLY GROWING GLOBAL CRYPTO CASINO BRAND WITH OVER 50K PLAYERS
                        </Typography>
                        <Typography sx={{
                            textAlign: "center"
                        }}>
                            Mega Dice is not a new casino. As one of the top brands in the crypto casino space our focus is growth and adding value to our players, like with the introduction of $DICE.
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '20px', padding: '30px', justifyContent: 'center' }}>
                    {cards.map((card, index) => (
                        <Card
                            key={index}
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                border: "1px solid #0AC18E",
                                backgroundColor: "#0E212F",
                                padding: "20px",
                                width: '40%', // Adjust width as per your design
                                maxWidth: '100%', // Ensure it doesn't exceed the container width
                                borderRadius: "10px",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            <CardMedia
                                component="img"
                                sx={{ width: '40%', maxWidth: '100%' }}
                                image={card.cardImg}
                                alt="Card image"
                            />
                            <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: "center" }}>
                                <Typography component="div" variant="h5" fontSize={"50px"} color={"#0AC18E"}>
                                    {card.numbers}
                                </Typography>
                                <Typography fontSize={"50px"} color={"#0AC18E"}>
                                    +
                                </Typography>
                                <Typography fontSize={"30px"} textWrap={"wrap"} >
                                    {card.title}
                                </Typography>
                                {card.secNum && <Typography fontSize={"50px"} color={"#0AC18E"}>
                                    {card.secNum}
                                </Typography>}
                                {card.secTitle && <Typography fontSize={"30px"}>
                                    {card.secTitle}
                                </Typography>}
                            </CardContent>
                        </Card>
                    ))}
                </Box>
            </Box>

            <Box sx={{ my: 10 }}>
                <Grid container alignItems="center" spacing={2}>
                    <Grid item>
                        <Typography variant="h6">
                            Recommended By
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Box
                            sx={{
                                borderLeft: '2px solid #0AC18E',
                                height: '100%',
                                marginLeft: 2,
                                marginRight: 2,
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm="auto">
                        <Box display="flex" justifyContent="center">
                            <img src="https://www.megadicetoken.com/_next/image?url=%2Fassets%2Fimages%2Fbitcoinist-logo.png&w=256&q=75" alt="Bitcoinist" style={{ maxWidth: "100%", height: "auto" }} />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm="auto">
                        <Box display="flex" justifyContent="center">
                            <img src="https://www.megadicetoken.com/_next/image?url=%2Fassets%2Fimages%2Fcryptonews-logo.png&w=256&q=75" alt="Crypto News" style={{ maxWidth: "100%", height: "auto" }} />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm="auto">
                        <Box display="flex" justifyContent="center">
                            <img src="https://www.megadicetoken.com/assets/images/be-in-crypto-logo.svg" alt="Be In Crypto" style={{ maxWidth: "100%", height: "auto" }} />
                        </Box>
                    </Grid>
                </Grid>
            </Box>

            {/* ------------ Air Drop Sec------------ */}
            <Box>
                <Box>
                    <Typography fontSize={"60px"} textAlign={"center"}>
                        AIRDROP <TransparentText text="FOR" /> CASINO <TransparentText text="players" />
                    </Typography>
                    <Typography fontSize={"30px"} textAlign={"center"}>
                        $2,250,000+ USD airdrop
                    </Typography>
                </Box>
                <br />
                <br />
                <Box sx={{ my: 2 }}>
                    <Box sx={{ display: "flex", justifyContent: "space-around" }}>
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
                                    width: "25%",
                                    justifyContent: "center",

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
                                <Box sx={{ background: "transparent", paddingTop: "5px" }}>
                                    <Typography color={card.active ? "#091620" : "#789797"}>
                                        {card.desc}
                                    </Typography>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>


            {/* ---------------- Our Feature ------------- */}
            <Box sx={{ mt: 20 }}>
                <Box sx={{ my: 6 }}>
                    <Typography fontSize={"50px"} textAlign={"center"}>
                        <TransparentText text={"our"} /> FEATURES
                    </Typography>
                </Box>

                <Box sx={{ display: "flex", justifyContent: "space-around", }}>
                    {cardFeature.map((card, index) => (
                        <Box
                            key={index}
                            sx={{
                                // backgroundColor: card.active ? "#0AC18E" : "#0E212F",
                                border: "1px solid #0AC18E",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                padding: "15px",
                                borderRadius: "10px",
                                width: "25%",
                                justifyContent: "center",

                            }}
                        >
                            <Box sx={{ backgroundColor: card.active ? "#0E212F" : "transparent", padding: "10px", borderRadius: "5px" }}>
                                <img src={card.icon} alt={card.season} style={{ maxWidth: "100%" }} />
                            </Box>
                            <Box sx={{ backgroundColor: "transparent", paddingTop: "10px" }}>
                                <Typography variant="h6">
                                    {card.title}
                                </Typography>
                            </Box>
                            <Box sx={{ background: "transparent", paddingTop: "5px" }}>
                                <Typography color={card.active ? "#091620" : "#789797"}>
                                    {card.desc}
                                </Typography>
                            </Box>
                        </Box>
                    ))}
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Box sx={{ width: '90%', marginBottom: '20px', border: "1px solid red" }}>
                        <Grid container spacing={2}>
                            {/* First card spanning 2 rows */}
                            <Grid item xs={12} md={6} lg={4} >
                                <Box sx={{
                                    border: "1px solid #0AC18E",
                                    backgroundColor: "#0E212F",
                                    borderRadius: "10px",
                                    padding: "30px",
                                    marginBottom: '10px',
                                    // height: '100%' 
                                }}>
                                    <Box>
                                        <Typography color={"#0AC18E"}>{cardFeature[0].title}</Typography>
                                    </Box>
                                    <Box>
                                        <Typography>{cardFeature[0].desc}</Typography>
                                    </Box>
                                </Box>
                            </Grid>
                            {/* Remaining four cards in two rows of three */}
                            <Grid item xs={12} md={6}>
                                <Grid container spacing={2}>
                                    {cardFeature.slice(1, 2).map((card, index) => (
                                        <Grid item xs={12} md={4} lg={6} key={index}>
                                            <Box sx={{
                                                border: "1px solid #0AC18E",
                                                backgroundColor: "#0E212F",
                                                borderRadius: "10px",
                                                padding: "30px",
                                                marginBottom: '10px'
                                            }}>
                                                <Box>
                                                    <Typography color={"#0AC18E"}>{card.title}</Typography>
                                                </Box>
                                                <Box>
                                                    <Typography>{card.desc}</Typography>
                                                </Box>
                                            </Box>
                                        </Grid>
                                    ))}
                                    {cardFeature.slice(3, 5).map((card, index) => (
                                        <Grid item xs={12} md={4} key={index}>
                                            <Box sx={{
                                                border: "1px solid #0AC18E",
                                                backgroundColor: "#0E212F",
                                                borderRadius: "10px",
                                                padding: "30px",
                                                // height:"40%"
                                                marginBottom: '10px'
                                            }}>
                                                <Box>
                                                    <Typography color={"#0AC18E"}>{card.title}</Typography>
                                                </Box>
                                                <Box>
                                                    <Typography>{card.desc}</Typography>
                                                </Box>
                                            </Box>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>

            </Box>

            {/* -------------- How to buy --------------- */}
            <Box sx={{ padding: "30px" }}>
                <Box>
                    <Box>
                        <Typography fontSize={"50px"} textAlign={"center"}>
                            <TransparentText text={"how to "} />BUY
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                    <Box sx={{ position: 'relative', width: "40%" }}>
                        {/* Logo placed at the top of the image */}
                        <Box sx={{ position: 'absolute', top: '20px', left: '50%', transform: 'translateX(-50%)', width: "150px", padding: "10px" }}>
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
                                padding: '20px',
                                borderRadius: '10px',
                                maxWidth: '80%', // Adjust width as needed
                            }}
                        >
                            <Typography fontSize={"30px"}>
                                How to Buy <Typography color="#0AC18E" component="span" fontSize={"60px"} fontWeight={"bold"}> $DICE </Typography> on PreSale
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{ width: "40%" }}>
                        <Box>
                            <Typography sx={{ color: "#0AC18E" }}>
                                STEP 1
                            </Typography>
                            <Typography fontSize={"40px"}>
                                CONNECT <TransparentText text="YOUR" /> WALLET
                            </Typography>
                            <Typography sx={{ color: "#859797" }}>
                                Use Metamask or Trust Wallet to connect your wallet in seconds
                            </Typography>
                        </Box>
                        <br />
                        <Box>
                            <Typography sx={{ color: "#0AC18E" }}>
                                STEP 2
                            </Typography>
                            <Typography fontSize={"40px"}>
                                <TransparentText text="ENTER " /> PRESALE
                            </Typography>
                            <Typography sx={{ color: "#859797" }}>
                                Determine how much $DICE you want to buy. You can purchase with USDT along with ETH, BNB and SOL
                            </Typography>
                        </Box>
                        <br />
                        <Box>
                            <Typography sx={{ color: "#0AC18E" }}>
                                STEP 3
                            </Typography>
                            <Typography fontSize={"40px"}>
                                <TransparentText text="CLAIM " /> $DICE
                            </Typography>
                            <Typography sx={{ color: "#859797" }}>
                                Congratulations! You can claim your $DICE after the presale ends
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>

            {/* --------------- OUR tOKENOSM */}

            <Box>
                <Box>
                    <Typography sx={{ fontSize: "40px" }}>
                        OUR TOKENOMICS
                    </Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                    <Box sx={{ width: "35%" }}>
                        <img src="https://www.megadicetoken.com/assets/images/tokenomics-chart.svg" alt="Tokenomics Chart" />
                    </Box>
                    <Box sx={{ width: "45%", backgroundColor: "#0E212F", padding: "20px", borderRadius: "10px" }}>
                        <Typography>
                            $DICE has total supply of 420,000,000
                        </Typography>
                        <Typography>
                            The Mega Dice token serves as the utility token of our platform, enabling users to access premium content, participate in community governance, and redeem exclusive rewards and benefits.
                        </Typography>
                        <Box>
                            <table style={{ width: "100%", borderCollapse: "collapse" }}>
                                <thead>
                                    <tr style={{ borderBottom: "1px solid white", textAlign: "left" }}>
                                        <th style={{ padding: "10px" }}>Fund</th>
                                        <th style={{ padding: "10px" }}>Allocation</th>
                                        <th style={{ padding: "10px" }}>Token</th>
                                    </tr>
                                </thead>
                                <tbody style={{ marginTop: "10px" }}>
                                    {tokenomics.map((token, index) => (
                                        <tr key={index} style={{ backgroundColor: "#091620", margin: "10px" }}>
                                            <td style={{ padding: "10px" }}>{token.fund}</td>
                                            <td style={{ padding: "10px" }}>{token.allocation}</td>
                                            <td style={{ padding: "10px" }}>{token.token}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </Box>
                    </Box>
                </Box>
            </Box>


            {/* ---------------- whitepaprer----------- */}
            <Box sx={{ padding: "30px" }}>
                <Box sx={{ display: "flex", justifyContent: "space-evenly", border: "1px solid red" }}>
                    <Box sx={{ backgroundColor: "black", width: "50%" }}>
                        <Box sx={{ position: 'relative', width: "100%" }}>

                            <Box sx={{ position: 'absolute', top: '20px', left: '20px', zIndex: 1, }}>
                                <Box>
                                    <img src="https://www.megadicetoken.com/assets/images/logo.svg" alt="Mega Dice Logo" style={{ width: "50%", height: "auto" }} />
                                </Box>
                                {/* <Box>
                                <img src="https://www.megadicetoken.com/_next/image?url=%2Fassets%2Fimages%2Fdices.png&w=256&q=75" alt="Mega Dice Logo" style={{ width: "50%", height: "auto" }} />

                                </Box> */}
                            </Box>
                            {/* Main image */}
                            <Box sx={{}}>
                                <img src="https://www.megadicetoken.com/_next/image?url=%2Fassets%2Fimages%2Fplaying-cards.png&w=1920&q=75" alt="Playing Cards" style={{ width: "100%" }} />
                            </Box>
                            {/* Overlay text */}
                            <Box
                                sx={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    textAlign: 'center',
                                    color: '#ffffff', // Text color
                                    padding: '20px',
                                    borderRadius: '10px',
                                    maxWidth: '80%', // Adjust width as needed
                                    zIndex: 2, // Ensure text appears above the image
                                }}
                            >
                                <Typography gutterBottom>
                                    Next Gen CASINO EXPERIENCE                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box>
                        <Box>
                            <Typography>
                                WHITEPAPER
                            </Typography>
                        </Box>
                        <Box>
                            Want to know more about $DICE and Mega Dice Casino? Our whitepaper has everything you need to know and you can check it out by clicking below!
                        </Box>
                        <Box>
                            <button>
                                READ WHITEPAPER
                            </button>
                        </Box>
                    </Box>
                </Box>
            </Box>



            {/* -------------- faqs ----------------- */}
            <Box sx={{ padding: "30px" }}>
                <Box>
                    <Typography fontSize={"50px"}>
                        FREQUENTLY  <TransparentText text={"ASKED"} /> QUESTIONS
                    </Typography>
                </Box>
                <Box sx={{ backgroundColor: 'transparent' }}>

                    <div style={{ backgroundColor: 'transparent' }}>
                        {faqs.map((faq, i) => (<Accordion sx={{ backgroundColor: 'transparent' }} 
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