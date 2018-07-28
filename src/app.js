import { readCustomersFile } from './components/fileReader';
import { greatCircleDistance } from './components/greatCircleDistance';
import { compareUserId } from './components/util/compareFn';
import Point from './components/point';
import * as constants from './constants';

/**
 * This fn reads the customers.txt file using the readCustomersFile fn.
 * After that, for every customer check if his distance is less or equal of Dublin
 * office point. If true, it push the value inside a customersToInvite array.
 * The last step is the sort by user_id.
 * If there is an error during readCustomersFile fn, the function will throw an error.
 * * If there is an error during greatCircleDistance fn, the specific customer will be discarded.
 * @returns {Promise<void>}
 */
async function start() {
    const customersToInvite = [];
    const customers = await readCustomersFile();
    const dublinOfficePoint = new Point(
        constants.DUBLIN_OFFICE_COORDINATES.latitude,
        constants.DUBLIN_OFFICE_COORDINATES.longitude
    );
    for (let i = 0; i < customers.length; i += 1) {
        const distanceFromDublin = greatCircleDistance(
            dublinOfficePoint,
            new Point(customers[i].latitude, customers[i].longitude)
        );
        if (distanceFromDublin && distanceFromDublin <= constants.MAX_DISTANCE_ALLOWED) {
            customersToInvite.push({ user_id: customers[i].user_id, name: customers[i].name });
        }
    }
    customersToInvite.sort(compareUserId);
    console.log('############# Customers to invite - Start #############');
    for (let i = 0; i < customersToInvite.length; i += 1) {
        console.log(customersToInvite[i]);
    }
    console.log(`############# Total customers to invite: ${customersToInvite.length}  #############`);
}

start().catch((e) => {
    console.log('It was not possible to calculate the distance for the customers.txt file - Please check the error:', e);
});