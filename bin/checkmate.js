#!/usr/bin/env node

import 'esm';
import cli from '../src/cli.js';
import fs from 'fs';
import { parse } from 'csv-parse';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function checkDependency(data, parms){
    data.forEach(function(ele){
        let parsedUrl = new URL(ele.repo);
        console.log(parsedUrl)
    })
    if(parms.update == true){
        updateDependency(data)
    }
}

function updateDependency(data){

}

cli(process.argv).then(
    function(parms){
        var parser = parse({columns: true}, function (err, data) {   
                checkDependency(data,parms)
            }
        );
        if(parser.err){
            console.log("Error in reading CSV"+err);
        }
        else{
            fs.createReadStream(__dirname+'/../'+parms.fileName).pipe(parser);
        }
    });
