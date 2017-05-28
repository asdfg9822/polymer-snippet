/**
 * Created by JongHyeok Choi on 2017. 5. 28..
 */

/**
 * Module
 */
const path = require('path');

/**
 * Custom Module
 */
const MODE = require('./mode.js');


const config = {
    context: __dirname + '/app',
    mode: MODE.ALL,
    input: {
        path: './input', //Get Absolute Path, __dirname is always the directory in which the currently executing script resides
        test: /\.html/,  //Regular Expression for File Extention Check
        exclude: [
           /node_modules/
        ], //Exclude Directory
    },
    output: {
        path: './output'
    }
};

module.exports = config;