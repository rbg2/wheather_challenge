import React, {Component} from 'react';
import {getCurrenWeather} from '../api/FakeApi'

class Panel extends Component {

	constructor(props) {
		super(props);
		
		this.state = {
			error: null,
			isLoading: true,     // Empieza a true porque el componentDidMount es async y tarda en setear
			location: null,
			current: null
		}
	}

	async componentDidMount() {

		this.setState({ isLoading: true });
		try{
			const {location, current} = await getCurrenWeather();
			this.setState({location, current, isLoading: false});
		} catch(error){
			this.setState({ isLoading: false , error});
		}  

	}

	render() {

		const {error, isLoading, location, current } = this.state;

		if(isLoading) {
			return(<div>cargando</div>);
		}

		if(error){
			return(<div>error</div>)
		}

		return(<React.Fragment>
				<div className="location">
					<div className="locationName">
						Name: {location.name}
					</div>
					<div className="locationRegion">
						Region: {location.region}
					</div>
					<div className="locationCountry">
						Country: {location.country}
					</div>
					<div>
						Today: {location.localtime}
					</div>
				</div>
				
				
				{current.temp_c}
				{current.condition.text}

				<div className="detailWeather">
					<img src={current.condition.icon} alt={current.condition.text} />
				</div>
			</React.Fragment>
		)
		
		
		
	}
	

}

export default Panel;