import { getQueryWeatherData } from '@/lib/allApi'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'
const Feed = ({ weather }) => {
    const [defaultWeather, setDefaultWeather] = useState(weather)
    const [query, setQuery] = useState("")
    const [error, setError] = useState("")
    // This function helps the user to select a weather of any available country.
    const searchWeatherData = async (e) => {
        e.preventDefault();
        if (!query) return;
        const queryWeather = await getQueryWeatherData(query);
        if (queryWeather.cod === "404") {
            setError("No country found")
            setQuery("")
            return;
        }
        setError("")
        setDefaultWeather(queryWeather);
    }
    return (
        <>
            {/* Search Bar */}
            <div className="w-[90%] mx-auto my-5 h-10 relative flex items-center">
                <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    type="text"
                    placeholder="Search for a country..."
                    className="w-full text-black text-[12px] lg:text-[16px] rounded bg-transparent h-full border-solid border-gray-500 border-2 outline-none px-2 hover:border-sky-300 capitalize placeholder:uppercase placeholder:text-[12px] placeholder:tracking-wide placeholder:lg:text-[16px]" />
                <button onClick={searchWeatherData}>
                    <MagnifyingGlassIcon className="inline-block h-5 w-8 absolute right-1 top-2 text-blue-500" />
                </button>
            </div>

            {/* Handling Error if the user type a country that doesnt exists then code of line will execute. */}
            {error && <div className="text-center text-red-500">{error}</div>}

            {/* Weather Card */}
            {!error && defaultWeather && <div className="m-10 items-center flex flex-col md:flex-row md:justify-center">
                <div className=" md:mr-20 mb-10 transition duration-500 ease-in-out transform bg-sky-200 rounded-lg hover:scale-105 cursor-pointer border flex flex-col justify-center items-center text-center p-6">
                    <div className="text-md font-bold flex flex-col text-gray-900"><span className="uppercase">{defaultWeather?.name}</span> <span className="font-normal text-gray-700 text-sm">{defaultWeather?.weather[0].main}</span></div>
                    <div className="w-32 h-32 flex items-center justify-center">
                        <img width="95" height="72" src={`http://openweathermap.org/img/wn/${defaultWeather?.weather[0].icon}.png`} />
                    </div>
                    <div className="flex flex-row justify-between mt-6 space-x-5">
                        <div className="flex flex-col items-center">
                            <div className="font-medium text-sm">Temperature</div>
                            <div className="text-sm text-gray-500">{defaultWeather?.main.temp.toFixed(1)} C</div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="font-medium text-sm">Wind</div>
                            <div className="text-sm text-gray-500">{defaultWeather?.wind.speed.toFixed(1)} k/h</div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="font-medium text-sm">Humidity</div>
                            <div className="text-sm text-gray-500">{defaultWeather?.main.humidity.toFixed(1)} %</div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="font-medium text-sm">Visibility</div>
                            <div className="text-sm text-gray-500">{defaultWeather?.visibility} km</div>
                        </div>
                    </div>
                </div>
            </div>}
        </>
    )
}

export default Feed