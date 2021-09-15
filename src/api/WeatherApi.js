


export const getCurrenWeather = async () => {
	const response = await fetch(`${process.env.REACT_APP_API_URL}=07112&days=7`);
	return response.json();
};

