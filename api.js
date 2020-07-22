import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://api.airtable.com/v0/app1R8YEUfpCYvsv7',
    timeout: 1000,
    headers: {'Authorization': 'Bearer '+'keyDk2Io1sg5AXhW6'}
  })