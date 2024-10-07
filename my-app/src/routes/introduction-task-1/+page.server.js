import fetchJson from "$lib/fetch-json";

export async function load() {
  const url = 'https://fdnd-agency.directus.app/items/dropandheal_task';

  const response = await fetchJson(url);
  console.log('API Response:', response);

  const task = response.data.map(task => ({
    ...task,
    description: task.description.replace(/<\/?[^>]+(>|$)/g, "") 
    // Verwijderd HTML tags die meegegeven zijn vanuit directus
  }));

  return {
    task: task || []
  };
}