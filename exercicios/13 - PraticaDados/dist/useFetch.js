async function useFetch(url) {
    try {
        const response = await fetch(url);
        if (!response.ok)
            throw new Error(`Erro: ${response.status}`);
        const json = await response.json();
        return json;
    }
    catch (error) {
        if (error instanceof Error)
            console.log(error);
        return null;
    }
}
export default useFetch;
//# sourceMappingURL=useFetch.js.map