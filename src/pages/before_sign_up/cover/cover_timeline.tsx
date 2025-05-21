// import { motion } from "framer-motion";
// import { FaAddressCard, FaArchive, FaAddressBook, FaBriefcase, FaDesktop, FaIdCard } from "react-icons/fa";
import "../../../assets/css/curvedTimeline.css"


// const events = [
//   { date: "2 June", title: "Event One", description: "It will be as simple as occidental in fact it will be Occidental Cambridge friend", bgColor: "bg-blue-100 text-blue-600" },
//   { date: "5 June", title: "Event Two", description: "Everyone realizes why a new common language one could refuse translators.", bgColor: "bg-green-100 text-green-600" },
//   { date: "7 June", title: "Event Three", description: "If several languages coalesce the grammar of the resulting simple and regular", bgColor: "bg-red-100 text-red-600" },
//   { date: "8 June", title: "Event Four", description: "Languages only differ in their pronunciation and their most common words.", bgColor: "bg-yellow-100 text-yellow-600" },
// ];

// const Timeline = () => {
//   return (
//     <div className="container mx-auto px-4 py-10">
//       <div className="bg-white shadow-lg rounded-lg p-6">
//         <h4 className="text-2xl font-semibold mb-6 text-center">Horizontal Timeline</h4>

//         <div className="relative">
//           {/* Timeline Line */}
//           <div className="absolute top-1/2 left-0 w-full border-t-4 border-gray-200"></div>

//           {/* Timeline Events */}
//           <ul className="flex justify-between items-center relative">
//             {events.map((event, index) => (
//               <li key={index} className="relative w-1/4 text-center">
//                 <div className={`absolute top-[-30px] left-1/2 transform -translate-x-1/2 px-3 py-1 rounded ${event.bgColor}`}>
//                   {event.date}
//                 </div>
//                 <div className="bg-white p-4 rounded-lg shadow-md mt-6">
//                   <h5 className="text-lg font-semibold">{event.title}</h5>
//                   <p className="text-gray-500 text-sm">{event.description}</p>
//                   <div className="mt-2">
//                     <a href="#" className="text-blue-500 hover:underline text-sm">Read more</a>
//                   </div>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Timeline;


















// const timelineData = [
//   {
//     year: "Near Future",
//     events: [
//       { icon: FaAddressCard, title: "Updated 5.0", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." },
//       { icon: FaArchive, title: "Fixed bug", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." },
//       { icon: FaAddressBook, title: "Reach 1k Users", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." }
//     ]
//   },
//   {
//     year: "2020",
//     events: [
//       { icon: FaBriefcase, title: "Updated 4.4.0", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." },
//       { icon: FaDesktop, title: "Fixed bug", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." }
//     ]
//   },
//   {
//     year: "2019",
//     events: [
//       { icon: FaIdCard, title: "Updated 4.0", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." },
//       { icon: FaDesktop, title: "Fixed bug", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." },
//     //   { icon: FaPictureO, title: "Reach 500 Users", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." }
//     ]
//   }
// ];

