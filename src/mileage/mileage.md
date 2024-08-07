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


area_pay_division	claim_line_start	claim_line_end	engine_size	fuel_type	co2_emissions	business_mileage	business_rate_high	business_rate_low	business_value	commute_miles_not_undertaken	overtime_mileage	journey_details

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

The fuel type should be from an overarching dimension table of fuel types.


<br>



{: .fs-6 .fw-300 }

<br>
<br>
<br>
<br>
