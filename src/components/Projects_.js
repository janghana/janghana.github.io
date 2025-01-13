import React from 'react';
import '../App.css';
import LeftSideProfile from './LeftSideProfile';
import { BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ModalImage from "react-modal-image";

import p1 from './pjts/Unsupervised_Diffusion_Model_for_Synthesizing_T1-weighted_MRI_Scans_from_Abdominal_CT_Scans.png';
import p2 from './pjts/GABNet_Graph_Attention_Boosting_Network_for_circRNA_Analysis_in_the_Diagnosis_of_Hepatocellular_Carcinoma.png';
import p3 from './pjts/CNU_NAVI.png';
import p4 from './pjts/Enhancing_Breast_Cancer_MRI_Classification_Through_ViT_and_Multi-Marker.png';
import p5 from './pjts/Contrast_Agent-Free_Approach_for_Enhancing_HCC_Visualization_in_CECT_Derived_from_NCECT_Utilizing_CA_Injection_Principles.png';
import p6 from './pjts/Diffusion-Model-Based_Conditional_Medical_Image_Translation_for_T1-Weighted_MR_Imaging_Synthesis_from_CT.png';
import p7 from './pjts/Enhancing_HCC_Tumor_Segmentation_through_Aortic_Contrast-Enhanced_Imaging_with_UNETR.png';
import p8 from './pjts/Designing_a_Predictive_Coding_Network_Model_to_Mimic_the_Human_Visual_Cortex.png';
import p9 from './pjts/Emotional_Chat_Comparative_Analysis_of_T5_BART_and_BERT_for_Generating_Sentimental_Dialogues.png';
import p10 from './pjts/Investigating_Brainwave_Patterns_in_Response_to_the_Jumping_Phenomenon.png';

function Projects() {
  return (
    <div style={{ display: 'flex', width: '100%' }}>
      <LeftSideProfile />

      <div style={{ flex: 3 }}>
        <h2>Projects</h2>

          {/* 2025 */}
          <h3>2025</h3>
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

          {/* Unsupervised Diffusion Model for Synthesizing T1-weighted MRI Scans from Abdominal CT Scans */}
          <div className="timeline-item">
            <div
              className="timeline-content"
              style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}
            >
              <div style={{ flex: 1, marginRight: '1rem' }}>
                <h3>Unsupervised Diffusion Model for Synthesizing T1-weighted MRI Scans from Abdominal CT Scans</h3>
                <p style={{ margin: '0 0 0.5rem', fontStyle: 'italic', color: '#555' }}>
                  Research Assistant
                </p>
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
                <p>
                  @<a 
                  href="https://plus.cnu.ac.kr/html/en/"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="advisor-link"
                  >
                    CNU
                  </a>&nbsp;
                  @<a 
                  href="https://www.kist.re.kr/eng/index.do"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="advisor-link"
                  >
                    KIST
                  </a>&nbsp;
                  @<a 
                  href="https://en.seoultech.ac.kr/"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="advisor-link"
                  >
                    SEOULTECH
                  </a>&nbsp;
                  @BAISLAB</p>
                <p>[<a 
                  href="https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE11862432"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="advisor-link"
                  >
                    Paper
                  </a>] | 
                  [<a 
                  href="https://github.com/janghana/Unsupervised-Diffusion-Model-for-Synthesizing-T1-weighted-MRI-Scans-from-Abdominal-CT-Scans"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="advisor-link"
                  >
                    Code
                  </a>]
                  |
                  [<a 
                  href="https://drive.google.com/file/d/1J3rnoVAd6anQrsf-7kLHkHUhdYOFSOmN/view?usp=drive_link"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="advisor-link"
                  >
                    Poster
                  </a>]
                  |
                  [Project Duration: Jan. 2024 - Jun. 2024]
                </p>
              </div>
              <div style={{ width: '500px', textAlign: 'center' }}>
                <ModalImage
                  small={p1}
                  large={p1}
                  alt="Unsupervised Diffusion Model for Synthesizing T1-weighted MRI Scans from Abdominal CT Scans"
                  hideZoom
                  className="my-modal-image"
                />
              </div>
            </div>
          </div>

          {/* GABNet: Graph Attention Boosting Network for circRNA Analysis in the Diagnosis of Hepatocellular Carcinoma */}
          <div className="timeline-item">
            <div
              className="timeline-content"
              style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}
            >
              <div style={{ flex: 1, marginRight: '1rem' }}>
                <h3>GABNet: Graph Attention Boosting Network for circRNA Analysis in the Diagnosis of Hepatocellular Carcinoma</h3>
                <p style={{ margin: '0 0 0.5rem', fontStyle: 'italic', color: '#555' }}>
                  Senior
                </p>
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
                <p>
                @<a 
                  href="https://plus.cnu.ac.kr/html/en/"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="advisor-link"
                  >
                    CNU
                  </a>&nbsp;
                  @Graduation_Project
                </p>
                <p>
                  [<a 
                  href="https://drive.google.com/file/d/14Jb0DGuJ3rtw9oVpDX8h-zFtCXwUOFBz/view?usp=drive_link"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="advisor-link"
                  >
                    Paper
                  </a>]
                  |
                  [<a 
                  href="https://github.com/janghana/HCC-Prediction-with-circRNA-using-Ensemble-Heterogeneous-Graph-Attention-Networks"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="advisor-link"
                  >
                    Code
                  </a>] | 

                  [<a 
                  href="https://drive.google.com/file/d/1wL0qKHLMqsJQ5L3oL_iSEl03YpwCQRZw/view"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="advisor-link"
                  >
                    Awards
                  </a>]                  
                  |
                  [<a 
                  href="https://drive.google.com/file/d/1mUGoFzGKtcTUVR2UUFi4breL0e4KBnFk/view"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="advisor-link"
                  >
                    Poster
                  </a>]
                  |
                  [Project Duration: Mar. 2024 - Dec. 2024]</p>
              </div>
              <div style={{ width: '500px', textAlign: 'center' }}>
                <ModalImage
                  small={p2}
                  large={p2}
                  alt="GABNet: Graph Attention Boosting Network for circRNA Analysis in the Diagnosis of Hepatocellular Carcinoma"
                  hideZoom
                  className="my-modal-image"
                />
              </div>
            </div>
          </div>

          {/* CNU NAVI (Chungnam National University NAVIgation) */}
          <div className="timeline-item">
            <div
              className="timeline-content"
              style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}
            >
              <div style={{ flex: 1, marginRight: '1rem' }}>
                <h3>CNU NAVI (Chungnam National University NAVIgation)</h3>
                <p style={{ margin: '0 0 0.5rem', fontStyle: 'italic', color: '#555' }}>
                  Senior
                </p>

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
                <p>
                @<a 
                  href="https://plus.cnu.ac.kr/html/en/"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="advisor-link"
                  >
                    CNU
                  </a>&nbsp;
                  @Toy_Project
                </p>
                
                <p>
                  [<a 
                  href="https://github.com/janghana/CNU-NAVI"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="advisor-link"
                  >
                    Code
                  </a>] | [Project Duration: Mar. 2024 - Aug. 2024]
                  </p>
              </div>
              <div style={{ width: '500px', textAlign: 'center' }}>
                <ModalImage
                  small={p3}
                  large={p3}
                  alt="CNU NAVI (Chungnam National University NAVIgation)"
                  hideZoom
                  className="my-modal-image"
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

          {/* Enhancing Breast Cancer MRI Classification Through Vision Transformer(ViT) and Multi-Marker */}
          <div className="timeline-item">
            <div
              className="timeline-content"
              style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}
            >
              <div style={{ flex: 1, marginRight: '1rem' }}>
                <h3>Enhancing Breast Cancer MRI Classification Through Vision Transformer(ViT) and Multi-Marker</h3>
                <p style={{ margin: '0 0 0.5rem', fontStyle: 'italic', color: '#555' }}>
                  Internship
                </p>

                <p>
                  I worked on a joint project that aimed to enhance breast cancer 
                  classification performance in T2-weighted MRI images. The focus of this project 
                  was to demonstrate that a multi-marker model, which incorporated both 
                  the label indicating the presence of breast cancer and information 
                  about protein markers such as Estrogen Receptor (ER), Progesterone 
                  Receptor (PR), and Human Epidermal Growth Factor Receptor 2 (HER2), named Triple-Negative, 
                  was more effective than a single-marker model that only used the label 
                  for the presence of breast cancer. The goal of this project was to prove 
                  the possibility that we could identify the aforementioned protein 
                  markers through non-invasive MRI imaging.
                </p>
                <p>
                  @<a 
                  href="https://www.kist.re.kr/eng/index.do"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="advisor-link"
                  >
                    KIST
                  </a>&nbsp;
                 @<a 
                  href="https://anam.kumc.or.kr/en/index.do"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="advisor-link"
                  >
                    KoreaUniversityAnamHospital
                  </a>&nbsp;
                  @AIMILAB
                  </p>
                <p>
                  [<a 
                  href="https://drive.google.com/file/d/14jp4KGZlAj2tE1xGyHQD4Unks2Ln5WNx/view"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="advisor-link"
                  >
                    Paper
                  </a>]
                   |
                  [<a 
                  href="https://github.com/janghana/Breast-Cancer-Classification-using-ViT"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="advisor-link"
                  >
                    Code
                  </a>]
                  |
                  [Project Duration: Sep. 2023 - Dec. 2023]
                </p>
              </div>
              <div style={{ width: '500px', textAlign: 'center' }}>
                <ModalImage
                  small={p4}
                  large={p4}
                  alt="Enhancing Breast Cancer MRI Classification Through Vision Transformer(ViT) and Multi-Marker"
                  hideZoom
                  className="my-modal-image"
                />
              </div>
            </div>
          </div>

          {/* Contrast Agent-Free Approach for Enhancing Hepatocellular Carcinoma (HCC) Visualization in Contrast-Enhanced Computed Tomography (CECT) Derived from Non-Contrast Enhanced Computed Tomography (NCECT): Utilizing Contrast Agent (CA) Injection Principles */}
          <div className="timeline-item">
            <div
              className="timeline-content"
              style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}
            >
              <div style={{ flex: 1, marginRight: '1rem' }}>
                <h3>
                  Contrast Agent-Free Approach for Enhancing Hepatocellular Carcinoma (HCC) Visualization in Contrast-Enhanced Computed Tomography (CECT) Derived from Non-Contrast Enhanced Computed Tomography (NCECT): Utilizing Contrast Agent (CA) Injection Principles
                </h3>
                <p style={{ margin: '0 0 0.5rem', fontStyle: 'italic', color: '#555' }}>
                  Internship
                </p>
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
                <p>
                  @<a 
                  href="https://www.kist.re.kr/eng/index.do"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="advisor-link"
                  >
                    KIST
                  </a>&nbsp;
                  @<a 
                  href="https://sev.severance.healthcare/sev-en/index.do"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="advisor-link"
                  >
                    YonseiSeveranceHospital
                  </a>&nbsp;
                   @AIMILAB</p>
                <p>
                  [<a 
                  href="https://github.com/janghana/NCECT-to-CECT"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="advisor-link"
                  >
                    Code
                  </a>]
                  |
                  [Project Duration: Jun. 2023 - Dec. 2023]
                </p>
              </div>
              <div style={{ width: '500px', textAlign: 'center' }}>
                <ModalImage
                  small={p5}
                  large={p5}
                  alt="Contrast Agent-Free Approach for Enhancing Hepatocellular Carcinoma (HCC) Visualization in Contrast-Enhanced Computed Tomography (CECT) Derived from Non-Contrast Enhanced Computed Tomography (NCECT): Utilizing Contrast Agent (CA) Injection Principles"
                  hideZoom
                  className="my-modal-image"
                />
              </div>
            </div>
          </div>

          {/* Diffusion-Model-Based Conditional Medical Image Translation for T1-Weighted MR Imaging Synthesis from CT */}
          <div className="timeline-item">
            <div
              className="timeline-content"
              style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}
            >
              <div style={{ flex: 1, marginRight: '1rem' }}>
                <h3>Diffusion-Model-Based Conditional Medical Image Translation for T1-Weighted MR Imaging Synthesis from CT</h3>
                <p style={{ margin: '0 0 0.5rem', fontStyle: 'italic', color: '#555' }}>
                  Internship
                </p>
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
                <p>
                @<a 
                  href="https://www.kist.re.kr/eng/index.do"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="advisor-link"
                  >
                    KIST
                  </a>&nbsp;
                 @<a 
                  href="https://anam.kumc.or.kr/en/index.do"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="advisor-link"
                  >
                    KoreaUniversityAnamHospital
                  </a>&nbsp;
                  @AIMILAB
                </p>
                <p>
                [<a 
                  href="https://github.com/janghana/SynDiff-Medical-Image-Translation"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="advisor-link"
                  >
                    Code
                  </a>]
                  |
                  [Project Duration: Sep. 2023 - Oct. 2023]
                </p>
              </div>
              <div style={{ width: '500px', textAlign: 'center' }}>
                <ModalImage
                  small={p6}
                  large={p6}
                  alt="Diffusion-Model-Based Conditional Medical Image Translation for T1-Weighted MR Imaging Synthesis from CT"
                  hideZoom
                  className="my-modal-image"
                />
              </div>
            </div>
          </div>

          {/* Enhancing Hepatocellular Carcinoma(HCC) Tumor Segmentation through Aortic Contrast-Enhanced Imaging with UNETR */}
          <div className="timeline-item">
            <div
              className="timeline-content"
              style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}
            >
              <div style={{ flex: 1, marginRight: '1rem' }}>
                <h3>Enhancing Hepatocellular Carcinoma(HCC) Tumor Segmentation through Aortic Contrast-Enhanced Imaging with UNETR</h3>
                <p style={{ margin: '0 0 0.5rem', fontStyle: 'italic', color: '#555' }}>
                  Internship
                </p>
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
                <BlockMath math="Corrected~Contrast = Original~Contrast \times \frac{Original~Contrast}{Aorta~Average~Contrast~Value}" />
                <p>
                  @<a 
                  href="https://www.kist.re.kr/eng/index.do"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="advisor-link"
                  >
                    KIST
                  </a>&nbsp;
                  @<a 
                  href="https://sev.severance.healthcare/sev-en/index.do"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="advisor-link"
                  >
                    YonseiSeveranceHospital
                  </a>&nbsp;
                   @AIMILAB</p>
                <p>
                  [<a 
                  href="https://github.com/kimhyoree/Improving-HCC-diagnostic-precision-in-CT-using-UNETR-model"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="advisor-link"
                  >
                    Code
                  </a>]
                  |
                  [Project Duration: Jun. 2023 - Aug. 2023]
                </p>
              </div>
              <div style={{ width: '500px', textAlign: 'center' }}>
                <ModalImage
                  small={p7}
                  large={p7}
                  alt="Enhancing Hepatocellular Carcinoma(HCC) Tumor Segmentation through Aortic Contrast-Enhanced Imaging with UNETR"
                  hideZoom
                  className="my-modal-image"
                />
              </div>
            </div>
          </div>

          {/* Designing a Predictive Coding Network Model to Mimic the Human Visual Cortex */}
          <div className="timeline-item">
            <div
              className="timeline-content"
              style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}
            >
              <div style={{ flex: 1, marginRight: '1rem' }}>
                <h3>Designing a Predictive Coding Network Model to Mimic the Human Visual Cortex</h3>
                <p style={{ margin: '0 0 0.5rem', fontStyle: 'italic', color: '#555' }}>
                  Research Assistant
                </p>
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
                <p>
                  @<a 
                  href="https://www.ibs.re.kr/eng.do"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="advisor-link"
                  >
                    IBS
                  </a>&nbsp;
                  @<a 
                  href="https://www.ibs.re.kr/glia/"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="advisor-link"
                  >
                    BrainXLAB
                  </a>
                </p>
                <p>
                  [<a 
                  href="https://github.com/janghana/Predictive-Coding-Network"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="advisor-link"
                  >
                    Code
                  </a>]
                  |
                  [Project Duration: Jan. 2023 - Jun. 2023]
                </p>
              </div>
              <div style={{ width: '500px', textAlign: 'center' }}>
              <ModalImage
                  small={p8}
                  large={p8}
                  alt="Designing a Predictive Coding Network Model to Mimic the Human Visual Cortex"
                  hideZoom
                  className="my-modal-image"
                />
              </div>
            </div>
          </div>

          {/* Emotional Chat: Comparative Analysis of T5, BART, and BERT for Generating Sentimental Dialogues */}
          <div className="timeline-item">
            <div
              className="timeline-content"
              style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}
            >
              <div style={{ flex: 1, marginRight: '1rem' }}>
                <h3>Emotional Chat: Comparative Analysis of T5, BART, and BERT for Generating Sentimental Dialogues</h3>
                <p style={{ margin: '0 0 0.5rem', fontStyle: 'italic', color: '#555' }}>
                  Junior
                </p>
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
                <p>
                  @<a 
                  href="https://plus.cnu.ac.kr/html/en/"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="advisor-link"
                  >
                    CNU
                  </a>&nbsp;
                  @NLP_Project
                </p>
                <p>
                  [<a 
                  href="https://drive.google.com/file/d/1bAVzBOuxXDjDzxMKfmEaZTfPcUS3XDXC/view"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="advisor-link"
                  >
                    Paper
                  </a>]
                   | 
                  [<a 
                  href="https://github.com/janghana/Emotional-Chat"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="advisor-link"
                  >
                    Code
                  </a>]
                  |
                  [Project Duration: Mar. 2023 - Jun. 2023]
                  </p>
              </div>
              <div style={{ width: '500px', textAlign: 'center' }}>
                <ModalImage
                  small={p9}
                  large={p9}
                  alt="Emotional Chat: Comparative Analysis of T5, BART, and BERT for Generating Sentimental Dialogues"
                  hideZoom
                  className="my-modal-image"
                />
                <p>Source DALL·E 3 prompted with “[Project Abstract]”</p>
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
          {/* Investigating Brainwave Patterns in Response to the "Jumping" Phenomenon */}
          <div className="timeline-item">
            <div
              className="timeline-content"
              style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}
            >
              <div style={{ flex: 1, marginRight: '1rem' }}>
                <h3>Investigating Brainwave Patterns in Response to the "Jumping" Phenomenon</h3>
                <p style={{ margin: '0 0 0.5rem', fontStyle: 'italic', color: '#555' }}>
                  Research Assistant
                </p>
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
                <p>
                  @<a 
                  href="https://www.ibs.re.kr/eng.do"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="advisor-link"
                  >
                    IBS
                  </a>&nbsp;
                  @<a 
                  href="https://www.unist.ac.kr/"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="advisor-link"
                  >
                    UNIST
                  </a>&nbsp;
                  @<a 
                  href="https://www.ibs.re.kr/glia/"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="advisor-link"
                  >
                    BrainXLAB
                  </a>&nbsp;
                  @IBS-UNIST Joint Research
                </p>
                <p>
                  [<a 
                  href="https://github.com/janghana/EEG-data-analysis-of-128-channels"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="advisor-link"
                  >
                    Code
                  </a>]
                  |
                  [Project Duration: Apr. 2022 - May 2023]
                </p>
              </div>
              <div style={{ width: '500px', textAlign: 'center' }}>
                <ModalImage
                  small={p10}
                  large={p10}
                  alt="Investigating Brainwave Patterns in Response to the 'Jumping' Phenomenon"
                  hideZoom
                  className="my-modal-image"
                />

                <p>If you want to see the video about the above picture, click this link:&nbsp;
                  <a 
                    href="https://drive.google.com/file/d/1BobxfhqmgHK-C1yrrsNltcuCzjpQJuR_/view"
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="advisor-link"
                    >
                      Link
                  </a>  
                </p>
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
