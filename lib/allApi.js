// This function return the data of the delhi weather by default.
export const getWeatherData = async () => {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=${process.env.NEXT_PUBLIC_API_KEY}&units=metric`);
    const response = await data.json();
    return response;
}


// This function return the data of the country weather, asked by the user.
export const getQueryWeatherData = async (query) => {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${process.env.NEXT_PUBLIC_API_KEY}&units=metric`);
    const responce = await data.json();
    return responce;
}
