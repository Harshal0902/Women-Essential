import React from "react";
import "./DiseaseDetection.css";

function DiseaseDetection() {
  return (
    <>
     <div class="heading">
        <h1>Disease Detection</h1>
    </div>
    <div class="container">
        <div class="card">
            <div class="imgBx">
              <img src="images/BreastCancer.jfif" />
            </div>
            <div class="content">
                <h2>Breast Cancer</h2>
                <p>With more that 1 million cases in India every year, leading to dangerous complication if left
                    unchecked.</p>
                <a href="https://breastcancerwomenessentials.herokuapp.com/" target="blank">Predict Now</a>
            </div>
        </div>


        <div class="card">
            <div class="imgBx">
            <img src="images/Diabeties.jpg" />
            </div>
            <div class="content">
                <h2>Diabetes Checkup </h2>
                <p>About 212 million women worldwide have diabetes. So, take a test now for eary treatment.</p>
                <a href="https://diabetespredwomenessential.herokuapp.com/" target="blank">Predict Now</a>
            </div>
        </div>

        <div class="card">
            <div class="imgBx">
            <img src="images/heart.jpg" />
            </div>
            <div class="content">
                <h2>Heart Diseases</h2>
                <p>Heart disease can cause many potentially fatal complications if left untreated.</p>
                <a href="https://heartdetectionwomenessential.herokuapp.com" target="blank">Predict Now</a>
            </div>
        </div>

        <div class="card">
            <div class="imgBx">
            <img src="images/kidney.png" />
            </div>
            <div class="content">
                <h2>Kidney Diseases</h2>
                <p>Chronic kidney disease can affect almost every part of your body.</p>
                <a href="https://kidneydiseasewomenessential.herokuapp.com/" target="blank">Predict Now</a>
            </div>
        </div>
    </div>
  </>
    );

    
}

export default DiseaseDetection;