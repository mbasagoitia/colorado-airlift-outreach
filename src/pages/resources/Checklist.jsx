import { Container } from "react-bootstrap";
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

function Checklist () {
    return (
        <Container fluid>
            <Header />
            <Navigation />
        <div className="full-page-img">
            <img src="/images/resources/checklist-img.png" alt="people sitting around a table" className="header-img" />
        </div>
        <div className="page-content">
            <h1>Clinic Trip Checklist</h1>
            <p className="mt-4"><strong>Consider Immunizations:</strong> Volunteers may want to check on the status of their immunizations, as well as recommended additional immunizations for travel in Mexico. County Health Departments often have such recommendations and offer discounted immunizations.</p>
            <p><strong>Confirm Passport:</strong> Volunteers need to carry their current Passport with them to enter Mexico and return to the U.S. Those without a Passport, or with an expired Passport need to obtain one through their U.S. Post Office, preferably months before the scheduled clinic date.</p>
            <p><strong>Make Hotel Reservation:</strong> Hotel reservations are made online by contacting the La Villa de San Quintin Hotel prior to the clinic weekend. Volunteers will need to make their individual reservations online at <a href="http://www.hotellavilla.biz/sanquintin">http://www.hotellavilla.biz/sanquintin</a>. Mention that you are with CALO and there is typically a discount provided when payment is made onsite. If this hotel is unavailable, we suggest making reservations at the neighboring Maria Celeste Hotel at O11-52 Country Code + 616-165-3999 (request English speaker if needed).</p>
            <p>As volunteers register for the clinic, they will indicate on the Trip Registration Form whether they would like to be placed on a list of parties desiring to share a room. CALO will communicate these volunteers’ names and contact information to others desiring to share a room to allow the parties to make arrangements. Normally, one party reserves the room and costs are shared as arranged by the parties.</p> 
            <p><strong>Departure Information:</strong> About two weeks before the scheduled clinic, Pilot Coordinators will contact volunteers with the details about the departure airport location and time, as well as the pilot and plane for which they will be assigned. Volunteers are asked to keep their total personal baggage weight to under 15 pounds. In the event of special circumstances, or if equipment or tools need to be transported that would exceed this limit, please advise the Pilot Coordinator. Their contact information is listed under the “Contact” tab for this website.</p>
            <p><strong>Trip Costs, Obtaining Pesos, and Cancelation Fees:</strong> The cost for the trip is paid by the volunteers and varies from about $400 to $550, depending on hotel accommodations (single, double, etc.), meal preferences, the U.S. departure location, and the aircraft. These costs include shared fuel expense (estimated by pilots and paid directly to the pilot in U.S. dollars or by check, varying between $185 to $250 USD), hotel accommodations (single rooms for three nights total about $150USD), meals (less than $100 USD), and border crossing fees (less than $50 USD, paid in pesos or USD). Typically, all costs can be paid with U.S. cash or credit cards (remember to inform your credit card company of your travel plans beforehand).  Using pesos can be convenient, but at the time of this writing, are not essential for the trip.  There are no ATM’s in San Quintin for cash.</p>
            <p>Volunteers flying to a clinic will have seats reserved for them on aircraft about a week prior to the clinic weekend.  Volunteers canceling seats less than a week prior to a clinic will be responsible to pay an amount equal to the shared fuel amount (indicated above) as a cancelation fee.  The fee may be waived at CALO’s discretion under emergency, illness, or other similar circumstances.</p>
            <p><strong>Typical Trip Schedule:</strong> Flights originating from Western Colorado depart from the Montrose Airport (MTJ) early on Thursday morning and return late Sunday afternoon, weather permitting. The typical departure time and location is 6:30 am at Atlantic Aviation (formerly the Black Canyon Jet Center), 1690 Airport Road, Montrose, 970-240-6919, (behind the Hampton Inn). On rare occasions, weather or other unforeseeable delays may not allow flights to proceed as planned. Therefore, all volunteers need to be aware that, in the interest of safety, alternate plans are sometimes necessary. The 750 mile flight from Colorado usually takes about 5 to 5-1/2 hours to fly each way. The route southbound involves a brief rest/fuel stop at Clark Memorial Airport (CMR, Williams, AZ), then another stop at Mexicali (MMML) for entry Customs, just south of the California border, and then on to the Rancho Magana Airfield near the mission hospital at San Quintin, Baja, MX. The return flights pass through Mexicali, then Calexico Airport (CXL), California to clear U.S. Customs, and then continues non-stop to Colorado.</p>
            <p>Southern California-based flights typically depart out of El Monte Airport (EMT) on the same or slightly later schedule than the Colorado flights, with similar stops in Mexicali and Calexico to clear Customs. Flight time for the 300 mile trip is about 2-1/2 to 3 hours each way. Occasionally, some of the California volunteers depart on Fridays from other airports, depending upon their availability, and stop at Tijuana or Ensenada on the way to or from the San Quintin clinic.</p>
            <p>A typical weekend at the mission clinic starts with preparations and equipment setup mid-afternoon on Thursday and ends Sunday morning. Evening work is sometimes needed, depending on patient load. For patient screening and triage, our volunteers work diligently to assess the extent of needs and try to handle the most urgent cases over the next two treatment days (Friday and Saturday). Ministry teams work with local church members to share their faith and encourage the patients. Those volunteers with little or no eye or medical training usually help wherever they can to support other experienced volunteers, or perform construction or maintenance tasks. Interpreters are essential members of the team, helping the patients to express their conditions to non-Spanish speaking doctor volunteers. While current services entail optometry (eye exams and dispensing eye glasses) and ophthalmology (cataract and pterygium surgery), in the future we may also provide medical services including general practice, dental, and chiropractic care.</p>
            <p className="mt-4"><strong>What to Take:</strong> What to take: The following is a check list of recommended personal items:</p>
            <ul className="clinic-checklist">
                <li>Sack lunch for the day of travel and snacks for the plane ride. Fresh fruit should be consumed prior to crossing into Mexico as it may not pass Customs.</li>
                <li>Small bottles of water to drink and for brushing your teeth. Faucet water at the hotel or hospital facilities is not recommended for consumption.</li>
                <li>Snack food like granola bars or trail mix, etc. You may bring canned juice or sodas, but there are no refrigerators in the hotel rooms to keep them cool. Don’t take any perishable foods or items that melt easily.</li>
                <li>Sun burn protection for those expecting to work outside such as sun screen, hats, and sunglasses, etc.</li>
                <li>Most volunteers wear jeans, comfortable shoes, and a light shirt. For cultural reasons, shorts are discouraged, especially for women. Take a medium-weight jacket for the cool mornings and evenings. When treating patients, the clinic medical volunteers are asked to wear professional apparel (smocks or scrubs), especially the doctors. A change of clothing is recommended.</li>
                <li>Any special medication that you are taking or other common remedies you feel you may need just in case, e.g. eye drops, anti-acid tablets, aspirin, etc.</li>
                <li>To enter Mexico and return to the U.S., you must have a valid Passport (not expired). Keep your Passport handy for the border crossings, not buried in your luggage.</li>
                <li>Bring reading material and a flashlight.</li>
                <li>Ear plugs, in case you are a light sleeper or want to cut out some aircraft noise while enroute.</li>
                <li>Brush up on some basic Spanish words or greetings for the trip.</li>
                <li>Bring US currency and pesos (not essential at the time of this writing), and advise credit card company of international travel</li>
                <li>Pack your personal belongings in a soft-sided athletic-type or similar travel bag. Carrying a small backpack or purse is fine if you are comfortable with it in your lap or at your feet. Maximum combined weight is 15 pounds.</li>
                <li>Doctors may require specialty equipment which can be packed separately. Please identify these items when coordinating with your pilot several days prior to the day of departure. The pilot will need an estimate of the size and weight of such items.</li>
                <li>Your cell phone will probably function for voice and message reception in the San Quintin Valley if you subscribe to Mexican coverage with your carrier.   Data service is questionable, however, WIFI is available in the hotel and at the clinic, and can be quite useful for communicating with family, team members, or for pilots making changes to flight plans.</li>
                <li>Provide family members or significant others with emergency contact information.</li>
            </ul>
            <h2 className="mb-4">Emergency Contact Information</h2>
            <p>Bill Roesch, 970-901-9205 (cell and text), <a href="mailto:b_roesch@yahoo.com">b_roesch@yahoo.com</a></p>
            <p>USA-based Team Contact volunteers who can often be reached in Mexico during a Clinic weekend by dialing or texting directly (emails are unreliable while in MX):</p>
            <p>Rick Weaver, 970-209-8706, <a href="mailto:rickweaver21@gmail.com">rickweaver21@gmail.com</a></p>
            <p>Ed Greager, 909-354-7323, <a href="mailto:714pilot@gmail.com">714pilot@gmail.com</a></p>
            <p>La Villa de San Quintin Hotel:</p>
            <p>O11-52 Country Code + 616-165-1800 office</p>
            <p>011-52 Country Code + 616-165-1415 FAX</p>
            <p><a href="http://www.hotellavilla.biz/sanquintin">http://www.hotellavilla.biz/sanquintin</a></p>
            <p>El Buen Pastor Hospital (Spanish speakers):</p>
            <p>011-52 Country Code + 616-165-2653 0r 616-165-3498</p>
            <p><strong>Things <u>not</u> to do:</strong> We have been asked to refrain from:</p>
            <ul>
                <li>Giving money, candy, or any gifts to adults or children, even if they should ask.</li>
                <li>Taking large sums of money other than what you need for the trip and some extra in the event there is an unexpected layover.</li>
                <li>Carrying firearms or items purchased in Mexico that are disallowed for importation.</li>
                <li>Promising additional treatment in the future, especially if it is beyond the capability of the clinic to provide.</li>
            </ul>
        </div>        
        <Footer />
        </Container>
    )
}

export default Checklist;