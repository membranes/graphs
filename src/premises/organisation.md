---
layout: default
title: Of Organisations
parent: Premises
nav_order: 1
custom_js:
- latex
---

# Of Organisations
{: .no_toc }

<br>

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---


## Plausible Attributes

At least:

<table style="width: 65%;">
    <colgroup>
        <col span="1" style="width: 8.0%;">
        <col span="1" style="width: 8.0%;">
        <col span="1" style="width: 41.0%;">
    </colgroup>
    <thead><tr style="text-align: left">
        <th>field</th><th>unit of<br>measure</th><th>notes</th></tr>
    </thead>
    <tr><td>Premises Type Code</td>
        <td>nominal number</td><td>Vis-à-vis a <b>premises type</b> table.</td></tr>
    <tr><td>Energy Source</td>
        <td>nominal number</td><td>Vis-à-vis fuel & energy tables.</td></tr>
    <tr><td>Objective</td>
        <td>nominal number</td><td>From a dimension table that lists objectives alongside the identification code of each.  Example:<br>{0: heating, 1: powering, $\ldots$}</td></tr>
    <tr><td>$CO_{2}$ Emission</td>
        <td>nominal number</td><td>The carbon dioxide emission amount vis-à-vis this record's datetime interval.  To limit errors, use a unit of measure identification code $\ldots$</td></tr>
    <tr><td>Interval Start</td>
        <td>datetime</td><td>Energy meters normally record energy usage at intervals.  This denotes interval start datetime.</td></tr>
    <tr><td>Interval End</td>
        <td>datetime</td><td>Energy meters normally record energy usage at intervals.  This denotes interval end datetime.</td></tr>
</table>

<br>
<br>

<br>
<br>
