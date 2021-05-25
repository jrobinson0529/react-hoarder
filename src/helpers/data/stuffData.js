import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbURL = firebaseConfig.databaseURL;
const createStuff = (thing) => new Promise((resolve, reject) => {
  axios.post(`${dbURL}/stuff.json`, thing)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbURL}/stuff/${response.data.name}.json`, body)
        .then((x) => resolve(x.data))
        .catch((error) => reject(error));
    });
});

export default createStuff;