// export default function Timeline() {
//   return (
//     <section className="py-16 bg-gray-100">
//       <div className="container mx-auto text-center mb-12">
//         <h6 className="text-blue-500">Our History</h6>
//         <h3 className="text-3xl font-bold">A brief story of our 2-year company journey</h3>
//         <div className="w-16 h-1 bg-blue-500 mx-auto mt-2"></div>
//       </div>
//       <div className="container mx-auto">
//         {timelineData.map((section, index) => (
//           <div key={index} className="mb-10">
//             <motion.p 
//               className="text-xl font-semibold text-blue-600 mb-6"
//               initial={{ opacity: 0, x: -50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.2 }}
//             >
//               {section.year}
//             </motion.p>
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {section.events.map((event, idx) => (
//                 <motion.div 
//                   key={idx} 
//                   className="p-6 bg-white shadow-lg rounded-lg flex items-start space-x-4"
//                   initial={{ opacity: 0, y: 50 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: idx * 0.2 }}
//                 >
//                   <div className="text-blue-500 text-3xl">
//                     <event.icon />
//                   </div>
//                   <div>
//                     <h6 className="text-lg font-bold">{event.title}</h6>
//                     <p className="text-gray-600">{event.text}</p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

const HorizontalTimeline = () => {
    return (
      <div className="page-wrapper">
        <div className="section-timeline-heading">
          <div className="container">
            <div className="py-12">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold">The Rise of Electric Vehicles</h2>
              </div>
              <p className="text-lg text-center">
                The electric vehicle (EV) revolution began with small, incremental steps.
                <br />This timeline tracks key moments in the development of electric cars and the global push towards sustainability.
              </p>
            </div>
          </div>
        </div>
        <div className="section-timeline">
          <div className="container">
            <div className="timeline_component relative">
              <div className="timeline_progress absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-300 h-full"></div>
              
              {timelineData.map((item, index) => (
                <div key={index} className="timeline_item flex mb-12">
                  <div className="timeline_left w-1/3 text-right pr-4">
                    <div className="timeline_date-text font-bold">{item.date}</div>
                  </div>
                  <div className="timeline_centre relative w-6 flex items-center justify-center">
                    <div className="timeline_circle w-6 h-6 bg-blue-500 rounded-full"></div>
                  </div>
                  <div className="timeline_right w-2/3 pl-4">
                    <div className="mb-4">
                      <p className="timeline_text text-lg">{item.text}</p>
                    </div>
                    {item.extra && <p className="text-gray-500 text-sm mb-4">{item.extra}</p>}
                    {item.link && (
                      <div className="mb-4">
                        <a href={item.link} target="_blank" className="text-blue-600 underline">Tesla’s achievements</a>
                      </div>
                    )}
                    <div className="timeline_image-wrapper">
                      <img src={item.image} alt={item.alt} className="w-full max-w-md" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="fixed bottom-6 right-6">
          <a href="https://www.youtube.com/@PixelPerfectLabs" target="_blank" className="bg-red-600 p-3 rounded-full shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
              <path d="M21.593 7.203a2.506 2.506 0 0 0-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 0 0-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765 1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.515 2.515 0 0 0 1.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831zM9.996 15.005l.005-6 5.207 3.005-5.212 2.995z"></path>
            </svg>
          </a>
        </div>
      </div>
    );
  };
  
  const timelineData = [
    {
      date: "January 2010",
      text: "Tesla introduces its first electric car, the Roadster, showing the world the potential of electric vehicles with a range of over 200 miles.",
      image: "https://imageio.forbes.com/specials-images/imageserve/6335d236f4ddc58b72592c39//960x0.jpg",
      alt: "Tesla Roadster"
    },
    {
      date: "March 2015",
      text: "The Chevy Bolt EV is launched, providing an affordable alternative to Tesla’s luxury offerings, and pushing the industry closer to mass-market electric vehicles.",
      image: "https://imageio.forbes.com/specials-images/imageserve/6335d2c49044f4bf8e4becc0//960x0.jpg",
      alt: "Chevy Bolt EV"
    },
    {
      date: "July 2020",
      text: "Governments around the world, including the EU and the US, announce ambitious goals for the phase-out of gas-powered vehicles, further accelerating the electric vehicle transition.",
      extra: "Countries like Norway plan to ban the sale of new internal combustion engine vehicles by 2025, promoting EV adoption as a critical environmental initiative.",
      image: "https://imageio.forbes.com/specials-images/imageserve/6335d4e2fb9864af06377afd//960x0.jpg",
      alt: "Government EV Announcement"
    },
    {
      date: "February 2021",
      text: "Tesla achieves a milestone of producing over 1 million vehicles, cementing its position as the leader in the electric vehicle market.",
      link: "https://www.tesla.com",
      image: "https://imageio.forbes.com/specials-images/imageserve/6335d3b738b890b16d377aff//960x0.jpg",
      alt: "Tesla Milestone"
    },
    {
      date: "October 2022",
      text: "Electric vehicles make up more than 10% of global vehicle sales, marking a significant milestone in the transition to greener transportation.",
      image: "https://imageio.forbes.com/specials-images/imageserve/62c59c93a89b61113849c82f//960x0.jpg",
      alt: "Electric Vehicle Sales Milestone"
    }
  ];
    

export default HorizontalTimeline;
