import axios from 'axios';

export default class Api {
    static getFutureEvents() {
        return axios.get('https://chimeres.info/api/space/future/?format=json');
    }

    static getPastEvents() {
        return axios.get('https://chimeres.info/api/space/past/?format=json');
    }

    static getEvent(id) {
        return axios.get('https://chimeres.info/api/space/events/' + id + '/?format=json');
    }
}
