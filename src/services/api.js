export const fetchDolares = async () => {
    try {
        const response = await fetch("https://dolarapi.com/v1/dolares");
        return await response.json();
    } catch (error) {
        console.error("Error fetching dólares:", error);
        return [];
    }
};

export const fetchCriptomonedas = async () => {
    try {
        const response = await fetch(
            "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,ripple,cardano,solana,tron,litecoin&vs_currencies=usd"
        );
        return await response.json();
    } catch (error) {
        console.error("Error fetching criptomonedas:", error);
        return {};
    }
};

export const fetchDolaresCripto = async () => {
    try {
        const response = await fetch("https://criptoya.com/api/USDT/ARS/1");
        return await response.json();
    } catch (error) {
        console.error("Error fetching dólares cripto:", error);
        return {};
    }
}; 