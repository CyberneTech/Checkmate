#!/usr/bin/env node

import 'esm';
import cli from '../src/cli.js';
import fs from 'fs';
import { parse } from 'csv-parse';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import axios from 'axios';

//to get dirname for pwd
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// function to check if given version matches with that of package.json
function checkDependency(data, parms){
    // dependecy given as argument to cli 
    let dep= [];
    dep.push(parms.Dependency.slice(0, parms.Dependency.lastIndexOf('@')));
    dep.push(parms.Dependency.slice(parms.Dependency.lastIndexOf('@') + 1));
    console.log(dep);
     
    let obj=[];
    data.forEach(function(ele){      
        // parsing url
        let parsedUrl = new URL(ele.repo);
        let temp = (parsedUrl.pathname[parsedUrl.pathname.length -1]=='/')?'':'/';
        let queryURL = 'https://api.github.com/repos'+parsedUrl.pathname+temp+'contents/package.json';

        // Making request to the qureyUrl and storing response
        // decoding the response.data.content (base64 encoded)
        // axios.get(queryURL).then(response => {
        //      let buff = new Buffer.from(response.data.content, 'base64');
        //      let decoded = JSON.parse(buff.toString('ascii'));
            
        //      let object = {
        //          name: ele
        //      }
        //      ele['version'] = decoded.dependencies[dep[0]].replace('^','');

        //      if(decoded.dependencies[dep[0]].replace('^','') >= dep[1] ){
        //         ele['version_satisfied'] = true;
        //      }
        //      else{
        //         ele['version_satisfied'] = false;
        //      }
        //      })
        //   .catch(error => { console.log(error); });
        });
        console.log(data);
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
