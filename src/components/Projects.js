import React from 'react';
import '../App.css';
import LeftSideProfile from './LeftSideProfile';

// 순서대로 프로젝트 이미지
import p1 from './pjts/1.png';
import p2 from './pjts/2.png';
import p3 from './pjts/3.png';
import p4 from './pjts/4.png';
import p5 from './pjts/5.png';
import p6 from './pjts/6.png';
import p7 from './pjts/7.png';
import p8 from './pjts/8.png';
import p9 from './pjts/9.png';
import p10 from './pjts/10.png';

function Projects() {
  return (
    <div style={{ display: 'flex', width: '100%' }}>
      {/* 좌측 프로필 영역 */}
      <LeftSideProfile />

      {/* 중앙 + 우측 영역(공간 확장) */}
      <div style={{ flex: 3 }}>
        <h2>Projects</h2>
        <hr
          style={{
            width: '55%',
            marginLeft: '0',
            marginRight: 'auto',
            marginTop: '1em',
            marginBottom: '1em',
            borderColor: '#e0e0e0',
            opacity: '0.15',
            display: 'block'
          }}
        />

        <div className="timeline">
          {/* 2024 */}
          <h3>2024</h3>
          <hr
          style={{
            width: '55%',
            marginLeft: '0',
            marginRight: 'auto',
            marginTop: '1em',
            marginBottom: '1em',
            borderColor: '#e0e0e0',
            opacity: '0.15',
            display: 'block'
          }}
          />

          {/* 1) Unsupervised Diffusion Model... */}
          <div className="timeline-item">
            <div
              className="timeline-content"
              style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}
            >
              <div style={{ flex: 1, marginRight: '1rem' }}>
                <h3>Unsupervised Diffusion Model for Synthesizing T1-weighted MRI Scans from Abdominal CT Scans</h3>
                <p>[Project Duration: Jan. 2024 - June. 2024]</p>
                <p>Research Assistant</p>
                <p>
                  The advancement of medical imaging technology has significantly 
                  contributed to the improvement of diagnostic precision. Among these, 
                  CT and MRI hold undiminished importance, each modality establishing 
                  itself as an essential tool in medical diagnosis and treatment planning 
                  due to their unique advantages. In particular, MRI has the capability 
                  to present clearer contrasts and finer details of specific tissues, 
                  playing a crucial role in precise diagnostics. However, while MRI scans 
                  are costly and time-consuming, CT scans offer the advantage of being 
                  relatively inexpensive and providing images quickly. Against this 
                  backdrop, this study proposes a new approach that synthesizes 
                  T1-weighted MR outphase images using only CT images. The core of this 
                  research lies in applying adversarial diffusion models to replicate the 
                  detailed anatomical tissues of MRI solely from CT. This approach is 
                  expected to preserve the detailed anatomical advantages of MRI while 
                  saving on the cost and time associated with medical imaging. It can 
                  provide rapid, high-resolution images even in situations where MRI 
                  imaging is challenging, enhancing diagnostic accuracy and the quality 
                  of patient care.
                </p>
                <p>@CNU @KIST @SEOULTECH @BAISLAB</p>
                <p>[Paper] | [Code]</p>
              </div>
              <div style={{ width: '500px', textAlign: 'center' }}>
                <img
                  src={p1}
                  alt="Project Thumbnail 1"
                  style={{ width: '400px', height: '500px', objectFit: 'contain' }}
                />
              </div>
            </div>
          </div>

          {/* 2) GABNet: Graph Attention Boosting Network... */}
          <div className="timeline-item">
            <div
              className="timeline-content"
              style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}
            >
              <div style={{ flex: 1, marginRight: '1rem' }}>
                <h3>GABNet: Graph Attention Boosting Network for circRNA Analysis in the Diagnosis of Hepatocellular Carcinoma</h3>
                <p>[Project Duration: Mar. 2024 - Dec. 2024]</p>
                <p>Senior</p>
                <p>
                  Circular RNA (circRNA) is a type of non-coding RNA that is notable for 
                  its stability and abundance in human tissues, possessing a closed-loop 
                  structure that makes it resistant to exonucleases, thereby enhancing 
                  its potential as a diagnostic and therapeutic biomarker. Recent 
                  studies have shown that circRNA plays a crucial role in cancer 
                  development and progression, making it useful for non-invasive early 
                  diagnosis and prediction of cancer as a major biomarker. Hepatocellular 
                  carcinoma (HCC) is the most deadly type of liver cancer, and its high 
                  mortality rate is due to the challenges of early detection and accurate 
                  diagnosis. Traditional diagnostic methods often fail to detect HCC in 
                  its early stages and involve high costs and invasive procedures, 
                  highlighting the urgent need for new non-invasive and cost-effective 
                  biomarkers and predictive models. circRNA can be easily detected in 
                  body fluids, making it a powerful non-invasive diagnostic tool that 
                  can assess the presence and progression of tumors. This study explores 
                  methods to predict HCC using circRNA data, utilizing a Heterogeneous 
                  Attention Network (HAN) to model the complex interactions between 
                  circRNAs and their host genes. By combining embeddings obtained from 
                  the HAN model with XGBoost, the study achieved high predictive 
                  accuracy, proposing a new non-invasive approach for HCC prediction 
                  that could also be beneficial for diagnosing other types of cancers.
                </p>
                <p>@CNU</p>
                <p>[Paper] | [Code] - Graduation Project | Awards | Poster</p>
              </div>
              <div style={{ width: '500px', textAlign: 'center' }}>
                <img
                  src={p2}
                  alt="Project Thumbnail 2"
                  style={{ width: '400px', height: '500px', objectFit: 'contain' }}
                />
              </div>
            </div>
          </div>

          {/* 3) CNU NAVI */}
          <div className="timeline-item">
            <div
              className="timeline-content"
              style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}
            >
              <div style={{ flex: 1, marginRight: '1rem' }}>
                <h3>CNU NAVI (Chungnam National University NAVIgation)</h3>
                <p>[Project Duration: Mar. 2024 - Aug. 2024]</p>
                <p>Senior - Toy Project</p>
                <p>
                  In this study, we develop an OCR (Optical Character Recognition) 
                  technology tailored to the Everytime dataset, leveraging a novel deep 
                  learning architecture. The proposed model integrates CTPN (Connectionist 
                  Text Proposal Network) for text detection and TPS-ResNet-BiLSTM-Attn 
                  (Thin-Plate Spline Spatial Transformer Network, Residual Network, 
                  Bidirectional Long Short-Term Memory, Attention) for text recognition. 
                  Additionally, the model incorporates a HangulNet module specifically 
                  designed for Korean text, which effectively decomposes Hangul characters 
                  into their constituent consonants and vowels. The CTPN component 
                  efficiently detects text regions in images, while the TPS-ResNet-BiLSTM-Attn 
                  architecture accurately recognizes the detected text. This hybrid 
                  approach addresses the challenges associated with the complex structure 
                  of Korean characters and enhances the overall OCR performance on the 
                  Everytime dataset.
                </p>
                <p>@CNU</p>
                <p>[Code]</p>
              </div>
              <div style={{ width: '500px', textAlign: 'center' }}>
                <img
                  src={p3}
                  alt="Project Thumbnail 3"
                  style={{ width: '400px', height: '500px', objectFit: 'contain' }}
                />
              </div>
            </div>
          </div>

          {/* 2023 */}
          <h3 style={{ marginTop: '3rem' }}>2023</h3>
          <hr
          style={{
            width: '55%',
            marginLeft: '0',
            marginRight: 'auto',
            marginTop: '1em',
            marginBottom: '1em',
            borderColor: '#e0e0e0',
            opacity: '0.15',
            display: 'block'
          }}
          />

          {/* 4) Enhancing Breast Cancer MRI Classification... */}
          <div className="timeline-item">
            <div
              className="timeline-content"
              style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}
            >
              <div style={{ flex: 1, marginRight: '1rem' }}>
                <h3>Enhancing Breast Cancer MRI Classification Through Vision Transformer(ViT) and Multi-Marker</h3>
                <p>[Project Duration: Sep. 2023 - Dec. 2023]</p>
                <p>Internship</p>
                <p>
                  I worked on a joint project that aimed to enhance breast cancer 
                  classification performance in MRI images. The focus of this project 
                  was to demonstrate that a multi-marker model, which incorporated both 
                  the label indicating the presence of breast cancer and information 
                  about protein markers such as Estrogen Receptor (ER), Progesterone 
                  Receptor (PR), and Human Epidermal Growth Factor Receptor 2 (HER2), 
                  was more effective than a single-marker model that only used the label 
                  for the presence of breast cancer. The goal of this project was to prove 
                  the possibility that we could identify the aforementioned protein 
                  markers through non-invasive MRI imaging.
                </p>
                <p>@KIST @AIMILAB @KoreaUniversityAnamHospital</p>
                <p>[Paper] | [Code]</p>
              </div>
              <div style={{ width: '500px', textAlign: 'center' }}>
                <img
                  src={p4}
                  alt="Project Thumbnail 4"
                  style={{ width: '500px', height: '400px', objectFit: 'contain' }}
                />
              </div>
            </div>
          </div>

          {/* 5) Contrast Agent-Free Approach for Enhancing... */}
          <div className="timeline-item">
            <div
              className="timeline-content"
              style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}
            >
              <div style={{ flex: 1, marginRight: '1rem' }}>
                <h3>
                  Contrast Agent-Free Approach for Enhancing Hepatocellular Carcinoma (HCC) Visualization in Contrast-Enhanced Computed Tomography (CECT) Derived from Non-Contrast Enhanced Computed Tomography (NCECT): Utilizing Contrast Agent (CA) Injection Principles
                </h3>
                <p>[Project Duration: Jun. 2023 - Dec. 2023]</p>
                <p>Internship</p>
                <p>
                  This study presents a novel approach to enhance the visualization of 
                  Hepatocellular Carcinoma (HCC) in Contrast-Enhanced Computed Tomography (CECT) 
                  derived from Non-Contrast Enhanced Computed Tomography (NCECT). It 
                  demonstrates that the conventional multiple CA injections and CT scans 
                  can be effectively replaced by a single NCECT scan, thereby reducing the 
                  risks associated with contrast agents and improving the efficiency of 
                  the diagnostic process. This method enables the achievement of contrast 
                  enhancement effects without the use of contrast agents, significantly 
                  increasing patient safety during the diagnostic procedure.
                </p>
                <p>@KIST @AIMILAB @YonseiSeveranceHospital</p>
                <p>[Code]</p>
              </div>
              <div style={{ width: '500px', textAlign: 'center' }}>
                <img
                  src={p5}
                  alt="Project Thumbnail 5"
                  style={{ width: '500px', height: '400px', objectFit: 'contain' }}
                />
              </div>
            </div>
          </div>

          {/* 6) AI Technology Development for Bile Duct Imaging... */}
          <div className="timeline-item">
            <div
              className="timeline-content"
              style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}
            >
              <div style={{ flex: 1, marginRight: '1rem' }}>
                <h3>AI Technology Development for Bile Duct Imaging Synthesis Based on CT</h3>
                <p>[Project Duration: Sep. 2023 - Oct. 2023]</p>
                <p>Internship</p>
                <p>
                  Medical imaging plays a crucial role in enhancing the accuracy of 
                  diagnosis. In particular, some tissues can be more accurately 
                  identified through multiple imaging modalities. If an image obtained 
                  from one imaging technique can be transformed into another modality, 
                  it would lead to a more efficient diagnostic process in the medical 
                  field. In this study, we conducted research on synthesizing the bile 
                  duct using CT scans into MRI-T1 images. Due to differences in imaging 
                  techniques, the bile duct is less distinguishable in CT scans but 
                  appears more prominently in MRI-T1 images. By obtaining MRI-T1 image 
                  information solely from CT scans, we anticipate time and cost savings 
                  in the medical field. This research highlights the limitations of 
                  prior neural network-based studies on the translation from CT to MRI 
                  and proposes a solution using a diffusion model.
                </p>
                <p>@AIMILAB @KIST @KoreaUniversityAnamHospital</p>
                <p>[Code]</p>
              </div>
              <div style={{ width: '500px', textAlign: 'center' }}>
                <img
                  src={p6}
                  alt="Project Thumbnail 6"
                  style={{ width: '500px', height: '400px', objectFit: 'contain' }}
                />
              </div>
            </div>
          </div>

          {/* 7) Enhancing Hepatocellular Carcinoma(HCC) Tumor Segmentation... */}
          <div className="timeline-item">
            <div
              className="timeline-content"
              style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}
            >
              <div style={{ flex: 1, marginRight: '1rem' }}>
                <h3>Enhancing Hepatocellular Carcinoma(HCC) Tumor Segmentation through Aortic Contrast-Enhanced Imaging with UNETR</h3>
                <p>[Project Duration: Jun. 2023 - Aug. 2023]</p>
                <p>Internship</p>
                <p>
                  I conducted a research project focused on enhancing the diagnostic 
                  precision of Hepatocellular Carcinoma (HCC) using the UNETR model. The 
                  primary objective was to improve the contrast enhancement of HCC tumors 
                  for better segmentation and detection. A significant part of this 
                  project involved adjusting the HCC contrast through the aorta contrast, 
                  which proved to be a crucial factor in achieving more accurate tumor 
                  segmentation.
                </p>
                <p>
                  The key strategy of this project involved using the contrast levels 
                  derived from aortic imaging to adjust the contrast of HCC tumors. This 
                  approach focused on enhancing the clarity of HCC contrast by leveraging 
                  the distinct imaging characteristics of the aorta. By referencing the 
                  unique contrast levels obtained from aortic images, the UNETR model was 
                  able to more effectively amplify the contrast between HCC tumors and 
                  surrounding tissues. This adjustment enabled more precise segmentation 
                  and identification of tumors, significantly improving the precision of 
                  HCC diagnosis. Utilizing the contrast information from aortic imaging 
                  in this manner is expected to contribute to more accurate detection and 
                  treatment planning for HCC.
                </p>
                <p>@AIMILAB @KIST @YonseiSeveranceHospital</p>
                <p>[Code]</p>
              </div>
              <div style={{ width: '500px', textAlign: 'center' }}>
                <img
                  src={p7}
                  alt="Project Thumbnail 7"
                  style={{ width: '400px', height: '500px', objectFit: 'contain' }}
                />
              </div>
            </div>
          </div>

          {/* 8) Designing a Predictive Coding Network Model... */}
          <div className="timeline-item">
            <div
              className="timeline-content"
              style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}
            >
              <div style={{ flex: 1, marginRight: '1rem' }}>
                <h3>Designing a Predictive Coding Network Model to Mimic the Human Visual Cortex</h3>
                <p>[Project Duration: Jan. 2023 - Jun. 2023]</p>
                <p>Research Assistant</p>
                <p>
                  The project was initiated with a question derived from neuroscience: 
                  How can computer vision's CNNs effectively detect illusory contours, 
                  which are perceptual phenomena uniquely observed in the human visual 
                  cortex? To validate this, I designed a DNN model that takes illusory 
                  contours as inputs and aims to detect various polygons, from triangles 
                  to octagons. The model adeptly identified conventional polygons but 
                  struggled with intricate shapes like illusory contours, which are 
                  perceptual phenomena observed in the human visual cortex. Subsequently, 
                  the Predictive Coding Network (PCN) was incorporated to enhance the 
                  detection capabilities. The ultimate objective of this project was to 
                  design a PCN model that emulates the processing methods of the human 
                  visual cortex.
                </p>
                <p>@BrainXLAB @IBS</p>
                <p>[Code]</p>
                <p>Source DALL·E 3 prompted with “[Project Abstract]”</p>
              </div>
              <div style={{ width: '500px', textAlign: 'center' }}>
                <img
                  src={p8}
                  alt="Project Thumbnail 8"
                  style={{ width: '400px', height: '300px', objectFit: 'contain' }}
                />
              </div>
            </div>
          </div>

          {/* 9) Emotional Chat: Comparative Analysis of T5, BART, and BERT... */}
          <div className="timeline-item">
            <div
              className="timeline-content"
              style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}
            >
              <div style={{ flex: 1, marginRight: '1rem' }}>
                <h3>Emotional Chat: Comparative Analysis of T5, BART, and BERT for Generating Sentimental Dialogues</h3>
                <p>[Project Duration: Mar. 2023 - Jun. 2023]</p>
                <p>Undergraduate Research Student</p>
                <p>
                  "Emotional Chat" is a natural language processing-based learning model 
                  that learns and processes through scripts about emotional AI corpus 
                  data. This study aims to compare the capability to generate emotional 
                  dialogues using three models – T5, BART, and BERT – that have recently 
                  garnered significant attention in the AI natural language processing 
                  domain. Specifically, this research examines how each model understands 
                  and generates emotional utterances and which model most effectively 
                  comprehends and responds to the user's emotional state.
                </p>
                <p>@CNU</p>
                <p>[Paper] | [Code]</p>
              </div>
              <div style={{ width: '500px', textAlign: 'center' }}>
                <img
                  src={p9}
                  alt="Project Thumbnail 9"
                  style={{ width: '400px', height: '300px', objectFit: 'contain' }}
                />
              </div>
            </div>
          </div>

          {/* 2022 */}
          <h3 style={{ marginTop: '3rem' }}>2022</h3>
          <hr
          style={{
            width: '55%',
            marginLeft: '0',
            marginRight: 'auto',
            marginTop: '1em',
            marginBottom: '1em',
            borderColor: '#e0e0e0',
            opacity: '0.15',
            display: 'block'
          }}
          />
          <p>If you want to see the video about the above picture, click this link:</p>
          <p>Link</p>

          {/* 10) Investigating Brainwave Patterns... */}
          <div className="timeline-item">
            <div
              className="timeline-content"
              style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}
            >
              <div style={{ flex: 1, marginRight: '1rem' }}>
                <h3>Investigating Brainwave Patterns in Response to the "Jumping" Phenomenon</h3>
                <p>[Project Duration: Apr. 2022 - May 2023]</p>
                <p>Research Assistant</p>
                <p>
                  This project centered on the unique 'Jumping' phenomenon observed 
                  within the human visual system. On a display, three spheres, 
                  accompanied by Gaussian noise, rotated either clockwise or 
                  counterclockwise. Intriguingly, the Gaussian noise within each sphere 
                  moved at a distinct 270-degree angle, independent of the sphere's own 
                  rotation. Due to this movement, the human visual cortex perceived the 
                  spheres differently from their anticipated trajectory, a phenomenon 
                  termed 'Jumping' in Neuroscience. The primary aim of this project was 
                  to measure and analyze the brainwave responses associated with this 
                  phenomenon. The experiments were conducted under various conditions: 
                  rotation directions (clockwise and counter-clockwise) and at three 
                  different motion speeds (slow, medium, and fast). Across these six 
                  conditions, stimuli were presented at frequencies ranging from 1.25Hz 
                  to 10Hz, encompassing both the alpha and theta brainwave ranges. Each 
                  stimulus lasted for an 8-second duration, with brainwave recordings 
                  captured from the onset of the experiment until its conclusion. The 
                  analysis utilized the 'psignifit' tool, and machine learning 
                  methodologies were employed. The analysis suggested the presence of 
                  notable peaks within the brainwave patterns using ElectroEncephaloGram 
                  (EEG).
                </p>
                <p>@BrainXLAB @IBS @UNIST</p>
                <p>@IBS-UNIST Joint Research</p>
                <p>[Code]</p>
              </div>
              <div style={{ width: '500px', textAlign: 'center' }}>
                <img
                  src={p10}
                  alt="Project Thumbnail 10"
                  style={{ width: '400px', height: '300px', objectFit: 'contain' }}
                />
              </div>
            </div>
          </div>
        </div>

        <br />
      </div>
    </div>
  );
}

export default Projects;
