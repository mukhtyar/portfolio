---
layout: ../../layouts/BlogPostLayout.astro
title: Building a Q&A system with Vertex AI
client: Self
publishDate: 2023-12-12 00:00:00
description: We built an unofficial Mars Rover Landing site in celebration of NASA’s Perseverance Rover.
tags:
  - data-science
  - learning
  - vertex ai
---

In this section, you can briefly introduce yourself, your background, and your motivation for doing this project. You can also give an overview of what Vertex AI is, and what a question & answer system does.

I recently built a simple Question & Answer system Google's Vertex AI platform on Kaggle using information I learned from a short course on Text Embeddings on DeepLearning.Ai. Vertex AI is ......



Data: In this section, you can describe the data source, format, and size that you used for your project. You can also explain how you preprocessed, cleaned, and analyzed the data.

I love to garden, so I downloaded all questions and accepted answers from the Stack Exchange Gardening and Landscaping community. I created and shared a public dataset on Kaggle with these embeddings. This dataset might be useful for others who are interested in text embeddings and semantic search applications.




Methodology: In this section, you can explain the steps and tools that you used to build your question & answer system using Vertex AI. You can mention the text embedding model, the semantic search algorithm, the text generation model, and the evaluation metrics that you used.

The following set of Kaggle notebooks walks throught the different steps in the project. 
- Setting up the environment: The first step of is to set up the Vertex AI environment in Kaggle. This was necessary to do the experiments.
- Generating Text Embeddings: The next step was to generate text embeddings using Vertex AI. Text embeddings are vector representations of text that capture the semantic meaning. I learned how to handle text data and use Vertex AI APIs.
- Visualizing Text Embeddings: I then visualized the text embeddings in 2D and 3D. This showed me how different text inputs were related to each other.
- Building a Q&A System: The final step of my project was to build a question-answer system using semantic search with text embeddings. This system tried to understand and answer questions based on text meanings rather than just keywords.



Results: In this section, you can present and discuss the results of your question & answer system. You can show some examples of questions and answers, and compare them with the ground truth or other methods. You can also highlight the strengths and limitations of your system, and suggest some possible improvements or extensions.

Things I learned

I used questions and answers from the Gardening and Landscaping Stack Exchange to create question embeddings. I noticed that the current prompt did not always give the best answer, but using the text-bison@002 text generation model without context sometimes gave better responses. Semantic search did not always find the most relevant questions from the Stack Exchange data. I thought that removing stop words might improve text embedding generation, because searching for keywords like “leaves Meyer Lemon tree yellow” on Stack Exchange gave more relevant questions.


Conclusion: In this section, you can summarize the main points and findings of your project, and reflect on what you learned and achieved. You can also share your code, data, or resources that you used or created for your project, and invite feedback or collaboration from your readers.


 This project was not only about learning and using new data science concepts, but also about dealing with real-world data and its challenges. It was a learning experience and I want to continue learning more. Through these notebooks, I not only enhanced my technical skills but also experienced the joy of discovery and creation in the data science world. It's just the beginning of a long, exciting road ahead!