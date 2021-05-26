import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbURL = firebaseConfig.databaseURL;
const getStuff = () => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/stuff.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});
const getThing = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/stuff/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});
const updateThing = (firebaseKey, thingObject) => new Promise((resolve, reject) => {
  axios.patch(`${dbURL}/stuff/${firebaseKey}.json`, thingObject)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const createStuff = (thing) => new Promise((resolve, reject) => {
  axios.post(`${dbURL}/stuff.json`, thing)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbURL}/stuff/${response.data.name}.json`, body)
        .then(() => getStuff().then(resolve))
        .catch((error) => reject(error));
    });
});
export {
  createStuff, getStuff, getThing, updateThing
};
