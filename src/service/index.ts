export async function fetchCountryData() {
  const url = "https://restcountries.com/v2/all?fields=name,region,flag"; 

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
}
