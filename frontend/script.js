document.addEventListener("DOMContentLoaded", () => {
    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            const tableHead = document.getElementById("table-head");
            const tableBody = document.getElementById("table-body");

            if (data.length > 0) {
                // Create table headers
                Object.keys(data[0]).forEach(key => {
                    const th = document.createElement("th");
                    th.textContent = key;
                    tableHead.appendChild(th);
                });

                // Populate table rows
                data.forEach(row => {
                    const tr = document.createElement("tr");
                    Object.values(row).forEach(value => {
                        const td = document.createElement("td");
                        td.textContent = value;
                        tr.appendChild(td);
                    });
                    tableBody.appendChild(tr);
                });
            }
        })
        .catch(error => console.error("Error loading JSON:", error));
});

