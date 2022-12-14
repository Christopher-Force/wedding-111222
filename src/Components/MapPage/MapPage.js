import ContributeButton from "../Buttons/ContributeButton/ContributeButton";
import DetailsButton from "../Buttons/DetailsButton/Detailsbutton";
import HomeButton from "../Buttons/HomeButton/HomeButton";
import RSVPButton from "../Buttons/RSVPButton/RSVPButton";

export default function MapPage () {
  return (
    <div>
      <div>
          <div className="mb-2">
            <h3 className="headline u-line text-2xl"><strong>Both Addresses</strong></h3>
            <h2>(Click Below for Google Maps)</h2>
          </div>

        </div>
      
      <div className="">
      <strong>
        <h1 className="">Ceremony @ 1:00PM</h1>
      </strong>
        <a href="https://goo.gl/maps/NXtzsHuM1LHbMdcy8" target="_blank" rel="noreferrer" className="u-line">
          PAWLEY'S ISLAND BEACH
          <br />
          1st Street Public Beach Access
          <br />
          County Rd S-22-10
          <br />
          Pawleys Island, SC 29585
        </a>
      </div>
        <div className="mb-4 mt-4">
        <strong><h1 className="">
          Reception To Follow 
        <br/> Starting @ 2:00-2:30PM <br /> Until 6:00-6:30PM  
        </h1> </strong>
        <a href="https://goo.gl/maps/aYWDZp5McfiqyrX69" target="_blank" rel="noreferrer" className="u-line">
          
          Family-Owned Rental Home - Backyard
          <br />
          43 Windy Lane
          <br />
          Pawleys Island, SC 29585
        </a>
      </div>

      <div className="flex gap-1 pb-1">
          <RSVPButton />
          <HomeButton />
        </div>
        <div className='flex gap-1'>
        
          <ContributeButton />
          <DetailsButton />
        </div>

    </div>
  )
}