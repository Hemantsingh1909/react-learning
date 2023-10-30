export default function Newsletter() {

      
    return (
      <section>
        <div className="max-w-full mx-auto p-[30vh] px-4 sm:px-6">
          <div className="pb-12 md:pb-20">
  
            {/* CTA box */}
            <div className="relative bg-white rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl overflow-hidden">
  
              {/* Background illustration */}
              <div className="absolute right-0 bottom-0 pointer-events-none hidden lg:block" aria-hidden="true">
                <svg width="400" height="360" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <radialGradient cx="35.542%" cy="34.553%" fx="35.542%" fy="34.553%" r="96.031%" id="ni-a">
                      <stop stopColor="#DFDFDF" offset="0%" />
                      <stop stopColor="#4C4C4C" offset="44.317%" />
                      <stop stopColor="#333" offset="100%" />
                    </radialGradient>
                  </defs>
                  <g fill="none" fillRule="evenodd">
                    <g fill="#FFF">
                      <ellipse fillOpacity=".04" cx="185" cy="15.576" rx="16" ry="15.576" />
                      <ellipse fillOpacity=".24" cx="100" cy="68.402" rx="24" ry="23.364" />
                      <ellipse fillOpacity=".12" cx="29" cy="251.231" rx="29" ry="28.231" />
                      <ellipse fillOpacity=".64" cx="29" cy="251.231" rx="8" ry="7.788" />
                      <ellipse fillOpacity=".12" cx="342" cy="31.303" rx="8" ry="7.788" />
                      <ellipse fillOpacity=".48" cx="62" cy="126.811" rx="2" ry="1.947" />
                      <ellipse fillOpacity=".12" cx="78" cy="7.072" rx="2" ry="1.947" />
                      <ellipse fillOpacity=".64" cx="185" cy="15.576" rx="6" ry="5.841" />
                    </g>
                    <circle fill="url(#ni-a)" cx="276" cy="237" r="200" />
                  </g>
                </svg>
              </div>
  
              <div className="relative flex flex-col lg:flex-row justify-between items-center">
  
                {/* CTA content */}
                <div className="flex flex-col text-start lg:text-left m-20 lg:max-w-xl">
                  <h3 className="h3 text-black pb-[2vh] text-5xl font-bold mb-2">Want more tutorials & guides?</h3>
                  <p className="text-black font-medium text-2xl pb-[2vh] mb-6">Stay in the loop with our latest updates, news, and special offers by subscribing to our newsletter. To subscribe, simply enter your email address below and click the "Subscribe" button. Thank you for being a part of our community!</p>
  
                  {/* CTA form */}
                  <form className='flex gap-4'>
                  <input class="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="email"/>
                  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
                  </form>
                </div>
  
              </div>
  
            </div>
  
          </div>
        </div>
      </section>
    )
  }