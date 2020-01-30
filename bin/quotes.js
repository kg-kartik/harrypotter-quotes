#!/usr/bin/env node

var yargs = require('yargs');
var os = require('os');
var colors = require('colors');
const CFonts = require('cfonts');
const quotes = require('./quotesxample');

var quotesstart = {
    description : 'Start the quote',
    alias : 'q',
    demand : true
}
var nextquote = {
    description : 'next quote',
    alias : 'q',
    demand : true
}

var argv = yargs
    .command('start','start the quotes', {
        quotes : quotesstart
    })
    .command('next', 'Next Quote', {
        quote : nextquote
    })
    .command('')
    .help()
    .argv;

    var command = argv._[0];
    
    quotesFetch = () => {
        var randomquote = quotes[Math.floor(Math.random() * quotes.length)];
        console.log(colors.green.bold(randomquote[0]+' ~ '+randomquote[1]));
    }


    //commands 
if (command === 'start')
{
    CFonts.say(`Hello| Harry Potter |Fan, ${os.userInfo().username}`, {
        font: 'block',            
        align: 'center',              
        colors: ['yellow'],         
        background: 'black', 
        letterSpacing: 1,          
        lineHeight: 0.2,           
        space: true,                
        maxLength: '15',             
    });
    console.log(colors.red('Quotes Started...'));
    quotesFetch();
}
else if(command === 'next')
{
    console.log(colors.red('Loading Quote...'));
    quotesFetch();
}
else {
    console.log(colors.red('Invalid Command'));
}

