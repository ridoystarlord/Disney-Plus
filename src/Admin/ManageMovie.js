import { Autocomplete, Button, Grid, Paper, TextField } from '@mui/material';
import React, { useState } from 'react';
import { createNewMovie } from './APIs/Admin';
import { initialMovie } from './DBModels/Admin';
import SuccessFailureAlert from './Resources/SuccessFailureAlert';

const viewModeView = "VIEW"
const viewModeNew = "NEW"
const viewModeEdit = "Edit"
const viewModeUpdate = "Save"

const ManageMovie = () => {
    const [viewMode, setViewMode] = useState(viewModeView)
    const [openSuccessAlert, setOpenSuccessAlert] = useState(false);
    const [openFailureAlert, setOpenFailureAlert] = useState(false);
    const [message, setMessage] = useState("");
    const [currentMovie, setCurrentMovie] = useState(initialMovie);


    const clear = () => {
        setViewMode(viewModeView)
        setCurrentMovie(initialMovie)
    }
    const openSuccess = (message) => {
        setMessage('');
        setOpenSuccessAlert(true);
        setOpenFailureAlert(false);
        setMessage(message);
    }
    const openFailure = (message) => {
        setMessage('');
        setOpenSuccessAlert(false);
        setOpenFailureAlert(true);
        setMessage(message);
    }
    const clearAlert = () => {
        setOpenFailureAlert(false);
        setOpenSuccessAlert(false);
        setMessage('');
    }

    const handleCreateMovie= () => {
        createNewMovie(currentMovie)
            .then(res => {
                if (res[0]) {
                    openSuccess(res[1])
                    clear()
                } else {
                    openFailure(res[1]);
                }
            })
    }

    const handleModifyMovie = () => {
        // convertData(campaign)
        // return
        // modifyCampaign(convertData(campaign))
        //     .then(res => {
        //         if (res[0]) {
        //             openSuccess(res[1]?.message)
        //             clear()
        //         } else {
        //             openFailure(res[1]?.message);
        //         }
        //     })
    }
    const ValidateMovie = () => {
        if (!currentMovie?.title) {
            return "Please Enter Title";
        }
        if (!currentMovie?.type) {
            return "Please Enter Type";
        }
        if (!currentMovie?.titleimg) {
            return "Please Enter Movie Title Img URL";
        }
        if (!currentMovie?.subtitle) {
            return "Please Enter Subtitle";
        }
        if (!currentMovie?.description) {
            return "Please Enter Description";
        }
        if (!currentMovie?.backgroundimg) {
            return "Please Enter Background Img URL";
        }
        if (!currentMovie?.cardimg) {
            return "Please Enter Movie Card Img URL";
        }
        
        return ""
    }

    const saveMovie = () => {
        let err = ValidateMovie();
        if (err !== "") {
            openFailure(err);
            return;
        } else {
            clearAlert()
            if (viewMode === viewModeNew) {
                handleCreateMovie()
            }
            else if (viewMode === viewModeUpdate) {
                handleModifyMovie()
            }
        }
    }

    return (
        <>
         <Grid container spacing={2}>
            <Grid item xs={12} md={12} lg={12} >
                <Button
                    sx={{ mr: "0.5rem" }}
                    size='small'
                    onClick={() => {
                        clearAlert()
                        setViewMode(viewModeNew)
                    }}
                    disabled={viewMode !== viewModeView}
                    variant="contained" color="error">
                    Create New
                </Button>
                <Button
                    sx={{ mr: "0.5rem" }}
                    size='small' color="error"
                    variant="contained"
                    onClick={() => setViewMode(viewModeUpdate)}
                    disabled={viewMode !== viewModeEdit}
                >
                    Edit
                </Button>
                <Button
                    sx={{ mr: "0.5rem" }}
                    size='small' color="success"
                    variant="contained"
                    onClick={() => {
                        saveMovie()
                    }}
                    disabled={viewMode === viewModeView || viewMode === viewModeEdit}
                >
                    Save
                </Button>
                <Button
                    size='small'
                    onClick={() => {
                        clear()
                        clearAlert()
                    }}
                    variant="contained"
                >
                    Cancel
                </Button>
            </Grid>
            <SuccessFailureAlert
                openSuccessAlert={openSuccessAlert}
                setopenSuccessAlert={setOpenSuccessAlert}
                openFailureAlert={openFailureAlert}
                setopenFailureAlert={setOpenFailureAlert}
                message={message}
                />
            <Grid item xs={12}>
                <Paper elevation={2} sx={{ p: 2 }}>
                        <Grid container spacing={1}>
                            <Grid item xs={8} md={8} lg={8}>
                                <TextField
                                    value={currentMovie?.title}
                                    onChange={(e) =>
                                        setCurrentMovie({ ...currentMovie, title: e.target.value })
                                    }
                                    disabled={viewMode === viewModeView || viewMode === viewModeEdit}
                                    size='small' fullWidth id="outlined-basic" label="Movie Title" variant="outlined"
                                />
                            </Grid>
                            
                            <Grid item xs={4} md={4} lg={4}>
                                <Autocomplete
                                    value={currentMovie?.type}
                                    onChange={(e,newValue) =>
                                        setCurrentMovie({ ...currentMovie, type: newValue})
                                    }
                                    options={["recommend","new","trending","original"]}
                                    getOptionLabel={(option) => option}
                                    fullWidth size='small' id="combo-box-demo"
                                    disabled={viewMode === viewModeView || viewMode === viewModeEdit}
                                    renderInput={(params) => <TextField {...params} label="Select Type" variant="outlined" />}
                                />
                            </Grid>
                            <Grid item xs={12} md={12} lg={12}>
                                <TextField
                                    value={currentMovie?.titleimg}
                                    onChange={(e) =>
                                        setCurrentMovie({ ...currentMovie, titleimg: e.target.value })
                                    }
                                    size='small'
                                    disabled={viewMode === viewModeView || viewMode === viewModeEdit}
                                    multiline rows={2} fullWidth id="outlined-basic" label="Movie Title Image URL" variant="outlined" />
                            </Grid>
                            <Grid item xs={12} md={12} lg={12}>
                                <TextField
                                    value={currentMovie?.subtitle}
                                    onChange={(e) =>
                                        setCurrentMovie({ ...currentMovie, subtitle: e.target.value })
                                    }
                                    disabled={viewMode === viewModeView || viewMode === viewModeEdit}
                                    size='small' fullWidth id="outlined-basic" label="Movie Subtitle" variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={12} md={12} lg={12}>
                                <TextField
                                    value={currentMovie?.description}
                                    onChange={(e) =>
                                        setCurrentMovie({ ...currentMovie, description: e.target.value })
                                    }
                                    disabled={viewMode === viewModeView || viewMode === viewModeEdit}
                                    multiline rows={3} fullWidth id="outlined-basic" label="Movie Description" variant="outlined" />
                            </Grid>
                            <Grid item xs={12} md={12} lg={12}>
                                <TextField
                                    value={currentMovie?.backgroundimg}
                                    onChange={(e) =>
                                        setCurrentMovie({ ...currentMovie, backgroundimg: e.target.value })
                                    }
                                    size='small'
                                    disabled={viewMode === viewModeView || viewMode === viewModeEdit}
                                    multiline rows={2} fullWidth id="outlined-basic" label="Background Image URL" variant="outlined" />
                            </Grid>
                            <Grid item xs={12} md={12} lg={12}>
                                <TextField
                                    value={currentMovie?.cardimg}
                                    onChange={(e) =>
                                        setCurrentMovie({ ...currentMovie, cardimg: e.target.value })
                                    }
                                    size='small'
                                    disabled={viewMode === viewModeView || viewMode === viewModeEdit}
                                    multiline rows={2} fullWidth id="outlined-basic" label="Card Image URL" variant="outlined" />
                            </Grid>
                        </Grid>
                    </Paper>
            </Grid>
         </Grid>   
        </>
    );
};

export default ManageMovie;