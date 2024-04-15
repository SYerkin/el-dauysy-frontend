import React, { useState, useContext } from 'react';
import PetitionCard from "../PetitionCard/PetitionCard";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { AuthContext } from '../path/to/AuthContext';
import { db } from '../path/to/your/firebase-config'; 
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

function Petitions() {
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [signatureCount, setSignatureCount] = useState('');
    const { username } = useContext(AuthContext); 

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleCreate = async () => {
        try {
            await addDoc(collection(db, "petitions"), {
                title: title,
                description: description,
                signatureCount: parseInt(signatureCount, 10),
                createdAt: serverTimestamp(),
                author: username
            });
            console.log("Document successfully written!");
            handleClose();
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    };

    return (
        <>
            <Button variant="outlined" onClick={handleClickOpen}>
                Create Petition
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Create a new Petition</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Title"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <TextField
                        margin="dense"
                        id="description"
                        label="Description"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <TextField
                        margin="dense"
                        id="signatureCount"
                        label="Signature Count"
                        type="number"
                        fullWidth
                        variant="standard"
                        value={signatureCount}
                        onChange={(e) => setSignatureCount(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleCreate}>Create</Button>
                </DialogActions>
            </Dialog>
            <PetitionCard />
        </>
    );
}

export default Petitions;
