async function useFetch<I>(url: string): Promise<I | null> {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Erro: ${response.status}`);
    const json = await response.json();
    return json;
  } catch (error) {
    if(error instanceof Error) console.log(error);
    return null;
  }
}

export default useFetch;
