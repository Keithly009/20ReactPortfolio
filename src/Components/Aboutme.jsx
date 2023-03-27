import React from 'react'; 

function aboutMe() {
    return (
        <section id="about">
            <div className="pt-20 pb-60 content-center">
                  <h1 className="text-center text-4xl font-bold text-stone-800 tracking-wide">
                      Hello and welcome to my React portfolio! My name is Keith Ly 
                  </h1>
                  <p className="pt-6 text-center text-2xl font-bold text-neutral-700 tracking-wide break-all"> 
                        I am a fresh graduate from UCI's full-stack coding bootcamp and I aspire to deepen my understanding of what has been taught to me!
                  </p>
                <div className="pt-7 text-center content-center gap-x-6 lg:justify-start">
                    <a href="https://www.linkedin.com/in/keith-ly-086778212/" className="text-md font-semibold leading-6 text-white p-3">
                        LINKEDIN <span aria-hidden="true">→</span>
                    </a>

                    <a href="https://github.com/Keithly009" className="text-md font-semibold leading-6 text-white p-3">
                        GITHUB <span aria-hidden="true">→</span>
                    </a>
                    <a href="https://docs.google.com/document/dhttps://docs.google.com/document/d/1mNTpjqMgPMbuvLqycS9NchD7Bq7CyozYWmeHjhVqy0U/edit#heading=h.x8fm1uorkbaw/e/2PACX-1vTtnMu314D4TgPXQNnLtMEHVB-veCF7CLqWb4x129jVUP8ckCwINPU8n-x6cR4AwVnieMgUv-ReOxEp/pub" className="text-md font-semibold leading-6 text-white p-3">
                        RESUME <span aria-hidden="true">→</span>
                    </a>
                </div>

            </div>
        </section>
    );
};

export default aboutMe;