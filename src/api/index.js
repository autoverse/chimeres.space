import axios from 'axios';

export default class Api {
    static getEvents() {
        return axios.get('http://127.0.0.1:8000/api/space/events/?format=json');
    }

    static getEvent(id) {
        return axios.get('http://127.0.0.1:8000/api/space/events/' + id + '/?format=json');
    }
}
