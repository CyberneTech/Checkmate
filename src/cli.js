import arg from 'arg';

function parseArguments(initArgs){
    const args = arg(
        {
            '--inspect': Boolean,
            '--update': Boolean,
            '-i': '--inspect',
            '-u': '--update'
        },  
        {
            argv: initArgs.slice(2),
        }
    );
    return {
        install: args['--inspect'] || false,
        update: args['--update'] ||false,
        fileName: args._[0],
        Dependency: args._[1],
    };
}


export default async function cli(args){
    let parms = parseArguments(args);
    return parms;
}
