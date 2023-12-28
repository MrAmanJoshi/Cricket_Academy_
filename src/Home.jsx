import React from "react"

import { photos } from "./Data"

const Home = () => {

  return (
    <div className="bg-orange-100 pb-5 z-10">

      <div className="flex flex-col justify-center  my-[102.5px] sm:mt-[150px] ">


        <div className="  mx-auto max-w-2xl flex-col items-center">
          {
            photos.map((img) => {

              return <div key={img}>
                <img className=" object-cover" src={img} />
              </div>
            })
          }
        </div>
      </div>

      <div className="mx-2 sm:mx-8 font-medium text-lg mt-24   text-justify ">

        <h1 className="text-3xl text-center font-bold text-blue-800 mt-14 "> Welcome to NYCL, India's 1st and No.1 Cricket League.</h1>
        <ul className="list-outside">
          <li className="mb-4 mt-6 "> NYCL is a private organization NYCL organization has been formed to promote enthusiastic youth having sports talent.</li>

          <li className="mt-4 text-gray-800">Although the idea of forming NYCL first came in 2022 itself, but considering various types of shortcomings, we formed this league in 2023 after considering them.</li>

          <li className="mt-4 text-gray-800">We formed this league considering all the aspects of a player's experience as well as what problems come in a player's life.</li>

          <li className="mt-4 text-gray-800">Now we will not let the hard work of the players go waste, with this resolution we formed this league. (You work hard, it is our responsibility to make your future)
            One for players of all age group U12 U14, U16 U19, U23, U25 in NYCL Cricket</li>
        </ul>

        <h2 className=" font-semibold text-2xl my-8 text-center text-blue-800">Environment</h2>

        <p className="mt-4 text-gray-800">NYCL provides an opportunity to the institution to provide a proper playing environment and platform to young cricketers has been established for.
        </p>

        <li className="mt-4 text-gray-800 list-outside">NYCL is a center for player skill assessment. We place special emphasis on each player as an individual in order to improve their athletic ability and skills.
        </li>


        <h2 className=" font-semibold text-2xl my-8 text-center text-blue-800">Benefits Of Moving From The NYCL League</h2>





        <ul className="list-disc list-outside my-8 ml-4">

          <li>
            As you all know that you can play with your state cricket team only until you have not played, this good performance is also necessary. The player whose performance is the best is included in the team, without playing the state level league, your selection is impossible. Let us tell you that if any private league just takes a trial or feeds man and says that he will feed you with his state team, then it is nothing but a fraud. This is the bitter truth of our country that without any knowledge joins only district 12 just keep complaining after falling prey to Ugi but by joining NYCL we guarantee to get selected in your league because we don't make any player through trial or matches to be a part of the league. Prepare him for writing with his hard work, in every way, physically and mentally, mix him with every good of cricket, so that he can play in the league and give his best performance.</li>

          <li className="my-4">
            Mainly from the village level those bums will get a platform who due to lack of such information or due to economic condition can never participate in big parties (cricket competition). The events which are organized by the state cricket body)</li>
          <li > Our league is mainly based on registered clubs. Through this league, we can feed the forests from every district, every area, through the minimum participation fee, from the clubs that have established their identity.
          </li>
          <li className="my-4">
            The league believes that by doing such work, the forests His confidence will definitely increase. as well as stay together more and more will be a part of this league
          </li>
          <li >
            We have made this league keeping in view every single deficiency faced by a player and we believe that if we start initiative from now then definitely we will be able to give more good players to our country and state in future. Because there are countless players who are not able to come forward, now we will help them to move forward.</li>
          <li className="my-4">
            Our league will run with full rules so that there is no stain in the future of the child</li>

          <li className="my-4">
            Because this is the only way to play cricket from the state team (state cricket league) in which we will also give training to the child for at least 2 months with hostel facility where the child will learn the nuances of cricket. In which play equipment will also be made available to the child by the academy.</li>

          <li className="my-4">
            Our league will run with full rules so that there is no stain in the future of the child.</li>

          <li className="my-4">
            Our main goal is to prepare every child for the district league, for this we will prepare children for the league both from the club as well as from the academies run by our organization.</li>

          <li>
            We will also provide the facility of change of place to the player.  </li>
          <li>
            Like if the player goes somewhere on vacation or in relation then his academy is missed as long as he stays out but NYCL will not allow this to happen now we will also provide 12 months academy facility to the player.
          </li>
          <li> Like if the player goes somewhere on vacation or in relation then his academy is missed as long as he stays out but NYCL will not allow this to happen now we will also provide 12 months academy facility to the player
            where this player goes if any of the bricket academies associated with the NYCL happened there that player by going to that academy only with the registration number, he will be able to train and that too without any extra fees. </li>
          <li>
            For a fee and even if the player does not go with his playing material, we will provide the player with playing material in another academy, in which not a single day of the player will be wasted. </li>
          <li>
            We also provide 25% relaxation to BPL & EWS candidates. </li>
          <li> Ultimately, the League is of the view that this shortcoming (of non-affiliation with a registered club). Due to which many players are not able to become a part of the league and the dream of coming in the state cricket team remains only a dream. Now through this league we will feed each and every child in the state district cricket league in every corner of the country. He will also make him eligible to play league (by training in academy) so that he can fulfill his dream play for his state then also play for the country
          </li>
          <li>
            At the same time, the league believes that the state cricket body which is affiliated to the BCCI cannot feed all the candidates/children.  </li>
          <li>
            Now the children who are deprived of playing cricket league, they become proficient in the game through us and become state cricket association Will be able to join the events organized by </li>

        </ul>

      </div>
    </div>
  )
}

export default Home