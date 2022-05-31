import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.jpeg";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Hereby are a few projects on which I am working on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Ncrypto"
              description="Presenting before you our unique proposition, nCrypto, a one stop solution for all your crypto trades. nCrypto is not just any trading platform that helps you to see crypto currency prices. But it is one of the very first platforms, which
              analyses cryptocurrencies for you, and gives you automated suggestions on the future prices of these cryptocurrencies. And these prices e backed by proper logic on the statistics, and technical analysis pattern and volumes."
              link="https://github.com/soumyajit4419/Chatify"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={'https://api.startupindia.gov.in/sih/api/file/user/image/Startup?fileName=507be5aa-4da2-45c4-9e2d-0f62e21c7e09.png'}
              
              isBlog={false}
              title="MRITTIKA"
              description="BUILD FOR SMART-INDIA HACKATHON 2022 REPRESENTING JADAVPUR UNIVERSITY ON THE NATIONAL LEVEL. THIS WILL ENABLE BLOCKCHAIN TRANSACTIONS FOR ECOMMERCE PURPOSE AS WELL AS IT WILL BRING CONSUMERS AND MANUFACTURERS UNDER ONE ROOF ESPECIALLY FOR RURAL AREA POTTERS"
              link="https://github.com/soumyajit4419/Plant_AI"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={'https://cdn.dribbble.com/users/1182822/screenshots/14988937/media/ee0f191c95af12a38f6c64c791f19922.png?compress=1&resize=400x300'}
              isBlog={false}
              title="ChooseLYF- Your Health, our Concern"
              description="OA web-based management system is required to gather blood donors and connect them with the needy people who have high requirements for a particular blood type. A system that predicts the disease at the earliest is very important to avoid any unwanted casualties. This system predicts general and more commonly occurring diseases that when unchecked can turn into fatal ones. No to mention, but a system that sets an appointment with the doctor at the touch of your fingertips!"
              link="https://github.com/soumyajit4419/Editor.io"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={'https://i.pinimg.com/originals/ca/bf/2b/cabf2b4b65cdb48431b1279300918b5f.png'}
              isBlog={false}
              title="HOSTELio"
              description="Students can find suitable hostelrooms in this pandemic era. and a complete picture of the room-structures they want via BLOCK SYSTEMS before booking.
                  Face Recognition Attendance System automatically records the number of times students is going out of our hostel, the exact time when he has gone out and returned.
              Systems like mask detection and temperature monitor ensures COVID-19 safety among all the students and proper fine will be imposed if a students enter our hostel campus without wearing mask."
              link="https://devfolio.co/projects/hostelio-5772"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={'https://cdn.dribbble.com/users/3041390/screenshots/15533159/media/927098f96b5c9166e28b6faf48fbdcdc.png?compress=1&resize=400x300'}
              isBlog={false}
              title="LadyHUB"
              description="A website that helps women track their menstrual cycle, Pamper booth that offers some unique feature to cater mood swings, Gynecologist help for medical assistance, Menstrual Blog for creating awareness about menstrual health and hygiene, a Women intimate hygiene shop providing quality products and a discussion forum with video calling feature. This website provides all the necessary help and assistance that a woman needs in this phase of their monthly cycle."
              link="https://github.com/sainik-khaddar/Lady-HUB"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={'https://www.sportstiger.com/wp-content/uploads/2022/03/IPL-20222-sportstiger.jpg'}
              isBlog={false}
              title="IPL SCORE PREDICTION"
              description="An application that predicts the score of 1st innings of an IPL team. This project is for the fantasy cricket fans out there, helping them to earn extra fantasy points for Dream11 IPL 2022
              Multiple Linear Regression - 15.843
              • Decision Tree - 23.044
              • Random Forest - 18.171
              • Adaptive Boosting (AdaBoost) - 15.798"
              link="https://github.com/sainik-khaddar/IPL-SCORE-PREDICTION-FOR-KKR"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="WEBAPP-CLONES"
              description="I have made clones of three websites from scratch....FACEBOOK-(USING Php-MySQL), SPOTIFY(USING VANILLA JS), AMAZON(USING REACTJS). Building these applications have helped me become more fluent in WEB DEVELOPEMENT"
              link="https://github.com/sainik-khaddar/Disney-Plus-Hoster"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="RESUME-SELECTION-MACHINE-LEARNING"
              description="Build a Machine Learning Model on Naïve Bayes classifier to predict whether a given resume text should be flagged or not. Our training data consist of 125 resumes with 33 flagged resumes and 92 non-flagged resumes. Matplotlib and seaborn libraries were used for Data Visualization. Natural Processing Toolikt (NLTK) was used for pre-processing the written text (removing stop words and unnecesary words). Sklearn module in python was used to transform the training data to countvectorizer sparse matrix and train the Naïve Bayes Classifier The results of the model were as follows:

              
              Application: This project can be used for screening/shortlisting resumes in Univerities / Colleges / Companies / Schools."
              link="https://github.com/sainik-khaddar/Resume-Selection-using-Machine-Learning"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Prediction-of-COVID-19-using-Chext-X-ray-Images-Convolutional-Neural-Network-CNN-main"
              description="In this project, Built and trained a convolutional neural network in Keras with TensorFlow as backend from scratch to predict patients if they were infected with COVID-19 or not using their chest X-ray images. Matplotlib was used for data visualization. Data preprocessing and data augmentation was carried out using tensorflow 2.0 The model used was sequential with a combination of convolutional layers, pooling layers, dropout layers, dense layers with relu activation and output layer with sigmoid activation. The dataset contained the lungs X-ray images of both groups i.e non-covid and covid infected patients. The dataset was obtained from kaggle. Metrics chosen for model evaluation were Training set, test set and validation set accuracy. Adam optimizer with learning rate of 0.001 was choosed for gradient descent "
              link="https://github.com/sainik-khaddar/Prediction-of-COVID-19-using-Chext-X-ray-Images-Convolutional-Neural-Network-CNN-main"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="VOICE RECOGNITION AND EMOJIFY"
              description="Emojify_text_sentences_simple_baseline_model + Recognize voice of a person with Addaboost"
              link="https://github.com/sainik-khaddar/VOICE-RECOGNITION-EMOJIFY"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="DATA SCIENTISTS SALARY PREDICTION USING MACHINE LEARNING"
              description="Created a machine learning model that estimates salary of data scientist based on the features like rating, company_founded, etc.
              • Engineered features from the text of each job description to quantify the value companies put on python, excel, tableau and sql
              
              How will this project help?
              • This project helps data scientist/analyst to negotiate their income for an existing or a new job"
              link=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="INTEL IMAGE CLASSIFICATION AND PROCESSING"
              description="I'm working with a simple Convolutional Neural Network for predicting the stated labels in the dataset :- https://www.kaggle.com/puneet6060/intel-image-classification

              An attempt is made to unbox the convolutional layers by visualizing what happens at each layer and how the final prediction is made"
              link=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="WEATHER FORECAST PREDICTION"
              description="This will first ask for your device's location access and then predict its temperature"
              link="https://github.com/sainik-khaddar/WEATHER-PREDICTION-WITH-LIVE-LOCATION"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="HACK-N-SNACK-Food WEBAPP"
              description="Main Objective: A website which integrates canteens from different campuses, showing the menu and prices and enabling students and faculty to complete payment and book delicious food from different canteens spread across different colleges.

              Special features:
              
              Unique smart card system for hassle free transaction chatbot to resolve queries students from any of the participating colleges can enjoy food from any particular college canteen. Licenses: License and permission from different institutions to collect their menu information and updates to display on our platform."
              link="https://github.com/sainik-khaddar/HackNPitch_Boolean-Autocrats_HackNSnack"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
