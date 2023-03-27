import React from 'react'; 

const Projects = () => {
    return (
      <section id="projects">
  
          <div class="flex justify-center ">
              <div class="block max-w-sm rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-700 mx-6 ">
                  <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                      Marvel Quiz 
                  </h5>
                  <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                      Implemented server side APIs, HTML, CSS, client side storage,
                      and javascript to create a site where users can choose a movie that they 
                      have watched and leave their personal review
                  </p>
              </div>
          </div>
          <div class="flex justify-center mt-6 px-6">
              <div class="block max-w-sm rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-700 mx-6">
                  <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                      React Portfolio
                  </h5>
                  <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                    Through React and tailwind, this portfolio exists to display my past projects which act as a measurement of the skills I've learned 
                    while going through UCI's Full-Stack coding Bootcamp. 
                  </p>
              <div class="">
                  <a href="https://github.com/Keithly009/20ReactPortfolio">
                      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">React Repo</span>
                  </a>
              </div>
              </div>
          </div>
          
      </section>
      );
  };

  export default Projects;