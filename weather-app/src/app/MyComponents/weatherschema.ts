export interface Weather {
  _id: string; 
  city: string;
  clouds : string;
  humidity: string;
  maxTemperature: number; 
  minTemperature: number; // An array of cast members
  precautions: string;
  temperature: number; // An array of languages the movie is available in
  weatherCondition: string; // Assuming release date is stored as a string
  windSpeed: number; // URL or path to the movie's image
  }