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

<table style="width: 65%;">
    <colgroup>
        <col span="1" style="width: 8.0%;">
        <col span="1" style="width: 8.0%;">
        <col span="1" style="width: 8.0%;">
        <col span="1" style="width: 41.0%;">
    </colgroup>
    <thead><tr style="text-align: left">
        <th>name</th><th>var</th><th>unit of<br>measure</th><th>notes</th></tr>
    </thead>
    <tr><td>Area Pay Division</td><td>area_pay_division</td><td>unitless</td>
        <td>Awaiting details.</td></tr>
    <tr><td>Claim Line Start</td><td></td><td></td>
        <td>From: yyyy/mm/dd $\rightarrow$ yyyy-mm-dd</td></tr>
    <tr><td>Claim Line End</td><td></td><td></td>
        <td>From: yyyy/mm/dd $\rightarrow$ yyyy-mm-dd</td></tr>
    <tr><td>Engine Size</td><td></td><td></td>
        <td><ul><li>float setting</li><li>The unit of measure is cubic centimetres.  It<br>is quite possible that some values are litres.</li></ul></td></tr>
    <tr><td>Fuel Type</td><td></td><td></td>
        <td>At present, the options are: diesel, electric, hybrid, unleaded; or the cell is left empty.</td></tr>
    <tr><td>$CO_{2}$ (Carbon Dioxide) Emissions</td><td></td><td></td>
        <td>The unit of measure is grams of carbon dioxide per kilometre (gCO2/km)</td></tr>
    <tr><td>Business Mileage</td><td></td><td></td>
        <td>Unit of measure: miles.</td></tr>
    <tr><td>Business Rate High</td><td></td><td></td>
        <td>The upper boundary of the mileage rate; pence per mile.</td></tr>
    <tr><td>Business Rate Low</td><td></td><td></td>
        <td>The lower boundary of the mileage rate; pence per mile.</td></tr>
    <tr><td>Business Value</td><td></td><td></td>
        <td>The amount paid; pound sterling.</td></tr>
    <tr><td>Commute Miles<br>Not Undertaken</td><td></td><td></td>
        <td>Unit of measure: miles.</td></tr>
    <tr><td>Overtime Mileage</td><td></td><td></td>
        <td>Awaiting Definition</td></tr>
    <tr><td>Travel Class</td><td></td><td></td>
        <td></td></tr>
    <tr><td>Trip Start Code</td><td></td><td></td>
        <td>A geographic code that does not betray sensitive details</td></tr>
    <tr><td>Trip End Code</td><td></td><td></td>
        <td>A geographic code that does not betray sensitive details</td></tr>
    <tr><td>Trip Stops</td><td></td><td></td>
        <td>Example: {1: $\ldots$, 2: $\ldots$, $\rightarrow$}, wherein the number denotes stop number, and each ellipsis is replaced with the geographic code of the stop.  This is quite important for trip network modelling & analysis $\ldots$ </td></tr>
</table>



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

* trip start code [a geographic code that does not betray sensitive details]
* trip end code [a geographic code that does not betray sensitive details]
* trip stops {1: $\ldots$, 2: $\ldots$}

A geographic code decision is required; only one type of code shall be used.


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
