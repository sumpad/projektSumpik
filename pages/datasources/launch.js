export{};
const { RESTDataSource } = require ('apollo-datasource-rest');

class LaunchAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.spacexdata.com/v2/';
  }
  
async getAllLaunches() {
  const response = await this.get('launches');
  return Array.isArray(response)
    ? response.map(launch => this.launchReducer(launch))
    : [];
} 
  launchReducer(launch) {
    return {
      id: launch.flight_number || 0,
      cursor: `${launch.launch_date_unix}`,
      site: launch.launch_site && launch.launch_site.site_name,
      rocket: {
        id: launch.rocket.rocket_id,
        city: launch.rocket.rocket_name,
        time: launch.rocket.rocket_type,
      },
    };
  }
  
}



module.exports = LaunchAPI;