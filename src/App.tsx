import "@mantine/core/styles.css";
import { AppShell, Burger, MantineProvider } from "@mantine/core";
import { theme } from "./theme";
// import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage'; 
import SettingPage from './pages/SettingPage'; 
import CarPage from './pages/CarPage';
import { useDisclosure } from "@mantine/hooks";

function App(){
  const [opened, { toggle }] = useDisclosure();
  return(
    <MantineProvider theme={theme}>
      <Router>
    <AppShell
          header={{ height: 60 }}
          navbar={{
            width: 300,
            breakpoint: 'sm',
            collapsed: { mobile: !opened },
          }}
          padding="md"
        >
          <AppShell.Header>
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="sm"
            />
            <div>سامانه تست خدمات جاوید خودرو</div>
          </AppShell.Header>
          <AppShell.Navbar p="md">
          <nav>
            <ul>
              <li><Link to="/">شروع</Link></li>
              <li><Link to="/profile">پروفایل</Link></li>
              <li><Link to="/car">خودرو</Link></li>
              <ul>
                <li><Link to="/profile">اصالت</Link></li>
                <li><Link to="/profile">مالکیت</Link></li>
                <li><Link to="/profile">سلامت</Link></li>
                <li><Link to="/profile">بیمه</Link></li>
              </ul>
              <li><Link to="/settings">پیکربندی</Link></li>
            </ul>
          </nav>
          </AppShell.Navbar>
          <AppShell.Main>
          
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/settings" element={<SettingPage />} />
              <Route path="/car" element={<CarPage />} />
            </Routes>
            
          </AppShell.Main>
        </AppShell>
        </Router>  
    </MantineProvider>
    
  );
}

export default App;