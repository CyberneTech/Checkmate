#!/usr/bin/env node

import 'esm';
import cli from '../src/cli.js';
import fs from 'fs';
import { parse } from 'csv-parse';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { Octokit } from "octokit";
import dotenv from 'dotenv';
import { exec } from "child_process";

dotenv.config();

//to get dirname for pwd
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// function to check if given version matches with that of package.json
function checkDependency(data, parms){
    // dependecy given as argument to cli 
    let dep= [];
    dep.push(parms.Dependency.slice(0, parms.Dependency.lastIndexOf('@')));
    dep.push(parms.Dependency.slice(parms.Dependency.lastIndexOf('@') + 1));
     
    let obj=[];
    data.forEach(async function matchJSON(ele){      
        // parsing url
        let parsedUrl = new URL(ele.repo);
        let url = parsedUrl.pathname.split('/');

        // Making request to the qureyUrl and storing response
        //decoding the response.data.content (base64 encoded)

        const octokit = new Octokit({ auth: process.env.AUTH_TOKEN });

        let response = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
            owner: url[1],
            repo: url[2],
            path: 'package.json'
          });
             let buff = new Buffer.from(response.data.content, 'base64');
             let decoded = JSON.parse(buff.toString('ascii'));
             
             let Version =  decoded.dependencies[dep[0]].replace('^','');
             let object = {
                    name: ele.name,
                    repo: ele.repo,
                    version: Version,
                    version_satisfied: false
                 }

             if(decoded.dependencies[dep[0]].replace('^','') >= dep[1] ){
                object['version_satisfied'] = true;
             }
             else{
                object['version_satisfied'] = false;
             }   
        obj.push(object); 
        if(obj.length == data.length){
            console.table(obj); 
            if(parms.update == true){
            try{
                updateDependency(obj,parms.Dependency);
            }
            catch(err)
            {console.log(err);
            }
            }
        }
    
        });
}


function updateDependency(objArr,version){
    objArr.forEach(async function(ele){
        if(ele.version_satisfied == false){

        let parsedUrl = new URL(ele.repo);
        let url = parsedUrl.pathname.split('/');
        const octokit = new Octokit({ auth: process.env.AUTH_TOKEN });
        let response = await octokit.request('POST /repos/{owner}/{repo}/forks', {
                owner: url[1],
                repo: url[2]
        });
        
        exec( 'git clone '+response.data.html_url, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        else{
            console.log('Respository cloned successfully');

            const branch = 'package-update';
        exec( 'cd '+response.data.name+' && npm install '+version, (error) => {
            if (error) {
                console.log(`error: ${error.message}`);
                return;
            }
            else{
                console.log('Package updated successfully');

                exec('cd '+response.data.name+' && git checkout -b '+branch+' && git add . && git commit -m "update to '+version+'" && git push -u origin '+branch, async (error, stdout, stderr) => {
                    if (error) {
                        console.log(`error: ${error.message}`);
                        return;
                    }
                    else{
                        await octokit.request('POST /repos/{owner}/{repo}/pulls', {
                            owner: url[1],
                            repo: url[2],
                            title: 'update to'+version,
                            body: 'Version of a dependecy in package.json has been updated',
                            head: response.data.owner.login+":"+branch,
                            base: 'main'
                          });
                    }
                    });
            }
            });
        }
        });
            
        }
    });
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
