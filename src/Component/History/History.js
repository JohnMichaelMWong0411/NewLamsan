import './History.css';

const History = () => {
  return (
            <div className='History_wrapper'>
                    <div class='HistoryTitle'>
                          <span>Our History</span>
                    </div>
                    <div class='HistoryContent'>
                        <div class='HistoryContentText'>
                        <h2>LAMSAN, Inc., formerly known as Lamsan Trading, Inc., was incorporated way back in 
                          December 1965. The company was so named because in Chinese, it means<span class='highlight'> "Southern Mountain"</span>
                          . The company's manufacturing facility is situated in Sultan Kudarat, Maguindanao, which is 
                          in the Southern Philippines. The business back then was purely trading of agricultural
                           products such as corn, rice and copra.</h2>
                        </div>
                        <div class='HistoryContentImage'>
                                <img src='history.jpg'></img>
                        </div>
                    </div>
                    <div class='HistoryContent'>
                        <div class='HistoryContentImage'>
                                <img src='history1.jpg'></img>
                        </div>
                        <div class='HistoryContentText'>
                        <h2>In 1969, Mr. Robert Lu thought of venturing into the corn wet milling business.
                          With the invaluable help of his brothers, the Lamsan cornstarch factory was put up and
                            started operations in 1971. Although immediately faced with enormous difficulties 
                            during the martial law years due to the dramatic peso devaluation, business steadily 
                            improved such that it warranted a capacity expansion in the early '90s. The expansion,
                             which was completed in 1994, doubled the annual production capacity.</h2>
                        </div>
                    </div>
                    <div class='HistoryContent'>
                        <div class='HistoryContentText'>
                        <h2>In 2006, the company formally changed its corporate name to <span class='highlight'>Lamsan, Inc.</span>, 
                          marking the start of a new and progressive company. Also in 2006, New plant 
                          improvements and facilities were put in place as well as the commencement of 
                          the drive to establish a quality management system that conforms to ISO 9001 standards.</h2>
                        </div>
                        <div class='HistoryContentImage'>
                                <img src='history2.jpg'></img>
                        </div>
                    </div>
                    <div class='HistoryContent'>
                       <div class='HistoryContentImage'>
                                <img src='history3.jpg'></img>
                        </div>
                        <div class='HistoryContentText'>
                        <h2>In August 2009, Lamsan's QMS was certified as conforming to <span class='highlight'>ISO 9001:2008</span> standards by 
                          Certification International Philippines.In 2011, yet another capacity expansion was put 
                          in motion. This time, capacity will be increased by another 60%. This expansion was 
                          completed by end of 2013. Currently, Lamsan is embarking on another capacity expansion 
                          program which will see its production capabilities increased by 100%.</h2>
                        </div>

                    </div>
            </div>
  );
}
export default History;