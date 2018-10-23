import axios from 'axios';

export default class Api {
  static getFutureEvents() {
    return axios.get('https://chimeres.info/api/space/future/?format=json');
  }

  static getPastEvents(offset) {
    return axios.get('https://chimeres.info/api/space/past/?format=json&offset=' + offset);
  }

  static getEvent(id) {
    return axios.get('https://chimeres.info/api/space/events/' + id + '/?format=json');
  }

  static getEventRecordings(id) {
    return axios.get('https://chimeres.info/api/space/recordings/?event=' + id + '&format=json');
  }
}
