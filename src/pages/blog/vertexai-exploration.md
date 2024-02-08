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

DeepLearning.AI has some great short courses (which are free for a limited time!). I recently took a short course they offer on Understanding and Applying Text Embeddings which uses Google's [Vertex AI](https://cloud.google.com/vertex-ai) to build a simple question-answer system. Vertex AI is a machine learning platform by Google Cloud that allows users to build, deploy, and scale AI models with pre-built and custom tools. Once my Google Cloud account was set up I found it pretty easy to use information provided in the course and the great [documentation](https://cloud.google.com/vertex-ai/docs/start/introduction-unified-platform) provided for Vertex AI to put the pieces together.

I chose to create the project on Kaggle using the Vertex AI SDK for Python. Other alternatives are to run the entire machine learning workflow in Vertex AI Workbench (a Jupyter notebook-based development environment provided by Google Cloud), Google Colab or a Jupyter notebook on your local machine.

## So what's a question-answer system?

A question-answer system is an AI application that understands natural language questions and provides answers by analyzing different sources of information, such as databases, documents, or the web. It uses natural language processing (NLP) and machine learning techniques to interpret the question, find relevant information, and present it in a user specified format. Some applications of this kind of system are customer support chatbots & virtual assistants.

Question answering: Provide answers to questions in text. For example, you might automate the creation of a Frequently Asked Questions (FAQ) document from knowledge base content.

## Accesing the data

I love gardening, so I downloaded all questions and accepted answers from the Stack Exchange Gardening and Landscaping community. The [Stack Exchange Data Explorer](https://data.stackexchange.com/) is a great resource for finding out how to query and download data from different Stack Exchange communities. I created a dataset on Kaggle and uploaded the csv file. The [Gardening Q&A with text embeddings](https://www.kaggle.com/datasets/shrutimukhtyar/stack-exchange-gardening-and-landscaping) is publicly available from Kaggle. The dataset also includes the text embeddings generated for the questions and tags using Vertex AI.

Note questions include html elements like links and images. I did not remove them for this project but after building the system made me realize that maybe removing these html elements or using a different model would lead to better performance.

## Building the system

The following set of Kaggle notebooks walks through setting up the Kaggle environment for using Vertex AI and using the `textembedding-gecko@003` models available from Vertex AI to build the systems. Text embeddings are vector representations of text that capture the semantic meaning.

- [Vertex AI: Setup environment on Kaggle](https://www.kaggle.com/code/shrutimukhtyar/vertex-ai-setup-environment-on-kaggle)
- [Vertex AI: Generate Text Embeddings](https://www.kaggle.com/code/shrutimukhtyar/vertex-ai-generate-text-embeddings)
- [Vertex AI: Visualizing text embeddings](https://www.kaggle.com/code/shrutimukhtyar/vertex-ai-visualizing-text-embeddings)ions.
- [Vertex AI: Q&A system using semantic search](https://www.kaggle.com/code/shrutimukhtyar/vertex-ai-q-a-system-using-semantic-search)

Methodology: In this section, you can explain the steps and tools that you used to build your question & answer system using Vertex AI. You can mention the text embedding model, the semantic search algorithm, the text generation model, and the evaluation metrics that you used.

The following set of Kaggle notebooks walks throught the different steps in the project.

- Setting up the environment: The first step of is to set up the Vertex AI environment in Kaggle. This was necessary to do the experiments.
- Generating Text Embeddings: The next step was to generate text embeddings using Vertex AI. Text embeddings are vector representations of text that capture the semantic meaning. I learned how to handle text data and use Vertex AI APIs.
- Visualizing Text Embeddings: I then visualized the text embeddings in 2D and 3D. This showed me how different text inputs were related to each other.
- Building a Q&A System: The final step of my project was to build a question-answer system using semantic search with text embeddings. This system tried to understand and answer questions based on text meanings rather than just keywords.

Semantic Search: Text embeddings can be used to represent both the user's query and the universe of documents in a high-dimensional vector space. Documents that are more semantically similar to the user's query will have a shorter distance in the vector space, and can be ranked higher in the search results. The Vertex AI PaLM Embedding API performs online (real-time) predictions to get embeddings from input text.

The API accepts a maximum of 3,072 input tokens and outputs 768-dimensional vector embeddings. Use the following parameters for the text embeddings model textembedding-gecko.

The PaLM 2 for Text (text-bison, text-unicorn) foundation models are optimized for a variety of natural language tasks such as sentiment analysis, entity extraction, and content creation. The types of content that the PaLM 2 for Text models can create include document summaries, answers to questions, and labels that classify content.

The PaLM 2 for Text models are ideal for tasks that can be completed with one API response, without the need for continuous conversation. For text tasks that require back-and-forth interactions, use the Generative AI on Vertex AI API for chat.

Results: In this section, you can present and discuss the results of your question & answer system. You can show some examples of questions and answers, and compare them with the ground truth or other methods. You can also highlight the strengths and limitations of your system, and suggest some possible improvements or extensions.

Things I learned

I used questions and answers from the Gardening and Landscaping Stack Exchange to create question embeddings. I noticed that the current prompt did not always give the best answer, but using the text-bison@002 text generation model without context sometimes gave better responses. Semantic search did not always find the most relevant questions from the Stack Exchange data. I thought that removing stop words might improve text embedding generation, because searching for keywords like “leaves Meyer Lemon tree yellow” on Stack Exchange gave more relevant questions.

Conclusion: In this section, you can summarize the main points and findings of your project, and reflect on what you learned and achieved. You can also share your code, data, or resources that you used or created for your project, and invite feedback or collaboration from your readers.

This project was not only about learning and using new data science concepts, but also about dealing with real-world data and its challenges. It was a learning experience and I want to continue learning more. Through these notebooks, I not only enhanced my technical skills but also experienced the joy of discovery and creation in the data science world. It's just the beginning of a long, exciting road ahead!
