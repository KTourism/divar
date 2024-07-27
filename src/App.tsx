import "@mantine/core/styles.css";
import { AppShell, MantineProvider } from "@mantine/core";
import { theme } from "./theme";
// import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage'; // Assuming you have a Homepage component
import ProfilePage from './pages/ProfilePage'; // Assuming you have a ProfilePage component
import SettingPage from './pages/SettingPage'; // Assuming you have a SettingsPage component

function App(){
  return(
    <MantineProvider theme={theme}>
      <Router>
    <AppShell
          header={{ height: 60 }}
          navbar={{
            width: 300,
            breakpoint: 'sm',
            // collapsed: { mobile: !opened },
          }}
          padding="md"
        >
          <AppShell.Header>
            {/* <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="sm"
            /> */}
            <div>سامانه تست خدمات جاوید خودرو</div>
          </AppShell.Header>
          <AppShell.Navbar p="md">
          <nav>
            <ul>
              <li><Link to="/">شروع</Link></li>
              <li><Link to="/profile">پروفایل</Link></li>
              <li><Link to="/settings">پیکربندی</Link></li>
            </ul>
          </nav>
          </AppShell.Navbar>
          <AppShell.Main>
          
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/settings" element={<SettingPage />} />
            </Routes>
            
          </AppShell.Main>
        </AppShell>
        </Router>  
    </MantineProvider>
    
  );
}

export default App;