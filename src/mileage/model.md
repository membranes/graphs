---
layout: default
title: Preliminary Model
parent: Mileage & Forecasting
nav_order: 2
external_css:
- https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs
custom_js:
- latex
---

# Preliminary Model
{: .no_toc }

<br>

## Table of contents
{: .no_toc .text-delta }

1. TOC
   {:toc}

---


## In Brief

The outline



## By Trip

Accurate recording of

* engine size
* fuel type
* carbon dioxide emissions

requires recording data by trip, not journey.  In brief

* A journey consists of one or more distinct trips.
* A distinct trip is a trip from $A \rightarrow B$ via the same land, air, or sea vehicle.
* Each instance of a mileage data set should represent a distinct trip, taken/started on a specific date.
* Ensure each instance, i.e., each distinct trip, of a mileage data set has a journey identification code;
   * Each journey must have a unique code.
   * Trips of the same journey must the same journey identification code

A distinct trip via the same vehicle might be a trip of consisting of one or more stops, sometimes returning to the starting point, i.e., $A \rightarrow \ldots \rightarrow B$.  Hence, these fields might help

* trip start code [a geographic code that does not betray sensitive data]
* trip end code [a geographic code that does not betray sensitive data]
* trip stops {0: $\ldots$, 1: $\ldots$}

<br>

## Fuel Type

Instead of a fuel type field, a fuel type identification code field vis-à-vis a dimension table of fuel types.


<br>

## Business Rate & Value

The business value is

> $\textnormal{business mileage} \times rate$ where $rate \in \[\textnormal{business rate low}, \quad \textnormal{business rate high}\]$

Basically, the rate might be any value between the *business rate low* & *business rate high* limits; including limits.  Hence, a business rate field that records the actual rate paid is necessary.

<br>

## Transport

A critical missing piece.

<br>
<br>

<br>
<br>
