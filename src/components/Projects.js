// Projects.js

import React from 'react';
import '../App.css';
import LeftSideProfile from './LeftSideProfile';
import defPng from './def.png';  // 실제 png 경로에 맞게 수정

function Projects() {
  return (
    <div style={{ display: 'flex', width: '100%' }}>
      
      {/* 왼쪽 프로필 (Home.js와 동일) */}
      <LeftSideProfile />

      {/* 가운데 영역 (flex:2) */}
      <div style={{ flex: '2' }}>
        <h2 style={{ marginTop: '1rem' }}>Projects</h2>
        <hr 
          style={{ 
            borderColor: '#e0e0e0', 
            opacity: '0.15', 
            width: '20%',
            marginLeft: '0',
            marginBottom: '1rem'
          }}
        />

        {/* ================================
            1) Kaggle Competition
        ================================ */}
        <div style={{ display: 'flex', marginBottom: '2rem' }}>
          {/* 왼쪽 텍스트 */}
          <div style={{ flex: 1, paddingRight: '1rem' }}>
            <h3>Kaggle Competition - Leaf Classification</h3>
            <p>
              Participated in the <strong>Leaf Classification</strong> Kaggle competition. 
              In this project, I explored feature extraction using morphological characteristics 
              and combined it with machine learning models (e.g., Random Forest, SVM). 
              Focus was on identifying plants by analyzing leaf images. 
            </p>
            <ul>
              <li>Preprocessing: contour detection, shape analysis</li>
              <li>Models: Random Forest, SVM</li>
              <li>Evaluation: multi-class accuracy, cross-validation</li>
            </ul>
            <p style={{ fontStyle: 'italic' }}>
              <strong>Outcome:</strong> Achieved a top X% rank on Kaggle and improved understanding of morphological features.
            </p>
          </div>

          {/* 오른쪽: PNG */}
          <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img 
              src={defPng} 
              alt="Kaggle Leaf Classification"
              style={{ width: '150px', height: '150px', objectFit: 'cover' }} 
            />
          </div>
        </div>

        <hr 
          style={{ 
            borderColor: '#e0e0e0', 
            opacity: '0.15', 
            width: '10%',
            marginLeft: '0',
            marginBottom: '2rem'
          }}
        />

        {/* ================================
            2) Medical Imaging Analysis
        ================================ */}
        <div style={{ display: 'flex', marginBottom: '2rem' }}>
          <div style={{ flex: 1, paddingRight: '1rem' }}>
            <h3>Medical Imaging - Deep Learning Classifier</h3>
            <p>
              Developed a <strong>Deep Learning</strong> model for classifying medical images 
              (CT/MRI scans) with a focus on early detection of diseases. Collaborated with 
              medical professionals to label datasets and experimented with <em>Convolutional Neural Networks (CNN)</em>.
            </p>
            <ul>
              <li>Framework: PyTorch + Python</li>
              <li>Data: Publicly available CT/MRI datasets</li>
              <li>Highlights: Transfer learning (ResNet, VGG), data augmentation</li>
            </ul>
            <p style={{ fontStyle: 'italic' }}>
              <strong>Outcome:</strong> Improved sensitivity and specificity in classification; 
              potential for further clinical validation.
            </p>
          </div>
          <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img 
              src={defPng} 
              alt="Medical Imaging"
              style={{ width: '150px', height: '150px', objectFit: 'cover' }} 
            />
          </div>
        </div>

        <hr 
          style={{ 
            borderColor: '#e0e0e0', 
            opacity: '0.15', 
            width: '10%',
            marginLeft: '0',
            marginBottom: '2rem'
          }}
        />

        {/* ================================
            3) Robotics & Sensor Fusion
        ================================ */}
        <div style={{ display: 'flex', marginBottom: '2rem' }}>
          <div style={{ flex: 1, paddingRight: '1rem' }}>
            <h3>Robotics - Sensor Fusion & Path Planning</h3>
            <p>
              Implemented sensor fusion algorithms combining LiDAR and camera data for 
              obstacle detection and path planning in a small-scale autonomous robot.  
              Used <em>ROS (Robot Operating System)</em> to integrate multiple sensor streams.
            </p>
            <ul>
              <li>Tech Stack: ROS, C++, Python</li>
              <li>Algorithms: Extended Kalman Filter for fusion, A* for path planning</li>
            </ul>
            <p style={{ fontStyle: 'italic' }}>
              <strong>Outcome:</strong> Demonstrated robust obstacle avoidance with a real-time decision framework.
            </p>
          </div>
          <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img 
              src={defPng} 
              alt="Robotics Sensor Fusion"
              style={{ width: '150px', height: '150px', objectFit: 'cover' }} 
            />
          </div>
        </div>

        <hr 
          style={{ 
            borderColor: '#e0e0e0', 
            opacity: '0.15', 
            width: '10%',
            marginLeft: '0',
            marginBottom: '2rem'
          }}
        />

        {/* ================================
            4) GPU-Accelerated HPC Project
        ================================ */}
        <div style={{ display: 'flex', marginBottom: '2rem' }}>
          <div style={{ flex: 1, paddingRight: '1rem' }}>
            <h3>High-Performance Computing (HPC) - GPU Acceleration</h3>
            <p>
              Explored GPU acceleration for large-scale <strong>matrix operations</strong> 
              and machine learning workloads. Experimented with <em>CUDA</em> kernels 
              to optimize compute-intensive tasks.
            </p>
            <ul>
              <li>Framework: CUDA, cuBLAS</li>
              <li>Benchmarks: Matrix multiplication, convolution ops</li>
              <li>Performance Gains: Achieved up to 10x speedup vs. CPU baseline</li>
            </ul>
            <p style={{ fontStyle: 'italic' }}>
              <strong>Outcome:</strong> Learned parallel programming strategies 
              and memory optimization on GPU.
            </p>
          </div>
          <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img 
              src={defPng} 
              alt="HPC GPU Acceleration"
              style={{ width: '150px', height: '150px', objectFit: 'cover' }} 
            />
          </div>
        </div>

        <hr 
          style={{ 
            borderColor: '#e0e0e0', 
            opacity: '0.15', 
            width: '10%',
            marginLeft: '0',
            marginBottom: '2rem'
          }}
        />

        {/* ================================
            5) Additional / Ongoing
        ================================ */}
        <div style={{ display: 'flex', marginBottom: '2rem' }}>
          <div style={{ flex: 1, paddingRight: '1rem' }}>
            <h3>Additional / Ongoing</h3>
            <ul>
              <li>
                <strong>Bioinformatics pipeline:</strong> 
                Building a pipeline for analyzing gene expression data with Python + R.
              </li>
              <li>
                <strong>Open Source Contributions:</strong> 
                Minor patches to Mozilla Firefox and VLC for bug fixes.
              </li>
              <li>
                <strong>Personal Website:</strong> 
                Maintaining a static site generator for personal blog & portfolio (React + GitHub Pages).
              </li>
            </ul>
            <p style={{ fontStyle: 'italic' }}>
              For more details or collaborations, please feel free to reach out!
            </p>
          </div>
          <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img 
              src={defPng} 
              alt="Additional Projects"
              style={{ width: '150px', height: '150px', objectFit: 'cover' }} 
            />
          </div>
        </div>

      </div>

      {/* 오른쪽 여백 (Home.js와 동일) */}
      <div style={{ flex: '1' }} />
    </div>
  );
}

export default Projects;
