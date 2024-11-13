package main

import (
	"encoding/json"
	"fmt"
	"html/template"
	"log"
	"net/http"
)

// Template cache
var templates = template.Must(template.ParseGlob("templates/*.html"))

// Struct to parse JSON response from OpenWeatherMap API
type WeatherData struct {
	Name string `json:"name"`
	Main struct {
		Temp     float64 `json:"temp"`
		Humidity int     `json:"humidity"`
	} `json:"main"`
	Weather []struct {
		Description string `json:"description"`
	} `json:"weather"`
}

// Fetch weather data from OpenWeatherMap
func fetchWeatherData() (WeatherData, error) {
	// Using your API key directly here
	apiKey := "c9164b3774d8a3468a844ddbe28faccc"
	city := "Burlington,VT,US" // You can replace with any city in VT
	apiURL := fmt.Sprintf("https://api.openweathermap.org/data/2.5/weather?q=%s&units=metric&appid=%s", city, apiKey)

	resp, err := http.Get(apiURL)
	if err != nil {
		return WeatherData{}, err
	}
	defer resp.Body.Close()

	var data WeatherData
	if err := json.NewDecoder(resp.Body).Decode(&data); err != nil {
		return WeatherData{}, err
	}

	return data, nil
}

// Home page handler
func homeHandler(w http.ResponseWriter, r *http.Request) {
	// Fetch weather data
	weather, err := fetchWeatherData()
	if err != nil {
		http.Error(w, "Unable to get weather data", http.StatusInternalServerError)
		log.Println("Error fetching weather data:", err)
		return
	}

	// Render template with weather data
	err = templates.ExecuteTemplate(w, "about.html", weather)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
}

// Main function
func main() {
	// Serve static files (CSS, JS)
	fs := http.FileServer(http.Dir("./static"))
	http.Handle("/static/", http.StripPrefix("/static/", fs))

	// Route handlers
	http.HandleFunc("/", homeHandler)

	// Start server
	log.Println("Starting server on :8080")
	err := http.ListenAndServe(":8080", nil)
	if err != nil {
		log.Fatal("Server error:", err)
	}
}
