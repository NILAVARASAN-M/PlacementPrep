import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cover_page from './pages/before_sign_up/cover/cover_page';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Signup from './pages/before_sign_up/sign-up/sign_up';
import PersonDetailsPrompt from './pages/before_sign_up/sign-up/user_detail';
import SignIn from './pages/before_sign_up/login/sign_in';

import HomePage from './pages/after_sign_up/home/Home';
import NavbarWithSidebar from './components/New_Navbar';
import { useParams } from 'react-router-dom';
import ProblemSolvingPage from './pages/after_sign_up/Problems/Problem';
import BlogPage from './pages/after_sign_up/Blogs/Blogs';
import BlogSubPage, { BlogSubPagetemp } from './pages/after_sign_up/Blogs/Blogs_sub';
import Placement from './pages/after_sign_up/Company/Placement';
import Company from './pages/after_sign_up/Company/Company';
import CompanyPage from './pages/after_sign_up/Company/CompanyInfo';
import JobNoticeComponent from './pages/after_sign_up/placement/CompanyJobNotice';
import JobApplicationPage from './pages/after_sign_up/placement/ApplyJob';
import BlogDetail from './pages/after_sign_up/Blogs/Blogs_New';
import JobDashboard from './pages/after_sign_up/placement/Job_DashBoard';
import { Temp } from './pages/after_sign_up/Company/Temp';
import GoogleProblems from './pages/after_sign_up/Problems/Prob_Temp';
import LandingPage from './pages/temp/temp1';
import PlacementPrepLanding from './pages/temp/temp2';
import PlacementPrepLanding2 from './pages/temp/temp3';
import FinalPage from './pages/temp/temp4';
import NavbarNew2 from './components/New_Navbar_2';
import HomeBefore from './pages/before_sign_up/Home/BeforeSignUpHOME';
import FooterNew from './components/NewFooter';
import ChatbotUI from './pages/before_sign_up/ChatBot/bot';
import Camera from './pages/temp/Temp';
import NewNewTemp from './pages/temp/New_Temp';
// import ImageUploader from './pages/before_sign_up/details/temp_details';
import UploadComponent from './pages/before_sign_up/details/temp_details';
import GalleryComponent from './pages/before_sign_up/details/gallery';
import UserDetailsForm from './pages/before_sign_up/details/temp_details';
import UserGalleryComponent from './pages/before_sign_up/details/gallery';
import StudentDetailForm from './pages/before_sign_up/details/details';
// import StudentDetailForm from './pages/before_sign_up/details/details';
// import UserDetailsForm from './pages/before_sign_up/details/details';
function App() {
  // here isFixed is used to say, which pages we should allow for fixed-footer.
  const isFixed: boolean = window.location.pathname === "/signup" || window.location.pathname === "/personaldetails" || window.location.pathname === "/signin";
  
  // Determine which layout to use
  const usesSidebar = location.pathname.startsWith("/temp") || location.pathname.startsWith("/home") || location.pathname.startsWith("/problems") || location.pathname.startsWith("/blogs") || location.pathname.startsWith("/placement") || location.pathname.startsWith("/company") || location.pathname.startsWith("/notice") || location.pathname.startsWith("/applyjob") || location.pathname.startsWith("/blog") || location.pathname.startsWith("/jobdash");
  const new_navbar = location.pathname.startsWith("/temp") || location.pathname.startsWith("/home") || location.pathname.startsWith("/problems") || location.pathname.startsWith("/blogs") || location.pathname.startsWith("/placement") || location.pathname.startsWith("/company") || location.pathname.startsWith("/notice") || location.pathname.startsWith("/applyjob") || location.pathname.startsWith("/blog") || location.pathname.startsWith("/jobdash");
  return (
    <div className="flex flex-col min-h-screen relative">
      <Router>
        {!new_navbar && <NavbarNew2 /> }
        <div className="flex-grow">
          {usesSidebar ? (
            // Pages that use sidebar layout
            <NavbarWithSidebar>
              <Routes>
                <Route path="/home" element={<HomePage />} />
                console.log()
                <Route path="/home/:user_profile_name" element={<HomePage />}/>
                <Route path="/problems" element={ <ProblemSolvingPage />} />
                <Route path="/blogs" element={ <BlogPage />} />
                <Route path="/blogs/:level2_blog_name" element={ <BlogSubPagetemp />} />
                <Route path="/blogs/:level2_blog_name/:blog_content" element={ <Temp />} />
                {/* <Route path="/blogs/subpart" element={ <BlogSubPage />} /> */}
                <Route path="/placement" element={ <Placement />} />
                <Route path="/company" element={  <Company /> } />
                <Route path="/company/:company_name" element={ <CompanyPage /> } />
                <Route path="/company/:company_name/:job_id" element={ <JobApplicationPage /> } />
                <Route path="/notice" element={  <JobNoticeComponent /> } />
                <Route path="/applyjob" element={  <JobApplicationPage /> } />
                <Route path="/blog" element={  <BlogDetail /> } />
                <Route path="/jobdash" element={  <JobDashboard /> } />
                <Route path="/temp" element={  <Temp /> } />
                <Route path="/temp/new" element={  <GoogleProblems /> } />
                {/* <Route path="/temp/Home" element={  <LandingPage /> } /> */}
              </Routes>
            </NavbarWithSidebar>
          ) : (
            // Pages that use standard layout
            <Routes>
              <Route path="/" element={<HomeBefore />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/personaldetails" element={<PersonDetailsPrompt />} />
              <Route path="/NewHome1" element={  <LandingPage /> } />
              <Route path="/NewHome2" element={  <PlacementPrepLanding /> } />
              <Route path="/NewHome3" element={  <PlacementPrepLanding2 /> } />
              <Route path="/NewHome4" element={  <FinalPage /> } />
              <Route path='/camera' element={<Camera />} />
              <Route path='/bot' element={<NewNewTemp />} />
              <Route path='/details' element={<StudentDetailForm />} />
              <Route path='/details_temp' element={<UserDetailsForm />} />
              <Route path='/gallery' element={<UserGalleryComponent />} />
            </Routes>
          )}
          <ChatbotUI />
        </div>
        {/* Fix footer only for signup page */}
        {/* {usesSidebar? <></> : <Footer isFixed={isFixed} />} */}
        {usesSidebar? <></> : <FooterNew />}
      </Router>
    </div>
  )
}

export const Profile2 = () => {
  const {user_profile_name} = useParams();
  return <div>
    <h1>This is {user_profile_name} Profile-Page!!!</h1>
    </div>
}

export default App;