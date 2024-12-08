import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Appbar from './components/Appbar';
import Courses from './components/Courses';
import FeedbackForm from './components/FeedbackForm';
import Home from './components/Home';
import Contact from './components/Contact';
import InstitutionalServices from './components/InstitutionalServices';
import AddCourse from './components/AddCourse';
import DeleteCourse from './components/DeleteCourse';
import UpdateCourse from './components/UpdateCourse';
import ChatBot from './components/ChatBot';  // Import the ChatBot component

function App({ store }) {
  function Page() {
    switch (store.getState()) {
      case "Signin":
        return (
          <div>
            <Appbar store={store} />
            <SignIn />
          </div>
        );
      case "Signup":
        return (
          <div>
            <Appbar store={store} />
            <SignUp />
          </div>
        );
      case "Courses":
        return (
          <div>
            <Appbar store={store} />
            <Courses />
          </div>
        );
      case "Feedback":
        return (
          <div>
            <Appbar store={store} />
            <FeedbackForm />
          </div>
        );
      case "Home":
        return (
          <div>
            <Appbar store={store} />
            <Home />
          </div>
        );
      case "Logout":
        return (
          <div>
            <Appbar store={store} />
            <Home/>
          </div>
        );
      case "Add Course":
        return (
          <div>
            <Appbar store={store} />
            <AddCourse/>
          </div>
        );
      case "View All Courses":
        return (
          <div>
            <Appbar store={store} />
            <Courses/>
          </div>
        );
      case "Delete Course":
        return (
          <div>
            <Appbar store={store} />
            <DeleteCourse/>
          </div>
        );
      case "Update Course":
        return (
          <div>
            <Appbar store={store} />
            <UpdateCourse/>
          </div>
        );

      case "Contact":
        return (
          <div>
            <Appbar store={store} />
            <Contact/>
          </div>
        );
      case "InstitutionalServices":
        return (
          <div>
            <Appbar store={store} />
            <InstitutionalServices />
          </div>
        );
      default:
        return (
          <div>
            <Home />
          </div>
        );
    }
  }

  return (
    <Router>
      <div className="App">
        <div className="App-body">
          <Page />
        </div>
        <ChatBot />  {/* Add the ChatBot component here */}
      </div>
    </Router>
  );
}

export default App;
