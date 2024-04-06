import './index.css'

export default function NationalRecognizeSection() {
    return (
        <section className="national-recognize-section">
            <div className="national-recognize-container">
                <h2><span>National Level Recognition</span> for NxtWave Students</h2>
                <div className="recognize-img-container">
                    <img src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/recognision-img1.png" alt="national-recognize-section" />
                    <img src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/recognision-img2.png" alt="national-recognize-section" />
                </div>
                <div className="national-recognize-info">
                    <p>Honored by</p>
                    <h2>Shri Dharmendra Pradhan ji</h2>
                    <h4>Union Minister for Education | Skill Development | Entrepreneurship</h4>
                    <span>Govt. of India - 2023</span>
                </div>
            </div>
        </section>
    )
}