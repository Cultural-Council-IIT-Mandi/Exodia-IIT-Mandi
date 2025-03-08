import React from 'react'
import '@/components/style.css'
import TeamCards from '@/components/TeamCard'


const Page = () => {
  return (
    <div className="container">

        <div className="heading">Our WebDevWizards</div>

        <div className="team-heads">
          <TeamCards src='/assets/team/piyush.jpeg' name='Harry Potter' linkedin='linkedin.com' instagram='instagram.in' email='gmail.com'/>
          <TeamCards src='/assets/team/pragyansh.png' name='Ronald Weasley' linkedin='linkedin.com' instagram='instagram.in' email='gmail.com'/>
        </div>

        <div className="team-members">
            <TeamCards src='/assets/team/avishkar.jpeg' name='Hermoine Granger' linkedin='linkedin.com' instagram='instagram.in' email='gmail.com'/>
            <TeamCards src='/assets/team/k1.jpg' name='Kartavya' linkedin='linkedin.com' instagram='instagram.in' email='gmail.com'/>
            <TeamCards src='/assets/team/gaurav.jpg' name='Ginny Weasley' linkedin='linkedin.com' instagram='instagram.in' email='gmail.com'/>
            <TeamCards src='/assets/team/hardeep.jpg' name='Rubius Hagrid' linkedin='linkedin.com' instagram='instagram.in' email='gmail.com'/>
            <TeamCards src='/assets/team/piyush.jpeg' name='Draco Malfoy' linkedin='linkedin.com' instagram='instagram.in' email='gmail.com'/>
        </div>
        
    </div>
  )
}

export default Page 