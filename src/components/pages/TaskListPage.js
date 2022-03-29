import React from 'react';
import Tasks from '../Tasks/Tasks';
import AddTask from "../Tasks/AddTask";
import Header from './Header';
import Footer from './Footer';
import Navigation from './Navigation';

export default function Home() {
    return (
      <>
        <Header />
        <Navigation />
        <div className="container">
          <Tasks />
      </div>
      <Footer />
      </>
  )
}
