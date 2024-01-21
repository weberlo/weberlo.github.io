---
layout: page
title: Projects
permalink: /projects/
---

# Semantic Program Embeddings
_Role: Co-First Author_

![embedders-summary](/images/embedders-summary.png)

This project is something I worked on earlier in grad school with some fantastic collaborators.
Initially, we were interested in developing a technique to embed programming languages by leveraging their unique properties.
At the time, there was a big push for code models that were adversarially robust, and the usual way that was implemented was by training for models whose predictions were invariant to semantics-preserving transformations.
In [our first preprint](/assets/a_theory_of_semantic_program_embeddings.pdf), we proposed a technique for embedding numerical programs using orthogonal polynomials.
At some point, we realized we didn't even know how difficult of a task this is, so our goal became to study the computational complexity of embedding functions that possess this property, leading to [our second preprint](/assets/a_theory_of_equivalence_preserving_embeddings.pdf).
The core insights that came from this study were (1) that a language must have finitely many semantic equivalence classes for such an embedding function to exist and (2) that such an embedding function exists iff your language has an efficient canonicalizer.
The theory isn't deep here, and with our definitions in place, these insights are actually quite trivial.
So the contribution here was really just a lucid set of definitions rather than a theory of great technical complexity.
We had trouble publishing this work because it turns out the languages that can be tractably embedded are extremely simple, so the work can be construed as pessimistic.
Machine learning reviewers were insistent that we show how it applies to Python, but to develop the theory to make statements about a semantic object as messy and complex as Python would have taken longer than we all had patience for.
The trick we didn't learn soon enough was to rename everything to be about mathematical objects and never say the word "program", which would have recalibrated the reviewers' expectations.


# µTVM
_Role: Principal Investigator_

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
