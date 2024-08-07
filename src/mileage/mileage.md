---
layout: default
title: Mileage & Forecasting
nav_order: 4
has_children: true
permalink: /src/mileage
custom_js:
- latex
---

# Mileage & Forecasting


## Background

At present, each record, i.e., row, of mileage data set summarises


area_pay_division	claim_line_start	claim_line_end	engine_size	fuel_type	co2_emissions	business_mileage	business_rate_high	business_rate_low	business_value	commute_miles_not_undertaken	overtime_mileage	journey_details

<table style="width: 65%;">
    <colgroup>
        <col span="1" style="width: 8.0%;">
        <col span="1" style="width: 41.0%;">
    </colgroup>
    <thead><tr style="text-align: left">
        <th>name</th><th>notes</th></tr>
    </thead>
    <tr><td>Area Pay Division</td><td>Awaiting details.</td></tr>
    <tr><td>Claim Line Start</td><td>From: yyyy/mm/dd $\rightarrow$ yyyy-mm-dd</td></tr>
    <tr><td>Claim Line End</td><td>From: yyyy/mm/dd $\rightarrow$ yyyy-mm-dd</td></tr>
    <tr><td>Engine Size</td><td><ul><li>float setting</li><li>The unit of measure is cubic centimetres.  It<br>is quite possible that some values are litres.</li></ul></td></tr>
    <tr><td>Fuel Type</td><td>At present, the options are: diesel, electric, hybrid, unleaded; or the cell is left empty.</td></tr>
    <tr><td>$CO_{2}$ (Carbon Dioxide) Emissions</td><td>The unit of measure is grams of carbon dioxide per kilometre (gCO2/km)</td></tr>
    <tr><td>Business Mileage</td><td>Unit of measure: miles.</td></tr>
    <tr><td>Business Rate High</td><td>The upper boundary of the mileage rate; pence per mile.</td></tr>
    <tr><td>Business Rate Low</td><td>The lower boundary of the mileage rate; pence per mile.</td></tr>
    <tr><td>Business Value</td><td>The amount paid; pound sterling.</td></tr>
    <tr><td>Commute Miles<br>Not Undertaken</td><td>Unit of measure: miles.</td></tr>
    <tr><td>Overtime Mileage</td><td>Unit of measure: miles.</td></tr>
    <tr><td>Journey Details</td><td>A journey's details.  The text is akin to free text, albeit it seems a few national health organisations might each have an underlying <i>journey details recording pattern</i>.</td></tr>
</table>





<br>

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

> $\textnormal{business mileage} \times rate$ where $rate \in \[l h\]$

Basically, the rate might be any value between the *business rate low* & *business rate high* limits; including limits.  Hence, a business rate field that records the actual rate paid is necessary.




{: .fs-6 .fw-300 }

<br>
<br>
<br>
<br>
