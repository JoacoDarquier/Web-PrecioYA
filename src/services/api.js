export const fetchDolares = async () => {
    try {
        const currentResponse = await fetch("https://dolarapi.com/v1/dolares");
        const currentData = await currentResponse.json();
        
        const now = new Date();
        const argentinaTime = new Date(now.toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' }));
        const currentHour = argentinaTime.getHours();
        
        const CLOSING_HOUR = 17;
        
        let closingPrices = JSON.parse(localStorage.getItem('closingPrices') || '{}');
        const lastUpdate = localStorage.getItem('lastClosingUpdate');

        if (Object.keys(closingPrices).length === 0) {
            closingPrices = {};
            currentData.forEach(dolar => {
                closingPrices[dolar.nombre] = dolar.venta;
            });
            localStorage.setItem('closingPrices', JSON.stringify(closingPrices));
            localStorage.setItem('lastClosingUpdate', argentinaTime.toISOString());
        }
        
        if (currentHour === CLOSING_HOUR && (!lastUpdate || !isSameDay(new Date(lastUpdate), argentinaTime))) {
            // Guardamos los precios actuales como precios de cierre
            const newClosingPrices = {};
            currentData.forEach(dolar => {
                newClosingPrices[dolar.nombre] = dolar.venta;
            });
            
            localStorage.setItem('closingPrices', JSON.stringify(newClosingPrices));
            localStorage.setItem('lastClosingUpdate', argentinaTime.toISOString());
        }
        
        return currentData.map(dolar => {
            let variation = 0;
            const closingPrice = closingPrices[dolar.nombre];
            
            if (closingPrice) {
                variation = ((dolar.venta - closingPrice) / closingPrice * 100);
                variation = parseFloat(variation.toFixed(2));
            }
            
            console.log(`${dolar.nombre}: Precio actual=${dolar.venta}, Precio cierre=${closingPrice}, Variación=${variation}%`);
            
            return {
                ...dolar,
                variation: !isNaN(variation) ? variation : 0
            };
        });
    } catch (error) {
        console.error("Error fetching dólares:", error);
        return [];
    }
};

// Helper function to compare if two dates are from the same day
const isSameDay = (date1, date2) => {
    return date1.getDate() === date2.getDate() &&
            date1.getMonth() === date2.getMonth() &&
            date1.getFullYear() === date2.getFullYear();
};

export const fetchCriptomonedas = async () => {
    try {
        const response = await fetch(
            "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,ripple,cardano,solana,tron,litecoin&vs_currencies=usd"
        );
        const currentData = await response.json();
        
        const now = new Date();
        const argentinaTime = new Date(now.toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' }));
        const currentHour = argentinaTime.getHours();
        
        const CLOSING_HOUR = 17;

        let closingPrices = JSON.parse(localStorage.getItem('closingPricesCrypto') || '{}');
        const lastUpdate = localStorage.getItem('lastClosingUpdateCrypto');

        if (Object.keys(closingPrices).length === 0) {
            closingPrices = {};
            Object.entries(currentData).forEach(([crypto, data]) => {
                closingPrices[crypto] = data.usd;
            });
            localStorage.setItem('closingPricesCrypto', JSON.stringify(closingPrices));
            localStorage.setItem('lastClosingUpdateCrypto', argentinaTime.toISOString());
        }
        
        if (currentHour === CLOSING_HOUR && (!lastUpdate || !isSameDay(new Date(lastUpdate), argentinaTime))) {
            const newClosingPrices = {};
            Object.entries(currentData).forEach(([crypto, data]) => {
                newClosingPrices[crypto] = data.usd;
            });
            
            localStorage.setItem('closingPricesCrypto', JSON.stringify(newClosingPrices));
            localStorage.setItem('lastClosingUpdateCrypto', argentinaTime.toISOString());
        }
        
        const dataWithVariations = {};
        Object.entries(currentData).forEach(([crypto, data]) => {
            const closingPrice = closingPrices[crypto];
            let variation = 0;
            
            if (closingPrice) {
                variation = ((data.usd - closingPrice) / closingPrice * 100);
                variation = parseFloat(variation.toFixed(2));
            }
            
            dataWithVariations[crypto] = {
                ...data,
                variation: !isNaN(variation) ? variation : 0
            };
        });
        
        return dataWithVariations;
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