---
layout: ../../layouts/BlogPostLayout.astro
title: Building a question-answer system with Vertex AI
client: Self
publishDate: 2024-02-08 00:00:00
description: Building a simple question-answer system is a great way to practice your data science skills.
tags:
  - data-science
  - learning
  - vertex ai
---

If you are looking for a project idea to practice the data science skills you acquired through online courses, building a simple question-answer system is a great place to start.

## What's a question-answer system?

A question-answer system is an AI application that:

- takes a user's question
- converts it into a numerical format (aka [text embedding](https://cloud.google.com/vertex-ai/docs/generative-ai/model-reference/text-embeddings))
- searches a store of information that you specify ( e.g. database, document, web) which is in the same numerical format (aka semantic search)
- finds the most relevant content
- sends this content to a large language model (LLM) as `context`
- generates an answer via the LLM using a `prompt` that you design and the `context` you provide

In deep learning speak, this is an example of Retrieval-Augmented Generation (RAG). This [article](https://inside-machinelearning.com/en/rag/) has a great explantion of RAG. One application of a question-asnwer system is automating the creation of a Frequently Asked Questions document from a knowledge base.

## How do I build one?

A short course on DeepLearning.AI called Understanding and Applying Text Embeddings is a great guide to getting started on this project. The course (which is free for now) walks you through building a question-answer system using Google's [Vertex AI](https://cloud.google.com/vertex-ai).

Vertex AI is a machine learning platform by Google where you can build, deploy, and scale AI models with pre-trained and custom models. Your first challenge will be setting up a Google Cloud account and creating a project. If you you need help with this, here is a good [walkthrough](). My Google Cloud computing costs for generating text embeddings for about 7000 records a few times was less than a $1.

I chose to use the Vertex AI SDK for Python in Kaggle notebooks, but it might be easier to use the library on Google platforms like the Vertex AI Workbench (a Jupyter notebook-based development environment provided by Google Cloud) or Google Colab.

### Get some data!

Your second challenge is identify some question-answer data you want to work with. There are lot of great datasets on Kaggle, or you can create your own like I did. I love gardening, so I decided to work with data generated by the Stack Exchange Gardening and Landscaping community. The [Stack Exchange Data Explorer](https://data.stackexchange.com/) is a great resource for downloading question-answer data. I created a dataset on Kaggle with a csv file of questions and accepted answers. The [Gardening Q&A with text embeddings](https://www.kaggle.com/datasets/shrutimukhtyar/stack-exchange-gardening-and-landscaping) is publicly available from Kaggle. The dataset also includes the text embeddings generated by Vertex AI models for questions and tags.

### Write some code :-)

The following Kaggle notebooks walk you through building a simple system that will answer any queries you have on gardening.

- [Vertex AI: Setup environment on Kaggle](https://www.kaggle.com/code/shrutimukhtyar/vertex-ai-setup-environment-on-kaggle)
- [Vertex AI: Generate Text Embeddings](https://www.kaggle.com/code/shrutimukhtyar/vertex-ai-generate-text-embeddings)
- [Vertex AI: Visualizing text embeddings](https://www.kaggle.com/code/shrutimukhtyar/vertex-ai-visualizing-text-embeddings)
- [Vertex AI: Q&A system using semantic search](https://www.kaggle.com/code/shrutimukhtyar/vertex-ai-q-a-system-using-semantic-search)

## Lessons learned

- Initially, navigating the Google AI ecosystem was confusing. The course uses 2 models called `textembedding-gecko` and `text-bison` accessible via Vertex AI. Based on my current understanding, here is a brief overview of the Google AI ecosystem:
  - PaLM 2 and Gemini are two different foundation models developed by Google (there some [others](https://cloud.google.com/vertex-ai/docs/generative-ai/learn/overview) too). PaLM 2 is a LLM that specializes in natural language understanding and generation (it is the power behind Bard). Gemini is a multimodal LLM that can handle different types of data, such as text, images, audio, and code. [This article](https://bito.ai/blog/gemini-vs-palm2/) describes both in more detail.
  - Both `textembedding-gecko` and `text-bison` belong to the PaLM 2 family.
  - Vertex AI provides access to all PaLM 2 and Geimini models [through different APIs](https://cloud.google.com/vertex-ai/docs/generative-ai/learn/models)
- The body of some questions on Stack Exchange contain html elements like links and images. I did not remove these elements before sending them to Vertex AI to generate text embeddings using the `textembedding-gecko@003` model. I remember reading somewhere that the `textembedding-gecko` model will just ignore these html elements, but after looking at the answers the system generated, it's possible that removing these elements might generate better text embeddings.
- I followed the prompt provided in the course, yet the combination of this prompt and the context I supplied to the `text-bison@002` text generation model did not consistently yield the best answers.
  - One interpretation of this could be that the Stack Exchange dataset does not have the best answers, compared to the general training data that the PaLM 2 foundation model was trained on.
  - Another way to think about this is that in a topic like gardening there are many good answers. In the [Vertex AI: Q&A system using semantic search](https://www.kaggle.com/code/shrutimukhtyar/vertex-ai-q-a-system-using-semantic-search) notebook, I select only 1 question-answer that's closest semantically to the user's query and provide it as as `context`. Instead, if I selected more than 1 relevant question-answers as `context`, the system would generate a better response. The maximum length of text you can send a PaLM 2 model is about [8000 tokens](https://ai.google.dev/models/palm) (100 tokens are about 60-80 English words).
- Using an alternative prompt that directs the LLM to leverage both the provided context and its training data for answer generation might result in more relevant answers for a gardening Q&A.

It was fun putting this together! Although my gardening question-answer system lot of room for improvement, I gained considerable insight into Google's AI ecosystem, as well as valuable experience in handling real-world data and navigating its complexities.