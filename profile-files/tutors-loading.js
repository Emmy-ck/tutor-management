        //   <script>
        //     // Initialize page counter and get DOM elements
        //     let page = 1;
        //     const tutorGrid = document.getElementById('tutorGrid');
        //     const loadMoreBtn = document.getElementById('loadMore');
        //     const buttonText = document.getElementById('buttonText');
        //     const loadingSpinner = document.getElementById('loadingSpinner');

        //     // Handle "Show More" button click
        //     loadMoreBtn.addEventListener('click', async (e) => {
        //       e.preventDefault();
        //       try {
        //         // Update UI to show loading state
        //         buttonText.textContent = 'Loading...';
        //         loadingSpinner.classList.remove('d-none');
        //         loadMoreBtn.style.pointerEvents = 'none';

        //         // Fetch next page of tutors from API
        //         const response = await fetch(`/api/tutors?page=${++page}`);
        //         const newTutors = await response.json();

        //         if (newTutors.length > 0) {
        //           // Add each new tutor card to the grid
        //           newTutors.forEach(tutor => {
        //             const tutorCard = createTutorCard(tutor);
        //             tutorGrid.insertAdjacentHTML('beforeend', tutorCard);
        //           });
        //         } else {
        //           // Hide button if no more tutors
        //           loadMoreBtn.style.display = 'none';
        //         }
        //       } catch (error) {
        //         console.error('Error loading more tutors:', error);
        //         buttonText.textContent = 'Error loading tutors';
        //       } finally {
        //         // Reset button state
        //         buttonText.textContent = 'Show More';
        //         loadingSpinner.classList.add('d-none');
        //         loadMoreBtn.style.pointerEvents = 'auto';
        //       }
        //     });

        //     // Helper function to generate HTML for a tutor card
        //     function createTutorCard(tutor) {
        //       return `
        //         <div class="col-md-6 col-lg-4">
        //           <div class="card h-100 shadow-sm">
        //             <div class="card-body">
        //               <div class="d-flex align-items-center mb-3">
        //                 <img src="${tutor.image}" class="rounded-circle me-3" alt="Tutor" width="60" height="60">
        //                 <div>
        //                   <h5 class="card-title mb-0">${tutor.name}</h5>
        //                   <p class="card-text text-muted mb-0"><i class="bi bi-geo-alt"></i> ${tutor.location}</p>
        //                 </div>
        //               </div>
        //               <div class="mb-3">
        //                 ${tutor.expertise.map(exp => `<span class="badge bg-primary me-2">${exp}</span>`).join('')}
        //               </div>
        //               <p class="card-text"><strong>Languages:</strong> ${tutor.languages.join(', ')}</p>
        //               <p class="card-text"><strong>Rate:</strong> KSH ${tutor.rate}/hr</p>
        //               <button class="btn btn-bd-primary w-100">Send Message</button>
        //             </div>
        //           </div>
        //         </div>
        //       `;
        //     }
        //   </script>