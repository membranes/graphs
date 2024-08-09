---
layout: default
title: Preliminary Attributes
parent: Mileage
nav_order: 1
external_js:
- https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js
custom_js:
- latex
---

# Preliminary Attributes
{: .no_toc }

<br>

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---


## Plausible Attributes

Excluding taxi, ferry, & flight trips, which should each have their own almost similar tables, but adjusted to reflect their disaccordant attributes.  For example, a ferry table might have a passenger type field with the options: car, foot, freight driver, coach, cyclist.

<table style="width: 65%;">
    <colgroup>
        <col span="1" style="width: 7.5%;">
        <col span="1" style="width: 6.0%;">
        <col span="1" style="width: 36.5%;">
    </colgroup>
    <thead><tr style="text-align: left">
        <th>name</th><th>unit of<br>measure</th><th>notes</th></tr>
    </thead>
    <tr><td>Area Pay Division</td>
        <td>unitless</td>
        <td>Awaiting details.</td></tr>
    <tr><td>Claim Line Start</td>
        <td>date</td>
        <td>Trip start date; yyyy-mm-dd</td></tr>
    <tr><td>Claim Line End</td>
        <td>date</td>
        <td>Trip end date; yyyy-mm-dd</td></tr>
    <tr><td>Engine Size</td>
        <td>cubic centimetres</td>
        <td>The size of the vehicle's engine.</td></tr>
    <tr><td>Fuel Type</td>
        <td></td>
        <td>Vis-à-vis fuel/energy fact table.</td></tr>
    <tr><td>Business Mileage</td>
        <td>miles</td>
        <td>Miles travelled.</td></tr>
    <tr><td>Business Rate High</td>
        <td>pence per mile</td>
        <td>The upper boundary of the mileage rate.</td></tr>
    <tr><td>Business Rate Low</td>
        <td>pence per mile</td>
        <td>The lower boundary of the mileage rate.</td></tr>
    <tr><td>Business Rate Paid</td>
        <td>pence per mile</td>
        <td>The actual rate paid.</td></tr>
    <tr><td>Business Value</td>
        <td>pound sterling</td>
        <td>The amount paid; decimal.</td></tr>
    <tr><td>Commute Miles<br>Not Undertaken</td>
        <td>miles</td>
        <td>Definition: Approach <abbr title="National Health Service">NHS</abbr> Sustainability Action</td></tr>
    <tr><td>Overtime Mileage</td>
        <td>miles</td>
        <td>Definition: Approach <abbr title="National Health Service">NHS</abbr> Sustainability Action</td></tr>
    <tr><td>Trip Start Code</td>
        <td></td>
        <td>A geographic code that does not betray sensitive details</td></tr>
    <tr><td>Trip End Code</td>
        <td></td>
        <td>A geographic code that does not betray sensitive details</td></tr>
    <tr><td>Trip Stops</td>
        <td></td>
        <td>Example: {1: $\ldots$, 2: $\ldots$, $\rightarrow$}, wherein the number denotes stop number, and each ellipsis is replaced with the geographic code of the stop.  This is quite important for trip network modelling & analysis for cost & emission minimisation purposes.</td></tr>
    <tr><td>Travel Class</td>
        <td>nominal number</td>
        <td>A nominal number representing the identification code of a travel class. The plausible classes being business travel, in-patient travel, out-patient travel, staff commute.</td></tr>
    <tr><td>Transport Class</td>
        <td>nominal number</td>
        <td>Whereby a nominal number is the unique identification code of transport class.  The plausible classes are public, fleet, private, hired</td></tr>
    <tr><td>Vehicle</td>
        <td>nominal number</td>
        <td>A nominal number representing the identification code of a vehicle type, from a vehicles table. Example: 
            <ul><li><a href="../../_data/specific_vehicles.csv">specific_vehicles</a></li>
                <li><a href="../../_data/specific_vehicle_groups.csv">specific_vehicles_group</a></li></ul></td></tr>
    <tr><td>Scheduled</td>
        <td>boolean</td>
        <td>Was the trip via scheduled transport? Either yes or no; perhaps.</td></tr>
</table>


Herein, the unit of measure of the $CO_{2}$ (Carbon Dioxide) emissions is grammes of carbon dioxide per kilometre.

<br>
<br>

## A Trip

The accurate recording of

* engine size
* fuel type
* carbon dioxide emissions

requires recording data by trip, not journey.  In brief

* A journey consists of one or more distinct trips.
* A distinct trip is a trip from $A \rightarrow B$ via the same land, air, or sea vehicle.
* Each <abbr title="record, row">instance</abbr> of a mileage data set should represent a distinct trip, taken/started on a specific date.
* Ensure each instance, i.e., each distinct trip, of a mileage data set has a journey identification code;
   * Each journey must have a unique code.
   * Trips of the same journey must the same journey identification code
* Include
  * trip start code [a geographic code that does not betray sensitive details]
  * trip end code [a geographic code that does not betray sensitive details]

<br>

### Considerations

A distinct trip via the same vehicle might be a trip consisting of one or more stops, sometimes returning to the starting point, i.e., $A \rightarrow \ldots \rightarrow B$.  Hence, the field

* trip stops {1: $\ldots$, 2: $\ldots$}

might help.  Herein, each number is an ordinal number, and each ellipsis represents the geographic code of the stop.  

<br>

### Decision

A geographic code decision is required.


<br>
<br>

## Business Rate & Value

The business value is

> $\textnormal{business mileage} \times rate$ where $rate \in \[\textnormal{business rate low}, \quad \textnormal{business rate high}\]$

Basically, the rate might be any value between the *business rate low* & *business rate high* limits; including limits.  Hence, a business rate field that records the actual rate paid is necessary.


<br>
<br>

<br>
<br>


<script src="https://code.highcharts.com/highcharts.js"></script>
<script src="https://code.highcharts.com/modules/treemap.js"></script>
<script src="https://code.highcharts.com/modules/treegraph.js"></script>
<script src="https://code.highcharts.com/modules/exporting.js"></script>
<script src="https://code.highcharts.com/modules/accessibility.js"></script>