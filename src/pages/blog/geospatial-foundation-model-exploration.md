---
layout: ../../layouts/BlogPostLayout.astro
title: Exploring Geospatial Foundation Models
client: Self
publishDate: 2024-08-24 00:00:00
description: Exploring where geospatial foundation models fit within the larger context of AI
tags:
  - ai
  - learning
  - geospatial
---

Artificial intelligence (AI) research is transforming how we work with geospatial data. As part of a group capstone project during my [Climatebase Fellowship](https://climatebase.org/fellowship), I explored several papers on geospatial foundation models and their applications in tackling climate challenges. A list of papers we read in inlcuded at the end of this blog post.

I wrote this post to better understand where geospatial foundation models fit within the larger context of AI.

## Understanding Key AI Terminology

To navigate the fast-moving AI space, here are some key terms according to [Georgetown’s Center for Security and Emerging Technology](https://cset.georgetown.edu/article/what-are-generative-ai-large-language-models-and-foundation-models/):

- **Generative AI**: This is a broad term used for AI systems that create content, unlike those that classify or group data or choose actions (e.g. to steer autonomous devices/cars). Examples include image generators (Midjourney), large language models (GPT-4), code tools (Copilot), and audio generators (VALL-E).

- **Large Language Models (LLM)**: These AI systems work with language and are trained on large text datasets. Examples include OpenAI’s GPT-4, Google’s PaLM, and Meta’s LLaMA. A product like OpenAI’s ChatGPT is created by fine-tuning a LLM like GPT-4 for question-answering & other tasks.

- **Foundation Models**: Unlike AI systems designed for a single purpose, foundation models are base models trained on large datasets that can be adapted for a wide range of downstream tasks. The term foundation models was popularized by a [group](https://crfm.stanford.edu/report.html) at Stanford University. A LLM is an example of a foundation model.

## Geospatial Foundation Models

Geospatial foundation models are large deep learning neural networks trained on geospatial data from satellites, aerial imagery, and other sensors. These models can be fine-tuned for specific tasks like identifying and classifying crop types or land cover, [measuring forest canopy](https://www.sciencedirect.com/science/article/pii/S003442572300439X), [predicting desert locust swarms](https://arxiv.org/abs/2403.06860), and more.

### Model architecture
Geospatial foundation models evolved from breakthroughs in deep learning in computer vision. While reading about on geospatial foundation models, two model architectures that frequently appear are Convolution Neural Networks (CNN) and ViT (Vision Transformer). Most of the modern geospatial foundation models are based on a ViT architecture. For a detailed comparison between the two model architectures see this [article](https://tobiasvanderwerff.github.io/2024/05/15/cnn-vs-vit.html). Below are some highlights:

- CNN
    - The model uses convolutional layers to automatically extract features from input images by applying filters (kernels) that detect patterns (edges, textures, objects). As data passes through multiple convolutional layers, the neural network learns to recognize increasingly complex patterns.
    - Model has built-in assumptions (inductive biases) like nearby pixels are more related than distant pixels (spatial locality) and objects in an image can appear anywhere (translation invariance). 
    - Model is trained using a supervised learning approach using labeled datasets.
    Generally requires less data to train effectively due to inductive biases and performs well on small to medium-sized datasets.
    - Useful in scenarios where training data is limited

- ViT
    - The model applies the transformer architecture (used in LLMs) to images. Images are divided into patches, each patch is embedded and these embeddings are processed using self-attention mechanisms.
    - Model has very few built-in assumptions (inductive biases). All pixels are related to other pixels with equal weight.
    - Model is typically trained using self-supervision techniques using require much larger datasets.
    - Excels on large-scale datasets using self-attention mechanisms to learn global features. Without large datasets, ViTs can underperform compared to CNNs unless pretrained models are used.
    - Useful in tasks that require global context or where large amounts of data are available (e.g., medical imaging, large-scale image recognition). Also used in multimodal tasks that involve both vision and language.

### Examples
The following are some examples of geospatial foundation models described in the readings:

- Prithvi
    - Open source model created by NASA and IBM
    - Trained on a huge dataset of Landsat & Sentinel imagery
    - Model architecture consists of a self-supervised encoder with a ViT and Masked AutoEncoder (MAE) learning strategy with an MSE loss function.
    - Described as a Swiss Army knife for geospatial professionals, capable of analyzing everything from forest cover to urban sprawl.

- DINOv2
    - Open source model created by Meta
    - Trained on private high-resolution satellite images from Maxar to produce a global canopy height map
    - Model architecture is based on a ViT combined with a self-supervised learning approach and a student-teacher framework.
    - Potential use in improving the monitoring of forest degradation/restoration, and forest carbon dynamics.

- SkySense
    - Open source model created by research scientists
    - Trained on multiple types of satellite data—optical, radar, and multispectral imagery
    - Model architecture is based on a ViT
    - Ability to interpret various data sources makes it useful to tackle variety of geospatial applications

### Challenges

Geospatial models are large but not as large as the largest LLMs. While geospatial foundation models share many similarities with computer vision models, they also face unique challenges:
- Handling varied resolutions (spatial resolution of images, time intervals, etc.) and data formats from different sensors (optical imagery, infrared, radar, LIDAR, and multi-spectral data).
- Processing large-scale geospatial data often requires high computational resources and specialized tools.

Geospatial foundation models offer tremendous potential in addressing climate challenges. I hope to continue learning and exploring the exciting intersection of geospatial data and AI in future posts.

<br/>

#### Reading list:
<br/>

- [Need and vision for global medium-resolution Landsat and Sentinel-2 data products](https://www.sciencedirect.com/science/article/pii/S0034425723004704)
- [Mission Critical -- Satellite Data is a Distinct Modality in Machine Learning](https://arxiv.org/abs/2402.01444)
- [FMs for Generalist Geospatial Artificial Intelligence](https://arxiv.org/abs/2310.18660)
- [Very high resolution canopy height maps from RGB imagery using self-supervised vision transformer and convolutional decoder trained on aerial lidar](https://www.sciencedirect.com/science/article/pii/S003442572300439X)
- [SkySense: A Multi-Modal Remote Sensing FM Towards Universal Interpretation for Earth Observation Imagery](https://arxiv.org/abs/2312.10115)
- [A Geospatial Approach to Predicting Desert Locust Breeding Grounds in Africa](https://arxiv.org/abs/2403.06860)
- [Towards Urban General Intelligence: A Review and Outlook of Urban FMs](https://arxiv.org/abs/2402.01749)
- [PhilEO Bench: Evaluating Geo-Spatial FMs](https://arxiv.org/abs/2401.04464)
