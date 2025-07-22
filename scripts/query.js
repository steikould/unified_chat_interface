document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.getElementById('submit-query');
    const queryInput = document.getElementById('query-input');
    const generatedQueryText = document.getElementById('generated-query-text');
    const approveButton = document.getElementById('approve-query');
    const resultsTable = document.getElementById('results-table');

    submitButton.addEventListener('click', () => {
        const query = queryInput.value;
        if (query) {
            const generatedQuery = `SELECT * FROM \`your-project.your-dataset.your-table\` WHERE description LIKE '%${query}%'`;
            generatedQueryText.textContent = generatedQuery;
        }
    });

    approveButton.addEventListener('click', () => {
        // In a real application, you would run the query here.
        // For now, we will just display the synthetic data.
        fetch('data.json')
            .then(response => response.json())
            .then(data => {
                displayResults(data);
            });
    });

    function displayResults(data) {
        let table = '<table><thead><tr>';
        const headers = Object.keys(data[0]);
        headers.forEach(header => {
            table += `<th>${header}<input type="text" class="filter-input" data-column="${header}"></th>`;
        });
        table += '</tr></thead><tbody>';
        data.forEach(row => {
            table += '<tr>';
            headers.forEach(header => {
                table += `<td>${row[header]}</td>`;
            });
            table += '</tr>';
        });
        table += '</tbody></table>';
        resultsTable.innerHTML = table;

        const filterInputs = document.querySelectorAll('.filter-input');
        filterInputs.forEach(input => {
            input.addEventListener('keyup', () => {
                filterTable();
            });
        });
    }

    function filterTable() {
        const table = document.querySelector('table');
        const rows = table.querySelectorAll('tbody tr');
        const filterInputs = document.querySelectorAll('.filter-input');
        const filters = {};
        filterInputs.forEach(input => {
            filters[input.dataset.column] = input.value.toLowerCase();
        });

        rows.forEach(row => {
            let visible = true;
            const cells = row.querySelectorAll('td');
            cells.forEach((cell, index) => {
                const column = Object.keys(filters)[index];
                if (filters[column] && !cell.textContent.toLowerCase().includes(filters[column])) {
                    visible = false;
                }
            });
            row.style.display = visible ? '' : 'none';
        });
    }
});
