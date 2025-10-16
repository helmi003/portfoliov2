import { Box, IconButton, Dialog } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const FullscreenImageDialog = ({ open, handleClose, selectedItem }) => {
    return (
        <Dialog
            open={open}
            onClose={handleClose}
            maxWidth={false}
            PaperProps={{
                sx: {
                    backgroundColor: "transparent",
                    boxShadow: "none",
                    margin: "10px",
                    maxHeight: "calc(100vh - 20px)",
                    maxWidth: "calc(100vw - 20px)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                },
            }}
        >
            <Box
                sx={{
                    position: "relative",
                    backgroundColor: "rgba(0,0,0,0.9)",
                    borderRadius: "12px",
                    padding: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <IconButton
                    onClick={handleClose}
                    sx={{
                        position: "absolute",
                        top: 12,
                        right: 12,
                        color: "white",
                        backgroundColor: "rgba(0,0,0,0.7)",
                        "&:hover": {
                            backgroundColor: "rgba(0,0,0,0.9)",
                        },
                        zIndex: 1,
                    }}
                >
                    <CloseIcon />
                </IconButton>
                {selectedItem &&
                    (selectedItem.type === "image" ? (
                        <img
                            src={selectedItem.file}
                            alt={selectedItem.title}
                            style={{
                                maxWidth: "calc(100vw - 40px)",
                                maxHeight: "calc(100vh - 40px)",
                                borderRadius: "8px",
                                objectFit: "contain",
                                display: "block",
                            }}
                        />
                    ) : (
                        <video
                            src={selectedItem.file}
                            controls
                            autoPlay
                            style={{
                                maxWidth: "calc(100vw - 40px)",
                                maxHeight: "calc(100vh - 40px)",
                                borderRadius: "8px",
                                objectFit: "contain",
                                display: "block",
                            }}
                        />
                    ))}
            </Box>
        </Dialog>
    );
};

export default FullscreenImageDialog;
