---
layout: page
title: Projects
permalink: /projects/
---

<!-- Both projects listed below are a part of the <a href="https://github.com/dmlc/tvm">Apache TVM</a> project. -->

# µTVM
_Role: Principal Investigator_

µTVM brings the power of [Apache
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

# RelayBench
_Role: Co-Investigator_

RelayBench is a framework for running language- and framework-agnostic
machine learning experiments, with the primary goal being *reproducibility*.
Once experiments are defined by the user, subsystems can be defined to
analyze and make use of the collected data. As a "killer app" for RelayBench,
I developed a push-button evaluation for the most recent [Relay
paper](https://arxiv.org/abs/1904.08368). That is, all of the experiments
and graphs were run and generated automatically.

# Relay
_Role: Collaborator_

Relay is a functional and differentiable intermediate representation for
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
![relay-performance](/images/cnn-comp-gpu.png)
