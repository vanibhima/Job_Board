document.addEventListener('DOMContentLoaded', function() {
    const jobForm = document.getElementById('job-form');
    const jobList = document.getElementById('job-list');
    const searchInput = document.getElementById('search');

    jobForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const title = document.getElementById('title').value;
        const company = document.getElementById('company').value;
        const location = document.getElementById('location').value;
        const description = document.getElementById('description').value;

        const job = {
            title,
            company,
            location,
            description
        };

        addJobToList(job);
        jobForm.reset();
    });

    searchInput.addEventListener('input', function() {
        const searchText = searchInput.value.toLowerCase();
        const jobs = document.querySelectorAll('.job');

        jobs.forEach(job => {
            const title = job.querySelector('h3').textContent.toLowerCase();
            const company = job.querySelector('.company').textContent.toLowerCase();
            const location = job.querySelector('.location').textContent.toLowerCase();
            const description = job.querySelector('.description').textContent.toLowerCase();

            if (title.includes(searchText) || company.includes(searchText) || location.includes(searchText) || description.includes(searchText)) {
                job.style.display = 'block';
            } else {
                job.style.display = 'none';
            }
        });
    });

    function addJobToList(job) {
        const jobElement = document.createElement('div');
        jobElement.classList.add('job');

        jobElement.innerHTML = `
            <h3>${job.title}</h3>
            <p class="company"><strong>Company:</strong> ${job.company}</p>
            <p class="location"><strong>Location:</strong> ${job.location}</p>
            <p class="description">${job.description}</p>
        `;

        jobList.appendChild(jobElement);
    }
});
