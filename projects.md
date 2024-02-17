---
layout: page
title: Projects
permalink: /projects/
---

# Semantic Program Embeddings
_Role: Co-First Author_

![embedders-summary](/images/embedders-summary.png)

The goal of this project was to understand how to embed programs into vector spaces in a way that respects program semantics, as many machine learning techniques attempt to do.
In most areas of machine learning (e.g., computer vision and natural language processing), researchers may claim an embedding technique "captures semantics", and because there's no formal way to ground the term "semantics", it's usually interpreted loosely.
Programming languages are different; a programming language has a very precise notion of semantics that can be formally reasoned about.
Our first insight was that because programming languages are formal objects, one can theoretically reason about semantic embeddings of them.
There are many types of semantic properties one may wish to embed, and in [our first preprint](/assets/a_theory_of_semantic_program_embeddings.pdf), we focused on formalizing the frequently cited desideratum that ``embeddings of similar programs are close'' and developed a technique that directly optimizes for this property.
Our technique embeds numerical programs using orthogonal polynomials and produces embeddings that preserve distances more effectively than a BERT-Tiny.

Since there is not a canonical notion of distance between non-numerical programs, we sought a more fundamental property than distance preservation.
At the time of this work, there was a push for code models that were adversarially robust, often implemented by training for embeddings that are invariant to semantics-preserving transformations.
The implication of this invariance is that the embedding preserves semantic equivalences, and in [our second preprint](/assets/a_theory_of_equivalence_preserving_embeddings.pdf), we theoretically characterized the computational complexity of producing such embeddings.
The core insights that came from this study were (1) that a programming language must have finitely many semantic equivalence classes for such an embedding function to exist and (2) that such an embedding function exists iff your programming language has an efficient canonicalizer.
The theory isn't deep here, and with our definitions in place, these insights are trivial.
The contribution here was a lucid set of definitions rather than a theory of great technical complexity.

# µTVM
_Role: First Author_

![microtvm-logo](/images/microtvm-logo.png)

[µTVM](https://github.com/apache/incubator-tvm/issues/2563) brings the power of [Apache
TVM](https://github.com/apache/incubator-tvm) to bare-metal devices. By
building a lightweight and device-agnostic runtime for interacting with
microcontrollers, µTVM plugs directly into the TVM stack and provides
automatic optimization of ML operators and easy deployment. The figure below
gives an idea of where µTVM sits in TVM.

<!-- TODO: use image resize proxy once images are uploaded to github -->
<!-- <img src="http://images.weserv.nl/?url=www.yourdomain.com{{ page.image }}&w=200&h=200&output=jpg&q=65" /> -->
![microtvm-tvm-stack](/images/microtvm-tvm-stack.png)

To provide automatic optimization, µTVM makes use of
[AutoTVM](https://arxiv.org/abs/1805.08166) (depicted below). AutoTVM
suggests candidate kernel implementations in C, and the candidates are then
compiled and loaded onto the device via
[JTAG](https://en.wikipedia.org/wiki/JTAG). Random inputs are used to time
the execution of kernels, which is fed into AutoTVM's search algorithm. Over
time, by intelligently navigating the space of implementations, AutoTVM
tailors candidate kernels to the architectural properties of the device,
using only timing information.

![microtvm-autotvm-overview](/images/microtvm-autotvm-overview.png)

# Relay
_Role: Collaborator_

<b>Every time you ask Amazon Alexa a question, Relay is being used.</b>

[Relay](https://github.com/apache/incubator-tvm/issues/1673) is a functional and differentiable intermediate representation for
machine learning applications, which ditches the design of traditional
computation-graph-based IRs, and instead opts to be a full-fledged
programming language. The design is surprisingly similar to the language SML,
with the key difference being a tensor-based type system with a lightweight
form of dependency.

Relay is tightly integrated with [Apache TVM](https://github.com/apache/incubator-tvm)
and sits on top of TVM's low-level tensor expression IR. This split creates a
separation of concerns, where Relay orchestrates the high-level flow of
models and calls into kernels that have been aggressively optimized in the
low-level IR. By using a two-level IR split, Relay significantly outperforms
existing machine learning frameworks (shown below).

<!-- TODO: Replace "InterNeuron" with "Relay" -->
![relay-wins-lmao](/images/relay-wins-lmao.png)

<!-- # RelayBench
_Role: Co-Investigator_

RelayBench is a framework for running language- and framework-agnostic
machine learning experiments, with the primary goal being *reproducibility*.
Once experiments are defined by the user, subsystems can be defined to
analyze and make use of the collected data. As a "killer app" for RelayBench,
I developed a push-button evaluation for the most recent [Relay
paper](https://arxiv.org/abs/1904.08368), meaning all of the experiments
and graphs were run and generated automatically. -->
