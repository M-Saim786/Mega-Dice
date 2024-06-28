import React, { useState } from 'react';
import { Box, Typography, Button, Tabs, Tab, TextField, Modal } from '@mui/material';

const ResponsiveTabsSection = () => {
    const [value, setValue] = useState(0);
    const [openModal, setOpenModal] = useState(false);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleModalOpen = () => {
        setOpenModal(true);
    };

    const handleModalClose = () => {
        setOpenModal(false);
    };

    return (
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "20px" }}>
            <Box sx={{ width: "100%", maxWidth: "1200px" }}>
                {/* Main content section */}
                <Typography fontWeight={"bold"} fontSize={"36px"}>
                    THE #1 GAMEFI ON SOL
                </Typography>
                <Typography sx={{ fontSize: "50px" }}>
                    <span style={{ color: "#0AC18E" }}>$DICE</span>
                </Typography>
                <Typography sx={{ maxWidth: "600px", margin: "20px auto" }}>
                    The ultimate casino token experience. Exclusive benefits retroactively, and with every wager!
                </Typography>

                {/* Buttons section */}
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "20px" }}>
                    <Button variant="contained" style={{ backgroundColor: "#0AC18E", color: "#FFFFFF", padding: "10px 20px", width: "100%", maxWidth: "300px", marginBottom: "10px" }}>
                        JOIN COMMUNITY
                    </Button>
                    <Button variant="outlined" style={{ borderColor: "#0AC18E", color: "#0AC18E", padding: "10px 20px", width: "100%", maxWidth: "300px", marginBottom: "10px" }}>
                        PLAY NOW (TELEGRAM)
                    </Button>
                    <Button variant="outlined" style={{ borderColor: "#0AC18E", color: "#0AC18E", padding: "10px 20px", width: "100%", maxWidth: "300px" }}>
                        PLAY NOW (WEB)
                    </Button>
                </Box>
            </Box>

            {/* Presale box */}
            <Box sx={{ border: "4px solid #0AC18E", padding: "20px", textAlign: "center", width: "100%", maxWidth: "1200px", marginBottom: "20px" }}>
                <Typography my={3} variant="h5">
                    Mega Dice Presale
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", marginBottom: "20px" }}>
                    <Box sx={{ borderRadius: "10px", backgroundColor: "#0AC18E", textAlign: "center", minWidth: "120px", maxWidth: "30%", marginBottom: "10px" }}>
                        <Typography sx={{ color: "black" }}>
                            Days
                        </Typography>
                        <Typography sx={{ color: "white", fontSize: "40px" }}>
                            2
                        </Typography>
                    </Box>

                    <Box sx={{ borderRadius: "10px", backgroundColor: "#0AC18E", textAlign: "center", minWidth: "120px", maxWidth: "30%", marginBottom: "10px" }}>
                        <Typography sx={{ color: "black" }}>
                            Hours
                        </Typography>
                        <Typography sx={{ color: "white", fontSize: "40px" }}>
                            2
                        </Typography>
                    </Box>

                    <Box sx={{ borderRadius: "10px", backgroundColor: "#0AC18E", textAlign: "center", minWidth: "120px", maxWidth: "30%", marginBottom: "10px" }}>
                        <Typography sx={{ color: "black" }}>
                            Minutes
                        </Typography>
                        <Typography sx={{ color: "white", fontSize: "40px" }}>
                            2
                        </Typography>
                    </Box>

                    <Box sx={{ borderRadius: "10px", backgroundColor: "#0AC18E", textAlign: "center", minWidth: "120px", maxWidth: "30%", marginBottom: "10px" }}>
                        <Typography sx={{ color: "black" }}>
                            Seconds
                        </Typography>
                        <Typography sx={{ color: "white", fontSize: "40px" }}>
                            2
                        </Typography>
                    </Box>
                </Box>

                <Box sx={{ backgroundColor: "white", padding: "4px 0", marginBottom: "20px" }}>
                    <Box sx={{ backgroundColor: "#0AC18E", width: "90%", margin: "auto" }}>
                        <Typography fontSize={"14px"}>
                            BUY BEFORE NEXT STAGE PRICE INCREASE
                        </Typography>
                    </Box>
                </Box>

                <Typography fontWeight={"bold"}>
                    $USD RAISED: $1,543,819.69
                </Typography>

                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "10px" }}>
                    <Box sx={{ width: "30%", height: "1px", backgroundColor: "white" }}></Box>
                    1 $DICE = $0.0825
                    <Box sx={{ width: "30%", height: "1px", backgroundColor: "white" }}></Box>
                </Box>
            </Box>

            {/* Crypto tabs section */}
            <Tabs
                value={value}
                onChange={handleChange}
                aria-label="icon position tabs example"
                variant="fullWidth"
                sx={{ width: "100%", maxWidth: "1200px", borderBottom: "2px solid #0AC18E" }}
                TabIndicatorProps={{ style: { backgroundColor: "#0AC18E" } }}
            >
                <Tab
                    icon={<img src="https://www.megadicetoken.com/_next/static/media/sol.ef9563a3.svg" alt="SOL" style={{ width: "20px", height: "20px", marginRight: "5px" }} />}
                    label="SOL"
                    sx={{ borderBottom: value === 0 ? "2px solid #0AC18E" : "none" }}
                />
                <Tab
                    icon={<img src="https://www.megadicetoken.com/_next/static/media/eth.6808f1cc.svg" alt="ETH" style={{ width: "20px", height: "20px", marginRight: "5px" }} />}
                    label="ETH"
                    sx={{ borderBottom: value === 1 ? "2px solid #0AC18E" : "none" }}
                />
                <Tab
                    icon={<img src="https://www.megadicetoken.com/_next/static/media/bsc.1ac4cd63.svg" alt="BSC" style={{ width: "20px", height: "20px", marginRight: "5px" }} />}
                    label="BNB"
                    onClick={handleModalOpen}
                    sx={{ borderBottom: value === 2 ? "2px solid #0AC18E" : "none" }}
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
                        width: '90%',
                        maxWidth: 400,
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        p: 4,
                    }}
                >
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Modal for BNB Tab
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Additional content or form fields can be added here.
                    </Typography>
                    <Button onClick={handleModalClose} variant="contained" sx={{ mt: 2 }}>
                        Close Modal
                    </Button>
                </Box>
            </Modal>
        </Box>
    );
};

export default ResponsiveTabsSection;
