import axios from 'axios';

// const API_URL = 'http://localhost:8000/api/';
const API_URL = 'https://chimeres.info/api/';

export default class Api {
  static getFutureEvents() {
    return axios.get(API_URL + 'space/future/?format=json');
  }

  static getPastEvents(offset) {
    return axios.get(API_URL + 'space/past/?format=json&offset=' + offset);
  }

  static getEvent(id) {
    return axios.get(API_URL + 'space/events/' + id + '/?format=json');
  }

  static getEventRecordings(id) {
    return axios.get(API_URL + 'space/recordings/?event=' + id + '&format=json');
  }

  static getRecordings() {
    return axios.get(API_URL + 'space/recordings/?format=json');
  }

  static getDistroCategories() {
    return axios.get(API_URL + 'distro/categories/?format=json');
  }

  static getDistroItems(lettercode) {
    return axios.get(API_URL + 'distro/items/?category__letter_code=' + lettercode + '&format=json');
  }
}
