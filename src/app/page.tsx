import Image from 'next/image';
import ProjectCard from '@/components/ProjectCard';
import FadeInSection from '@/components/FadeInSection';
import LogoStrip from '@/components/LogoStrip';
import { assetPath } from '@/lib/basePath';

export default function Home() {
  return (
    <div className="min-h-screen dot-grid">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-20 gradient-mesh overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Profile Image + Logos */}
            <div className="flex-shrink-0 flex flex-col items-center gap-6">
              <div className="w-48 h-48 md:w-64 md:h-64 relative rounded-full overflow-hidden ring-4 ring-blue-500 dark:ring-blue-400 shadow-xl">
                <Image
                  src={assetPath('/images/profile.png')}
                  alt="Rohit Ramaprasad"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <LogoStrip />
            </div>

            {/* Bio */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Hi, I'm Rohit
              </h1>
              <div className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed space-y-4">
                <p>
                  I'm a machine learning engineer at Adobe Document Cloud, where I've been focused on building the citation engine that brings trust and transparency to AI‑generated answers. As one of the core engineers on this effort, I've taken the system from an early prototype to a production‑ready capability now powering several features across Adobe Acrobat. My work spans a broad range of ML and engineering challenges, including improving citation relevance and coverage, enabling attribution for table‑derived answers, optimizing latency for streaming responses, and designing robust bounding‑box computation to trace model outputs back to their exact location in the document, among others.
                </p>
                <p>
                  Along the way, I've filed two patents: one introducing a novel approach for generating highly relevant citations across diverse sentence structures including multi‑fact and synthesized responses, and another focused on improving citation quality for table‑based answers.
                </p>
                <p>
                  My broader experience covers much of the GenAI ecosystem: Large Language Models, Reinforcement Learning, Prompt Engineering, Retrieval‑Augmented Generation, Information Retrieval, and practical safety issues such as prompt injection. I'm motivated by understanding ML deeply, both the theory and the real‑world engineering that makes it work at scale.
                </p>
                <p>
                  Before Adobe, I worked at Playment, a Y‑Combinator computer vision startup, where I proposed and shipped a new image‑segmentation annotation tool. By combining salient‑object detection with click‑based interactive auto‑segmentation, the system cut annotation time by 60% and became a key part of the production pipeline.
                </p>
                <p>
                  My interest in ML started with research in computer vision during my undergraduate and master's degrees. I've worked on object detection, image segmentation, and video action recognition, trained models on distributed systems using PyTorch Distributed Data Parallel, and published research in CVPRW and ECCVW.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <a
                  href={assetPath('/resume.pdf')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all"
                >
                  View Resume
                </a>
                <a
                  href="https://github.com/curiousgradient"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/rohit-ramaprasad/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
          </FadeInSection>
        </div>

        {/* Subtle wavy divider */}
        <div className="absolute bottom-0 left-0 right-0 h-6 overflow-hidden pointer-events-none">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="absolute bottom-0 w-full h-6 fill-white dark:fill-gray-800"
          >
            <path d="M0,60 C300,120 600,0 900,60 C1050,90 1200,30 1200,60 L1200,120 L0,120 Z" />
          </svg>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Featured Projects
            </h2>
          </FadeInSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FadeInSection delay={0}>
            <ProjectCard
              title="Teaching Gemma to Think"
              description="Google Tunix Hackathon: Attempted to teach Gemma3-1B structured reasoning across creative writing, math, and science using a two-stage SFT + GRPO pipeline. Built a custom 2,282-sample distilled dataset from Gemini-2.5-Pro and trained on Kaggle's constrained TPU."
              thumbnail={assetPath('/images/projects/teaching_gemma_to_think.png')}
              tags={["LLMs", "SFT", "GRPO", "Reasoning", "Gemma", "Google Hackathon"]}
              isExternal={true}
              link="https://github.com/curiousgradient/teaching-gemma-to-think"
            />
            </FadeInSection>

            <FadeInSection delay={100}>
            <ProjectCard
              title="Key Actor Detection in Multi-Person Sports Videos"
              description="Research project published at CVsports Workshop, CVPR'22. Developed a convolutional recurrent neural network with attention mechanism to identify key players in hockey penalty videos without explicit annotations."
              thumbnail={assetPath('/images/projects/hockey_penalty_det.png')}
              tags={["Computer Vision", "Deep Learning", "LSTM", "PyTorch", "CVPR"]}
              isExternal={true}
              link="https://github.com/fay-askari72/Interaction-Classification-with-Key-Actor-Detection-in-Videos"
            />
            </FadeInSection>

            <FadeInSection delay={200}>
            <ProjectCard
              title="AI-Enabled Object Detection in UAVs"
              description="Research paper published in IEEE Networks. Developed an optimized deep learning architecture using ResNeSt backbone for aerial object detection, offloading computationally intensive tasks from power-constrained drones to GPU edge servers."
              thumbnail={assetPath('/images/projects/aerial_object_det.png')}
              tags={["Computer Vision", "Object Detection", "UAVs", "Deep Learning", "IEEE"]}
              isExternal={true}
              link="https://github.com/ayushjain1144/Aerial-Object-Detection"
            />
            </FadeInSection>
          </div>
        </div>
      </section>
    </div>
  );
}
