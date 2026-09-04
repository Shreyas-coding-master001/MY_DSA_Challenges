const cheerio = require('cheerio');

async function printSecretMessage(url) {
    try {
        // 1. Fetch the published Google Doc HTML content
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Failed to fetch document: ${response.statusText}`);
        const html = await response.text();

        // 2. Load the HTML into Cheerio for easy parsing
        const $ = cheerio.load(html);
        
        const points = [];
        let maxX = 0;
        let maxY = 0;

        // 3. Loop through each row in the table
        $('table tr').each((index, element) => {
            // Skip the header row (usually contains words like 'x-coordinate', 'Character')
            if (index === 0) return;

            const cells = $(element).find('td');
            if (cells.length >= 3) {
                // Adjust text trimming based on Google Doc export formatting
                const xStr = $(cells.eq(0)).text().trim();
                const char = $(cells.eq(1)).text().trim();
                const yStr = $(cells.eq(2)).text().trim();

                const x = parseInt(xStr, 10);
                const y = parseInt(yStr, 10);

                // Ensure data rows are valid numbers
                if (!isNaN(x) && !isNaN(y) && char) {
                    points.push({ x, y, char });
                    
                    // Track grid boundaries
                    if (x > maxX) maxX = x;
                    if (y > maxY) maxY = y;
                }
            }
        });

        // 4. Initialize an empty grid filled with spaces
        // Rows = maxY + 1, Columns = maxX + 1
        const grid = Array.from({ length: maxY + 1 }, () => 
            Array(maxX + 1).fill(' ')
        );

        // 5. Populate the grid with the parsed characters
        // Standard coordinate systems map (0,0) to top-left.
        // If your output prints upside down, change to: grid[maxY - p.y][p.x] = p.char;
        for (const p of points) {
            grid[p.y][p.x] = p.char;
        }

        // 6. Print the grid line by line to reveal the secret message
        for (let r = 0; r <= maxY; r++) {
            console.log(grid[r].join(''));
        }

    } catch (error) {
        console.error("Error processing the Google Doc:", error.message);
    }
}


printSecretMessage('https://docs.google.com/document/d/e/2PACX-1vSvM5gDlNvt7npYHhp_XfsJvuntUhq184By5xO_pA4b_gCWeXb6dM6ZxwN8rE6S4ghUsCj2VKR21oEP/pub');



