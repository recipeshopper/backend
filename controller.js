const express = require('express');

const User = require('./model.js');

const createUser = (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) return res.status(400).json({ data:'input username or password', status: 'failed' });
    const newUser = new User();
    newUser.username = username;
    newUser.password = password;
    newUser.save()
    if (!newUser) return res.status(400).json({ data:'Failed to save new user, this is the servers fault', status: 'failed' });
    return res.status(200).json({ data: newUser, status: 'Success'})
};

const login = (req, res) => {
    const { username, password } = req.body;
    User.findOne({ username: username })
        .then((data) => {
            if (!data) return res.status(400).json({ data: 'Failed to login, this might be the servers fault', status: 'failed' });
                res.status(200).json({ data: data, status: 'success' });
        })
        .catch((err) => {
            if (err) return res.status(400).json({ data: 'Failed to login, this might be the servers fault', status: 'failed' });
        })
};

module.exports = {
    createUser,
    login,
}