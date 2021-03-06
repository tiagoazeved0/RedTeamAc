import searchView from '../views/searchView.js';
import eventApi from '../services/eventApi.js'

async function start() {
    searchView.clear()
    const events = await eventApi.list();
    searchView.renderEvent(events);
}

export default {
    start,
    hash: 'search'
}