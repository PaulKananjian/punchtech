#! c:/users/paulk/desktop/website
import React from 'react';
const express = require('express');

const app = express();

app.set('view engine', 'ejs')


app.listen(3000, ()=>{ console.log('server is listening') })
