import {FAKE_DATA_CURRENT_WEATHER} from './FakeData/currentWeather'

export const getCurrenWeather = () => new Promise((resolve, reject) => {	
	
    setTimeout(() => {
      return resolve(FAKE_DATA_CURRENT_WEATHER);
    }, 200);

});