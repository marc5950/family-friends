// Cache API data i 60 sekunder
export const revalidate = 60;

export async function GET() {
  try {
    // Kald til RescueGroups API
    const res = await fetch("https://api.rescuegroups.org/http/v2.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        apikey: "31MWkkgk",
        objectType: "animals",
        objectAction: "publicSearch",
        search: {
          resultStart: 0,
          resultLimit: 100, // Hent 100 dyr
          resultSort: "animalUpdatedDate", // Sortér efter opdateringsdato
          resultOrder: "desc", // Nyeste først
          fields: [
            "animalID", // Unikt ID (bruges som slug)
            "animalName", // Dyrets navn
            "animalSpecies", // Dyretype (Dog, Cat, etc.)
            "animalBreed", // Race
            "animalSex", // Køn
            "animalBirthdate", // Fødselsdato
            "animalDescription", // Lang beskrivelse (HTML)
            "animalPictures", // Array af billeder
            "animalLocationCitystate", // By og stat
            "animalUpdatedDate", // Sidste opdatering
          ],
        },
      }),
    });

    const data = await res.json();
    return Response.json(data);
  } catch (error) {
    return Response.json({ error: "Failed to fetch animals" }, { status: 500 });
  }
}
