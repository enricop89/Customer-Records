const fs = require('fs');
const readline = require('readline');
const path = require('path');

/**
 * This fn reads the customers file and return an Array composed by object with customers format
 * @returns {Promise<any>}
 */
export function readCustomersFile() {
    return new Promise((resolve, reject) => {
        const rl = readline.createInterface({
            input: fs.createReadStream(path.join(__dirname, '../../..', '/assets/customers.txt'))
        });
        const customers = [];
        rl.on('line', (line) => {
            customers.push(JSON.parse(line));
        });
        rl.on('close', () => {
            resolve(customers);
        });
        rl.on('error', (e) => {
            console.log('error', e);
            reject(e);
        });
    });
}
