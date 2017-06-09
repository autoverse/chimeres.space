import axios from 'axios';

export default class Api {
    static getEvents() {
        return axios.get('https://chimeres.info/api/space/future/?format=json');
    }

    static getEvent(id) {
        return axios.get('https://chimeres.info/api/space/events/' + id + '/?format=json');
    }
}
